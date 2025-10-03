import { Button } from "@/components/ui/button";
import { useState } from "react";

interface PowerUpButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const PowerUpButton = ({ children, onClick, className = "" }: PowerUpButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block">
      {isHovered && (
        <div className="absolute inset-0 bg-accent/30 rounded-lg animate-aura-burst" />
      )}
      <Button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        className={`relative bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary))] ${className}`}
      >
        {children}
      </Button>
    </div>
  );
};