import { NextResponse } from 'next/server';
// Removed nodemailer import as we'll use Firebase now
// import nodemailer from 'nodemailer';

// Import Firebase Admin SDK
import { initializeApp, cert, getApps } from 'firebase-admin/app'; // Keep cert
import { getFirestore } from 'firebase-admin/firestore';

// Import Node.js 'fs' module to read file
import * as fs from 'fs';
import * as path from 'path';

// Initialize Firebase Admin SDK (only once)
let app;
if (!getApps().length) {
  console.log("Initializing Firebase Admin SDK by reading service account file...");
  
  const serviceAccountPath = path.resolve('./serviceAccountKey.json');

  if (!fs.existsSync(serviceAccountPath)) {
    console.error(`Firebase service account file not found at: ${serviceAccountPath}`);
    // Throw an error if the file is missing
    throw new Error(`Firebase service account file not found at ${serviceAccountPath}`);
  }

  try {
    // Read the service account key file content
    const serviceAccountContent = fs.readFileSync(serviceAccountPath, 'utf8');
    const serviceAccount = JSON.parse(serviceAccountContent);

    // Check for required fields after parsing
    if (!serviceAccount.projectId || !serviceAccount.clientEmail || !serviceAccount.privateKey) {
      console.error("Missing required fields in Firebase service account file!");
      throw new Error("Firebase service account file is missing required fields.");
    }

    app = initializeApp({
      credential: cert(serviceAccount),
    });
    console.log("Firebase Admin SDK initialized successfully.");

  } catch (parseError: any) {
    console.error('Error parsing service account file:', parseError);
    throw new Error(`Failed to parse Firebase service account file: ${parseError.message}`);
  }

} else {
  app = getApps()[0];
  console.log("Firebase Admin SDK already initialized.");
}

const db = getFirestore(app);

export async function POST(request: Request) {
  try {
    // Removed temporary console logs
    // console.log('DEBUG: FIREBASE_PROJECT_ID', process.env.FIREBASE_PROJECT_ID);
    // console.log('DEBUG: FIREBASE_CLIENT_EMAIL', process.env.FIREBASE_CLIENT_EMAIL);
    // console.log('DEBUG: FIREBASE_PRIVATE_KEY exists?', !!process.env.FIREBASE_PRIVATE_KEY);

    const formData = await request.json();
    const { firstName, lastName, email, subject, message } = formData;

    // Basic validation (optional, as frontend already validates)
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Save form data to Firestore
    const docRef = await db.collection('contactMessages').add({
      firstName,
      lastName,
      email,
      subject,
      message,
      timestamp: new Date(), // Add a timestamp
    });

    console.log('Contact message saved to Firestore with ID:', docRef.id);

    return NextResponse.json({ message: 'Your message has been sent!' }, { status: 200 });
  } catch (error: any) { // Catch error as any to access message property
    console.error('Error processing contact form:', error);
    return NextResponse.json({ message: 'Failed to send message', error: error.message }, { status: 500 });
  }
} 