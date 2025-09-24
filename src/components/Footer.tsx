import { Anchor, Mail, Phone, MapPin, Heart } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import strawHatLogo from '@/assets/straw-hat-logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-gradient-depth text-white py-16 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="float-gentle absolute top-10 left-10">
          <Anchor className="w-16 h-16" />
        </div>
        <div className="float-gentle absolute bottom-10 right-10" style={{animationDelay: '2s'}}>
          <Anchor className="w-12 h-12" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Countdown Timer */}
        <CountdownTimer />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={strawHatLogo} 
                alt="Esperanza Logo" 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  ESPERANZA
                </h3>
                <p className="text-sm text-white/70">Symposium 2025</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Join us for an epic adventure of knowledge, discovery, and unity as we explore the vast oceans of possibility together. Every great journey begins with a single step aboard the ship of dreams.
            </p>
            <div className="flex gap-4">
              <button className="btn-treasure text-sm">
                Join the Crew
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">Navigation</h4>
            <nav className="space-y-3">
              {[
                { name: 'About Esperanza', href: '#about' },
                { name: 'Adventure Schedule', href: '#events' },
                { name: 'Join the Crew', href: '#registration' },
                { name: 'Meet the Speakers', href: '#speakers' },
                { name: 'Contact Us', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-white/70 hover:text-secondary transition-colors duration-300 hover:translate-x-2 transform"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">Contact Harbor</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/70">info@esperanza-symposium.org</p>
                  <p className="text-white/70">crew@esperanza-symposium.org</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/70">+1 (555) 123-CREW</p>
                  <p className="text-white/70">+1 (555) 123-SHIP</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/70">Grand Line Convention Center</p>
                  <p className="text-white/70">Adventure Island, AL 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2025 Esperanza Symposium. All rights reserved. Set sail with confidence.
            </p>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent fill-current animate-pulse" />
              <span>for adventurers worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;