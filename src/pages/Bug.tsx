import { CharacterSlideshow } from '@/components/bug/CharacterSlideshow';
import { EventInfo } from '@/components/bug/EventInfo';
import { FloatingCharacters } from '@/components/bug/FloatingCharacters';

const Bug = () => {
  return (
    <div className="dan-da-dan-event relative min-h-screen overflow-hidden">
      {/* Background slideshow */}
      <CharacterSlideshow />
      
      {/* Floating character circles */}
      <FloatingCharacters />
      
      {/* Event information overlay */}
      <EventInfo />
    </div>
  );
};

export default Bug;