import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Clock, Gavel, Target, Zap, Presentation, PaintBucket } from 'lucide-react';
import './EventPage.css';

// Import character images
import sungJinwooPurple from '@/assets/sung-jinwoo-purple.jpg';
import chaHaeIn from '@/assets/cha-hae-in.jpg';
import sungJinwooShadows from '@/assets/sung-jinwoo-shadows.jpg';
import sungJinwooClose from '@/assets/sung-jinwoo-close.jpg';
import shadowMonster from '@/assets/shadow-monster.jpg';

const EventPage = () => {
  const [showArise, setShowArise] = useState(true);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Background images for slideshow
  const backgroundImages = [
    sungJinwooShadows,
    sungJinwooClose,
    shadowMonster,
    chaHaeIn
  ];

  // Control ARISE animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArise(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Background slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const eventRules = [
    {
      icon: Users,
      title: 'Team Size',
      description: 'Teams can have 1 to 3 members, allowing both solo and group participation.'
    },
    {
      icon: Clock,
      title: 'Punctuality',
      description: 'Teams must arrive on time; latecomers may lose their chance to participate.'
    },
    {
      icon: Gavel,
      title: 'Final Authority',
      description: 'The jury\'s decision is final and binding in all competition matters.'
    },
    {
      icon: Target,
      title: 'One Chance',
      description: 'Only one chance will be given per team in the round to participate.'
    }
  ];



  const home = () => {
  window.location.href = '/home';
}

const goto = () => {
  window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdKauM-DnSsELD_RaTu7gjO0nxXNyX7GtTwS4Qarln0wanI0g/viewform?usp=header';
}

  return (
    <div className="solo-leveling-event min-h-screen relative overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentBgIndex ? 'opacity-60' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${bg})` }}
          />
        ))}
        <div className="bg-slideshow" />
      </div>

      {/* Floating Characters */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <img
          src={sungJinwooPurple}
          alt="Sung Jinwoo"
          className="floating-character absolute top-20 right-10 w-32 h-48 object-cover rounded-lg opacity-60 animate-delayed-1"
        />
        <img
          src={chaHaeIn}
          alt="Cha Hae-In"
          className="floating-character absolute bottom-32 left-10 w-28 h-40 object-cover rounded-lg opacity-50 animate-delayed-2"
        />
        <img
          src={sungJinwooClose}
          alt="Sung Jinwoo Close"
          className="floating-character absolute top-40 left-20 w-24 h-36 object-cover rounded-lg opacity-45 animate-delayed-3"
        />
        <img
          src={shadowMonster}
          alt="Shadow Monster"
          className="floating-character absolute bottom-20 right-20 w-36 h-28 object-cover rounded-lg opacity-40 animate-delayed-4"
        />
        <img
          src={sungJinwooShadows}
          alt="Sung Jinwoo Shadows"
          className="floating-character absolute top-60 right-40 w-30 h-44 object-cover rounded-lg opacity-35 animate-delayed-2"
        />
      </div>

      {/* ARISE Animation Overlay */}
      {showArise && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/0 backdrop-blur-sm">
          <div className="text-center">
            <h1 className="arise-text animate-arise">ARISE</h1>
            <div className="mt-4 text-xl font-orbitron text-accent animate-fade-in animate-delayed-1">
              Lightning Presentation Event
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-20 min-h-screen p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-orbitron font-black mb-4 text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-clip-text animate-lightning-blink">
              LIGHTNING PRESENTATION
            </h1>
            <div className="flex items-center justify-center gap-2 text-xl text-muted-foreground">
              <Zap className="w-6 h-6 text-accent" />
              <span>Total Duration: 35 minutes</span>
              <Zap className="w-6 h-6 text-accent" />
            </div>
          </div>

          {/* Event Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="shadow-box p-6 rounded-lg animate-slide-up animate-delayed-1">
              <div className="flex items-center gap-3 mb-4">
                <PaintBucket className="rule-icon" />
                <h3 className="text-2xl font-orbitron font-bold text-primary">Round 1</h3>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-accent">Ad Making Challenge</h4>
              <p className="text-muted-foreground">Unleash your creativity in this intense 15-minute challenge. Create compelling advertisements that would make even the Shadow Monarch take notice.</p>
              <div className="mt-4 text-right">
                <span className="text-2xl font-orbitron font-bold text-primary">15 min</span>
              </div>
            </div>

            <div className="shadow-box p-6 rounded-lg animate-slide-up animate-delayed-2">
              <div className="flex items-center gap-3 mb-4">
                <Presentation className="rule-icon" />
                <h3 className="text-2xl font-orbitron font-bold text-primary">Round 2</h3>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-accent">PPT with AI Tools</h4>
              <p className="text-muted-foreground">Harness the power of AI to create presentations worthy of S-Rank hunters. 15 minutes to create, 5 minutes to present your masterpiece.</p>
              <div className="mt-4 text-right">
                <span className="text-2xl font-orbitron font-bold text-primary">20 min</span>
              </div>
            </div>
          </div>

          {/* Rules Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-orbitron font-bold text-center mb-8 animate-slide-up animate-delayed-3">
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                Rules of Engagement
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {eventRules.map((rule, index) => (
                <div
                  key={index}
                  className={`shadow-box p-6 rounded-lg animate-slide-up animate-delayed-${index + 1}`}
                >
                  <div className="flex items-start gap-4">
                    <rule.icon className="rule-icon flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-orbitron font-bold mb-2 text-primary">
                        {rule.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {rule.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animate-delayed-4">
            <Button
              variant="outline"
              size="lg"
              className="shadow-button bg-secondary/20 text-secondary-foreground border-secondary hover:bg-secondary/30 min-w-40"
              onClick={home}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Button>
            
            <Button
              size="lg"
              className="shadow-button text-primary-foreground min-w-40"
              onClick={() => {
                // Handle registration
                alert('Registration functionality to be implemented!');
                {goto()}
              }}
            >
              <Zap className="w-5 h-5 mr-1" />
              Register Now
            </Button>
          </div>

          {/* Footer Quote */}
          <div className="text-center mt-12 animate-fade-in animate-delayed-4">
            <blockquote className="text-lg font-orbitron italic text-muted-foreground">
              "Only those who are prepared to risk everything can achieve the impossible."
            </blockquote>
            <cite className="text-sm text-primary mt-2 block">- Shadow Monarch</cite>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;