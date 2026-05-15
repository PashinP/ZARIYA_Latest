export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { Storage } from '@google-cloud/storage';
import { NextRequest, NextResponse } from 'next/server';

let _storage: Storage | null = null;

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
    console.log("Route hit: /api/s3/presign (now using GCS)");

    const { filename, contentType } = await req.json();

    if (!filename) {
      return NextResponse.json({ error: 'Filename is required' }, { status: 400 });
    }

    const bucketName = process.env.GCS_BUCKET;
    if (!bucketName) {
      throw new Error("GCS_BUCKET environment variable not configured properly.");
    }

    console.log("GCS Bucket Name:", bucketName);

    const sanitizedFilename = filename.replace(/[^a-zA-Z0-9.-]/g, '_');
    const isAudio = contentType && contentType.startsWith('audio/');
    const objectKey = isAudio
      ? `audio/${Date.now()}-${sanitizedFilename}`
      : `products/${Date.now()}-${sanitizedFilename}`;

    const file = getStorage().bucket(bucketName).file(objectKey);

    console.log("Calling GCP service: Cloud Storage (generate signed URL)");
    const [uploadUrl] = await file.getSignedUrl({
      version: 'v4',
      action: 'write',
      expires: Date.now() + 60 * 60 * 1000, // 1 hour
      contentType: contentType || 'application/octet-stream',
    });
    console.log("GCP call success. Generated URL length:", uploadUrl.length);

    return NextResponse.json({ uploadUrl, objectKey });
  } catch (error: any) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
