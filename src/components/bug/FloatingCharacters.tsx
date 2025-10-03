import { useEffect, useState } from 'react';
import okarunGlasses from '@/assets/Anime _ Dandadan _ Dan Da Dan.jpeg';
import characterOrangeEyes from '@/assets/character-orange-eyes.jpeg';
import redHairCharacter from '@/assets/red-hair-character.jpeg';
import momoSupernatural from '@/assets/Anime _ Dandadan _ Dan Da Dan.jpeg';
import turboGranny from '@/assets/turbo-granny.webp';
import alienCreature from '@/assets/alien-creature.webp';

const floatingCharacters = [
  { src: okarunGlasses, alt: "Okarun", name: "Okarun" },
  { src: characterOrangeEyes, alt: "Spirit", name: "Spirit" },
  { src: redHairCharacter, alt: "Momo", name: "Momo" },
  { src: turboGranny, alt: "Turbo Granny", name: "Turbo Granny" },
  { src: alienCreature, alt: "Alien", name: "Alien" },
];

interface FloatingCharacter {
  id: number;
  src: string;
  alt: string;
  name: string;
  x: number;
  y: number;
  size: number;
  animationDelay: number;
  animationType: string;
}

export const FloatingCharacters = () => {
  const [characters, setCharacters] = useState<FloatingCharacter[]>([]);

  useEffect(() => {
    const generateRandomCharacters = () => {
      const randomCharacters: FloatingCharacter[] = [];
      
      // Generate 8-12 floating characters at random positions
      const count = Math.floor(Math.random() * 5) + 8;
      
      for (let i = 0; i < count; i++) {
        const character = floatingCharacters[Math.floor(Math.random() * floatingCharacters.length)];
        
        randomCharacters.push({
          id: i,
          ...character,
          x: Math.random() * 80 + 5, // 5% to 85% from left
          y: Math.random() * 80 + 5, // 5% to 85% from top
          size: Math.random() * 40 + 60, // 60px to 100px
          animationDelay: Math.random() * 6, // 0 to 6 seconds delay
          animationType: ['animate-float', 'animate-float-delayed', 'animate-float-slow'][Math.floor(Math.random() * 3)],
        });
      }
      
      setCharacters(randomCharacters);
    };

    generateRandomCharacters();
    
    // Regenerate positions every 30 seconds for more chaos
    const interval = setInterval(generateRandomCharacters, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {characters.map((char) => (
        <div
          key={char.id}
          className={`absolute ${char.animationType} opacity-30 hover:opacity-60 transition-opacity duration-500`}
          style={{
            left: `${char.x}%`,
            top: `${char.y}%`,
            animationDelay: `${char.animationDelay}s`,
          }}
        >
          <div 
            className="relative group cursor-pointer"
            style={{
              width: `${char.size}px`,
              height: `${char.size}px`,
            }}
          >
            {/* Glowing border */}
            <div className="absolute inset-0 rounded-full border-2 border-neon-cyan opacity-60 animate-neon-pulse group-hover:border-neon-pink transition-colors duration-300" />
            
            {/* Character image */}
            <img
              src={char.src}
              alt={char.alt}
              className="w-full h-full object-cover rounded-full filter brightness-110 contrast-125 saturate-150"
            />
            
            {/* Character name tooltip */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-neon-cyan/50">
              {char.name}
            </div>
            
            {/* Supernatural aura */}
            <div className="absolute inset-0 rounded-full bg-gradient-supernatural opacity-20 animate-supernatural-glow" />
          </div>
        </div>
      ))}
    </div>
  );
};