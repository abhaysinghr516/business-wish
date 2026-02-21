"use client";

import React from "react";
import { Loader2 } from "lucide-react";

export const Loaders: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-12 p-12 bg-white dark:bg-neutral-950 rounded-3xl border border-neutral-200/50 dark:border-white/10 shadow-sm">
    <div className="flex flex-col items-center justify-center space-y-4">
      <LucideSpinner />
      <span className="text-[13px] text-neutral-500 font-medium">Spinner</span>
    </div>
    <div className="flex flex-col items-center justify-center space-y-4">
      <MinimalRingLoader />
      <span className="text-[13px] text-neutral-500 font-medium">Ring</span>
    </div>
    <div className="flex flex-col items-center justify-center space-y-4">
      <DotsBounceLoader />
      <span className="text-[13px] text-neutral-500 font-medium">Dots</span>
    </div>
    <div className="flex flex-col items-center justify-center space-y-4">
      <PulseLoader />
      <span className="text-[13px] text-neutral-500 font-medium">Pulse</span>
    </div>
    <div className="flex flex-col items-center justify-center space-y-4">
      <WaveLoader />
      <span className="text-[13px] text-neutral-500 font-medium">Wave</span>
    </div>
    <div className="flex flex-col items-center justify-center space-y-4">
      <GradientRingLoader />
      <span className="text-[13px] text-neutral-500 font-medium">Gradient Rings</span>
    </div>
    <div className="flex flex-col items-center justify-center space-y-4">
      <SkeletonLoader />
      <span className="text-[13px] text-neutral-500 font-medium">Skeleton</span>
    </div>
  </div>
);

export function LucideSpinner() {
  return (
    <div role="status" className="flex items-center justify-center">
      <Loader2 className="w-6 h-6 text-neutral-900 dark:text-white animate-spin" strokeWidth={2} />
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export function MinimalRingLoader() {
  return (
    <div role="status" className="relative w-6 h-6">
      <svg className="animate-spin w-full h-full text-neutral-300 dark:text-neutral-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        {/* Background track */}
        <circle cx="12" cy="12" r="10" strokeOpacity="1" />
        {/* Animated segment */}
        <path
          className="text-neutral-900 dark:text-white"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 12 2 a 10 10 0 0 1 10 10"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export function DotsBounceLoader() {
  return (
    <div className="flex items-center justify-center space-x-1.5" role="status">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-2 h-2 bg-neutral-900 dark:bg-white rounded-full animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        ></div>
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export function PulseLoader() {
  return (
    <div role="status" className="flex items-center justify-center">
      <div className="w-8 h-8 bg-neutral-900 dark:bg-white rounded-full animate-pulse opacity-20"></div>
      <div className="absolute w-4 h-4 bg-neutral-900 dark:bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export function WaveLoader() {
  return (
    <div className="flex items-center justify-center space-x-1" role="status">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="w-1 bg-neutral-900 dark:bg-white rounded-full"
          style={{
            height: '24px',
            animation: `wave 1s ease-in-out ${i * 0.1}s infinite`,
          }}
        ></div>
      ))}
      <span className="sr-only">Loading...</span>
      <style>{`
        @keyframes wave {
          0%, 100% { transform: scaleY(0.4); opacity: 0.3; }
          50% { transform: scaleY(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export function GradientRingLoader() {
  return (
    <div role="status" className="relative flex items-center justify-center w-8 h-8">
       <div className="absolute w-full h-full border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
       <div className="absolute w-full h-full border-4 border-transparent border-b-purple-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
       <span className="sr-only">Loading...</span>
    </div>
  );
}

export function SkeletonLoader() {
  return (
    <div role="status" className="flex flex-col space-y-2 w-16">
      <div className="h-2 w-full bg-neutral-200 dark:bg-neutral-800 rounded-full animate-pulse"></div>
      <div className="h-2 w-3/4 bg-neutral-200 dark:bg-neutral-800 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
