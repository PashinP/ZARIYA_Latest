const { Storage } = require('@google-cloud/storage');
require('dotenv').config({ path: '.env.local' });

const projectId = process.env.GCP_PROJECT_ID;
const clientEmail = process.env.GCP_CLIENT_EMAIL;
const privateKey = process.env.GCP_PRIVATE_KEY?.replace(/\\n/g, '\n');

const storage = new Storage({
  projectId,
  credentials: { client_email: clientEmail, private_key: privateKey },
});

async function setCors() {
  const bucketName = process.env.GCS_BUCKET;
  console.log(`Setting CORS for bucket: ${bucketName}`);
  await storage.bucket(bucketName).setCorsConfiguration([
    {
      maxAgeSeconds: 3600,
      method: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      origin: ['*'],
      responseHeader: ['Content-Type', 'Authorization'],
    },
  ]);
  console.log('CORS configured successfully.');
}

setCors().catch(console.error);
