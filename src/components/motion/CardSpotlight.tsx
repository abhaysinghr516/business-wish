"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CardSpotlightProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export const CardSpotlight: React.FC<CardSpotlightProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(0, 0, 0, 0.04)",
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-gray-150 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 transition-shadow duration-300 hover:shadow-sm",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export const CardSpotlightDemo: React.FC = () => (
  <div className="flex items-center justify-center py-8 gap-4 flex-wrap">
    <CardSpotlight className="max-w-xs w-full">
      <p className="text-[13px] font-medium text-gray-500 dark:text-gray-400 mb-1">
        Performance
      </p>
      <p className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-2">
        Lightweight
      </p>
      <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">
        Optimized components with minimal footprint. No unnecessary re-renders.
      </p>
    </CardSpotlight>
    <CardSpotlight
      className="max-w-xs w-full"
      spotlightColor="rgba(0, 0, 0, 0.06)"
    >
      <p className="text-[13px] font-medium text-gray-500 dark:text-gray-400 mb-1">
        Flexibility
      </p>
      <p className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-2">
        Composable
      </p>
      <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">
        Built with composition in mind. Mix and match to create your own patterns.
      </p>
    </CardSpotlight>
  </div>
);
