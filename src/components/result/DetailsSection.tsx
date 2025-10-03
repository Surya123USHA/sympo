import { Clock, Users } from "lucide-react";
import makima5 from "@/assets/makima-5.jpeg";

export const DetailsSection = () => {
  return (
    <section className="relative py-20 px-4">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${makima5})`,
          filter: "brightness(0.25) blur(2px)",
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/70" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-glow-orange">
          EVENT <span className="text-[hsl(var(--blood-red))]">DETAILS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Time Limit */}
          <div className="group bg-[hsl(var(--dark-grey))]/90 backdrop-blur-sm border-4 border-[hsl(var(--blood-red))] p-8 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_50px_hsl(var(--blood-red))/0.6]">
            <div className="flex items-center gap-4 mb-4">
              <Clock className="w-16 h-16 text-[hsl(var(--neon-orange))] animate-pulse-glow" />
              <div className="h-12 w-1 bg-gradient-to-b from-[hsl(var(--blood-red))] to-[hsl(var(--neon-orange))]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[hsl(var(--blood-red))] group-hover:text-glow-red">
              TIME LIMIT
            </h3>
            <p className="text-4xl md:text-5xl font-bold text-[hsl(var(--neon-orange))] text-glow-orange">
              30 MINS
            </p>
            <p className="text-gray-400 mt-2">Total duration for all levels</p>
          </div>

          {/* Team Size */}
          <div className="group bg-[hsl(var(--dark-grey))]/90 backdrop-blur-sm border-4 border-[hsl(var(--neon-orange))] p-8 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_50px_hsl(var(--neon-orange))/0.6]">
            <div className="flex items-center gap-4 mb-4">
              <Users className="w-16 h-16 text-[hsl(var(--blood-red))] animate-pulse-glow" />
              <div className="h-12 w-1 bg-gradient-to-b from-[hsl(var(--neon-orange))] to-[hsl(var(--blood-red))]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[hsl(var(--neon-orange))] group-hover:text-glow-orange">
              TEAM SIZE
            </h3>
            <p className="text-4xl md:text-5xl font-bold text-[hsl(var(--blood-red))] text-glow-red">
              1-2 MEMBERS
            </p>
            <p className="text-gray-400 mt-2">Maximum participants per team</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="chainsaw-border bg-gradient-to-r from-[hsl(var(--blood-red))] to-[hsl(var(--neon-orange))] p-8">
            <p className="text-2xl md:text-4xl font-bold text-white mb-4">
              ARE YOU READY TO FACE THE CHAOS?
            </p>
            <p className="text-lg md:text-xl text-gray-200">
              Only the strongest will survive Result Rush!
            </p>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-12 flex justify-center gap-2">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="w-2 bg-gradient-to-b from-[hsl(var(--blood-red))] to-transparent animate-pulse"
              style={{
                height: `${Math.random() * 60 + 30}px`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
