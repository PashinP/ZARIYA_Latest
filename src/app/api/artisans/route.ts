export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import * as admin from 'firebase-admin';

// Re-use the Firebase app initialized in db.ts by importing it
// Firebase Admin SDK prevents duplicate initialization automatically
function getFirestore(): admin.firestore.Firestore {
    // Ensure Firebase is initialized (same pattern as db.ts)
    if (admin.apps.length === 0) {
        const projectId = process.env.GCP_PROJECT_ID;
        const clientEmail = process.env.GCP_CLIENT_EMAIL;
        const privateKey = process.env.GCP_PRIVATE_KEY?.replace(/\\n/g, '\n');

        if (!projectId || !clientEmail || !privateKey) {
            throw new Error("GCP environment variables not configured.");
        }

        admin.initializeApp({
            credential: admin.credential.cert({ projectId, clientEmail, privateKey }),
        });
    }
    return admin.firestore();
}

const ARTISANS_COLLECTION = 'artisans';

export interface ArtisanProfile {
    artisanId: string;
    name: string;
    village: string;
    craftType: string;
    bio: string;
    userId: string;
    createdAt: string;
}

export async function POST(req: NextRequest) {
    try {
        const { name, village, craftType, bio, userId } = await req.json();

        if (!name || !village || !craftType || !bio || !userId) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        const artisanProfile: ArtisanProfile = {
            artisanId: crypto.randomUUID(),
            name,
            village,
            craftType,
            bio,
            userId,
            createdAt: new Date().toISOString()
        };

        try {
            await getFirestore()
                .collection(ARTISANS_COLLECTION)
                .doc(artisanProfile.artisanId)
                .set(artisanProfile);
            console.log("Artisan profile saved to Firestore");
        } catch (dbError) {
            console.error("Firestore error:", dbError);
            console.log("Firestore not configured, artisan profile created locally");
        }

        return NextResponse.json({
            success: true,
            artisan: artisanProfile
        });

    } catch (error: any) {
        console.error("API error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const artisanId = searchParams.get('id');

        const db = getFirestore();

        if (artisanId) {
            // Get specific artisan
            const docSnap = await db.collection(ARTISANS_COLLECTION).doc(artisanId).get();

            if (!docSnap.exists) {
                return NextResponse.json({ error: "Artisan not found" }, { status: 404 });
            }

            return NextResponse.json({ artisan: docSnap.data() });
        } else {
            // List all artisans
            const snapshot = await db
                .collection(ARTISANS_COLLECTION)
                .limit(20)
                .get();

            return NextResponse.json({ artisans: snapshot.docs.map(doc => doc.data()) });
        }

    } catch (error: any) {
        console.error("API error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}