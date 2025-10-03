import { Smartphone, Clock3, Scale, FileText } from "lucide-react";

const rules = [
  {
    icon: Smartphone,
    title: "Fair Play",
    text: "Mobile phones and electronic devices are not allowed unless explicitly permitted.",
  },
  {
    icon: Clock3,
    title: "Punctuality",
    text: "Teams must arrive on time.",
  },
  {
    icon: Scale,
    title: "Final Authority",
    text: "The jury's decision is final and binding in all competition matters.",
  },
  {
    icon: FileText,
    title: "One Chance",
    text: "Only one answer sheet/opportunity will be given per team in the round.",
  },
];

export const RulesScroll = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="font-bleach text-5xl md:text-6xl text-center text-glow mb-12">
        SOUL SOCIETY PROTOCOLS
      </h2>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-primary/5 blur-3xl" />
        <div className="relative bg-card/0 backdrop-blur-md border-4 border-primary/40 rounded-xl p-8 md:p-12 shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="font-bleach text-3xl bg-primary text-primary-foreground px-8 py-2 rounded-full spiritual-glow">
              RULES
            </div>
          </div>
          <div className="space-y-8 mt-8">
            {rules.map((rule, index) => (
              <div
                key={index}
                className="flex gap-4 items-start group hover:translate-x-2 transition-transform duration-300"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-primary/20 p-3 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <rule.icon className="w-6 h-6 text-primary" strokeWidth={2.5} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-body text-2xl font-bold text-primary mb-2">
                    {rule.title}
                  </h3>
                  <p className="font-body text-lg text-foreground/90 leading-relaxed">
                    {rule.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
