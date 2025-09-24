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

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 mt-2 transition-all duration-500 ease-in-out ${
        isOpen 
          ? 'opacity-100 translate-y-0 visible' 
          : 'opacity-0 -translate-y-8 invisible'
      }`}>
        <div className="nav-map rounded-2xl shadow-2xl border border-border/30 backdrop-blur-md">
          <div className="p-6">
            <div className="flex flex-col gap-4">
              {/* Mobile Controls */}
              <div className="flex items-center justify-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-border/20">
                <MusicToggle />
                <ThemeToggle />
              </div>
              
              {/* Navigation Items */}
              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      console.log('Mobile nav item clicked:', item.name);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-4 px-5 py-4 rounded-xl bg-white/20 backdrop-blur-sm border border-border/40 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg group ${
                      isOpen ? 'animate-fade-in' : ''
                    }`}
                    style={{ 
                      animationDelay: isOpen ? `${index * 0.1 + 0.2}s` : '0s',
                      animationFillMode: 'both'
                    }}
                  >
                    <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                    <span className="font-semibold text-lg">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;