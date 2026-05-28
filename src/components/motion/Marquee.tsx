"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  speed?: number; // Duration in seconds
  pauseOnHover?: boolean;
  fadeEdges?: boolean;
  className?: string;
  innerClassName?: string;
  vertical?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  direction,
  speed = 30,
  pauseOnHover = true,
  fadeEdges = true,
  className = "",
  innerClassName = "",
  vertical = false,
}) => {
  // Determine standard directions
  const isVertical = vertical || direction === "up" || direction === "down";
  const finalDirection = direction || (isVertical ? "up" : "left");

  // Determine animations
  let animationClass = "animate-marquee-left";
  if (finalDirection === "right") animationClass = "animate-marquee-right";
  if (finalDirection === "up") animationClass = "animate-marquee-up";
  if (finalDirection === "down") animationClass = "animate-marquee-down";

  return (
    <div
      className={cn(
        "group relative flex overflow-hidden p-2 select-none w-full gap-4",
        isVertical ? "flex-col h-full" : "flex-row",
        fadeEdges && (
          isVertical
            ? "[mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
            : "[mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]"
        ),
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 gap-4 min-w-full justify-around items-center",
          isVertical ? "flex-col min-h-full" : "flex-row",
          animationClass,
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          innerClassName
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 gap-4 min-w-full justify-around items-center",
          isVertical ? "flex-col min-h-full" : "flex-row",
          animationClass,
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          innerClassName
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-l {
          0% { transform: translateX(0%); }
          100% { transform: translateX(calc(-100% - 1rem)); }
        }
        @keyframes marquee-r {
          0% { transform: translateX(calc(-100% - 1rem)); }
          100% { transform: translateX(0%); }
        }
        @keyframes marquee-u {
          0% { transform: translateY(0%); }
          100% { transform: translateY(calc(-100% - 1rem)); }
        }
        @keyframes marquee-d {
          0% { transform: translateY(calc(-100% - 1rem)); }
          100% { transform: translateY(0%); }
        }
        .animate-marquee-left {
          animation: marquee-l linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-r linear infinite;
        }
        .animate-marquee-up {
          animation: marquee-u linear infinite;
        }
        .animate-marquee-down {
          animation: marquee-d linear infinite;
        }
      `}} />
    </div>
  );
};

/* ── Stateful Multiple Examples Demo ── */
export const MarqueeDemo: React.FC = () => {
  const techStack = [
    { name: "Next.js", color: "text-stone-900 dark:text-white" },
    { name: "React", color: "text-sky-500" },
    { name: "Tailwind CSS", color: "text-cyan-400" },
    { name: "Framer Motion", color: "text-purple-500" },
    { name: "TypeScript", color: "text-blue-500" },
    { name: "Node.js", color: "text-emerald-500" },
  ];

  const testimonials = [
    { name: "Alex K.", role: "CEO", text: "Business Wish made our dev time fly. The components are gorgeous." },
    { name: "Sarah M.", role: "Lead Engineer", text: "TypeScript safety combined with high-end Framer Motion. 10/10." },
    { name: "Devon T.", role: "Product Manager", text: "Zero layout shifts. Extremely accessible widgets." },
  ];

  return (
    <div className="flex flex-col gap-10 py-6 w-full max-w-3xl px-4 overflow-hidden">
      {/* Example 1: Horizontal alternates */}
      <div className="flex flex-col gap-3">
        <span className="text-[10px] text-stone-400 font-mono font-semibold tracking-wider uppercase text-center">
          1. Alternating Horizontal Loops
        </span>
        <div className="border border-stone-200 dark:border-stone-850 rounded-2xl bg-stone-50/50 dark:bg-stone-900/10 p-4">
          <Marquee direction="left" speed={20}>
            {techStack.map((tech) => (
              <span key={`${tech.name}-ex1`} className="text-xs font-semibold px-4 py-2 bg-white dark:bg-stone-950 border border-stone-150 dark:border-stone-850 rounded-xl shadow-sm">
                {tech.name}
              </span>
            ))}
          </Marquee>
          <Marquee direction="right" speed={22} className="mt-2">
            {techStack.slice().reverse().map((tech) => (
              <span key={`${tech.name}-ex2`} className="text-xs font-semibold px-4 py-2 bg-white dark:bg-stone-950 border border-stone-150 dark:border-stone-850 rounded-xl shadow-sm">
                {tech.name}
              </span>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Example 2: Vertical testimonial slider */}
      <div className="flex flex-col gap-3">
        <span className="text-[10px] text-stone-400 font-mono font-semibold tracking-wider uppercase text-center">
          2. Vertical Scrolling Feed (Sidebar Mode)
        </span>
        <div className="flex justify-center">
          <div className="h-64 w-80 border border-stone-200 dark:border-stone-850 bg-white dark:bg-stone-950 rounded-2xl p-4 overflow-hidden shadow-sm">
            <Marquee direction="up" speed={20} className="h-full">
              {testimonials.map((t, idx) => (
                <div key={idx} className="p-4 bg-stone-50 dark:bg-stone-900 border border-stone-150 dark:border-stone-800 rounded-xl w-full flex flex-col justify-between h-28">
                  <p className="text-[11px] leading-relaxed text-stone-500 dark:text-stone-400 italic">
                    &quot;{t.text}&quot;
                  </p>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t border-stone-200/50 dark:border-stone-850">
                    <span className="text-[11px] font-bold text-stone-800 dark:text-stone-200">{t.name}</span>
                    <span className="text-[9px] font-mono text-stone-400">{t.role}</span>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};
