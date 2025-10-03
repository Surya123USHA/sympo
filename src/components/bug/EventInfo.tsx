import { NeonButton } from '@/components/ui/neon-button';
import { link } from 'fs';
import { Link } from 'lucide-react';

const home = () => {
  window.location.href = '/home';
}

const goto = () => {
  window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdKauM-DnSsELD_RaTu7gjO0nxXNyX7GtTwS4Qarln0wanI0g/viewform?usp=header';
}



export const EventInfo = () => {
  return (
    <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main title with supernatural glow */}
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-neon-cyan animate-neon-pulse">
          Step inside the chaos of{' '}
          <span className="text-neon-pink">Dan Da Dan!</span>
        </h1>
        
        {/* Description text */}
        <p className="text-lg md:text-xl mb-8 text-foreground leading-relaxed max-w-3xl mx-auto">
          Your screen lights up with{' '}
          <span className="text-neon-green font-semibold">Okarun</span>,{' '}
          <span className="text-neon-pink font-semibold">Momo</span>,{' '}
          <span className="text-chaos-red font-semibold">Turbo-Granny</span>,{' '}
          <span className="text-neon-purple font-semibold">Seiko</span>, and the bizarre aliens 
          flashing in the background slideshow. Every slide pulls you deeper into their strange universe.
        </p>

        {/* Event card */}
        <div className="bg-card/90 backdrop-blur-md border-2 border-neon-cyan rounded-2xl p-8 mb-8 shadow-supernatural animate-supernatural-glow max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-color-shift">
            ⚡ BUG BUSTERS Event
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-neon-green text-xl animate-bounce-slow">⏳</span>
                <span className="text-foreground">Time: <strong className="text-neon-cyan">30 Minutes</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neon-pink text-xl animate-bounce-slow">❓</span>
                <span className="text-foreground">5 Questions, <strong className="text-chaos-red">10 Errors each</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neon-purple text-xl animate-bounce-slow">👥</span>
                <span className="text-foreground">Team: <strong className="text-neon-green">1–3 members</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-chaos-red text-xl animate-bounce-slow">📱</span>
                <span className="text-foreground">No gadgets unless told</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-neon-cyan text-xl animate-bounce-slow">⏰</span>
                <span className="text-foreground">Be on time</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neon-green text-xl animate-bounce-slow">⚖️</span>
                <span className="text-foreground">Jury's word is final</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neon-pink text-xl animate-bounce-slow">📝</span>
                <span className="text-foreground">One chance per team</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neon-purple text-xl animate-bounce-slow">🏆</span>
                <span className="text-foreground">Prizes for top teams</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional event details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm border border-neon-pink rounded-xl p-6 shadow-neon">
            <h3 className="text-xl font-bold text-neon-pink mb-4">🎯 Event Rules</h3>
            <ul className="text-foreground space-y-2 text-left">
              <li>• Debug code faster than supernatural entities</li>
              <li>• Work as a team to defeat coding anomalies</li>
              <li>• No external help from spirits or aliens</li>
              <li>• Think like Okarun - logical but chaotic</li>
            </ul>
          </div>
          
          <div className="bg-card/80 backdrop-blur-sm border border-neon-green rounded-xl p-6 shadow-neon">
            <h3 className="text-xl font-bold text-neon-green mb-4">🏅 Rewards</h3>
            <ul className="text-foreground space-y-2 text-left">
              <li>• Supernatural coding skills boost</li>
              <li>• Dan Da Dan exclusive merchandise</li>
              <li>• Certificate of anomaly mastery</li>
              <li>• Bragging rights in the spirit world</li>
            </ul>
          </div>
        </div>

        {/* Warning section */}
        <div className="bg-chaos-red/20 border-2 border-chaos-red rounded-xl p-6 mb-8 animate-chaos-flicker max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-chaos-red mb-2">⚠️ WARNING ⚠️</h3>
          <p className="text-foreground">
            Side effects may include: enhanced debugging abilities, spontaneous anime references, 
            and the ability to see coding errors in other dimensions.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <NeonButton 
            variant="chaos" 
            size="xl"
            className="min-w-[220px]"
            onClick={home} 
          >
            🔙 Back
            <span className="ml-2 text-sm opacity-80">Escape the madness</span>
          </NeonButton>
          
          <NeonButton 
            variant="neon" 
            size="xl"
            className="min-w-[220px]"
            onClick={() => {
              
              // Add registration logic here
              alert("Welcome to the anomaly! Okarun and Momo are waiting... 🌀✨");
              {goto()}
              

            }}
          >
            ✅ Register Now
            <span className="ml-2 text-sm opacity-80">Join the chaos</span>
          </NeonButton>
        </div>
        
        <p className="mt-6 text-neon-cyan text-lg animate-neon-pulse">
          🌀 Dive into the anomaly with <span className="text-neon-pink">Okarun</span> & <span className="text-neon-green">Momo</span>! 🌀
        </p>
        
        {/* Footer quote */}
        <div className="mt-12 max-w-2xl mx-auto">
          <blockquote className="text-lg italic text-muted-foreground border-l-4 border-neon-cyan pl-6">
            "In a world where aliens and spirits collide, only the best debuggers survive..."
          </blockquote>
          <p className="text-right text-neon-cyan mt-2">- Turbo Granny (probably)</p>
        </div>
      </div>
    </div>
  );
};