"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TextShimmerProps {
  children: string;
  className?: string;
  duration?: number;
  spread?: number;
}

export const TextShimmer: React.FC<TextShimmerProps> = ({
  children,
  className = "",
  duration = 2.5,
  spread = 2,
}) => {
  return (
    <span
      className={cn(
        "inline-block bg-clip-text text-transparent animate-text-shimmer",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(
          110deg,
          currentColor 35%,
          rgba(156, 163, 175, 0.5) ${45 + spread}%,
          currentColor ${55 + spread * 2}%
        )`,
        backgroundSize: "250% 100%",
        WebkitTextFillColor: "transparent",
        animationDuration: `${duration}s`,
        color: "inherit",
      }}
    >
      {children}
      <style jsx>{`
        @keyframes text-shimmer {
          from { background-position: 250% center; }
          to { background-position: -250% center; }
        }
        .animate-text-shimmer {
          animation: text-shimmer 2.5s ease-in-out infinite;
        }
      `}</style>
    </span>
  );
};

export const TextShimmerDemo: React.FC = () => (
  <div className="flex flex-col items-center justify-center py-16 gap-1">
    <TextShimmer className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
      Introducing Motion
    </TextShimmer>
    <p className="text-[13px] text-gray-500 dark:text-gray-400 mt-2">
      A shimmer effect sweeps across the text continuously
    </p>
  </div>
);

export const TextShimmerCustomDemo: React.FC = () => (
  <div className="flex flex-col items-center justify-center py-12 gap-6">
    <TextShimmer
      className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
      duration={2}
      spread={3}
    >
      Fast shimmer, wide spread
    </TextShimmer>
    <TextShimmer
      className="text-2xl font-semibold tracking-tight text-gray-500 dark:text-gray-400"
      duration={4}
      spread={1}
    >
      Slow shimmer, tight spread
    </TextShimmer>
  </div>
);
