'use client';

import { useState } from 'react';
import YouTube from 'react-youtube';
import { Medium } from '@/types/product';
import { extractYouTubeVideoId } from '@/lib/api';

interface VideoTrailerProps {
  media: Medium[];
}

export function VideoTrailer({ media }: VideoTrailerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const videoMedia = media.find(item => item.type === 'video' || item.url.includes('youtube'));
  
  if (!videoMedia) return null;
  
  const videoId = extractYouTubeVideoId(videoMedia.url);
  
  if (!videoId) return null;

  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Course Preview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a glimpse of what you'll learn in this comprehensive IELTS preparation course
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video">
              {!isPlaying ? (
                <div 
                  className="relative w-full h-full bg-gray-900 flex items-center justify-center cursor-pointer group"
                  onClick={() => setIsPlaying(true)}
                >
                  {videoMedia.thumbnail && (
                    <img 
                      src={videoMedia.thumbnail} 
                      alt="Video thumbnail"
                      className="absolute inset-0 w-full h-full object-cover opacity-70"
                    />
                  )}
                  <div className="relative z-10 bg-white bg-opacity-90 rounded-full p-6 group-hover:bg-opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">{videoMedia.title || 'Course Trailer'}</h3>
                  </div>
                </div>
              ) : (
                <YouTube
                  videoId={videoId}
                  opts={opts}
                  className="w-full h-full"
                  iframeClassName="w-full h-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}