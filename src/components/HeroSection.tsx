import { useState, useEffect } from 'react';
import { Anchor, MapPin, Calendar, Users } from 'lucide-react';
import heroShip from '@/assets/hero-ship.jpg';
import strawHatCrew from '@/assets/straw-hat-crew.jpg';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ocean Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroShip})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/60" />
        <div className="absolute inset-0 bg-gradient-ocean/30" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 float-gentle">
        <Anchor className="w-12 h-12 text-secondary opacity-60" />
      </div>
      <div className="absolute top-32 right-16 float-gentle" style={{animationDelay: '1s'}}>
        <MapPin className="w-10 h-10 text-accent opacity-50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Title */}
        <div className={`mb-8 ${isLoaded ? 'sail-in' : 'opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-shine bg-[length:200%_100%]">
              ESPARANZA
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Join us for an epic adventure of knowledge, discovery, and unity as we explore the vast oceans of possibility together!
          </p>
        </div>

        {/* Crew Image */}
        <div className={`mb-8 ${isLoaded ? 'sail-in' : 'opacity-0'}`} style={{animationDelay: '0.5s'}}>
          <div className="relative inline-block">
            <img 
              src={strawHatCrew} 
              alt="Straw Hat Pirates Crew" 
              className="w-80 h-60 object-cover rounded-2xl shadow-float border-4 border-secondary/50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent rounded-2xl" />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-12 ${isLoaded ? 'sail-in' : 'opacity-0'}`} style={{animationDelay: '1s'}}>
          <button className="btn-treasure group flex items-center justify-center gap-3">
            <Anchor className="w-5 h-5 group-hover:animate-treasure-bounce" />
            <span className="relative z-10">Join the Adventure</span>
          </button>
          <button className="btn-adventure flex items-center justify-center gap-3">
            <Calendar className="w-5 h-5" />
            <span>Explore Events</span>
          </button>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto ${isLoaded ? 'sail-in' : 'opacity-0'}`} style={{animationDelay: '1.5s'}}>
          {[
            { icon: Users, label: 'Adventurers', value: '500+' },
            { icon: Calendar, label: 'Days', value: '3' },
            { icon: MapPin, label: 'Venues', value: '5' },
            { icon: Anchor, label: 'Sessions', value: '25+' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-treasure mb-2 treasure-bounce" style={{animationDelay: `${index * 0.2}s`}}>
                <stat.icon className="w-6 h-6 text-navy" />
              </div>
              <div className="font-black text-2xl text-navy">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave Animation at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent wave-motion" />
    </section>
  );
};

export default HeroSection;