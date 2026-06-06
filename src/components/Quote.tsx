"use client";

import React from "react";
import { Quote as QuoteIcon } from "lucide-react";

interface QuoteProps {
  text: string;
  author: string;
  role?: string;
  company?: string;
  avatarUrl?: string;
  accentColor?: string; // e.g. '#FF3903'
}
// --- CLEAN CARD QUOTE ---
export const CleanCardQuote: React.FC<QuoteProps> = ({
  text = "Good design makes a product useful. It concentrates on certain criteria to not only be functional, but also psychological and aesthetic.",
  author = "Dieter Rams",
  role = "Legendary Industrial Designer",
  company = "Braun",
  avatarUrl,
}) => {
  // Fallback avatar initials
  const initials = author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="w-full max-w-xl mx-auto my-6 p-6 sm:p-8 bg-stone-50 dark:bg-stone-900/40 border border-stone-200/50 dark:border-stone-850 rounded-2xl transition-all duration-300 hover:border-stone-300/80 dark:hover:border-stone-800">
      <div className="space-y-5">
        <QuoteIcon className="h-6 w-6 text-[#FF3903] opacity-80" strokeWidth={1.5} />
        
        <p className="text-sm sm:text-base text-stone-750 dark:text-stone-300 leading-relaxed font-normal">
          {text}
        </p>

        <div className="flex items-center gap-3.5 pt-2 border-t border-stone-200/40 dark:border-stone-800/40">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={author}
              className="h-10 w-10 rounded-full object-cover border border-stone-200 dark:border-stone-800"
            />
          ) : (
            <div className="h-10 w-10 rounded-xl bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-xs font-semibold text-stone-700 dark:text-stone-300 uppercase select-none">
              {initials}
            </div>
          )}
          <div className="text-left">
            <h5 className="text-sm font-semibold text-stone-900 dark:text-stone-100 leading-none">
              {author}
            </h5>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-none">
              {role} {company && `• ${company}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- AUTHOR PULLQUOTE ---
export const AuthorPullquote: React.FC<QuoteProps> = ({
  text = "Typography is the detail and the synthesis of a visual concept. When details are handled properly, the concept comes alive.",
  author = "Emil Ruder",
  role = "Swiss Typographer",
  avatarUrl,
}) => {
  const initials = author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="w-full max-w-2xl mx-auto my-6 border-y border-stone-200/80 dark:border-stone-850/80 py-6 sm:py-8 px-4 transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
        {/* Author info column */}
        <div className="md:col-span-1 flex md:flex-col items-center md:items-start text-left gap-3 md:gap-2">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={author}
              className="h-9 w-9 rounded-full object-cover"
            />
          ) : (
            <div className="h-9 w-9 rounded-full bg-[#FF3903]/10 dark:bg-[#FF3903]/20 flex items-center justify-center text-xs font-semibold text-[#FF3903] uppercase">
              {initials}
            </div>
          )}
          <div>
            <h5 className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider">
              {author}
            </h5>
            <p className="text-[10px] text-stone-400 dark:text-stone-500 font-medium uppercase mt-0.5 leading-none">
              {role}
            </p>
          </div>
        </div>

        {/* Quote text column */}
        <div className="md:col-span-3 text-left">
          <p className="text-sm sm:text-base font-serif italic text-stone-800 dark:text-stone-250 leading-relaxed pl-0 md:pl-6 md:border-l border-stone-200 dark:border-stone-800">
            &ldquo;{text}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
};
