export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { SpeechClient } from '@google-cloud/speech';
import { NextResponse } from 'next/server';

let _speechClient: SpeechClient | null = null;

function getSpeechClient(): SpeechClient {
    if (!_speechClient) {
        const projectId = process.env.GCP_PROJECT_ID;
        const clientEmail = process.env.GCP_CLIENT_EMAIL;
        const privateKey = process.env.GCP_PRIVATE_KEY?.replace(/\\n/g, '\n');

        if (!projectId || !clientEmail || !privateKey) {
            throw new Error("GCP environment variables not configured properly.");
        }

        _speechClient = new SpeechClient({
            projectId,
            credentials: { client_email: clientEmail, private_key: privateKey },
        });
    }
    return _speechClient;
}

// Map language codes used in the app to Google Cloud Speech language codes
const LANGUAGE_MAP: Record<string, string> = {
    'en-US': 'en-US',
    'en-IN': 'en-IN',
    'hi-IN': 'hi-IN',
    'ta-IN': 'ta-IN',
    'te-IN': 'te-IN',
    'bn-IN': 'bn-IN',
    'mr-IN': 'mr-IN',
    'gu-IN': 'gu-IN',
    'kn-IN': 'kn-IN',
    'ml-IN': 'ml-IN',
};

export async function POST(req: Request) {
    try {
        console.log("Route hit: /api/transcribe/start (using Google Cloud Speech)");
        const { objectKey, languageCode } = await req.json();

        if (!objectKey) {
            return NextResponse.json({ error: 'objectKey is required' }, { status: 400 });
        }

        const bucketName = process.env.GCS_BUCKET;
        if (!bucketName) {
            throw new Error("GCS_BUCKET environment variable not configured properly.");
        }

        const gcsUri = `gs://${bucketName}/${objectKey}`;
        const resolvedLanguage = LANGUAGE_MAP[languageCode] || languageCode || 'en-US';

        console.log("Calling GCP service: Speech-to-Text (longRunningRecognize). URI:", gcsUri);

        const [operation] = await getSpeechClient().longRunningRecognize({
            audio: {
                uri: gcsUri,
            },
            config: {
                encoding: 'WEBM_OPUS' as any,
                sampleRateHertz: 48000,
                languageCode: resolvedLanguage,
                enableAutomaticPunctuation: true,
            },
        });

        console.log("GCP call success. Operation name:", operation.name);

        return NextResponse.json({
            jobName: operation.name, // Operation name used to poll status
            status: 'IN_PROGRESS',
        });
    } catch (error: any) {
        console.error("API error:", error);
        return NextResponse.json({
            jobName: `fallback-job-${Date.now()}`,
            status: 'FAILED',
        });
    }
}
