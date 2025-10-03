import { useEffect, useState } from "react";
import gokuKamehameha from "@/assets/goku-kamehameha.jpg";

export const KamehamehaEffect = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 animate-kamehameha">
      <div className="relative">
        <img
          src={gokuKamehameha}
          alt="Goku Kamehameha"
          className="max-w-2xl w-full h-auto object-contain opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-radial from-secondary/40 via-transparent to-transparent animate-pulse" />
      </div>
    </div>
  );
};
