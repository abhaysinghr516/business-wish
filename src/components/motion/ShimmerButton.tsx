"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps {
  children: React.ReactNode;
  className?: string;
  shimmerColor?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  onClick?: () => void;
}

export const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  children,
  className = "",
  shimmerColor = "rgba(255,255,255,0.12)",
  borderRadius = "10px",
  shimmerDuration = "2.5s",
  background = "#1d1d1f",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap px-5 py-2.5 text-[14px] font-medium text-white transition-transform duration-200 active:scale-[0.98]",
        className
      )}
      style={{ borderRadius }}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius }}
      >
        <div className="absolute inset-0" style={{ background }} />
        <div
          className="absolute inset-0 animate-shimmer-slide"
          style={{
            background: `linear-gradient(120deg, transparent 30%, ${shimmerColor} 45%, ${shimmerColor} 55%, transparent 70%)`,
            backgroundSize: "250% 100%",
            animationDuration: shimmerDuration,
          }}
        />
      </div>
      <span className="relative z-10">{children}</span>
      <style jsx>{`
        @keyframes shimmer-slide {
          from { background-position: 250% 0; }
          to { background-position: -250% 0; }
        }
        .animate-shimmer-slide {
          animation: shimmer-slide 2.5s ease-in-out infinite;
        }
      `}</style>
    </button>
  );
};

export const ShimmerButtonDemo: React.FC = () => (
  <div className="flex items-center justify-center py-12 gap-4 flex-wrap">
    <ShimmerButton>Get started</ShimmerButton>
    <ShimmerButton background="#0071e3" shimmerColor="rgba(255,255,255,0.15)">
      Learn more
    </ShimmerButton>
    <ShimmerButton
      background="linear-gradient(135deg, #1d1d1f, #434343)"
      shimmerColor="rgba(255,255,255,0.1)"
      borderRadius="100px"
    >
      Try it free →
    </ShimmerButton>
  </div>
);
