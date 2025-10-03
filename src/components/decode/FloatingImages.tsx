import { useEffect, useState } from 'react';
import heroTitanWall from '@/assets/hero-titan-wall.jpeg';
import heroLevi from '@/assets/hero-levi.jpeg';
import heroColossal from '@/assets/hero-colossal.jpeg';
import heroErenTitan from '@/assets/hero-eren-titan.jpeg';

const floatingImages = [
  { src: heroLevi, size: 140, delay: 0 },
  { src: heroColossal, size: 180, delay: 0.5 },
  { src: heroErenTitan, size: 120, delay: 1 },
  { src: heroTitanWall, size: 160, delay: 1.5 },
  { src: heroLevi, size: 100, delay: 2 },
  { src: heroColossal, size: 130, delay: 2.5 },
  { src: heroErenTitan, size: 150, delay: 3 },
  { src: heroTitanWall, size: 110, delay: 3.5 },
  { src: heroLevi, size: 170, delay: 4 },
  { src: heroColossal, size: 125, delay: 4.5 },
  { src: heroErenTitan, size: 95, delay: 5 },
  { src: heroTitanWall, size: 145, delay: 5.5 },
];

export const FloatingImages = () => {
  const [positions, setPositions] = useState<Array<{ top: string; left: string }>>([]);

  useEffect(() => {
    // Generate diverse positions for floating images
    const grid = [
      { top: 5, left: 10 },
      { top: 15, left: 85 },
      { top: 25, left: 5 },
      { top: 35, left: 75 },
      { top: 45, left: 15 },
      { top: 55, left: 90 },
      { top: 65, left: 8 },
      { top: 75, left: 80 },
      { top: 10, left: 50 },
      { top: 80, left: 25 },
      { top: 20, left: 65 },
      { top: 70, left: 45 },
    ];

    const newPositions = floatingImages.map((_, index) => {
      const basePos = grid[index];
      // Add some randomness to each position
      return {
        top: `${basePos.top + (Math.random() * 8 - 4)}%`,
        left: `${basePos.left + (Math.random() * 8 - 4)}%`,
      };
    });
    setPositions(newPositions);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingImages.map((img, index) => (
        <div
          key={index}
          className={`absolute opacity-60 hover:opacity-80 transition-opacity duration-500 ${
            index % 3 === 0
              ? 'animate-float-slow'
              : index % 2 === 0
              ? 'animate-float-medium'
              : 'animate-float'
          }`}
          style={{
            top: positions[index]?.top || '50%',
            left: positions[index]?.left || '50%',
            width: `${img.size}px`,
            height: `${img.size}px`,
            animationDelay: `${img.delay}s`,
          }}
        >
          <div
            className="w-full h-full rounded-full border-4 border-secondary/40 shadow-2xl overflow-hidden backdrop-blur-sm ring-2 ring-primary/20"
            style={{
              backgroundImage: `url(${img.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0 0 30px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.3)',
            }}
          />
        </div>
      ))}
    </div>
  );
};