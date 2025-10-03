import { Swords, Brain, Link2, Skull } from "lucide-react";

const levels = [
  { number: 1, title: "Quizzes", icon: Brain, color: "text-primary" },
  { number: 2, title: "Acronyms", icon: Link2, color: "text-accent" },
  { number: 3, title: "Rearrange & Think & Link", icon: Swords, color: "text-primary" },
  { number: 4, title: "The Last Execution", icon: Skull, color: "text-destructive" },
];

export const LevelStructure = () => {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      <h2 className="font-bleach text-5xl md:text-6xl text-center text-glow mb-12">
        BATTLE STAGES
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {levels.map((level, index) => (
          <div
            key={level.number}
            className="relative group animate-slash-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-card/0 border-2 border-primary/30 rounded-lg p-6 hover:border-primary transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className={`${level.color} spiritual-glow`}>
                  <level.icon className="w-12 h-12" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <div className="font-bleach text-3xl text-primary">
                    LEVEL {level.number}
                  </div>
                  <div className="font-body text-xl font-semibold text-red-50">
                    {level.title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};