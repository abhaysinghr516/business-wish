"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = "",
  delay = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={
            isInView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 10, filter: "blur(4px)" }
          }
          transition={{
            duration: 0.4,
            delay: delay + i * 0.06,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="mr-[0.3em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export const TextRevealDemo: React.FC = () => (
  <div className="flex items-center justify-center py-12">
    <TextReveal
      text="Every pixel matters."
      className="justify-center text-[2rem] md:text-[2.75rem] font-semibold tracking-tight text-gray-900 dark:text-gray-100 leading-tight"
    />
  </div>
);

export const TextRevealCustomDemo: React.FC = () => (
  <div className="flex flex-col gap-2 items-center justify-center py-12">
    <TextReveal
      text="Design is not just"
      className="justify-center text-xl md:text-2xl font-medium tracking-tight text-gray-900 dark:text-gray-100"
      delay={0}
    />
    <TextReveal
      text="what it looks like and feels like."
      className="justify-center text-xl md:text-2xl font-medium tracking-tight text-gray-500 dark:text-gray-400"
      delay={0.3}
    />
    <TextReveal
      text="Design is how it works."
      className="justify-center text-xl md:text-2xl font-medium tracking-tight text-gray-900 dark:text-gray-100"
      delay={0.7}
    />
  </div>
);
