import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <img
      src="/mide-dara-logo.png"
      alt="Mide & Dara Motors"
      className={cn("h-12 w-12 rounded-full", className)}
    />
  );
}