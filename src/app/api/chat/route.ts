export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI, Type } from '@google/genai';

let _geminiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
    if (!_geminiClient) {
        const apiKey = process.env.GOOGLE_GENAI_API_KEY!;
        _geminiClient = new GoogleGenAI({ apiKey });
    }
    return _geminiClient;
}

export async function POST(req: NextRequest) {
    try {
        const { messages, language, generationMode } = await req.json();

        let systemText = `You are a multilingual voice assistant guiding Indian artisans to list handcrafted products. You MUST respond ONLY in ${language}. If you respond in English when language is not English, it is incorrect. `;

        if (generationMode) {
            systemText += `Generate final polished product story based on the provided text. Do NOT ask follow-up questions. Return only final story text.`;
        } else {
            systemText += `Keep answers short and ask one question at a time.`;
        }

        // Convert messages to Gemini format
        const geminiContents = messages.map((m: any) => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.content }],
        }));

        const response = await getGeminiClient().models.generateContent({
            model: 'gemini-2.5-flash',
            contents: geminiContents,
            config: {
                systemInstruction: systemText,
                maxOutputTokens: 800,
                temperature: 0.7,
            },
        });

        const reply = response.text ?? '';

        return NextResponse.json({ reply });

    } catch (error: any) {
        console.error("API error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
