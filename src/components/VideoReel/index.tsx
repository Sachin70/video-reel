"use client";

import { useState, useRef, useEffect } from "react";
import { Heart, Share2, Volume2, VolumeX } from "lucide-react";

import ProductTag from "@/components/ProductTag";

import { VideoData } from "@/lib/types";

interface VideoReelProps {
  video: VideoData;
  isActive: boolean;
}

export default function VideoReel({ video, isActive }: VideoReelProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.play().catch((e) => {
        console.error("Error playing video:", e);
        setError("Failed to play video. Please try again.");
      });
      setIsPlaying(true);
    } else if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((e) => {
          console.error("Error playing video:", e);
          setError("Failed to play video. Please try again.");
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoError = () => {
    setError(
      "Failed to load video. Please check your connection and try again."
    );
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    // Here you would typically send a request to your backend to update the like status
    console.log(`Video ${video.id} ${isLiked ? "unliked" : "liked"}`);
  };

  const handleShare = () => {
    // Implement share functionality here
    // For now, we'll just log to console
    console.log(`Sharing video ${video.id}`);
    alert("Sharing functionality would open a share dialog here.");
  };

  return (
    <div className="relative h-full w-full bg-black">
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
          <p>{error}</p>
        </div>
      ) : (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          loop
          muted={isMuted}
          playsInline
          onClick={togglePlayPause}
          onError={handleVideoError}
        >
          <source src={video.url} type="video/mp4" />
          <source src={video.url.replace(".mp4", ".webm")} type="video/webm" />
          <source src={video.url.replace(".mp4", ".ogg")} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
        <div className="text-white">
          <h2 className="text-lg font-bold">{video.title}</h2>
          <p className="text-sm">{video.description}</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={toggleMute}
            className="text-white"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
          <button
            onClick={handleLike}
            className="text-white"
            aria-label={isLiked ? "Unlike" : "Like"}
          >
            <Heart size={24} fill={isLiked ? "white" : "none"} />
          </button>
          <button
            onClick={handleShare}
            className="text-white"
            aria-label="Share"
          >
            <Share2 size={24} />
          </button>
        </div>
      </div>
      {video.products.map((product) => (
        <ProductTag key={product.id} product={product} />
      ))}
    </div>
  );
}
