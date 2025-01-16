"use client";

import { useState, useRef, useEffect } from "react";

import VideoReel from "@/components/VideoReel";
import { videoData as initialVideoData } from "@/lib/placeholder-data";

export default function VideoReelList() {
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const [videoData, setVideoData] = useState(initialVideoData);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setCurrentReelIndex(index);

            // Load more videos when reaching the last 2 items
            if (index >= videoData.length - 2) {
              loadMoreVideos();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const container = containerRef.current;
    if (container) {
      Array.from(container.children).forEach((child) => {
        observer.observe(child);
      });
    }

    return () => {
      if (container) {
        Array.from(container.children).forEach((child) => {
          observer.unobserve(child);
        });
      }
    };
  }, [videoData]);

  const loadMoreVideos = () => {
    // Simulate loading more videos
    const newVideos = [...initialVideoData].map((video) => ({
      ...video,
      id: `${video.id}-${Date.now()}`, // Ensure unique IDs
    }));
    setVideoData((prevVideos) => [...prevVideos, ...newVideos]);
  };

  return (
    <div
      ref={containerRef}
      className="snap-y snap-mandatory h-screen overflow-y-scroll"
    >
      {videoData.map((video, index) => (
        <div key={video.id} className="snap-start h-screen" data-index={index}>
          <VideoReel video={video} isActive={index === currentReelIndex} />
        </div>
      ))}
    </div>
  );
}
