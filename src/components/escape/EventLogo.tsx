import { useEffect, useState } from "react";
import eventLogo from "@/assets/escape-protocol-logo.png";
import { removeBackground, loadImage } from "@/components/utils/removeBackground";
import { toast } from "sonner";

export const EventLogo = () => {
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const processLogo = async () => {
      try {
        // Fetch the original image
        const response = await fetch(eventLogo);
        const blob = await response.blob();
        
        // Load image
        const imageElement = await loadImage(blob);
        
        // Remove background
        toast.info("Processing logo...");
        const processedBlob = await removeBackground(imageElement);
        
        // Create URL for the processed image
        const url = URL.createObjectURL(processedBlob);
        setProcessedImage(url);
        setIsProcessing(false);
        toast.success("Logo processed!");
      } catch (error) {
        console.error("Failed to process logo:", error);
        toast.error("Using original logo");
        setProcessedImage(eventLogo);
        setIsProcessing(false);
      }
    };

    processLogo();
  }, []);

  if (isProcessing) {
    return (
      <div className="relative w-full max-w-4xl mx-auto h-32 flex items-center justify-center">
        <div className="font-bleach text-2xl text-primary text-glow animate-pulse">
          LOADING PROTOCOL...
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto animate-float">
      <img
        src={processedImage || eventLogo}
        alt="Escape Protocol"
        className="w-full h-auto filter drop-shadow-[0_0_20px_rgba(255,87,34,0.6)] animate-pulse-glow"
        style={{ 
          mixBlendMode: 'normal',
          imageRendering: 'crisp-edges'
        }}
      />
    </div>
  );
};
