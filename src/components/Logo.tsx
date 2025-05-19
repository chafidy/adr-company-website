
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

const Logo = ({ variant = "dark", className }: LogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div className={cn("font-display text-xl md:text-2xl font-bold tracking-wider", 
        variant === "light" ? "text-white" : "text-adr-900"
      )}>
        ADR <span className="font-normal">TRAVEL</span>
        <span className={cn("text-sm ml-2 italic",
          variant === "light" ? "text-white/80" : "text-adr-600"
        )}>Madagascar</span>
      </div>
    </div>
  );
};

export default Logo;
