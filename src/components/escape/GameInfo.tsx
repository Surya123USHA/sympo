import { Clock, Users, Target } from "lucide-react";

export const GameInfo = () => {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card/0 backdrop-blur-sm border border-primary/30 rounded-lg p-6 text-center hover:border-primary transition-all duration-300">
          <Clock className="w-12 h-12 mx-auto mb-4 text-primary animate-pulse-glow" />
          <div className="font-bleach text-4xl text-primary text-glow mb-2">25</div>
          <div className="font-body text-lg font-semibold text-red-50">MINUTES</div>
          <div className="text-sm text-red-50 mt-2">Total Time Limit</div>
        </div>

        <div className="bg-card/0 backdrop-blur-sm border border-accent/30 rounded-lg p-6 text-center hover:border-accent transition-all duration-300">
          <Users className="w-12 h-12 mx-auto mb-4 text-accent soul-glow" />
          <div className="font-bleach text-4xl text-accent text-glow mb-2">3-4</div>
          <div className="font-body text-lg font-semibold text-red-50">MEMBERS</div>
          <div className="text-sm text-red-50 mt-2">Per Team</div>
        </div>

        <div className="bg-card/0 backdrop-blur-sm border border-primary/30 rounded-lg p-6 text-center hover:border-primary transition-all duration-300">
          <Target className="w-12 h-12 mx-auto mb-4 text-primary animate-pulse-glow" />
          <div className="font-bleach text-2xl text-primary text-glow mb-2">HIGHEST</div>
          <div className="font-body text-lg font-semibold text-red-50">POINTS</div>
          <div className="text-sm text-red-50 mt-2">To Win</div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/30 rounded-lg p-6 text-center">
        <p className="font-body text-xl font-semibold text-red-50">
          Complete all levels within time with the highest points to win!
        </p>
      </div>
    </div>
  );
};
