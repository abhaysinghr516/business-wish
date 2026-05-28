"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollProgressProps {
  className?: string;
  variant?: "bar" | "circle";
  targetRef?: React.RefObject<HTMLElement>;
  color?: string;
  height?: number;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({
  className = "",
  variant = "bar",
  targetRef,
  color = "bg-gradient-to-r from-[#FF3903] via-[#FF6107] to-[#FF8A3D]",
  height = 3,
}) => {
  const { scrollYProgress } = useScroll(targetRef ? { container: targetRef } : undefined);

  // Smooth scroll transitions
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  if (variant === "circle") {
    return (
      <div className={cn("h-10 w-10 z-50", className)}>
        <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="30"
            className="stroke-stone-200 dark:stroke-stone-800 fill-none"
            strokeWidth="8"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            className="stroke-[#FF3903] fill-none"
            strokeWidth="8"
            strokeDasharray="0 1"
            style={{ pathLength }}
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  return (
    <motion.div
      className={cn("fixed top-0 left-0 right-0 z-50 origin-left", color, className)}
      style={{ scaleX, height }}
    />
  );
};

/* ── Stateful Demo ── */
export const ScrollProgressDemo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col sm:flex-row gap-6 py-6 w-full max-w-3xl px-4 justify-center items-stretch">
      {/* Container Bar Demo */}
      <div className="flex-1 border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/40 p-6 rounded-2xl shadow-sm relative overflow-hidden flex flex-col">
        <span className="text-[10px] text-stone-400 font-mono font-semibold tracking-wider uppercase mb-4 block text-center">
          Bar Style (Container Bound)
        </span>
        
        {/* Scroll Progress relative to container */}
        <ScrollProgress 
          variant="bar" 
          targetRef={containerRef} 
          className="absolute top-0 left-0 right-0 rounded-t-2xl z-20" 
        />
        
        <div
          ref={containerRef}
          className="h-44 overflow-y-auto pr-2 scrollbar-hide text-xs text-stone-500 dark:text-stone-400 space-y-4"
        >
          <h5 className="font-semibold text-stone-900 dark:text-stone-200">1. Core Design System</h5>
          <p>A unified grid layout, standardized spacing values, and strict tokenization form the baseline for building interfaces that scale across multi-functional development teams.</p>
          
          <h5 className="font-semibold text-stone-900 dark:text-stone-200">2. Framer Motion Integration</h5>
          <p>By leveraging dynamic motion hooks, components transition smoothly. Hardware-accelerated renders bypass React state bottlenecks for continuous 60fps interaction.</p>
          
          <h5 className="font-semibold text-stone-900 dark:text-stone-200">3. Responsive Scaling</h5>
          <p>Every element automatically adjusts to layout limits. Spacing, padding, and text dimensions adapt dynamically from mobile viewports to desktop displays.</p>
        </div>
      </div>

      {/* Circle Icon Demo */}
      <div className="flex-1 border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/40 p-6 rounded-2xl shadow-sm relative overflow-hidden flex flex-col items-center justify-between">
        <span className="text-[10px] text-stone-400 font-mono font-semibold tracking-wider uppercase mb-2 block text-center">
          Circular Style (Container Bound)
        </span>

        {/* Circular Progress bound to the same scroll context */}
        <ScrollProgress 
          variant="circle" 
          targetRef={containerRef} 
          className="my-auto" 
        />

        <p className="text-[10px] font-mono text-stone-400 text-center mt-2">
          SCROLL THE LEFT PANEL TO ROTATE
        </p>
      </div>
    </div>
  );
};
