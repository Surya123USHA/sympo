import type { Config } from "tailwindcss";
import tailwindcss from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",

        },


        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          glow: "hsl(var(--secondary-glow))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        navy: {
          DEFAULT: "hsl(var(--navy))",
          foreground: "hsl(var(--navy-foreground))",
        },
        adventure: {
          DEFAULT: "hsl(var(--adventure))",
          foreground: "hsl(var(--adventure-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        neon: {
          cyan: "hsl(var(--neon-cyan))",
          green: "hsl(var(--neon-green))",
          pink: "hsl(var(--neon-pink))",
          purple: "hsl(var(--neon-purple))",
        },
        supernatural: {
          blue: "hsl(var(--supernatural-blue))",
        },
        chaos: {
          red: "hsl(var(--chaos-red))",
        },


        gojo: {
          DEFAULT: "hsl(var(--gojo-blue))",
        },
        sukuna: {
          DEFAULT: "hsl(var(--sukuna-red))",
        },
        cursed: {
          DEFAULT: "hsl(var(--cursed-purple))",
          dark: "hsl(var(--cursed-dark))",
          glow: "hsl(var(--cursed-glow))",
        },
        


      },
      backgroundImage: {
        'gradient-ocean': 'var(--gradient-ocean)',
        'gradient-treasure': 'var(--gradient-treasure)',
        'gradient-adventure': 'var(--gradient-adventure)',
        'gradient-depth': 'var(--gradient-depth)',
        "gradient-supernatural": "var(--gradient-supernatural)",
        "gradient-chaos": "var(--gradient-chaos)",
        "gradient-overlay": "var(--gradient-overlay)",

      },
      boxShadow: {
        'treasure': 'var(--shadow-treasure)',
        'ocean': 'var(--shadow-ocean)',
        'adventure': 'var(--shadow-adventure)',
        'float': 'var(--shadow-float)',
        "neon": "var(--shadow-neon)",
        "supernatural": "var(--shadow-supernatural)",
        "glow-button": "var(--glow-button)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },


      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        
        "treasure-bounce": {
          "0%, 100%": { transform: "scale(1) rotate(0deg)" },
          "50%": { transform: "scale(1.1) rotate(5deg)" },
        },
        "sail-in": {
          "0%": { transform: "translateX(-100%) scale(0.8)", opacity: "0" },
          "100%": { transform: "translateX(0) scale(1)", opacity: "1" },
        },
        "wave": {
          "0%, 100%": { transform: "translateY(0px)" },
          "25%": { transform: "translateY(-5px)" },
          "75%": { transform: "translateY(5px)" },
        },
        "shine": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "wanted-swing": {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },


        "slide-fade": {
          "0%, 16.66%": { opacity: "1", transform: "scale(1.1)" },
          "33.33%, 83.33%": { opacity: "0", transform: "scale(1)" },
          "100%": { opacity: "1", transform: "scale(1.1)" },
        },
        "neon-pulse": {
          "0%": { 
            boxShadow: "0 0 5px hsl(var(--neon-cyan)), 0 0 10px hsl(var(--neon-cyan)), 0 0 15px hsl(var(--neon-cyan))",
            textShadow: "0 0 5px hsl(var(--neon-cyan))"
          },
          "100%": { 
            boxShadow: "0 0 10px hsl(var(--neon-cyan)), 0 0 20px hsl(var(--neon-cyan)), 0 0 30px hsl(var(--neon-cyan))",
            textShadow: "0 0 10px hsl(var(--neon-cyan))"
          },
        },
        "supernatural-glow": {
          "0%": { 
            filter: "brightness(1) saturate(1.2)",
            transform: "scale(1)",
          },
          "50%": { 
            filter: "brightness(1.2) saturate(1.5)",
            transform: "scale(1.02)",
          },
          "100%": { 
            filter: "brightness(1) saturate(1.2)",
            transform: "scale(1)",
          },
        },
        "chaos-flicker": {
          "0%": { opacity: "1" },
          "50%": { opacity: "0.8" },
          "100%": { opacity: "1" },
        },
        "float": {
          "0%, 100%": { 
            transform: "translateY(0px) rotate(0deg)",
          },
          "25%": { 
            transform: "translateY(-20px) rotate(5deg)",
          },
          "50%": { 
            transform: "translateY(-10px) rotate(-3deg)",
          },
          "75%": { 
            transform: "translateY(-15px) rotate(2deg)",
          },
        },
        "color-shift": {
          "0%": { 
            color: "hsl(var(--neon-cyan))",
            textShadow: "0 0 10px hsl(var(--neon-cyan))"
          },
          "25%": { 
            color: "hsl(var(--neon-pink))",
            textShadow: "0 0 10px hsl(var(--neon-pink))"
          },
          "50%": { 
            color: "hsl(var(--neon-green))",
            textShadow: "0 0 10px hsl(var(--neon-green))"
          },
          "75%": { 
            color: "hsl(var(--neon-purple))",
            textShadow: "0 0 10px hsl(var(--neon-purple))"
          },
          "100%": { 
            color: "hsl(var(--neon-cyan))",
            textShadow: "0 0 10px hsl(var(--neon-cyan))"
          },
        },

        "pulse-glow": {
          "0%, 100%": { opacity: "1", filter: "brightness(1) drop-shadow(0 0 20px hsl(var(--saiyan-aura)))" },
          "50%": { opacity: "0.8", filter: "brightness(1.3) drop-shadow(0 0 40px hsl(var(--saiyan-aura)))" },
        },
        "ki-wave": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "kamehameha": {
          "0%": { transform: "scale(0) translateX(-50%)", opacity: "0" },
          "50%": { transform: "scale(1.5) translateX(0)", opacity: "1" },
          "100%": { transform: "scale(2) translateX(50%)", opacity: "0" },
        },
        "aura-burst": {
          "0%": { transform: "scale(1)", opacity: "0.5" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },



        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "rise-up": {
          "0%": { opacity: "0", transform: "translateY(40px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        
        
        "float-slow": {
          "0%, 100%": { transform: "translate(0px, 0px) rotate(0deg)" },
          "25%": { transform: "translate(10px, -15px) rotate(5deg)" },
          "50%": { transform: "translate(-5px, -25px) rotate(-3deg)" },
          "75%": { transform: "translate(-15px, -10px) rotate(3deg)" },
        },
        "float-medium": {
          "0%, 100%": { transform: "translate(0px, 0px) rotate(0deg)" },
          "33%": { transform: "translate(-15px, 20px) rotate(-5deg)" },
          "66%": { transform: "translate(15px, 10px) rotate(5deg)" },
        },



        "falling-leaf": {
          "0%": {
            transform: "translateY(-10vh) rotate(0deg)",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "90%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(110vh) rotate(360deg)",
            opacity: "0",
          },
        },
        "chakra-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 20px hsla(30, 100%, 50%, 0.4)",
          },
          "50%": {
            boxShadow: "0 0 40px hsla(30, 100%, 50%, 0.8), 0 0 60px hsla(210, 100%, 60%, 0.4)",
          },
        },
        "slide-fade-in": {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },



        
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "treasure-bounce": "treasure-bounce 3s ease-in-out infinite",
        "sail-in": "sail-in 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
        "wave": "wave 4s ease-in-out infinite",
        "shine": "shine 2s infinite",
        "wanted-swing": "wanted-swing 8s ease-in-out infinite",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite alternate",
        "supernatural-glow": "supernatural-glow 3s ease-in-out infinite",
        "chaos-flicker": "chaos-flicker 0.5s ease-in-out infinite alternate",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        "float-slow": "float 8s ease-in-out infinite 1s",
        "color-shift": "color-shift 3s ease-in-out infinite",
        "bounce-slow": "bounce 3s infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "ki-wave": "ki-wave 8s linear infinite",
        "kamehameha": "kamehameha 2s ease-out",
        "aura-burst": "aura-burst 0.6s ease-out forwards",
        "falling-leaf": "falling-leaf linear infinite",
        "chakra-pulse": "chakra-pulse 2s ease-in-out infinite",
        "slide-fade-in": "slide-fade-in 0.6s ease-out forwards",
      },
    },
    keyframes: {
      "neon-pulse": { /* ... */ },
      "supernatural-glow": { /* ... */ },
      "chaos-flicker": { /* ... */ },
      "float": { /* ... */ },
      "color-shift": { /* ... */ },
    },
    fontFamily: {
        pirate: ['Creepster', 'cursive'],
        adventure: ['Comfortaa', 'sans-serif'],
      },
    






    

  },
 
} satisfies Config;
