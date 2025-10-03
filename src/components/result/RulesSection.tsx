import { Smartphone, Clock, Scale, FileText } from "lucide-react";
import makima4 from "@/assets/makima-4.jpeg";

const rules = [
  {
    icon: Smartphone,
    title: "Fair Play",
    description: "Mobile phones and electronic devices are not allowed unless explicitly permitted.",
  },
  {
    icon: Clock,
    title: "Punctuality",
    description: "Teams must arrive on time. Late entries will not be entertained.",
  },
  {
    icon: Scale,
    title: "Final Authority",
    description: "The jury's decision is final and binding in all competition matters.",
  },
  {
    icon: FileText,
    title: "One Chance",
    description: "Only one answer sheet/opportunity will be given per team in the round.",
  },
];

export const RulesSection = () => {
  return (
    <section className="relative py-20 px-4">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${makima4})`,
          filter: "brightness(0.2) blur(2px)",
        }}
      />
      
      <div className="absolute inset-0 bg-black/85" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-glow-red">
            RULES OF <span className="text-[hsl(var(--neon-orange))]">ENGAGEMENT</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--blood-red))] to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rules.map((rule, index) => {
            const Icon = rule.icon;
            return (
              <div
                key={index}
                className="group bg-[hsl(var(--dark-grey))]/80 backdrop-blur-sm border-2 border-[hsl(var(--blood-red))]/50 p-6 hover:border-[hsl(var(--blood-red))] transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--blood-red))/0.5] hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-[hsl(var(--blood-red))]/20 flex items-center justify-center group-hover:bg-[hsl(var(--blood-red))]/30 transition-colors">
                      <Icon className="w-6 h-6 text-[hsl(var(--neon-orange))] group-hover:animate-pulse" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-[hsl(var(--blood-red))] group-hover:text-glow-red transition-all">
                      {rule.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors">
                      {rule.description}
                    </p>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="mt-4 h-0.5 bg-gradient-to-r from-[hsl(var(--blood-red))] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>

        {/* Warning Banner */}
        <div className="mt-12 chainsaw-border bg-[hsl(var(--blood-red))]/10 backdrop-blur-sm p-6 text-center border-2 border-[hsl(var(--blood-red))]">
          <p className="text-lg md:text-xl font-bold text-[hsl(var(--neon-orange))] text-glow-orange">
            ⚠️ VIOLATION OF RULES WILL RESULT IN IMMEDIATE DISQUALIFICATION ⚠️
          </p>
        </div>
      </div>
    </section>
  );
};