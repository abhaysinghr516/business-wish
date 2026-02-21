import React from "react";

export const BasicDivider: React.FC = () => (
  <div className="mx-auto max-w-3xl p-8 text-sm dark:text-neutral-300">
    <div className="font-medium tracking-wide text-neutral-900 dark:text-white mb-6">Top Section</div>
    <div className="w-full h-px bg-neutral-200/60 dark:bg-white/10 my-8"></div>
    <div className="font-medium tracking-wide text-neutral-900 dark:text-white mt-6">Bottom Section</div>
  </div>
);

export const VerticalDivider: React.FC = () => (
  <div className="mx-auto max-w-3xl p-8 text-sm dark:text-neutral-300">
    <div className="flex items-center bg-neutral-50/50 dark:bg-neutral-900/30 rounded-3xl p-8 border border-neutral-100 dark:border-white/5">
      <div className="flex-1 pr-8 text-center font-medium tracking-wide text-neutral-900 dark:text-white">Left Section</div>
      <div className="w-px h-16 bg-neutral-200/60 dark:bg-white/10"></div>
      <div className="flex-1 pl-8 text-center font-medium tracking-wide text-neutral-900 dark:text-white">Right Section</div>
    </div>
  </div>
);

export const CustomDividerwithIcon: React.FC = () => (
  <div className="mx-auto max-w-3xl p-8 text-sm dark:text-neutral-300">
    <div className="font-medium tracking-wide text-neutral-900 dark:text-white mb-6 text-center">Top Section</div>
    <div className="my-8 flex items-center justify-center">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-white/20 to-transparent"></div>
      <div className="mx-6 p-2.5 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-white/10 shadow-sm transition-transform hover:scale-105">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          stroke="currentColor"
          className="h-5 w-5 text-neutral-400 dark:text-neutral-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
          />
        </svg>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-white/20 to-transparent"></div>
    </div>
    <div className="font-medium tracking-wide text-neutral-900 dark:text-white mt-6 text-center">Bottom Section</div>
  </div>
);

export const GradientDivider: React.FC = () => (
  <div className="mx-auto max-w-3xl p-8 text-sm dark:text-neutral-300">
    <div className="font-medium tracking-wide text-neutral-900 dark:text-white mb-6 text-center">Top Section</div>
    <div className="relative my-8">
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-200 dark:from-neutral-800 dark:via-neutral-500 dark:to-neutral-800 blur-[2px] opacity-40"></div>
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-600 to-transparent"></div>
    </div>
    <div className="font-medium tracking-wide text-neutral-900 dark:text-white mt-6 text-center">Bottom Section</div>
  </div>
);
