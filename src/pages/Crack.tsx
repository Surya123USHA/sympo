import { useState } from "react";
import { HeroSection } from "@/components/crack/HeroSection";
import { InfoStrip } from "@/components/crack/IntfoStrip";
import { ExpandableDetails } from "@/components/crack/ExpandableDetails";
import { FallingCharacters } from "@/components/crack/Fallingcharacterss";

const Crack = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsRegistrationOpen(true);
  };

  const handleBackClick = () => {
    window.location.href = '/home';
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Falling character images */}
      <FallingCharacters />
      <HeroSection 
        onRegisterClick={handleRegisterClick}
        onBackClick={handleBackClick}
      />
      
      <InfoStrip />
      
      <ExpandableDetails />

      

      {/* Footer */}
      <footer className="relative z-10 py-8 bg-card/30 backdrop-blur-md border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Cyber Ninjas Challenge. All rights reserved. | Powered by shinobi energy ⚡
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Crack;