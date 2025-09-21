import { useState } from 'react';
import { X, Megaphone, Star } from 'lucide-react';

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      {/* Floating Wanted Posters */}
      <div className="wanted-poster fixed top-24 right-6 z-40 max-w-xs p-4 text-center">
        <div className="flex items-center justify-between mb-2">
          <Megaphone className="w-5 h-5 text-red-600" />
          <button
            onClick={() => setIsVisible(false)}
            className="text-red-600 hover:text-red-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <h3 className="font-black text-red-800 text-sm mb-2">SPECIAL ANNOUNCEMENT</h3>
        <p className="text-xs text-amber-900 mb-3">
          🏴‍☠️ Early Bird Registration now open! Join before the ship sets sail and save 30%!
        </p>
        <div className="flex items-center justify-center gap-1 text-yellow-600">
          <Star className="w-3 h-3 fill-current" />
          <Star className="w-3 h-3 fill-current" />
          <Star className="w-3 h-3 fill-current" />
        </div>
      </div>

      {/* Second Floating Poster */}
      <div className="wanted-poster fixed top-96 left-6 z-40 max-w-xs p-4 text-center hidden lg:block" style={{animationDelay: '2s'}}>
        <Megaphone className="w-5 h-5 text-red-600 mx-auto mb-2" />
        <h3 className="font-black text-red-800 text-sm mb-2">CREW ASSEMBLY</h3>
        <p className="text-xs text-amber-900 mb-3">
          ⚓ Meet the legendary speakers who will guide your journey through uncharted waters of knowledge!
        </p>
        <div className="flex items-center justify-center gap-1 text-yellow-600">
          <Star className="w-3 h-3 fill-current" />
          <Star className="w-3 h-3 fill-current" />
          <Star className="w-3 h-3 fill-current" />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;