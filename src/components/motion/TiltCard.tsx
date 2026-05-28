"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";
import { Shield, Zap, TrendingUp } from "lucide-react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  glareEnable?: boolean;
  glareColor?: string;
  glareMaxOpacity?: number;
  springConfig?: { stiffness: number; damping: number; mass?: number };
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = "",
  maxTilt = 15,
  perspective = 1000,
  scale = 1.02,
  glareEnable = true,
  glareColor = "rgba(255, 255, 255, 0.15)",
  glareMaxOpacity = 0.35,
  springConfig = { stiffness: 150, damping: 20 },
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Normalized motion values for mouse position: 0 to 1
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Map mouse coordinates to 3D rotation angles
  const rotateX = useTransform(y, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(x, [0, 1], [-maxTilt, maxTilt]);

  // Apply smoothing spring physics to rotation values
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  // Glare position mappings
  const glareXPercent = useTransform(x, [0, 1], ["0%", "100%"]);
  const glareYPercent = useTransform(y, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / rect.width);
    y.set(mouseY / rect.height);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    x.set(0.5);
    y.set(0.5);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <div style={{ perspective: `${perspective}px` }} className="w-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale }}
        transition={{ type: "spring", stiffness: 250, damping: 22 }}
        className={cn(
          "relative rounded-2xl border border-stone-200/80 dark:border-stone-800 bg-white dark:bg-stone-950 p-6 shadow-sm overflow-hidden select-none",
          className
        )}
      >
        {glareEnable && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background: useMotionTemplate`radial-gradient(circle 250px at ${glareXPercent} ${glareYPercent}, ${glareColor}, transparent 80%)`,
            }}
            animate={{ opacity: isHovering ? glareMaxOpacity : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        )}
        <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="relative z-0">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

/* ── Standard Features Demo ── */
export const TiltCardDemo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 w-full max-w-4xl px-4">
      <TiltCard className="h-64 flex flex-col justify-between">
        <div>
          <div className="w-10 h-10 rounded-xl bg-[#FF3903]/10 flex items-center justify-center mb-4">
            <Zap className="h-5 w-5 text-[#FF3903]" />
          </div>
          <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100" style={{ transform: "translateZ(40px)" }}>
            High Performance
          </h3>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-2 leading-relaxed" style={{ transform: "translateZ(20px)" }}>
            Leverages native GPU layers and hardware-accelerated transforms for ultra-smooth 60fps interaction.
          </p>
        </div>
        <div className="text-[10px] font-mono text-stone-400 dark:text-stone-600 mt-auto">
          ACCELERATED // TRUE
        </div>
      </TiltCard>

      <TiltCard className="h-64 flex flex-col justify-between">
        <div>
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
            <Shield className="h-5 w-5 text-emerald-500" />
          </div>
          <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100" style={{ transform: "translateZ(40px)" }}>
            Secure By Default
          </h3>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-2 leading-relaxed" style={{ transform: "translateZ(20px)" }}>
            Strict sanitization, clean dependency footprint, and zero layout shifts out of the box.
          </p>
        </div>
        <div className="text-[10px] font-mono text-stone-400 dark:text-stone-600 mt-auto">
          ENCRYPTED // SHA-256
        </div>
      </TiltCard>

      <TiltCard className="h-64 flex flex-col justify-between">
        <div>
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
            <TrendingUp className="h-5 w-5 text-blue-500" />
          </div>
          <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100" style={{ transform: "translateZ(40px)" }}>
            Real-time Insights
          </h3>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-2 leading-relaxed" style={{ transform: "translateZ(20px)" }}>
            Monitor your components and interactions on the fly with built-in analytics callbacks.
          </p>
        </div>
        <div className="text-[10px] font-mono text-stone-400 dark:text-stone-600 mt-auto">
          LIVE METRICS // ACTIVE
        </div>
      </TiltCard>
    </div>
  );
};


