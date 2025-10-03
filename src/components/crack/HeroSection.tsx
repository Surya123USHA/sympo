import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Scroll } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

interface HeroSectionProps {
  onRegisterClick: () => void;
  onBackClick: () => void;
}

const slides = [heroSlide1, heroSlide2, heroSlide3];

export const HeroSection = ({ onRegisterClick, onBackClick }: HeroSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden  grain-overlay">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide}
              alt={`Naruto hero background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b   to-background/90" />
      </div>

      {/* Falling Leaves Animation */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-falling-leaf opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            <Scroll className="w-6 h-6 text-primary rotate-45" />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center bg-card/0 ">
        <div className="space-y-8 animate-slide-fade-in">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-foreground brush-stroke-text tracking-tight font-display">
              CRACK THE BOX
            </h1>
            <div className="space-y-2">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-japanese">
                A Cyber Ninjas Challenge
              </p>
              <p className="text-base sm:text-lg text-muted-foreground font-japanese">
                Hosted in Naruto style
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button
              onClick={() => {window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdKauM-DnSsELD_RaTu7gjO0nxXNyX7GtTwS4Qarln0wanI0g/viewform?usp=header'}}
              
              className="w-full sm:w-auto text-lg px-10 py-7 rounded-full"
            >
              Join the Shinobi Arena — Register
            </Button>
            <Button
              onClick={() => { window.location.href = '/home';  }}
              
              className="w-full sm:w-auto text-lg px-10 py-7 rounded-full"
            >
              <ArrowLeft className="mr-2" />
              Return (Back)
            </Button>
          </div>

          {/* Micro-copy */}
          <p className="text-sm sm:text-base text-accent font-medium animate-chakra-pulse">
            Enter the shinobi arena — 3 rounds. 1 to 3 members per team.
          </p>

          {/* Countdown/Date placeholder */}
          <div className="inline-block px-6 py-3 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              Event Date: <span className="text-foreground font-semibold">TBA</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};