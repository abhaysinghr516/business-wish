"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface MorphingTextProps {
  texts: string[];
  className?: string;
  interval?: number;
}

export const MorphingText: React.FC<MorphingTextProps> = ({
  texts,
  className = "",
  interval = 3000,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <span className={`relative inline-flex overflow-hidden align-baseline ${className}`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={texts[index]}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="inline-block whitespace-nowrap"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export const MorphingTextDemo: React.FC = () => (
  <div className="flex items-center justify-center py-16">
    <p className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
      Build{" "}
      <MorphingText
        texts={["beautiful", "accessible", "performant", "delightful"]}
        className="text-gray-500 dark:text-gray-400"
        interval={2500}
      />{" "}
      interfaces.
    </p>
  </div>
);

export const MorphingTextStandaloneDemo: React.FC = () => (
  <div className="flex items-center justify-center py-16">
    <MorphingText
      texts={[
        "Think different.",
        "Stay hungry.",
        "Stay foolish.",
        "One more thing.",
      ]}
      className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
      interval={3000}
    />
  </div>
);
