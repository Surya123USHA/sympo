import { Button } from '@/components/ui/button';
import { ArrowLeft, Edit3, Clock, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const EventCard = () => {
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  const handleRegister = () => {
    // This would link to registration form
    alert('Registration form would open here. Slots are limited!');
  };

  return (
    <div className="glass-card rounded-lg p-6 md:p-10 max-w-3xl mx-auto animate-rise-up shadow-2xl border-2 border-primary/20">
      {/* Survey Corps emblem watermark */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjgwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNCIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMDAgMjBMMTAwIDE4MCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjQiLz48cGF0aCBkPSJNMjAgMTAwTDE4MCAxMDAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI0Ii8+PC9zdmc+')] bg-center bg-no-repeat pointer-events-none" />
      
      <div className="relative z-10">
        {/* Headline */}
        <div className="mb-3 flex justify-center">
          <h1 
            className="vintage-text blink-vintage headline-brutal text-5xl md:text-7xl text-glow-crimson text-center inline-block px-4 py-2"
            data-text="Decode Derby"
          >
            Decode Derby
          </h1>
        </div>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-accent font-semibold text-center mb-4 text-glow-brass">
          A tactical decoding challenge — enter the breach.
        </p>
        
        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground text-center mb-8 leading-relaxed">
          Two tense rounds. Test your pattern sense, logic, and speed. Only the swiftest teams survive.
        </p>

        {/* Component badges */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <Badge variant="outline" className="bg-muted/50 text-foreground border-secondary/30">
            Come
          </Badge>
          <Badge variant="outline" className="bg-muted/50 text-foreground border-secondary/30">
            And
          </Badge>
          <Badge variant="outline" className="bg-muted/50 text-foreground border-secondary/30">
            Win
          </Badge>
        </div>

        {/* Event Details */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {/* Round 1 */}
          <div className="bg-muted/30 rounded-lg p-4 border border-border">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-accent">
              <span className="text-2xl">01</span> Round 1
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-secondary" />
                <span>2 members per team</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-secondary" />
                <span>10 teams per round</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary" />
                <span>30 min — 1 hr</span>
              </div>
            </div>
          </div>

          {/* Round 2 */}
          <div className="bg-muted/30 rounded-lg p-4 border border-border">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-accent">
              <span className="text-2xl">02</span> Round 2
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-secondary" />
                <span>2 members per team</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-secondary" />
                <span>Top 8 teams advance</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary" />
                <span>1 hr — 1.5 hr</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
          <Button
            variant="outline"
            size="lg"
            onClick={()=>{window.location.href = '/home'}}
            className="btn-metallic-swipe group border-muted-foreground/30 hover:border-secondary/50 hover:bg-muted/50"
            aria-label="Return to previous page"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back
          </Button>
          
          <Button
            size="lg"
            onClick={()=>{window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdKauM-DnSsELD_RaTu7gjO0nxXNyX7GtTwS4Qarln0wanI0g/viewform?usp=header'}}
            className="btn-metallic-swipe bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 shadow-lg hover:shadow-[0_0_25px_hsl(0_75%_55%/0.5)]"
            aria-label="Sign up for Decode Derby — limited slots"
          >
            <Edit3 className="w-5 h-5 mr-2" />
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};