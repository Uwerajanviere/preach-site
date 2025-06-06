import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { NextResponse } from 'next/server';

// Initialize Firebase Admin SDK
const apps = getApps();

if (!apps.length) {
  try {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
    });
  } catch (error) {
    console.error('Error initializing Firebase Admin SDK:', error);
  }
}

const db = getFirestore();

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