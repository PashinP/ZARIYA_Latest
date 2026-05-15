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

export async function GET(req: Request) {
    try {
        console.log("Route hit: /api/transcribe/status (using Google Cloud Speech)");
        const { searchParams } = new URL(req.url);
        const jobName = searchParams.get('jobName');

        if (!jobName) {
            return NextResponse.json({ error: 'jobName is required' }, { status: 400 });
        }

        // Check operation status using the operation name from longRunningRecognize
        console.log("Calling GCP service: Speech-to-Text (checkLongRunningRecognizeProgress)");
        const [operation] = await getSpeechClient().checkLongRunningRecognizeProgress(jobName);
        console.log("GCP call success. Done:", operation.done);

        if (operation.done) {
            // Operation completed — extract transcript
            const result = operation.result;
            let transcriptText = '';

            if (result && result.results) {
                transcriptText = result.results
                    .map((r: any) => r.alternatives?.[0]?.transcript || '')
                    .join(' ')
                    .trim();
            }
            console.log("Transcript fetched. Length:", transcriptText.length);

            return NextResponse.json({
                status: 'COMPLETED',
                transcript: transcriptText,
            });
        } else {
            return NextResponse.json({
                status: 'IN_PROGRESS',
                transcript: '',
            });
        }
    } catch (error: any) {
        console.error("API error:", error);
        return NextResponse.json({
            status: 'FAILED',
            transcript: '',
        });
    }
}
