
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface LoadingLogoProps {
  fullScreen?: boolean;
  className?: string;
}

const LoadingLogo = ({ fullScreen = false, className }: LoadingLogoProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!fullScreen) return;
    
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [fullScreen]);

  if (fullScreen && !visible) return null;

  return (
    <div 
      className={cn(
        "flex items-center justify-center bg-black",
        fullScreen ? "fixed inset-0 z-50" : "w-full h-full min-h-[200px]",
        className
      )}
    >
      <div className="animate-pulse">
        <div className="flex flex-col items-center">
          <div className="font-display text-4xl md:text-5xl font-bold tracking-wider text-white">
            ADR <span className="font-normal">COMPANY</span>
          </div>
          <span className="text-sm ml-2 italic text-white/80 mt-1">Madagascar</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingLogo;
