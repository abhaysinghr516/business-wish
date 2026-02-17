"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface NumberTickerProps {
  value: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimalPlaces?: number;
}

export const NumberTicker: React.FC<NumberTickerProps> = ({
  value,
  direction = "up",
  delay = 0,
  duration = 2,
  prefix = "",
  suffix = "",
  className = "",
  decimalPlaces = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasStarted, setHasStarted] = useState(false);

  const spring = useSpring(direction === "down" ? value : 0, {
    stiffness: 50,
    damping: 30,
    duration: duration,
  });

  const display = useTransform(spring, (current) =>
    decimalPlaces > 0
      ? current.toFixed(decimalPlaces)
      : Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView && !hasStarted) {
      const timeout = setTimeout(() => {
        spring.set(direction === "down" ? 0 : value);
        setHasStarted(true);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, hasStarted, spring, value, direction, delay]);

  return (
    <span ref={ref} className={`inline-flex items-baseline tabular-nums ${className}`}>
      {prefix && <span>{prefix}</span>}
      <motion.span>{display}</motion.span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
};

export const NumberTickerDemo: React.FC = () => (
  <div className="flex items-center justify-center py-12">
    <div className="flex gap-16 items-start">
      <div className="text-center">
        <NumberTicker
          value={2400}
          className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
        />
        <p className="text-[13px] text-gray-500 dark:text-gray-400 mt-1.5">
          Downloads
        </p>
      </div>
      <div className="text-center">
        <NumberTicker
          value={99.9}
          suffix="%"
          decimalPlaces={1}
          delay={0.2}
          className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
        />
        <p className="text-[13px] text-gray-500 dark:text-gray-400 mt-1.5">
          Uptime
        </p>
      </div>
      <div className="text-center">
        <NumberTicker
          value={58}
          suffix="+"
          delay={0.4}
          className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
        />
        <p className="text-[13px] text-gray-500 dark:text-gray-400 mt-1.5">
          Components
        </p>
      </div>
    </div>
  </div>
);

export const NumberTickerCountdownDemo: React.FC = () => (
  <div className="flex items-center justify-center py-12">
    <div className="text-center">
      <NumberTicker
        value={100}
        direction="down"
        className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
      />
      <p className="text-[13px] text-gray-500 dark:text-gray-400 mt-1.5">
        Countdown
      </p>
    </div>
  </div>
);
