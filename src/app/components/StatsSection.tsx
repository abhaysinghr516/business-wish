"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function AnimatedNumber({ value, suffix = "", duration = 1500 }: AnimatedNumberProps) {
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

            // Ease-out cubic
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easedProgress * value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-semibold text-stone-900 dark:text-stone-100 mb-1">
      {count}{suffix}
    </div>
  );
}

const stats = [
  { value: 50, suffix: "+", label: "UI Components" },
  { value: 13, suffix: "", label: "Motion Primitives" },
  { value: 17, suffix: "", label: "Browser Tools" },
  { value: 0, suffix: "", label: "Lock-in" },
];

export default function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-stone-50 dark:bg-stone-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-stone-500 dark:text-stone-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
