"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  animation?: "fadeUp" | "fadeIn" | "scale" | "slideDown";
}

const animations: Record<string, { hidden: object; visible: object }> = {
  fadeUp: {
    hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
};

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.03,
  animation = "fadeUp",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: animations[animation].hidden,
    visible: {
      ...animations[animation].visible,
      transition: {
        duration: 0.35,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`inline-flex flex-wrap ${className}`}
      aria-label={text}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          variants={letterVariants}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export const SplitTextDemo: React.FC = () => (
  <div className="flex flex-col items-center justify-center py-16 gap-6">
    <SplitText
      text="Letter by letter."
      className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
    />
  </div>
);

export const SplitTextVariantsDemo: React.FC = () => (
  <div className="flex flex-col items-center justify-center py-12 gap-8">
    <div className="text-center">
      <p className="text-[11px] uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
        Fade Up
      </p>
      <SplitText
        text="Every detail matters"
        animation="fadeUp"
        className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
        delay={0}
      />
    </div>
    <div className="text-center">
      <p className="text-[11px] uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
        Scale
      </p>
      <SplitText
        text="Subtle and refined"
        animation="scale"
        className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
        delay={0.4}
      />
    </div>
    <div className="text-center">
      <p className="text-[11px] uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
        Slide Down
      </p>
      <SplitText
        text="Crafted with care"
        animation="slideDown"
        className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
        delay={0.8}
      />
    </div>
  </div>
);
