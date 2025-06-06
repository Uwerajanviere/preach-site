import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { NextResponse } from 'next/server';

// Initialize Firebase Admin SDK
let adminApp;

try {
  // Check if the app is already initialized
  adminApp = initializeApp({
    credential: cert(JSON.parse(process.env.FIREBASE_ADMIN_PRIVATE_KEY || '{}')),
  });
} catch (error: any) {
  // If the app is already initialized, use the existing one
  if (error.code !== 'app/duplicate-app') {
    console.error('Error initializing Firebase Admin SDK:', error);
  }
}

const db = getFirestore(adminApp);

export async function POST(request: Request) {
  try {
    const { url, category, title, addedBy } = await request.json();

    // Basic validation
    if (!url || !category) {
      return NextResponse.json({ message: 'Missing required fields (url, category)' }, { status: 400 });
    }

    // Add document to Firestore
    const docRef = await db.collection('youtubeLinks').add({
      url,
      category,
      title: title || '', // Optional field
      addedBy: addedBy || 'anonymous', // Optional field
      createdAt: new Date(),
    });

    return NextResponse.json({ message: 'Sermon added successfully', id: docRef.id }, { status: 200 });

  } catch (error) {
    console.error('Error adding sermon:', error);
    return NextResponse.json({ message: 'Error adding sermon' }, { status: 500 });
  }
} 