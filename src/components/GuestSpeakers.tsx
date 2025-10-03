import { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Speaker {
  id: number;
  name: string;
  designation: string;
  description: string;
  image: string;
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: "College introduction and welcome",
    designation: "Event Speakers",
    description: "Kick off the symposium with inspiring talks from our college leaders and special guests.",
    image: "https://gojaneducation.tech/wp-content/uploads/2021/12/gojan_logo-1.png"
  },
  {
    id: 2,
    name: "Event Session One",
    designation: "Coordinator and Our College Faculty",
    description: "Most of the events will be held in this session. Get ready for an action-packed experience!",
    image: "https://img.freepik.com/premium-photo/background-with-technology-logo_410516-16747.jpg"
  },
  {
    id: 3,
    name: "Lunch Break & Talks",
    designation: "Our college Faculty",
    description: "Our college provides lunch and refreshments. Enjoy networking and insightful talks during the break.",
    image: "https://static.vecteezy.com/system/resources/previews/018/731/262/original/modern-lunch-break-logo-design-lunch-break-sticker-design-lunch-break-t-shirt-design-hand-lettered-calligraphic-design-vector.jpg"
  },
  {
    id: 4,
    name: "Event Session Two",
    designation: "Coordinators and Student Leaders",
    description: "the second half of the day's events, featuring more competitions and activities.",
    image: "https://img.freepik.com/premium-vector/fun-playful-logo-using-custom-typography-with-quirky-shapes-bright-colors_1307247-1830.jpg?w=2000"
  }
];

const GuestSpeakers = () => {
  const [shipPosition, setShipPosition] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const speakerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress within the section
      const scrollProgress = Math.max(0, Math.min(1, 
        (viewportHeight - sectionTop) / (sectionHeight + viewportHeight)
      ));

      // Update ship position based on scroll progress
      const maxPosition = speakers.length - 1;
      const newPosition = scrollProgress * maxPosition;
      setShipPosition(newPosition);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='speakers' ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-pirate font-bold text-cosmic mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Legendary Talks
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the crew of visionary leaders sharing their adventures in innovation and discovery
          </p>
        </div>

        {/* Speakers Container */}
        <div className="relative">
          {/* Center Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-dream-cyan to-primary h-full hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse"></div>
          </div>

          {/* Animated Ship */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 z-20 hidden md:block transition-all duration-300 ease-out"
            style={{
              top: `${(shipPosition / (speakers.length - 1)) * 100}%`
            }}
          >
            <div className="w-full h-full bg-primary rounded-full flex items-center justify-center shadow-glow animate-bounce">
              <span className="text-2xl">🚢</span>
            </div>
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
          </div>

          {/* Mobile Timeline */}
          <div className="absolute left-6 w-1 bg-gradient-to-b from-primary via-dream-cyan to-primary h-full md:hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse"></div>
          </div>

          {/* Mobile Ship */}
          <div 
            className="absolute left-6 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 z-20 md:hidden transition-all duration-300 ease-out"
            style={{
              top: `${(shipPosition / (speakers.length - 1)) * 100}%`
            }}
          >
            <div className="w-full h-full bg-primary rounded-full flex items-center justify-center shadow-glow">
              <span className="text-sm">🚢</span>
            </div>
          </div>

          {/* Speakers List */}
          <div className="space-y-16 md:space-y-24">
            {speakers.map((speaker, index) => (
              <div
                key={speaker.id}
                ref={el => speakerRefs.current[index] = el}
                className={`relative flex items-center ${
                  index % 2 === 0 
                    ? 'md:justify-start justify-start pl-16 md:pl-0' 
                    : 'md:justify-end justify-start pl-16 md:pl-0'
                }`}
              >
                {/* Desktop Layout */}
                <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <Card className="card-treasure group cursor-pointer">
                    <CardContent className="p-6">
                      <div className={`flex items-center gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary transition-all duration-300">
                            <img 
                              src={speaker.image} 
                              alt={speaker.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        </div>
                        <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                          <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {speaker.name}
                          </h3>
                          <p className="text-primary font-medium mb-3">
                            {speaker.designation}
                          </p>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {speaker.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Mobile & Tablet Layout */}
                <div className="md:hidden w-full">
                  <Card className="card-treasure group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary transition-all duration-300">
                            <img 
                              src={speaker.image} 
                              alt={speaker.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {speaker.name}
                          </h3>
                          <p className="text-primary font-medium text-sm mb-2">
                            {speaker.designation}
                          </p>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {speaker.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Connection Point */}
                <div className={`absolute hidden md:block w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow 
                  ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}`}
                  style={{ top: '50%', transform: 'translateY(-50%)' + (index % 2 === 0 ? ' translateX(50%)' : ' translateX(-50%)') }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-dream-cyan/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default GuestSpeakers;