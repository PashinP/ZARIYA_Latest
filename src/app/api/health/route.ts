export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from 'next/server';
import { Storage } from '@google-cloud/storage';
import * as admin from 'firebase-admin';
import { GoogleGenAI } from '@google/genai';

export async function GET() {
    try {
        console.log("Route hit: /api/health");
        console.log("GCP Project:", process.env.GCP_PROJECT_ID);

        const projectId = process.env.GCP_PROJECT_ID;
        const clientEmail = process.env.GCP_CLIENT_EMAIL;
        const privateKey = process.env.GCP_PRIVATE_KEY?.replace(/\\n/g, '\n');

        if (!projectId || !clientEmail || !privateKey) {
            return NextResponse.json({ error: "GCP environment variables not configured properly." }, { status: 500 });
        }

        const credentials = { client_email: clientEmail, private_key: privateKey };

        const status: Record<string, string> = {
            storage: "checking",
            firestore: "checking",
            gemini: "checking"
        };

        let hasError = false;

        // Check Cloud Storage
        try {
            const storage = new Storage({ projectId, credentials });
            const bucketName = process.env.GCS_BUCKET;
            if (!bucketName) throw new Error("GCS_BUCKET not defined");
            const [exists] = await storage.bucket(bucketName).exists();
            if (!exists) throw new Error("Bucket does not exist");
            status.storage = "ok";
        } catch (error: any) {
            status.storage = `failed: ${error.message}`;
            hasError = true;
        }

        // Check Firestore
        try {
            // Ensure Firebase is initialized
            if (admin.apps.length === 0) {
                admin.initializeApp({
                    credential: admin.credential.cert({ projectId, clientEmail, privateKey }),
                });
            }
            // Simple read to check connectivity
            await admin.firestore().collection('_health').limit(1).get();
            status.firestore = "ok";
        } catch (error: any) {
            status.firestore = `failed: ${error.message}`;
            hasError = true;
        }

        // Check Gemini
        try {
            const apiKey = process.env.GOOGLE_GENAI_API_KEY;
            if (!apiKey) throw new Error("GOOGLE_GENAI_API_KEY not defined");
            const genai = new GoogleGenAI({ apiKey });
            const response = await genai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: 'Say "ok"',
                config: { maxOutputTokens: 10 },
            });
            if (response.text) {
                status.gemini = "ok";
            } else {
                throw new Error("Empty response from Gemini");
            }
        } catch (error: any) {
            status.gemini = `failed: ${error.message}`;
            hasError = true;
        }

        return NextResponse.json(status, { status: hasError ? 500 : 200 });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
