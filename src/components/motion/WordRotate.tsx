"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface WordRotateProps {
  words: string[];
  className?: string;
  interval?: number;
}

export const WordRotate: React.FC<WordRotateProps> = ({
  words,
  className = "",
  interval = 2500,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className={`inline-flex overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="inline-block"
          style={{ transformOrigin: "center center", perspective: "500px" }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export const WordRotateDemo: React.FC = () => (
  <div className="flex items-center justify-center py-16">
    <p className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
      We make it{" "}
      <WordRotate
        words={["simple", "fast", "elegant", "reliable"]}
        className="text-gray-500 dark:text-gray-400 min-w-[120px]"
      />
    </p>
  </div>
);

export const WordRotateStackedDemo: React.FC = () => (
  <div className="flex flex-col items-center justify-center py-16 gap-2">
    <p className="text-[13px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
      Currently
    </p>
    <WordRotate
      words={[
        "Designing systems",
        "Writing code",
        "Shipping features",
        "Fixing bugs",
      ]}
      className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
      interval={2000}
    />
  </div>
);
