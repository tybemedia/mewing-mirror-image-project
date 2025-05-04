
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const VideoSection = () => {
  const videos = [
    {
      id: 1,
      title: "Beginner's Guide to Mewing",
      duration: "7:15",
      thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    },
    {
      id: 2,
      title: "Common Mewing Mistakes to Avoid",
      duration: "5:42",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      id: 3,
      title: "Before and After: Mewing Results",
      duration: "10:38",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    }
  ];

  return (
    <section id="videos" className="section bg-gray-50 border-t border-gray-100">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">Watch & Learn</h2>
          <p className="text-xl text-gray-600">
            Educational videos to help you master proper tongue posture and facial development techniques.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="group relative overflow-hidden rounded-lg">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                    <Play size={24} className="text-black ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium">{video.title}</h3>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center text-sm font-medium border-b border-black pb-1 hover:opacity-70 transition-opacity">
            View All Videos <ArrowRight size={14} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
