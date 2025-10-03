import { Clock, Users, ScrollText, Trophy } from "lucide-react";

export const InfoStrip = () => {
  const infoItems = [
    {
      icon: Clock,
      label: "Time",
      value: "Variable per round",
    },
    {
      icon: Users,
      label: "Team Size",
      value: "1-3 members",
    },
    {
      icon: ScrollText,
      label: "Rounds",
      value: "3 Challenges",
    },
    {
      icon: Trophy,
      label: "Prizes",
      value: "Top 2 Teams",
    },
  ];

  return (
    <section className="relative z-10 py-8 bg-card/30 backdrop-blur-md border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2 animate-slide-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 bg-primary/20 rounded-full border border-primary/40">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">{item.label}</p>
                <p className="text-sm font-bold text-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Round Info */}
        <div className="mt-8 space-y-3 text-center text-sm">
          <p className="text-muted-foreground">
            <span className="text-primary font-bold">Round 1:</span> Quiz — Networking & Cybersecurity (15–30 min)
          </p>
          <p className="text-muted-foreground">
            <span className="text-accent font-bold">Round 2:</span> TryHackMe networking challenge (20–30 min)
          </p>
          <p className="text-muted-foreground">
            <span className="text-primary font-bold">Round 3:</span> Vulnerability assessment (Time varies)
          </p>
        </div>
      </div>
    </section>
  );
};
