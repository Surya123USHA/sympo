import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-16 h-8 rounded-full bg-gradient-to-r from-secondary to-primary transition-all duration-300 shadow-treasure hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring"
      aria-label="Toggle theme"
    >
      <div className={`absolute w-6 h-6 bg-white rounded-full shadow-lg transition-transform duration-300 flex items-center justify-center ${isDark ? 'translate-x-4' : '-translate-x-4'}`}>
        {isDark ? (
          <Moon className="w-3 h-3 text-navy" />
        ) : (
          <Sun className="w-3 h-3 text-secondary" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;