import { useEffect, useState } from "react";
import narutoCircle from "@/assets/naruto-circle.png";
import sasukeCircle from "@/assets/sasuke-circle.png";
import kakashiCircle from "@/assets/kakashi-circle.png";
import sakuraCircle from "@/assets/sakura-circle.png";
import itachiCircle from "@/assets/itachi-circle.png";

const characterImages = [
  narutoCircle,
  sasukeCircle,
  kakashiCircle,
  sakuraCircle,
  itachiCircle,
];

interface FallingCharacter {
  id: number;
  image: string;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export const FallingCharacters = () => {
  const [characters, setCharacters] = useState<FallingCharacter[]>([]);

  useEffect(() => {
    // Generate 8 falling characters with random properties
    const generatedCharacters: FallingCharacter[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      image: characterImages[Math.floor(Math.random() * characterImages.length)],
      left: Math.random() * 100, // Random position 0-100%
      delay: Math.random() * 5, // Random delay 0-5s
      duration: 12 + Math.random() * 8, // Random duration 12-20s
      size: 40 + Math.random() * 40, // Random size 40-80px
    }));

    setCharacters(generatedCharacters);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {characters.map((char) => (
        <div
          key={char.id}
          className="absolute animate-falling-leaf opacity-30 hover:opacity-60 transition-opacity"
          style={{
            left: `${char.left}%`,
            animationDelay: `${char.delay}s`,
            animationDuration: `${char.duration}s`,
          }}
        >
          <img
            src={char.image}
            alt="Naruto character"
            className="rounded-full shadow-lg border-2 border-primary/30"
            style={{
              width: `${char.size}px`,
              height: `${char.size}px`,
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </div>
  );
};