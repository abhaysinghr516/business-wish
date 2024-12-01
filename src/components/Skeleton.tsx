"use client";
import React from "react";

export const BasicSkeleton: React.FC = () => (
  <div className="max-w-3xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
    <div className="space-y-6">
      <div className="space-y-4 animate-pulse">
        <div className="flex space-x-3">
          <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full w-24"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full w-16"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full w-20"></div>
        </div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-full w-3/4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-full w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-full w-2/3"></div>
        </div>
        <div className="space-y-3 pt-4">
          <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full w-full"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full w-5/6"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full w-3/4"></div>
        </div>
      </div>
    </div>
  </div>
);

export const SkeletonLoadingforImageCard: React.FC = () => (
  <div className="max-w-md mx-auto overflow-hidden bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
    <div className="animate-pulse">
      <div className="h-48 bg-gray-200 dark:bg-gray-800"></div>
      <div className="p-6 space-y-4">
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-full w-2/3"></div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full w-full"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full w-5/6"></div>
        </div>
        <div className="flex justify-between pt-4">
          <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded-lg w-24"></div>
          <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded-lg w-16"></div>
        </div>
      </div>
    </div>
  </div>
);

export const SkeletonLoadingforUserProfile: React.FC = () => (
  <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
    <div className="animate-pulse">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-gray-200 dark:bg-gray-800 rounded-full border-2 border-white dark:border-gray-900"></div>
        </div>
        <div className="flex-1">
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-full w-48 mb-3"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full w-32"></div>
        </div>
        <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded-lg w-20"></div>
      </div>
      <div className="mt-6 space-y-2">
        <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full w-full"></div>
        <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full w-5/6"></div>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-20 bg-gray-200 dark:bg-gray-800 rounded-xl"
          ></div>
        ))}
      </div>
    </div>
  </div>
);

export const SkeletonwithLoadedContent: React.FC = () => (
  <div className="max-w-3xl mx-auto p-6">
    <style jsx>{`
      @keyframes shimmer {
        0% {
          background-position: -1000px 0;
        }
        100% {
          background-position: 1000px 0;
        }
      }
    `}</style>
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
      <div
        className="animate-pulse p-6"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.05) 50%, transparent 100%)",
          backgroundSize: "1000px 100%",
          animation: "shimmer 2s infinite linear",
        }}
      >
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative">
            <div className="w-14 h-14 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-gray-200 dark:bg-gray-800 rounded-full border-2 border-white dark:border-gray-900"></div>
          </div>
          <div className="flex-1">
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-full w-40 mb-2"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full w-24"></div>
          </div>
          <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded-lg w-20"></div>
        </div>
        <div className="space-y-3 mb-6">
          <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full w-full"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full w-5/6"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full w-4/6"></div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-16 bg-gray-200 dark:bg-gray-800 rounded-xl"
            ></div>
          ))}
        </div>
      </div>
      <div className="p-6 border-t border-gray-100 dark:border-gray-800">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Your Content
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  </div>
);
