import { useState, useEffect, useRef } from 'react';
import { Menu, X, Home, Map, Users, Calendar, UserCheck, Phone, Trophy, Clock } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import MusicToggle from './MusicToggle';
import strawHatLogo from '@/assets/straw-hat-logo.jpg';

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
    { name: 'About', icon: Map, href: '#about' },
    { name: 'Events', icon: Calendar, href: '#events' },
    { name: 'Rules', icon: Trophy, href: '#rules' },
    { name: 'Schedule', icon: Clock, href: '#schedule' },
    { name: 'Register', icon: UserCheck, href: '#register' },
    { name: 'Contact', icon: Phone, href: '#contact' },
  ];

  return (
    <nav className="nav-map fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 w-[95%] max-w-7xl">
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

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[45] transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div 
        ref={menuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] z-[55] transition-all duration-500 ease-out transform ${
          isOpen 
            ? 'translate-x-0 opacity-100 scale-100' 
            : 'translate-x-full opacity-0 scale-95'
        }`}
      >
        <div className={`h-full nav-map shadow-2xl border-l border-border/30 backdrop-blur-md overflow-y-auto transition-all duration-700 ${
          isOpen ? 'backdrop-blur-xl' : 'backdrop-blur-none'
        }`}>
          <div className="p-6 relative">
            {/* Animated Background Elements */}
            <div className={`absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 transition-opacity duration-1000 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`} />
            
            {/* Close Button */}
            <div className={`flex justify-end mb-6 transform transition-all duration-400 ${
              isOpen ? 'translate-y-0 opacity-100 rotate-0' : '-translate-y-4 opacity-0 rotate-180'
            }`} style={{ transitionDelay: isOpen ? '0.2s' : '0s' }}>
              <button
                onClick={() => setIsOpen(false)}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-90 relative z-10"
              >
                <X className="w-6 h-6 text-foreground" />
              </button>
            </div>

            <div className="flex flex-col gap-6 relative z-10">
              {/* Logo Section */}
              <div className={`text-center pb-4 border-b border-border/20 transform transition-all duration-600 ${
                isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-90'
              }`} style={{ transitionDelay: isOpen ? '0.1s' : '0s' }}>
                <h2 className="text-2xl font-black text-navy bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-pulse">
                  ESPERANZA
                </h2>
                <p className="text-sm text-muted-foreground">Symposium 2025</p>
              </div>

              {/* Navigation Items */}
              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-4 px-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-border/20 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-400 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20 group relative overflow-hidden ${
                      isOpen ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-8 opacity-0 scale-95'
                    }`}
                    style={{ 
                      transitionDelay: isOpen ? `${index * 0.1 + 0.3}s` : `${(navItems.length - index) * 0.05}s`,
                      transitionDuration: '0.5s'
                    }}
                  >
                    {/* Hover ripple effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    
                    <item.icon className="w-5 h-5 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 flex-shrink-0 relative z-10" />
                    <span className="font-semibold text-base relative z-10 group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                    
                    {/* Animated border */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                  </a>
                ))}
              </div>

              {/* Mobile Controls */}
              <div className={`flex items-center justify-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-border/20 mt-4 transform transition-all duration-700 ${
                isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'
              }`} style={{ transitionDelay: isOpen ? '0.8s' : '0s' }}>
                <div className="transform hover:scale-110 transition-transform duration-200">
                  <MusicToggle />
                </div>
                <div className="transform hover:scale-110 transition-transform duration-200">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;