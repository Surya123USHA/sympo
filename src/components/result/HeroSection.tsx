import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import makimaGolden from "@/assets/makima-golden.jpeg";
import { Button } from "@/components/ui/button";
import { FallingStars } from "./FallingStars";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layer with Golden Makima - More Visible */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${makimaGolden})`,
          filter: "brightness(0.6) contrast(1.1)",
        }}
      />
      
      {/* Lighter Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Falling Star Images */}
      <FallingStars />

      {/* Content */}
      <div className={`relative z-10 text-center px-4 slash-animation ${isVisible ? "" : "opacity-0"}`}>
        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-glow-red animate-pulse-glow">
          <span className="bg-gradient-to-r from-[hsl(var(--blood-red))] via-[hsl(var(--neon-orange))] to-[hsl(var(--blood-red))] bg-clip-text text-transparent">
            RESULT RUSH
          </span>
        </h1>

        {/* Subtitle with slash marks */}
        <div className="relative mb-12">
          <div className="absolute -inset-4 bg-[hsl(var(--blood-red))]/10 blur-xl" />
          <p className="relative text-lg sm:text-xl md:text-2xl text-[hsl(var(--neon-orange))] font-bold tracking-wider uppercase">
            ⚡ Chainsaw Man Coding Challenge ⚡
          </p>
        </div>

        {/* Auth Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => {window.location.href = '/home'}}
            variant="default"
            size="lg"
            className="bg-gradient-to-r from-[hsl(var(--blood-red))] to-[hsl(var(--neon-orange))] hover:from-[hsl(var(--neon-orange))] hover:to-[hsl(var(--blood-red))] text-white font-bold px-8 py-6 text-lg border-2 border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--blood-red))]"
          >
            Back
          </Button>
          <Button
            onClick={() => {window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdKauM-DnSsELD_RaTu7gjO0nxXNyX7GtTwS4Qarln0wanI0g/viewform?usp=header'}}
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-[hsl(var(--blood-red))] text-[hsl(var(--blood-red))] hover:bg-[hsl(var(--blood-red))] hover:text-white font-bold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--blood-red))]"
          >
            REGISTER
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          
        </div>
      </div>
    </section>
  );
};