import { HeroSlideshow } from '@/components/decode/HeroSlideshow';
import { FloatingImages } from '@/components/decode/FloatingImages';
import { EventCard } from '@/components/decode/EventCard';
import { RulesSection } from '@/components/decode/RulesSection';
import { DetailsAccordion } from '@/components/decode/DetailsAccordion';

const Decode = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Background Slideshow */}
      <HeroSlideshow />
      
      {/* Floating Circular Images */}
      <FloatingImages />
      
      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex flex-col px-4 py-8 md:py-16">
        {/* Event Card */}
        <div className="flex-1 flex items-center justify-center mb-12">
          <EventCard />
        </div>
        
        {/* Rules Section */}
        <div className="container mx-auto max-w-7xl">
          <RulesSection />
        </div>
        
        {/* Additional Details Accordion */}
        <div className="container mx-auto max-w-7xl mt-8">
          <DetailsAccordion />
        </div>
        
        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>© 2025 Decode Derby. All rights reserved.</p>
          <p className="mt-2 text-xs">Limited slots available — register now to secure your position.</p>
        </footer>
      </main>
    </div>
  );
};

export default Decode;
