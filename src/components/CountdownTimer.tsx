import { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-10-11T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border border-border/30 rounded-lg p-6 mb-8">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Calendar className="w-6 h-6 text-primary" />
        <h3 className="text-xl font-bold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Event Starts In
        </h3>
        <Clock className="w-6 h-6 text-accent" />
      </div>
      
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-border/20">
          <div className="text-2xl md:text-3xl font-black text-primary">
            {timeLeft.days}
          </div>
          <div className="text-sm text-muted-foreground font-semibold">Days</div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-border/20">
          <div className="text-2xl md:text-3xl font-black text-accent">
            {timeLeft.hours}
          </div>
          <div className="text-sm text-muted-foreground font-semibold">Hours</div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-border/20">
          <div className="text-2xl md:text-3xl font-black text-primary">
            {timeLeft.minutes}
          </div>
          <div className="text-sm text-muted-foreground font-semibold">Minutes</div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-border/20">
          <div className="text-2xl md:text-3xl font-black text-accent">
            {timeLeft.seconds}
          </div>
          <div className="text-sm text-muted-foreground font-semibold">Seconds</div>
        </div>
      </div>
      
      <div className="text-center mt-4">
        <p className="text-sm text-muted-foreground">
          October 11, 2025 • Don't miss the adventure!
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;