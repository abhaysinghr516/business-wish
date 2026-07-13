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
    <div ref={ref} className="text-4xl font-semibold tracking-[-0.04em] text-stone-900 dark:text-stone-100 sm:text-5xl">
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
    <section className="border-b border-stone-200/80 bg-stone-50/70 px-4 py-12 dark:border-stone-800 dark:bg-[#090909] sm:px-6 sm:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-stone-200 dark:divide-stone-800">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center px-4 py-4 text-center sm:py-0">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-stone-500 dark:text-stone-400 sm:text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
