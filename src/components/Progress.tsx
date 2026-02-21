"use client";
import React, { useState, useEffect } from "react";

export const BasicProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(65), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto my-8">
      <div className="h-1.5 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-neutral-900 dark:bg-white rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export const ProgressWithLabel: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(82), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto my-8 mt-12">
      <div className="relative h-2 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute -top-8 right-0 translate-x-1/2">
            <span className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-[11px] font-bold px-2 py-1 rounded-md shadow-sm">
              {progress}%
            </span>
            <div className="w-2 h-2 bg-neutral-900 dark:bg-white rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const AnimatedProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto my-8">
      <div className="flex justify-between items-end mb-2">
        <span className="text-[13px] font-medium text-neutral-600 dark:text-neutral-400">Uploading files...</span>
        <span className="text-[13px] font-semibold text-neutral-900 dark:text-white">{progress}%</span>
      </div>
      <div className="h-2 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden relative">
        <div
          className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
          style={{ width: `${progress}%` }}
        >
          {/* Animated shimmer overlay */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
        </div>
      </div>
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export const CircularProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const size = 120;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => setProgress(75), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center my-8">
      <div className="relative" style={{ width: size, height: size }}>
        {/* Background Circle */}
        <svg className="w-full h-full -rotate-90" viewBox={`0 0 ${size} ${size}`}>
          <circle
            className="text-neutral-100 dark:text-neutral-800"
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          {/* Progress Circle */}
          <circle
            className="text-neutral-900 dark:text-white transition-all duration-1000 ease-out"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
        </svg>
        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-semibold text-neutral-900 dark:text-white tracking-tighter">
            {progress}<span className="text-lg text-neutral-400">%</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export const SegmentsProgress: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 4;

  useEffect(() => {
    const timer = setTimeout(() => setCurrentStep(2), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto my-8">
      <div className="flex justify-between items-end mb-3">
        <span className="text-[13px] font-medium text-neutral-600 dark:text-neutral-400">Account Setup</span>
        <span className="text-[13px] font-semibold text-neutral-900 dark:text-white">Step {currentStep + 1} of {totalSteps}</span>
      </div>
      <div className="flex items-center justify-between gap-2">
        {[...Array(totalSteps)].map((_, i) => (
          <div key={i} className="h-1.5 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ease-out ${
                i <= currentStep ? "bg-neutral-900 dark:bg-white w-full" : "w-0"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const IndeterminateProgress: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto my-8">
      <div className="h-1 w-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden relative rounded-full">
        <div className="absolute top-0 h-full bg-neutral-900 dark:bg-white w-1/3 rounded-full animate-[indeterminate_1.5s_infinite_ease-in-out]" />
      </div>
      <style>{`
        @keyframes indeterminate {
          0% { left: -35%; right: 100%; }
          60% { left: 100%; right: -90%; }
          100% { left: 100%; right: -90%; }
        }
      `}</style>
    </div>
  );
};
