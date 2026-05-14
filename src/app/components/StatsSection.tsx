"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function AnimatedNumber({ value, suffix = "", duration = 1800 }: AnimatedNumberProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easedProgress * value));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(value);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 font-mono">
      {count}{suffix}
    </div>
  );
}

const stats = [
  { value: 50, suffix: "+", label: "UI Components" },
  { value: 13, suffix: "", label: "Motion Primitives" },
  { value: 0, suffix: "", label: "Config Needed" },
];

export default function StatsSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-stone-50 dark:bg-[#0a0a0a] border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-stone-200 dark:divide-stone-800">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center text-center py-4 sm:py-0 px-4">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-xs sm:text-sm font-medium text-stone-500 dark:text-stone-400 mt-2 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
