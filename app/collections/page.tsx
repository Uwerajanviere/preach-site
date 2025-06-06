"use client";

import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { YouTubeVideo } from '@/components/youtube-video';
import { getYouTubeLinksByCategory } from '@/lib/firebase-service';
import { YouTubeLinkCategory } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

const categories: YouTubeLinkCategory[] = [
  'Faith',
  'Grace',
  'Love',
  'Hope',
  'Salvation',
  'Prayer',
];

export default function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<YouTubeLinkCategory | ''>('');
  const [videos, setVideos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    if (selectedCategory) {
      setIsLoading(true);
      setError(null);
      getYouTubeLinksByCategory(selectedCategory)
        .then(fetchedVideos => {
          setVideos(fetchedVideos);
        })
        .catch(err => {
          console.error(`Error fetching ${selectedCategory} videos:`, err);
          setError('Failed to load videos.');
          setVideos([]);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setVideos([]);
    }
  }, [selectedCategory, isMounted]);

  if (!isMounted) {
    return (
      <div className="relative min-h-screen flex flex-col">
        {/* Background Image */}
        <div className="fixed inset-0 -z-10">
          <Image src="/images/sunrise.jpg" alt="Sunrise background" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        {/* Basic placeholder or loading indicator if needed */}
        <div className="container mx-auto px-4 py-8 flex-1 z-10">
          <h1 className="text-3xl font-bold text-center mb-8 text-white">Browse Sermons</h1>
          {/* Loading state placeholder */}
          <p className="text-center text-white">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image src="/images/sunrise.jpg" alt="Sunrise background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Header with Logo Link */}
      <header className="relative z-20 w-full bg-black/60 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-3xl font-bold text-amber-400">
            Matthew 28:18-19
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex-1 z-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">Browse Sermons</h1>

        <div className="mb-8 max-w-md mx-auto">
          <Select onValueChange={(value: YouTubeLinkCategory) => setSelectedCategory(value)} value={selectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {isLoading && <p className="text-center text-white">Loading videos...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!isLoading && !error && selectedCategory && videos.length === 0 && (
          <p className="text-center text-white/70">No videos found for this category.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {!isLoading && !error && videos.map(video => (
            <YouTubeVideo key={video.id} video={video} />
          ))}
        </div>
      </div>

      {/* Footer is provided by the root layout (app/layout.tsx) */}
    </div>
  );
} 