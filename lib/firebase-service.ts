import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import { YouTubeLink, YouTubeLinkCategory } from './types';

export async function getYouTubeLinksByCategory(category: YouTubeLinkCategory): Promise<YouTubeLink[]> {
  try {
    const linksRef = collection(db, 'youtubeLinks');
    const q = query(linksRef, where('category', '==', category));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
    } as YouTubeLink));
  } catch (error) {
    console.error('Error fetching YouTube links:', error);
    return [];
  }
}

export async function addYouTubeLink(link: Omit<YouTubeLink, 'id' | 'createdAt'> & { createdAt?: Date }) {
  try {
    const linksCollectionRef = collection(db, 'youtubeLinks');
    await addDoc(linksCollectionRef, {
      ...link,
      createdAt: link.createdAt || new Date(),
    });
  } catch (error) {
    console.error('Error adding YouTube link:', error);
    throw error; // Re-throw the error to be caught by the calling code
  }
} 