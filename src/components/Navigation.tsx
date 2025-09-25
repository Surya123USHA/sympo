import { useState, useEffect, useRef } from 'react';
import { Menu, X, Home, Map, Users, Calendar, UserCheck, Phone, Trophy, Clock, Info, Anchor } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import MusicToggle from './MusicToggle';
import esparanzaLogo from '@/assets/esparanza-logo.jpg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'About the Symposium', icon: Info, href: '#about' },
    { name: 'Events & Schedule', icon: Calendar, href: '#events' },
    { name: 'Registration', icon: Anchor, href: '#register' },
    { name: 'Guest Speakers', icon: Users, href: '#speakers' },
    { name: 'Contact', icon: Phone, href: '#contact' },
  ];

  return (
    <nav className="nav-map fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 w-[95%] max-w-7xl">
      <div className="flex items-center justify-between gap-4 w-full">
        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <img 
            src={esparanzaLogo} 
            alt="Esparanza Logo" 
            className="w-10 h-10 rounded-full float-gentle"
          />
          <div className="hidden md:block min-w-0 -ml-2">
            <h1 className="text-xl font-black text-navy bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent whitespace-nowrap">
              ESPARANZA
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
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="hidden sm:flex items-center gap-3">
            <MusicToggle />
            <ThemeToggle />
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              console.log('Mobile menu clicked, current state:', isOpen);
              setIsOpen(!isOpen);
            }}
            className="lg:hidden p-3 rounded-lg bg-primary text-primary-foreground hover:scale-110 transition-all duration-300 shadow-lg border border-primary-foreground/20 z-[60]"
            style={{ minWidth: '48px', minHeight: '48px' }}
          >
            <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </div>
          </button>
          
          {/* Mobile Controls - show in mobile menu */}
          <div className="sm:hidden">
            {/* Controls will be shown in mobile menu */}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        ref={menuRef}
        className={`lg:hidden fixed inset-0 z-[55] transition-all duration-300 ease-out ${
          isOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
      >
        <div className="w-full h-full bg-background/98 backdrop-blur-lg flex flex-col overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border/10 flex-shrink-0">
            <div className="flex items-center gap-3">
              <img 
                src={esparanzaLogo} 
                alt="Esparanza Logo" 
                className="w-8 h-8 rounded-full"
              />
              <h2 className="text-lg font-bold text-primary">
                ESPARANZA
              </h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-muted transition-colors duration-200"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Navigation Items - Scrollable container */}
          <div className="flex-1 px-6 py-8 min-h-0">
            <div className="space-y-4 max-w-sm mx-auto w-full">
              {navItems.slice(1).map((item, index) => ( // Skip Home for mobile menu
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 px-6 py-4 text-foreground hover:bg-muted/50 rounded-2xl transition-all duration-300 group transform ${
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: isOpen ? `${index * 0.1 + 0.1}s` : '0s'
                  }}
                >
                  <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  <span className="font-medium text-lg">{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Section - Fixed at bottom */}
          <div className="flex-shrink-0 p-6 space-y-6">
            {/* Explore the Map Button */}
            <div className="max-w-sm mx-auto">
              <button 
                onClick={() => setIsOpen(false)}
                className={`w-full py-4 px-6 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isOpen ? '0.6s' : '0s'
                }}
              >
                Explore the Map
              </button>
            </div>

            {/* Mobile Controls */}
            <div className={`flex items-center justify-center gap-6 pt-2 transform transition-all duration-300 ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ 
              transitionDelay: isOpen ? '0.7s' : '0s'
            }}>
              <MusicToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;