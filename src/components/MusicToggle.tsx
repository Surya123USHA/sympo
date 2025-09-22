import { useState, useEffect, useRef } from 'react';
import { Music } from 'lucide-react';

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio('/drums-of-liberation.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3; // Set to 30% volume for background music

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Audio playback failed:', error);
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-primary transition-all duration-300 shadow-treasure hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring group"
      aria-label="Toggle background music"
    >
      <Music 
        className={`w-5 h-5 text-white transition-transform duration-300 ${
          isPlaying ? 'animate-spin' : ''
        }`}
      />
      <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};

export default MusicToggle;