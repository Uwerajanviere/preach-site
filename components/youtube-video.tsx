import { YouTubeLink } from '@/lib/types';

interface YouTubeVideoProps {
  video: YouTubeLink;
}

export function YouTubeVideo({ video }: YouTubeVideoProps) {
  // Extract video ID from YouTube URL
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(video.url);
  if (!videoId) return null;

  return (
    <div className="bg-black/40 rounded-xl overflow-hidden">
      <div className="relative aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white text-center">{video.title}</h3>
        <p className="text-white/70 text-center mt-2">{video.category}</p>
      </div>
    </div>
  );
} 