"use client";

import { useState, useEffect } from "react";
import { YouTubeVideo } from "./youtube-video";
import { getYouTubeLinksByCategory } from "@/lib/firebase-service";
import { YouTubeLinkCategory } from "@/lib/types";

interface VideoSectionProps {
  category: YouTubeLinkCategory;
  limit?: number;
}

export function VideoSection({ category, limit }: VideoSectionProps) {
  const [videos, setVideos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    async function fetchVideos() {
      try {
        const fetchedVideos = await getYouTubeLinksByCategory(category, limit);
        setVideos(fetchedVideos);
      } catch (err) {
        console.error(`Error fetching ${category} videos:`, err);
        setError("Failed to load videos");
      } finally {
        setIsLoading(false);
      }
    }

    fetchVideos();
  }, [category, limit, isMounted]);

  if (!isMounted) {
    return (
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white text-center">{category}</h3>
        <div className="bg-black/20 rounded-xl h-48 animate-pulse"></div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white text-center">{category}</h3>
        <div className="animate-pulse bg-black/20 rounded-xl h-48"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white text-center">{category}</h3>
        <div className="bg-red-500/20 rounded-xl p-4 text-white text-center">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white text-center">{category}</h3>
      {videos.map((video) => (
        <YouTubeVideo key={video.id} video={video} />
      ))}
      {videos.length === 0 && (
        <div className="bg-black/20 rounded-xl p-4 text-white text-center">
          No videos available
        </div>
      )}
    </div>
  );
} 