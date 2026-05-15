import * as admin from 'firebase-admin';

// Lazy-initialized Firebase Admin app to prevent module-load crashes in serverless
let _app: admin.app.App | null = null;

function getApp(): admin.app.App {
    if (!_app) {
        // Check if already initialized (hot-reload safe)
        if (admin.apps.length > 0) {
            _app = admin.apps[0]!;
            return _app;
        }

        const projectId = process.env.GCP_PROJECT_ID;
        const clientEmail = process.env.GCP_CLIENT_EMAIL;
        const privateKey = process.env.GCP_PRIVATE_KEY?.replace(/\\n/g, '\n');

        if (!projectId || !clientEmail || !privateKey) {
            throw new Error("Firebase/GCP environment variables not configured properly. Need GCP_PROJECT_ID, GCP_CLIENT_EMAIL, GCP_PRIVATE_KEY.");
        }

        _app = admin.initializeApp({
            credential: admin.credential.cert({
                projectId,
                clientEmail,
                privateKey,
            }),
            storageBucket: process.env.GCS_BUCKET || `${projectId}.firebasestorage.app`,
        });
    }
    return _app;
}

function getFirestore(): admin.firestore.Firestore {
    return getApp().firestore();
}

export function getStorageBucket(): admin.storage.Storage {
    return getApp().storage();
}

// Define the product type here (mirroring frontend expectations)
export interface Product {
    id: string; // Internal frontend ID
    productId?: string; // Partition key for DynamoDB (kept for compatibility)
    artisanId?: string;
    title: string;
    imageKey?: string;
    originalImage?: string; // Cloud Storage public URL
    story?: string;
    price: number;
    suggestedPrice?: number;
    category: string;
    tags?: string[];
    createdAt: string;
    status?: string;
    dimensions?: string;
    [key: string]: any;
}

export async function saveProduct(product: Product): Promise<void> {
    // Use product.id as the Firestore document ID
    const docRef = getFirestore().collection('products').doc(product.id);

    const mappedProduct = {
        ...product,
        productId: product.id, // Keep backward compatibility
    };

    try {
        console.log("Calling GCP service: Firestore (set product)");
        await docRef.set(mappedProduct);
        console.log("GCP call success");
    } catch (error: any) {
        console.error("GCP error:", error);
        throw new Error('Could not save product: ' + error.message);
    }
}

export async function getProduct(productId: string): Promise<Product | null> {
    try {
        console.log("Calling GCP service: Firestore (get product)");
        const docSnap = await getFirestore().collection('products').doc(productId).get();
        console.log("GCP call success");

        if (!docSnap.exists) {
            return null;
        }

        return docSnap.data() as Product;
    } catch (error: any) {
        console.error("GCP error:", error);
        throw new Error('Could not fetch product');
    }
}

export async function listProducts(): Promise<Product[]> {
    try {
        console.log("Calling GCP service: Firestore (list products)");
        const snapshot = await getFirestore()
            .collection('products')
            .orderBy('createdAt', 'desc')
            .limit(20)
            .get();
        console.log("GCP call success");

        return snapshot.docs.map(doc => doc.data() as Product);
    } catch (error: any) {
        console.error("GCP error:", error);
        throw new Error('Could not list products');
    }
}

// Favorites Functions
export interface Favorite {
    userId: string;
    productId: string;
    addedAt: string;
    [key: string]: any;
}

export async function saveFavorite(favorite: Favorite): Promise<void> {
    // Use composite key as doc ID
    const docId = `${favorite.userId}_${favorite.productId}`;
    try {
        await getFirestore().collection('favorites').doc(docId).set(favorite);
    } catch (error: any) {
        console.error("GCP error:", error);
        throw new Error('Could not save favorite');
    }
}

export async function removeFavorite(userId: string, productId: string): Promise<void> {
    const docId = `${userId}_${productId}`;
    try {
        await getFirestore().collection('favorites').doc(docId).delete();
    } catch (error: any) {
        console.error("GCP error:", error);
        throw new Error('Could not remove favorite');
    }
}

export async function listUserFavorites(userId: string): Promise<Favorite[]> {
    try {
        const snapshot = await getFirestore()
            .collection('favorites')
            .where('userId', '==', userId)
            .get();
        return snapshot.docs.map(doc => doc.data() as Favorite);
    } catch (error: any) {
        console.error("GCP error:", error);
        throw new Error('Could not list favorites');
    }
}

// Notification Functions
export interface Notification {
    userId: string;
    notificationId: string;
    title: string;
    message: string;
    isRead: boolean;
    createdAt: string;
}

export async function saveNotification(notification: Notification): Promise<void> {
    const docId = notification.notificationId;
    try {
        await getFirestore().collection('notifications').doc(docId).set(notification);
    } catch (error: any) {
        console.error("GCP error:", error);
        throw new Error('Could not save notification');
    }
}

export async function listUserNotifications(userId: string): Promise<Notification[]> {
    try {
        const snapshot = await getFirestore()
            .collection('notifications')
            .where('userId', '==', userId)
            .orderBy('createdAt', 'desc')
            .get();
        return snapshot.docs.map(doc => doc.data() as Notification);
    } catch (error: any) {
        console.error("GCP error:", error);
        throw new Error('Could not list notifications');
    }
}
