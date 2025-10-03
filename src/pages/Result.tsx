import { HeroSection } from "@/components/result/HeroSection";
import { IntroSection } from "@/components/result/IntroSection";
import { LevelsSection } from "@/components/result/LevelsSection";
import { RulesSection } from "@/components/result/RulesSection";
import { DetailsSection } from "@/components/result/DetailsSection";

const Result = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--deep-black))] overflow-x-hidden">
      <HeroSection />
      <IntroSection />
      <LevelsSection />
      <RulesSection />
      <DetailsSection />
      
      {/* Footer */}
      <footer className="relative border-t-2 border-[hsl(var(--blood-red))] py-8 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[hsl(var(--neon-orange))] font-bold text-lg mb-2">
            RESULT RUSH
          </p>
          <p className="text-gray-500 text-sm">
            Powered by Chainsaw Man Spirit © 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Result;