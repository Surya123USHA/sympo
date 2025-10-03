import { useState, useEffect } from 'react';
import okarunGlasses from '@/assets/Anime _ Dandadan _ Dan Da Dan.jpeg';
import characterOrangeEyes from '@/assets/character-orange-eyes.jpeg';
import redHairCharacter from '@/assets/red-hair-character.jpeg';
import momoSupernatural from '@/assets/momo-supernatural.webp';
import turboGranny from '@/assets/turbo-granny.webp';
import alienCreature from '@/assets/alien-creature.webp';


const characters = [
  { src: okarunGlasses, alt: "Okarun with glasses" },
  { src: characterOrangeEyes, alt: "Character with orange eyes" },
  { src: redHairCharacter, alt: "Red-haired character" },
  { src: momoSupernatural, alt: "Momo with supernatural aura" },
  { src: turboGranny, alt: "Turbo Granny" },
  { src: alienCreature, alt: "Alien creature" },
];

export const CharacterSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % characters.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {characters.map((character, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 animate-supernatural-glow' : 'opacity-0'
          }`}
        >
          <img
            src={character.src}
            alt={character.alt}
            className="w-full h-full object-cover scale-110 animate-slide-fade"
            style={{
              filter: 'brightness(0.8) contrast(1.2) saturate(1.3)',
            }}
          />
        </div>
      ))}
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      {/* Supernatural border glow effect */}
      <div className="absolute inset-0 border-4 border-neon-cyan opacity-20 animate-neon-pulse" />
    </div>
  );
};