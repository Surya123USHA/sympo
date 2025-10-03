import { Users, Smartphone, Clock, Scale, FileText } from 'lucide-react';

const rules = [
  {
    icon: Users,
    title: 'Team Size',
    description: 'Teams can have 1 to 3 members, allowing solo or group participation.',
  },
  {
    icon: Smartphone,
    title: 'Fair Play',
    description: 'Mobile phones and electronic devices are not allowed unless explicitly permitted.',
  },
  {
    icon: Clock,
    title: 'Punctuality',
    description: 'Teams must arrive on time; latecomers may lose their chance.',
  },
  {
    icon: Scale,
    title: 'Final Authority',
    description: "The jury's decision is final and binding.",
  },
  {
    icon: FileText,
    title: 'One Chance',
    description: 'Only one answer sheet/opportunity will be given per team per round.',
  },
];

export const RulesSection = () => {
  return (
    <section className="mt-12 md:mt-16">
      <h2 className="headline-brutal text-3xl md:text-4xl mb-8 text-center text-accent">
        Rules of Engagement
      </h2>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {rules.map((rule, index) => (
          <div
            key={index}
            className="glass-card rounded-lg p-5 border-2 border-primary/20 hover:border-secondary/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(45_80%_55%/0.2)] group"
          >
            <div className="flex flex-col items-center text-center gap-3">
              {/* Icon circle */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg group-hover:animate-pulse-glow">
                <rule.icon className="w-7 h-7 text-background" />
              </div>
              
              {/* Title */}
              <h3 className="font-bold text-lg text-foreground">
                {rule.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {rule.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
