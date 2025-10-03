import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { KamehamehaEffect } from "@/components/pixel/KamehamehaEffect";
import { VideoBackground } from "@/components/pixel/VideoBackground";
import { SuperSaiyanTitle } from "@/components/pixel/SuperSaiyanTitle";
import { PowerUpButton } from "@/components/pixel/PowerUpButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DragonBallEvent = () => {
  const navigate = useNavigate();
  const [showKamehameha] = useState(true);

  const goto = () => {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdKauM-DnSsELD_RaTu7gjO0nxXNyX7GtTwS4Qarln0wanI0g/viewform?usp=header';
  }

  const eventDetails = [
    { icon: "⏳", label: "Time Limit", value: "40 Minutes" },
    { icon: "👥", label: "Team Size", value: "3–4 Members" },
    { icon: "🎨", label: "Theme", value: "Dragon Ball Universe" },
  ];

  const rules = [
    { icon: "📱", title: "Fair Play", description: "Mobile phones and electronic devices are not allowed unless explicitly permitted." },
    { icon: "⏰", title: "Punctuality", description: "Teams must arrive on time." },
    { icon: "⚖️", title: "Final Authority", description: "The jury's decision is final and binding in all competition matters." },
    { icon: "📝", title: "One Chance", description: "Only one answer sheet/opportunity will be given per team in the round." },
  ];

  return (
    // Scoped Dragon Ball theme wrapper
    <div className="dragonball-theme min-h-screen relative overflow-hidden">
      <style>{`
        .dragonball-theme {
          /* Dragon Ball Color Palette */
          --db-primary: 28 88% 58%;
          --db-primary-foreground: 0 0% 100%;
          --db-secondary: 204 100% 50%;
          --db-secondary-foreground: 0 0% 100%;
          --db-accent: 45 100% 51%;
          --db-accent-foreground: 0 0% 0%;
          --db-background: 240 10% 8%;
          --db-foreground: 0 0% 95%;
          --db-card: 240 10% 12%;
          --db-card-foreground: 0 0% 95%;
          --db-border: 240 10% 20%;
          
          /* Override theme colors for this page only */
          --primary: var(--db-primary);
          --primary-foreground: var(--db-primary-foreground);
          --secondary: var(--db-secondary);
          --secondary-foreground: var(--db-secondary-foreground);
          --accent: var(--db-accent);
          --accent-foreground: var(--db-accent-foreground);
          --background: var(--db-background);
          --foreground: var(--db-foreground);
          --card: var(--db-card);
          --card-foreground: var(--db-card-foreground);
          --border: var(--db-border);
        }

        /* Dragon Ball specific animations - scoped */
        .dragonball-theme .super-saiyan-aura {
          animation: db-aura-pulse 2s infinite;
        }

        @keyframes db-aura-pulse {
          0%, 100% {
            filter: drop-shadow(0 0 20px hsl(var(--db-accent) / 0.6));
          }
          50% {
            filter: drop-shadow(0 0 40px hsl(var(--db-accent) / 0.9));
          }
        }

        .dragonball-theme .ki-energy {
          animation: db-ki-wave 3s ease-in-out infinite;
        }

        @keyframes db-ki-wave {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
      `}</style>

      {showKamehameha && <KamehamehaEffect />}
      <VideoBackground />

      {/* Back Button */}
      <Button
        onClick={()=>{window.location.href = '/home'}}
        variant="outline"
        size="icon"
        className="fixed top-6 left-6 z-50 bg-background/80 backdrop-blur-md border-2 border-primary/30 hover:border-primary hover:bg-primary/20 transition-all duration-300"
      >
        <ArrowLeft className="h-5 w-5" />
      </Button>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center">
          <div className="mb-8">
            <SuperSaiyanTitle>
              PIXEL PERFECT
            </SuperSaiyanTitle>
              
            
            <p className="text-3xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Dragon Ball Edition 🔥
            </p>
          </div>

          <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mb-4 leading-relaxed">
            🚀 Step into the world of <span className="text-primary font-bold">Dragon Ball</span>, where design power levels are tested to the max!
          </p>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-12">
            Your challenge is to unleash your inner <span className="text-accent font-bold">UI Super Saiyan</span> and create two UI designs inspired by the example provided.
          </p>

          <PowerUpButton onClick={() => {goto()}}>
            Power Up & Register
          </PowerUpButton>
        </section>

        {/* Event Details */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-black text-center mb-16 text-primary">
              💥 Event Details
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {eventDetails.map((detail, index) => (
                <Card
                  key={index}
                  className="p-8 text-center bg-card/70 backdrop-blur-md border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-6xl mb-4">{detail.icon}</div>
                  <h3 className="text-xl font-bold text-foreground/70 mb-2">{detail.label}</h3>
                  <p className="text-2xl font-black text-primary">{detail.value}</p>
                </Card>
              ))}
            </div>

            <Card className="mt-12 p-8 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-md border-2 border-primary/30">
              <p className="text-2xl text-center font-bold">
                <span className="text-secondary">Heroes:</span> Goku, Vegeta, Gohan
              </p>
            </Card>
          </div>
        </section>

        {/* Rules Section */}
        <section className="py-20 px-4 bg-background/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-black text-center mb-16 text-secondary">
              ⚔️ Rules of the Tournament
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {rules.map((rule, index) => (
                <Card
                  key={index}
                  className="p-8 bg-card/70 backdrop-blur-md border-2 border-secondary/20 hover:border-secondary/50 transition-all duration-300 hover:translate-x-2"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-5xl flex-shrink-0">{rule.icon}</div>
                    <div>
                      <h3 className="text-2xl font-black text-accent mb-3">{rule.title}</h3>
                      <p className="text-foreground/80 text-lg leading-relaxed">{rule.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-accent">
            Ready to Go Super Saiyan?
          </h2>
          <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
            Push your design limits beyond Kaio-Ken x20 and create something legendary!
          </p>
          <PowerUpButton onClick={() => {goto()}}>
            Join the Battle!
          </PowerUpButton>
        </section>
      </div>
    </div>
  );
};

export default DragonBallEvent;