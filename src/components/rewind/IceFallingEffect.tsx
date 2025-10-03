import { useEffect, useState } from "react";

interface IceParticle {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  opacity: number;
  delay: number;
}

const IceFallingEffect = () => {
  const [particles, setParticles] = useState<IceParticle[]>([]);

  useEffect(() => {
    const particleCount = 50;
    const newParticles: IceParticle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: Math.random() * 3 + 2, // 2-5 seconds
      size: Math.random() * 4 + 2, // 2-6px
      opacity: Math.random() * 0.6 + 0.2, // 0.2-0.8
      delay: Math.random() * 5, // 0-5 seconds delay
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-ice-fall"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.animationDuration}s`,
            animationDelay: `${particle.delay}s`,
            opacity: particle.opacity,
          }}
        >
          <div className="w-full h-full bg-white/80 rounded-full shadow-lg shadow-secondary/50" />
        </div>
      ))}
    </div>
  );
};

export default IceFallingEffect;