import { Code, Workflow, FileCode } from "lucide-react";
import makima3 from "@/assets/makima-3.jpeg";

const levels = [
  {
    number: 1,
    title: "FLOWCHART FURY",
    description: "Find the outputs from flowcharts",
    icon: Workflow,
    color: "blood-red",
  },
  {
    number: 2,
    title: "SNIPPET SLAUGHTER",
    description: "Find outputs from small code snippets",
    icon: Code,
    color: "neon-orange",
  },
  {
    number: 3,
    title: "PROGRAM PANDEMONIUM",
    description: "Find outputs from large programs",
    icon: FileCode,
    color: "blood-red",
  },
];

export const LevelsSection = () => {
  return (
    <section className="relative py-20 px-4">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${makima3})`,
          filter: "brightness(0.15) blur(3px)",
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/80" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-glow-orange">
          <span className="text-[hsl(var(--blood-red))]">LEVELS</span> OF{" "}
          <span className="text-[hsl(var(--neon-orange))]">CHAOS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((level, index) => {
            const Icon = level.icon;
            return (
              <div
                key={level.number}
                className="group chainsaw-border bg-[hsl(var(--dark-grey))]/90 backdrop-blur-sm p-6 hover:bg-[hsl(var(--dark-grey))] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--blood-red))]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Level Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-6xl font-bold text-[hsl(var(--${level.color}))] opacity-20 group-hover:opacity-40 transition-opacity`}>
                    {level.number}
                  </span>
                  <Icon 
                    className={`w-12 h-12 text-[hsl(var(--${level.color}))] group-hover:animate-pulse-glow`}
                    strokeWidth={2.5}
                  />
                </div>

                {/* Title */}
                <h3 className={`text-xl md:text-2xl font-bold mb-3 text-[hsl(var(--${level.color}))] group-hover:text-glow-red`}>
                  {level.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {level.description}
                </p>

                {/* Slash decoration */}
                <div className="mt-4 h-1 bg-gradient-to-r from-[hsl(var(--blood-red))] to-transparent group-hover:to-[hsl(var(--neon-orange))] transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};