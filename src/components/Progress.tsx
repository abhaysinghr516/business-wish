"use client";
import React from "react";

const BasicProgress: React.FC = () => {
  return (
    <div className="max-w-lg mx-auto sm:max-w-sm lg:max-w-3xl my-4">
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full"
          style={{ width: "45%" }}
        ></div>
      </div>
    </div>
  );
};

const ProgressWithLabel: React.FC = () => {
  const percentage = 55;
  return (
    <div className="max-w-lg mx-auto sm:max-w-sm lg:max-w-3xl my-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
          Progress
        </span>
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const AnimatedProgress: React.FC = () => {
  const percentage = 75;
  return (
    <div className="max-w-lg mx-auto sm:max-w-sm lg:max-w-3xl my-4">
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export { BasicProgress, ProgressWithLabel, AnimatedProgress };
