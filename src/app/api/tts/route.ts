export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { TextToSpeechClient, protos } from '@google-cloud/text-to-speech';
import { NextRequest, NextResponse } from 'next/server';

let _ttsClient: TextToSpeechClient | null = null;

function getTTSClient(): TextToSpeechClient {
    if (!_ttsClient) {
        const projectId = process.env.GCP_PROJECT_ID;
        const clientEmail = process.env.GCP_CLIENT_EMAIL;
        const privateKey = process.env.GCP_PRIVATE_KEY?.replace(/\\n/g, '\n');

        if (!projectId || !clientEmail || !privateKey) {
            throw new Error("GCP environment variables not configured properly.");
        }

        _ttsClient = new TextToSpeechClient({
            projectId,
            credentials: { client_email: clientEmail, private_key: privateKey },
        });
    }
    return _ttsClient;
}

// Map language codes to Google Cloud TTS voice names (Indian voices)
const VOICE_MAP: Record<string, { languageCode: string; name: string }> = {
    'hi': { languageCode: 'hi-IN', name: 'hi-IN-Standard-A' },
    'hi-IN': { languageCode: 'hi-IN', name: 'hi-IN-Standard-A' },
    'en': { languageCode: 'en-IN', name: 'en-IN-Standard-A' },
    'en-IN': { languageCode: 'en-IN', name: 'en-IN-Standard-A' },
    'en-US': { languageCode: 'en-US', name: 'en-US-Standard-C' },
    'ta': { languageCode: 'ta-IN', name: 'ta-IN-Standard-A' },
    'ta-IN': { languageCode: 'ta-IN', name: 'ta-IN-Standard-A' },
    'te': { languageCode: 'te-IN', name: 'te-IN-Standard-A' },
    'te-IN': { languageCode: 'te-IN', name: 'te-IN-Standard-A' },
    'bn': { languageCode: 'bn-IN', name: 'bn-IN-Standard-A' },
    'bn-IN': { languageCode: 'bn-IN', name: 'bn-IN-Standard-A' },
    'mr': { languageCode: 'mr-IN', name: 'mr-IN-Standard-A' },
    'mr-IN': { languageCode: 'mr-IN', name: 'mr-IN-Standard-A' },
    'gu': { languageCode: 'gu-IN', name: 'gu-IN-Standard-A' },
    'gu-IN': { languageCode: 'gu-IN', name: 'gu-IN-Standard-A' },
    'kn': { languageCode: 'kn-IN', name: 'kn-IN-Standard-A' },
    'kn-IN': { languageCode: 'kn-IN', name: 'kn-IN-Standard-A' },
    'ml': { languageCode: 'ml-IN', name: 'ml-IN-Standard-A' },
    'ml-IN': { languageCode: 'ml-IN', name: 'ml-IN-Standard-A' },
};

export async function POST(req: NextRequest) {
    try {
        const { text, language } = await req.json();

        if (!text || !language) {
            return NextResponse.json({ error: 'Text and language are required' }, { status: 400 });
        }

        const voiceConfig = VOICE_MAP[language] || VOICE_MAP['en-IN'] || { languageCode: 'en-IN', name: 'en-IN-Standard-A' };

        const request: protos.google.cloud.texttospeech.v1.ISynthesizeSpeechRequest = {
            input: { text },
            voice: {
                languageCode: voiceConfig.languageCode,
                name: voiceConfig.name,
            },
            audioConfig: {
                audioEncoding: 'MP3' as any,
            },
        };

        const [response] = await getTTSClient().synthesizeSpeech(request);

        if (response.audioContent) {
            const audioBuffer = Buffer.from(response.audioContent as Uint8Array);
            return new NextResponse(audioBuffer, {
                status: 200,
                headers: {
                    'Content-Type': 'audio/mpeg',
                    'Content-Length': audioBuffer.length.toString(),
                },
            });
        }

        throw new Error('No audio content returned');
    } catch (error: any) {
        console.error("API error:", error);
        // Return empty audio to prevent frontend crash
        return new NextResponse(null, { status: 204 });
    }
}
