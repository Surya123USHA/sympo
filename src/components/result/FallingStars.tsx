import { useEffect, useState } from "react";
import star1 from "@/assets/star-1.jpeg";
import star2 from "@/assets/star-2.jpeg";
import star3 from "@/assets/star-3.jpeg";
import star4 from "@/assets/star-4.jpeg";
import star5 from "@/assets/star-5.jpeg";

interface Star {
  id: number;
  image: string;
  left: number;
  duration: number;
  delay: number;
  size: number;
}

const starImages = [star1, star2, star3, star4, star5];

export const FallingStars = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const newStars: Star[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      image: starImages[Math.floor(Math.random() * starImages.length)],
      left: Math.random() * 100,
      duration: Math.random() * 8 + 6, // 6-14 seconds
      delay: Math.random() * 5,
      size: Math.random() * 40 + 40, // 40-80px
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-fall"
          style={{
            left: `${star.left}%`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        >
          <div
            className="w-full h-full bg-cover bg-center opacity-70"
            style={{
              backgroundImage: `url(${star.image})`,
              clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
              filter: "drop-shadow(0 0 10px hsl(var(--blood-red)))",
            }}
          />
        </div>
      ))}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>
    </div>
  );
};
