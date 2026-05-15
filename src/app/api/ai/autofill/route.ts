export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { Storage } from '@google-cloud/storage';
import { fileTypeFromBuffer } from 'file-type';
import sharp from 'sharp';

let _gemini: GoogleGenAI | null = null;
let _storage: Storage | null = null;

function getGeminiClient(): GoogleGenAI {
    if (!_gemini) {
        const apiKey = process.env.GOOGLE_GENAI_API_KEY!;
        _gemini = new GoogleGenAI({ apiKey });
    }
    return _gemini;
}

function getStorage(): Storage {
    if (!_storage) {
        const projectId = process.env.GCP_PROJECT_ID;
        const clientEmail = process.env.GCP_CLIENT_EMAIL;
        const privateKey = process.env.GCP_PRIVATE_KEY?.replace(/\\n/g, '\n');

        if (!projectId || !clientEmail || !privateKey) {
            throw new Error("GCP environment variables not configured properly.");
        }

        _storage = new Storage({
            projectId,
            credentials: { client_email: clientEmail, private_key: privateKey },
        });
    }
    return _storage;
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { imageKey, language } = body;

        if (!imageKey) {
            return NextResponse.json({ error: 'Missing imageKey' }, { status: 400 });
        }

        const bucketName = process.env.GCS_BUCKET!;

        console.log(`[Autofill] Fetching ${imageKey} from GCS bucket ${bucketName}`);
        const file = getStorage().bucket(bucketName).file(imageKey);
        const [fileBuffer] = await file.download();

        const buffer = Buffer.from(fileBuffer);

        // Pre-process and optimize image size heavily to save LLM tokens and increase speed
        console.log(`[Autofill] Downloaded raw buffer length:`, buffer.length);
        const resizedBuffer = await sharp(buffer)
            .resize(512)
            .jpeg({ quality: 80 })
            .toBuffer();
        console.log(`[Autofill] Resized image size:`, resizedBuffer.length);

        const detectedType = await fileTypeFromBuffer(resizedBuffer);
        let mimeType = "image/jpeg";

        if (detectedType) {
            if (["image/png", "image/jpeg", "image/gif", "image/webp"].includes(detectedType.mime)) {
                mimeType = detectedType.mime;
            }
        }

        console.log("Detected MIME from buffer:", detectedType?.mime);
        console.log("Using Gemini mimeType:", mimeType);
        console.log(`[Autofill] Calling Gemini for image analysis`);

        const promptText = `
You are a strict product recognition AI.

Carefully analyze the uploaded image and identify the actual physical object shown.

Rules:
- Identify the literal object (example: ballpoint pen, plastic bottle, leather shoe, brass lamp).
- Do NOT assume it is handcrafted unless clearly visible.
- Do NOT use generic phrases like "Handcrafted Indian Product".
- Be specific and practical.
- Title must be short (max 6 words).
- Description must be 2–3 simple factual sentences.
- Infer realistic material.
- Suggest realistic Indian market price in INR.
- Estimate approximate dimensions visually.

Return ONLY valid JSON.
Do NOT include markdown.
Do NOT include explanations.
Do NOT include extra text.

Strictly follow this schema:

{
  "title": "",
  "description": "",
  "category": "",
  "tags": [],
  "suggested_price": 0,
  "estimated_dimensions": "",
  "material_guess": "",
  "confidence_score": 0.0
}
`;

        const base64Image = resizedBuffer.toString('base64');

        const response = await getGeminiClient().models.generateContent({
            model: 'gemini-2.0-flash',
            contents: [
                {
                    role: 'user',
                    parts: [
                        {
                            inlineData: {
                                mimeType: mimeType,
                                data: base64Image,
                            },
                        },
                        {
                            text: promptText,
                        },
                    ],
                },
            ],
        });

        let aiText = response.text ?? '';
        console.log(`[Autofill] Raw Gemini response:`, aiText);

        console.log("========== RAW GEMINI OUTPUT ==========");
        console.log(aiText);
        console.log("=======================================");

        // clean markdown from JSON
        let jsonStr = aiText;
        const jsonMatch = aiText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            jsonStr = jsonMatch[0];
        } else {
            jsonStr = jsonStr.replace(/```json/g, "").replace(/```/g, "").trim();
        }

        let data;
        try {
            data = JSON.parse(jsonStr);
        } catch (parseError: any) {
            console.error("[Autofill] JSON parse failed, triggering fallback:", parseError);
            throw new Error("Invalid JSON format from AI"); // triggers catch fallback
        }

        // Clamp price
        let price = Number(data.suggested_price);
        if (isNaN(price)) price = 500;
        if (price < 100) price = 100;
        if (price > 50000) price = 50000;
        data.suggested_price = price;

        return NextResponse.json(data);
    } catch (error: any) {
        console.error("API error:", error);
        return NextResponse.json({
            title: "Handcrafted Item",
            description: "A beautiful artisan creation.",
            category: "other",
            tags: [],
            suggested_price: 500,
            estimated_dimensions: "10x10",
            material_guess: "Mixed",
            confidence_score: 0.1
        });
    }
}
