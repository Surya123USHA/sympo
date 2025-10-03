import { VideoBackground } from "@/components/escape/VideoBackground";
import { EventLogo } from "@/components/escape/EventLogo";
import { LevelStructure } from "@/components/escape/LevelStructure";
import { GameInfo } from "@/components/escape/GameInfo";
import { RulesScroll } from "@/components/escape/RulesScroll";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Escp = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <VideoBackground />
      
      <div className="relative z-10 min-h-screen w-full">
        <div className="container mx-auto px-4 py-12 space-y-20">
          {/* Hero Section with Logo */}
          <div className="pt-12 pb-8 space-y-8 animate-slash-in ">
            <EventLogo />
            <div className="text-center space-y-4">
              <h1 className="font-bleach text-4xl md:text-6xl text-accent text-glow">
                THE BATTLE BEGINS
              </h1>
              <p className="font-body text-xl md:text-2xl text-red-50 max-w-3xl mx-auto">
                Prove your worth in the Soul Society. Complete all challenges and claim victory!
              </p>
            </div>
          </div>

          {/* Game Info Cards */}
          <GameInfo />

          {/* Level Structure */}
          <LevelStructure />

          {/* Rules Section */}
          <RulesScroll />

          {/* Start Button */}
          <div className="text-center pb-16 gap-16">
            <Button
              onClick={() => {window.location.href = '/home'}}
              className="font-bleach text-2xl bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-8 rounded-lg spiritual-glow transform hover:scale-105 transition-all duration-300"
            ><ArrowLeft className="ml-4 w-8 h-8" />
              BACK TO SOCIETY
              
            </Button>
            <Button
              onClick={() => {window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdKauM-DnSsELD_RaTu7gjO0nxXNyX7GtTwS4Qarln0wanI0g/viewform?usp=header'}}
              className="font-bleach text-2xl bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-8 rounded-lg spiritual-glow transform hover:scale-105 transition-all duration-300"
            >
              ENTER BATTLE
              <ArrowRight className="ml-4 w-8 h-8" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Escp;