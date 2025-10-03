interface SuperSaiyanTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SuperSaiyanTitle = ({ children, className = "" }: SuperSaiyanTitleProps) => {
  return (
    <h1
      className={`text-7xl md:text-8xl font-black tracking-tight animate-pulse-glow ${className}`}
      style={{
        background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 50%, hsl(var(--primary)) 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        textShadow: "0 0 60px hsl(var(--saiyan-aura)), 0 0 100px hsl(var(--primary))",
        display: "hidden",
      }}
    >
      {children}
    </h1>
  );
};