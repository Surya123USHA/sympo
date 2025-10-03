import { VideoBackground } from "@/components/escape/VideoBackground";
import { Button } from "@/components/ui/button";
import { ArrowRight, Link2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Level2 = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <VideoBackground />
      
      <div className="relative z-10 min-h-screen w-full flex items-center justify-center">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-12 animate-slash-in">
            <div className="soul-glow inline-block p-8 rounded-full bg-accent/20">
              <Link2 className="w-32 h-32 text-accent" strokeWidth={2} />
            </div>
            
            <div className="space-y-6">
              <h1 className="font-bleach text-7xl md:text-9xl text-accent text-glow">
                LEVEL 02
              </h1>
              <h2 className="font-bleach text-5xl md:text-6xl text-primary">
                ACRONYMS
              </h2>
              <p className="font-body text-2xl text-foreground/90 max-w-2xl mx-auto">
                Decode the hidden meanings. Connect the words and unveil the truth.
              </p>
            </div>

            <Button
              onClick={() => navigate("/level-3")}
              className="font-bleach text-2xl bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-8 rounded-lg soul-glow transform hover:scale-105 transition-all duration-300"
            >
              PROCEED TO LEVEL 3
              <ArrowRight className="ml-4 w-8 h-8" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level2;