"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = "",
  colors = ["#1d1d1f", "#6e6e73", "#1d1d1f"],
  animationSpeed = 5,
}) => {
  const gradientColors = colors.join(", ");

  return (
    <span
      className={cn(
        "inline-block bg-clip-text text-transparent animate-gradient-flow",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(90deg, ${gradientColors})`,
        backgroundSize: "200% 100%",
        animationDuration: `${animationSpeed}s`,
      }}
    >
      {children}
      <style jsx>{`
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-flow {
          animation: gradient-flow 5s ease infinite;
        }
      `}</style>
    </span>
  );
};

export const GradientTextDemo: React.FC = () => (
  <div className="flex flex-col items-center justify-center py-12">
    <GradientText
      className="text-4xl md:text-5xl font-semibold tracking-tight"
      colors={["#1d1d1f", "#86868b", "#1d1d1f"]}
    >
      Think different.
    </GradientText>
  </div>
);

export const GradientTextCustomDemo: React.FC = () => (
  <div className="flex flex-col items-center justify-center py-12 gap-6">
    <GradientText
      className="text-3xl md:text-4xl font-semibold tracking-tight"
      colors={["#0071e3", "#40a9ff", "#0071e3"]}
      animationSpeed={4}
    >
      Intelligence
    </GradientText>
    <GradientText
      className="text-3xl md:text-4xl font-semibold tracking-tight"
      colors={["#bf4800", "#ff9500", "#bf4800"]}
      animationSpeed={6}
    >
      Performance
    </GradientText>
    <GradientText
      className="text-3xl md:text-4xl font-semibold tracking-tight"
      colors={["#1d1d1f", "#6e6e73", "#86868b", "#1d1d1f"]}
      animationSpeed={7}
    >
      Craft
    </GradientText>
  </div>
);
