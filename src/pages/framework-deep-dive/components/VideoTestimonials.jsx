import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Alex Martinez",
      title: "FTMO $100K Funded Trader",
      thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=225&fit=crop",
      duration: "3:24",
      quote: "The OUR Framework completely changed my approach to trading. I went from failing 3 FTMO challenges to passing on my next attempt.",
      videoUrl: "#", // Mock URL
      stats: {
        challenge: "$100K FTMO",
        timeframe: "12 days",
        profit: "+$7,850"
      }
    },
    {
      id: 2,
      name: "Jennifer Kim",
      title: "Part-time Trader & Mother",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=225&fit=crop",
      duration: "2:47",
      quote: "As a busy mom, I needed a systematic approach that worked with limited time. The framework's structure was perfect for my schedule.",
      videoUrl: "#", // Mock URL
      stats: {
        challenge: "$50K FTMO",
        timeframe: "16 days",
        profit: "+$3,920"
      }
    },
    {
      id: 3,
      name: "Robert Chen",
      title: "Former Emotional Trader",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop",
      duration: "4:12",
      quote: "I was a revenge trader for years. The framework\'s systematic approach helped me break the emotional cycle and become consistently profitable.",
      videoUrl: "#", // Mock URL
      stats: {
        challenge: "$200K FTMO",
        timeframe: "19 days",
        profit: "+$14,200"
      }
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trader Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear directly from traders who transformed their results using the OUR Framework.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-slate-900">
                <img
                  src={testimonials?.[activeVideo]?.thumbnail}
                  alt={testimonials?.[activeVideo]?.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105">
                    <Icon name="Play" size={32} className="text-slate-900 ml-1" />
                  </button>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/80 text-white text-sm px-2 py-1 rounded">
                  {testimonials?.[activeVideo]?.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={`https://ui-avatars.com/api/?name=${testimonials?.[activeVideo]?.name}&background=1e3a8a&color=fff&size=48`}
                    alt={testimonials?.[activeVideo]?.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {testimonials?.[activeVideo]?.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {testimonials?.[activeVideo]?.title}
                    </p>
                  </div>
                </div>

                <blockquote className="text-muted-foreground italic mb-6">
                  "{testimonials?.[activeVideo]?.quote}"
                </blockquote>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-surface rounded-lg">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Challenge</div>
                    <div className="font-semibold text-foreground">
                      {testimonials?.[activeVideo]?.stats?.challenge}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Duration</div>
                    <div className="font-semibold text-foreground">
                      {testimonials?.[activeVideo]?.stats?.timeframe}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Profit</div>
                    <div className="font-semibold text-success">
                      {testimonials?.[activeVideo]?.stats?.profit}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Playlist */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">More Success Stories</h3>
            
            {testimonials?.map((testimonial, index) => (
              <button
                key={testimonial?.id}
                onClick={() => setActiveVideo(index)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                  activeVideo === index
                    ? 'border-primary bg-primary/5' :'border-border bg-card hover:border-primary/50'
                }`}
              >
                <div className="flex space-x-3">
                  <div className="relative flex-shrink-0">
                    <img
                      src={testimonial?.thumbnail}
                      alt={testimonial?.name}
                      className="w-16 h-9 object-cover rounded"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <Icon name="Play" size={12} color="white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-black/80 text-white text-xs px-1 rounded">
                      {testimonial?.duration}
                    </div>
                  </div>
                  
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-foreground text-sm mb-1 truncate">
                      {testimonial?.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      {testimonial?.title}
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {testimonial?.quote}
                    </p>
                  </div>
                </div>
              </button>
            ))}

            {/* CTA */}
            <div className="p-4 bg-surface rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Ready to Start?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Join these successful traders and transform your trading approach.
              </p>
              <Button 
                variant="default" 
                size="sm" 
                fullWidth
                iconName="ExternalLink"
                iconPosition="right"
              >
                Start FTMO Challenge
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;