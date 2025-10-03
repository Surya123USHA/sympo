import React from 'react';
import { cn } from '@/lib/utils';
import wantedTemplate from '@/assets/wanted-poster-template.jpg';

interface WantedPosterProps {
  title: string;
  content: string;
  date?: string;
  bounty?: string;
  className?: string;
  learnMoreUrl?: string;
}

const WantedPoster: React.FC<WantedPosterProps> = ({
  title,
  content,
  date,
  bounty = "∞ BERRIES",
  className,
  learnMoreUrl
}) => {
  const handleLearnMore = () => {
    if (learnMoreUrl) {
      window.open(learnMoreUrl, '_blank');
    }
  };

  return (
    <div
      className={cn(
        "wanted-poster relative p-6 max-w-sm mx-auto h-[320px] overflow-hidden group hover:shadow-2xl transition-all duration-300",
        className
      )}
      style={{
        backgroundImage: `url(${wantedTemplate})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center space-y-4 relative z-10 h-full flex flex-col justify-between">
        {/* WANTED Header */}
        <h3 className="font-pirate text-2xl text-red-700 font-bold">
          WANTED
        </h3>
        
        {/* Content */}
        <div className="space-y-3 flex-1">
          <h4 className="font-adventure text-lg font-bold text-foreground">
            {title}
          </h4>
          
          <p className="font-adventure text-sm text-foreground/80 leading-relaxed">
            {content}
          </p>
          
          {date && (
            <p className="font-adventure text-xs text-foreground/70 italic">
              {date}
            </p>
          )}
          
          {/* Prominent Learn More Button - Moved to center content area */}
          <div className="pt-4">
            <button 
              onClick={handleLearnMore}
              className="font-adventure text-sm bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-accent animate-pulse hover:animate-none"
            >
              🗡️ Learn More
            </button>
          </div>
        </div>
        
        {/* Bounty */}
        <div className="border-t-2 border-accent pt-3">
          <p className="font-pirate text-accent font-bold text-lg">
            {bounty}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WantedPoster;