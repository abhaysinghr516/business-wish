"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export const Magnetic: React.FC<MagneticProps> = ({
  children,
  className = "",
  strength = 0.3,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setPosition({
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const MagneticDemo: React.FC = () => (
  <div className="flex items-center justify-center py-16 gap-8">
    <Magnetic strength={0.3}>
      <button className="px-6 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium transition-shadow hover:shadow-lg">
        Hover me
      </button>
    </Magnetic>
    <Magnetic strength={0.4}>
      <button className="px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-900 dark:text-gray-100 transition-shadow hover:shadow-md">
        Magnetic
      </button>
    </Magnetic>
    <Magnetic strength={0.5}>
      <div className="h-14 w-14 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center cursor-pointer transition-shadow hover:shadow-md">
        <svg className="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </Magnetic>
  </div>
);

export const MagneticStrongDemo: React.FC = () => (
  <div className="flex items-center justify-center py-16">
    <Magnetic strength={0.6}>
      <div className="px-8 py-5 rounded-2xl bg-gray-900 dark:bg-white cursor-pointer">
        <p className="text-lg font-semibold text-white dark:text-gray-900 tracking-tight">
          Strong pull →
        </p>
        <p className="text-[13px] text-gray-400 dark:text-gray-500 mt-0.5">
          Higher strength value
        </p>
      </div>
    </Magnetic>
  </div>
);
