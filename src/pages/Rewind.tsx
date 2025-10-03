import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CursedBackground from "@/components/rewind/CursedBackground";
import IceFallingEffect from "@/components/rewind/IceFallingEffect";
import { ArrowLeft, Clock, Users, Trophy, Shield } from "lucide-react";
import heroBackground from "@/assets/gojo-sukuna-clash.jpeg";
import sukunaThrone from "@/assets/sukuna-throne.jpeg";
import sukunaPortrait from "@/assets/sukuna-portrait.jpeg";
import gojoDomain from "@/assets/gojo-domain.jpeg";
import gojoPower from "@/assets/gojo-power.jpeg";

const Rewind = () => {
  const navigate = useNavigate();

  const rules = [
    { icon: Shield, text: "Fair Play – No unauthorized devices allowed" },
    { icon: Clock, text: "Punctuality – Teams must arrive on time" },
    { icon: Trophy, text: "Final Authority – Jury's decision is final" },
    { icon: Users, text: "One Chance – Only one submission per team" },
  ];

  const criteria = [
    { label: "Theme Execution & Visual Impact", points: "30 pts" },
    { label: "UX & Flow", points: "25 pts" },
    { label: "Creativity", points: "15 pts" },
    { label: "Polish & Accessibility", points: "15 pts" },
    { label: "Deliverables Completeness", points: "15 pts" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <CursedBackground />
      <IceFallingEffect />
      
      {/* Hero Background Image */}
      <div 
        className="fixed inset-0 z-0 opacity-50"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cursed-dark/50 via-cursed-dark/30 to-cursed-dark/60" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        {/* Header with Back Button */}
        <div className="mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.history.back()}
            className="text-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12 space-y-6 relative">
          <h1 className="text-6xl md:text-8xl font-display text-white text-glow-cursed animate-pulse-glow tracking-tight">
            CODE REWIND
          </h1>

          
          
          <p className="text-xl md:text-2xl text-red-50 font-medium">
            Enter the Cursed World
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center text-sm md:text-base">
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 rounded-lg border border-primary/20 backdrop-blur-sm">
              <Clock className="w-4 h-4 text-primary" />
              <span>40 Minutes</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 rounded-lg border border-secondary/20 backdrop-blur-sm">
              <Users className="w-4 h-4 text-secondary" />
              <span>3-4 Members</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              
              onClick={() =>{ window.location.href = '/home'}}
              className="min-w-[200px]"
            >
              BACK TO CURSE
            </Button>
          </div>
        </div>

        {/* Character Images Section - Positioned Absolutely for Better Visibility */}
        <div className="hidden md:block">
          {/* Gojo Domain - Top Left */}
          <div className="fixed top-20 left-4 w-32 h-40 lg:w-40 lg:h-48 rounded-lg overflow-hidden border-2 border-secondary/50 glow-gojo z-20 animate-float">
            <img src={gojoDomain} alt="Gojo Domain" className="w-full h-full object-cover" />
          </div>

          {/* Sukuna Portrait - Top Right */}
          <div className="fixed top-20 right-4 w-32 h-40 lg:w-40 lg:h-48 rounded-lg overflow-hidden border-2 border-accent/50 glow-sukuna z-20 animate-float" style={{ animationDelay: '2s' }}>
            <img src={sukunaPortrait} alt="Sukuna" className="w-full h-full object-cover" />
          </div>

          {/* Gojo Power - Bottom Left */}
          <div className="fixed bottom-32 left-4 w-32 h-40 lg:w-40 lg:h-48 rounded-lg overflow-hidden border-2 border-secondary/50 glow-gojo z-20 animate-float" style={{ animationDelay: '1s' }}>
            <img src={gojoPower} alt="Gojo Power" className="w-full h-full object-cover" />
          </div>

          {/* Sukuna Throne - Bottom Right */}
          <div className="fixed bottom-32 right-4 w-32 h-40 lg:w-40 lg:h-48 rounded-lg overflow-hidden border-2 border-accent/50 glow-sukuna z-20 animate-float" style={{ animationDelay: '3s' }}>
            <img src={sukunaThrone} alt="Sukuna Throne" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Mobile Character Images - Random Positioned Compact */}
        <div className="md:hidden absolute inset-0 pointer-events-none">
          {/* Gojo Domain - Top Left */}
          <div className="absolute top-24 left-2 w-20 h-28 rounded-lg overflow-hidden border border-secondary/40 glow-gojo pointer-events-auto">
            <img src={gojoDomain} alt="Gojo Domain" className="w-full h-full object-cover" />
          </div>
          
          {/* Sukuna Portrait - Top Right */}
          <div className="absolute top-32 right-3 w-20 h-28 rounded-lg overflow-hidden border border-accent/40 glow-sukuna pointer-events-auto">
            <img src={sukunaPortrait} alt="Sukuna" className="w-full h-full object-cover" />
          </div>
          
          {/* Gojo Power - Middle Left */}
          <div className="absolute top-1/2 left-1 w-20 h-28 rounded-lg overflow-hidden border border-secondary/40 glow-gojo pointer-events-auto">
            <img src={gojoPower} alt="Gojo Power" className="w-full h-full object-cover" />
          </div>
          
          {/* Sukuna Throne - Lower Right */}
          <div className="absolute bottom-40 right-2 w-20 h-28 rounded-lg overflow-hidden border border-accent/40 glow-sukuna pointer-events-auto">
            <img src={sukunaThrone} alt="Sukuna Throne" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Event Details Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-6xl mx-auto">
          {/* Theme Card */}
          <Card className="border-secondary/30 bg-card/0 backdrop-blur-sm glow-gojo">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 glow-gojo">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1 ">
                  <h3 className="text-2xl font-display mb-2 text-white text-glow-gojo">Gojo's Domain</h3>
                  <p className="text-muted-foreground mb-4 text-red-50">
                    Design a redirect web page inspired by Jujutsu Kaisen's cursed world where Gojo and Sukuna clash.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-secondary">Deliverables:</p>
                    <ul className="text-sm space-y-1 text-muted-foreground text-red-50">
                      <li>• Landing Page with Back + Register buttons</li>
                      <li>• Register Page/Overlay with form</li>
                      <li>• Responsive design across devices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rules Card */}
          <Card className="border-accent/30 bg-card/0 backdrop-blur-sm glow-sukuna">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 glow-sukuna">
                  <Trophy className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display mb-4 text-glow-sukuna  text-white">Sukuna's Rules</h3>
                  <div className="space-y-3">
                    {rules.map((rule, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <rule.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground text-red-50">{rule.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Judging Criteria */}
        <Card className="border-primary/30 bg-card/0 backdrop-blur-sm glow-cursed max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <h3 className="text-3xl font-display mb-6 text-center text-white text-glow-cursed">
              Judging Criteria
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {criteria.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-background/30 rounded-lg border border-primary/10"
                >
                  <span className="text-foreground font-medium text-red-50">{item.label}</span>
                  <span className="text-red-700 font-bold text-lg ">{item.points}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-2xl font-bold text-primary">Total: 100 Points</p>
            </div>
          </CardContent>
        </Card>

        {/* Footer CTA */}
        <div className="text-center mt-12 space-y-4 pb-8">
          <p className="text-red-50 text-lg">
            Ready to enter the cursed world?
          </p>
          <Button
            
            onClick={() => { window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdKauM-DnSsELD_RaTu7gjO0nxXNyX7GtTwS4Qarln0wanI0g/viewform?usp=header'}}
            className="min-w-[250px]"
          >
            Begin Your Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Rewind;