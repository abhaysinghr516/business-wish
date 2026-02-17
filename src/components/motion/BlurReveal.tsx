"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface BlurRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  blur?: number;
}

export const BlurReveal: React.FC<BlurRevealProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
  blur = 10,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const directionOffset = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        filter: `blur(${blur}px)`,
        ...directionOffset[direction],
      }}
      animate={
        isInView
          ? { opacity: 1, filter: "blur(0px)", x: 0, y: 0 }
          : { opacity: 0, filter: `blur(${blur}px)`, ...directionOffset[direction] }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface BlurRevealGroupProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const BlurRevealGroup: React.FC<BlurRevealGroupProps> = ({
  children,
  className = "",
  staggerDelay = 0.15,
  direction = "up",
}) => (
  <div className={className}>
    {React.Children.map(children, (child, i) => (
      <BlurReveal direction={direction} delay={i * staggerDelay}>
        {child}
      </BlurReveal>
    ))}
  </div>
);

export const BlurRevealDemo: React.FC = () => (
  <div className="flex flex-col items-center justify-center py-12 gap-4">
    <BlurReveal>
      <p className="text-[11px] uppercase tracking-widest text-gray-400 dark:text-gray-500">
        Introducing
      </p>
    </BlurReveal>
    <BlurReveal delay={0.15} blur={12}>
      <p className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 text-center">
        Content that reveals
        <br />
        with clarity.
      </p>
    </BlurReveal>
    <BlurReveal delay={0.3} blur={8}>
      <p className="text-[15px] text-gray-500 dark:text-gray-400 text-center max-w-md">
        Elements transition from blurred to sharp, drawing the eye naturally to each piece of content.
      </p>
    </BlurReveal>
  </div>
);

export const BlurRevealGroupDemo: React.FC = () => (
  <div className="py-8">
    <BlurRevealGroup
      staggerDelay={0.12}
      direction="up"
      className="flex flex-col sm:flex-row gap-4 justify-center"
    >
      <div className="rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 p-5 flex-1 max-w-xs">
        <p className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">01</p>
        <p className="text-[13px] font-medium text-gray-900 dark:text-gray-100 mt-2">Research</p>
        <p className="text-[13px] text-gray-500 dark:text-gray-400 mt-0.5">Understand the problem deeply.</p>
      </div>
      <div className="rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 p-5 flex-1 max-w-xs">
        <p className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">02</p>
        <p className="text-[13px] font-medium text-gray-900 dark:text-gray-100 mt-2">Design</p>
        <p className="text-[13px] text-gray-500 dark:text-gray-400 mt-0.5">Craft a thoughtful solution.</p>
      </div>
      <div className="rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 p-5 flex-1 max-w-xs">
        <p className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">03</p>
        <p className="text-[13px] font-medium text-gray-900 dark:text-gray-100 mt-2">Ship</p>
        <p className="text-[13px] text-gray-500 dark:text-gray-400 mt-0.5">Deliver with confidence.</p>
      </div>
    </BlurRevealGroup>
  </div>
);
