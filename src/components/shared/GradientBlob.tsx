"use client";

import { cn } from "@/lib/utils";

interface GradientBlobProps {
  className?: string;
  color?: "accent" | "accent2" | "purple";
}

const colors = {
  accent: "bg-accent/30",
  accent2: "bg-accent2/30",
  purple: "bg-[#7b61ff]/20",
};

export function GradientBlob({ className, color = "accent" }: GradientBlobProps) {
  return (
    <div
      className={cn(
        "absolute rounded-full blur-[120px] opacity-35 animate-orb-float",
        colors[color],
        className
      )}
    />
  );
}
