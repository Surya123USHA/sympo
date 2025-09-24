import { useState } from 'react';
import { Menu, X, Anchor, Map, Users, Calendar, UserCheck, Phone } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import MusicToggle from './MusicToggle';
import strawHatLogo from '@/assets/straw-hat-logo.jpg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', icon: Map, href: '#about' },
    { name: 'Events', icon: Calendar, href: '#events' },
    { name: 'Registration', icon: UserCheck, href: '#registration' },
    { name: 'Speakers', icon: Users, href: '#speakers' },
    { name: 'Contact', icon: Phone, href: '#contact' },
  ];

  return (
    <nav className="nav-map fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3">
      <div className="flex items-center justify-between gap-4 w-full">
        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <img 
            src={strawHatLogo} 
            alt="Straw Hat Pirates" 
            className="w-10 h-10 rounded-full float-gentle"
          />
          <div className="hidden md:block min-w-0 -ml-2">
            <h1 className="text-xl font-black text-navy bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent whitespace-nowrap">
              ESPERANZA
            </h1>
            <p className="text-xs text-muted-foreground">Symposium 2025</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-border/50 text-navy hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-ocean"
            >
              <item.icon className="w-4 h-4" />
              <span className="font-semibold">{item.name}</span>
            </a>
          ))}
        </div>

        {/* Controls and Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <MusicToggle />
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-primary text-primary-foreground hover:scale-110 transition-transform duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 p-4 nav-map z-50 shadow-lg">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-border/50 text-navy hover:bg-primary hover:text-white transition-all duration-300"
              >
                <item.icon className="w-5 h-5" />
                <span className="font-semibold">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;