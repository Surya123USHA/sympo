import { VideoBackground } from "@/components/escape/VideoBackground";
import { Button } from "@/components/ui/button";
import { Home, Skull } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FinalLevel = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <VideoBackground />
      
      <div className="relative z-10 min-h-screen w-full flex items-center justify-center">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-12 animate-slash-in">
            <div className="spiritual-glow inline-block p-8 rounded-full bg-destructive/30">
              <Skull className="w-32 h-32 text-destructive animate-pulse-glow" strokeWidth={2} />
            </div>
            
            <div className="space-y-6">
              <h1 className="font-bleach text-7xl md:text-9xl text-destructive text-glow">
                FINAL LEVEL
              </h1>
              <h2 className="font-bleach text-5xl md:text-7xl text-primary">
                THE LAST EXECUTION
              </h2>
              <p className="font-body text-2xl text-foreground/90 max-w-2xl mx-auto">
                This is your ultimate challenge. Face the final trial and prove yourself worthy.
              </p>
              <div className="pt-8">
                <p className="font-body text-3xl font-bold text-accent text-glow">
                  VICTORY AWAITS THE STRONG
                </p>
              </div>
            </div>

            <Button
              onClick={() => navigate("/")}
              className="font-bleach text-2xl bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-8 rounded-lg spiritual-glow transform hover:scale-105 transition-all duration-300"
            >
              RETURN TO SOUL SOCIETY
              <Home className="ml-4 w-8 h-8" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalLevel;