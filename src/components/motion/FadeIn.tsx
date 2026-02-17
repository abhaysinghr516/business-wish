"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
  distance = 24,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const directionOffset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...directionOffset[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerFadeInProps {
  children: React.ReactNode[];
  delay?: number;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export const StaggerFadeIn: React.FC<StaggerFadeInProps> = ({
  children,
  delay = 0,
  staggerDelay = 0.1,
  direction = "up",
  className = "",
}) => (
  <div className={className}>
    {React.Children.map(children, (child, index) => (
      <FadeIn direction={direction} delay={delay + index * staggerDelay}>
        {child}
      </FadeIn>
    ))}
  </div>
);

const SimpleCard = ({ label, text }: { label: string; text: string }) => (
  <div className="rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 p-5">
    <p className="text-[13px] font-medium text-gray-900 dark:text-gray-100">
      {label}
    </p>
    <p className="text-[13px] text-gray-500 dark:text-gray-400 mt-0.5">
      {text}
    </p>
  </div>
);

export const FadeInDemo: React.FC = () => (
  <div className="flex flex-col items-center justify-center py-8 gap-4">
    <FadeIn direction="up">
      <SimpleCard label="Fade Up" text="This element fades in from below" />
    </FadeIn>
    <div className="flex gap-4 flex-wrap justify-center">
      <FadeIn direction="left" delay={0.15}>
        <SimpleCard label="From Left" text="Slides in from the left" />
      </FadeIn>
      <FadeIn direction="right" delay={0.3}>
        <SimpleCard label="From Right" text="Slides in from the right" />
      </FadeIn>
    </div>
  </div>
);

export const StaggerFadeInDemo: React.FC = () => {
  const steps = [
    { label: "Install", text: "Add the component to your project" },
    { label: "Import", text: "Bring it into your file" },
    { label: "Use", text: "Drop it into your layout" },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <StaggerFadeIn
        direction="up"
        staggerDelay={0.12}
        className="flex flex-col gap-3 w-full max-w-sm"
      >
        {steps.map((s) => (
          <SimpleCard key={s.label} {...s} />
        ))}
      </StaggerFadeIn>
    </div>
  );
};
