"use client";
import { motion } from "framer-motion";
import { ArrowRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

function CLISnippet() {
  const [copied, setCopied] = useState(false);
  const command = "npx @abhaysinghr516/business-wish add button";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="inline-flex w-full max-w-[calc(100vw-2rem)] items-center gap-3 overflow-hidden rounded-xl border border-stone-200/80 bg-white px-4 py-2.5 font-mono text-xs dark:border-white/[0.09] dark:bg-stone-900 sm:w-auto sm:max-w-full sm:text-sm">
      <span className="min-w-0 text-stone-600 dark:text-stone-300 whitespace-nowrap overflow-hidden text-ellipsis">
        {command}
      </span>
      <button
        onClick={handleCopy}
        className="flex-shrink-0 rounded-md p-1 text-stone-400 transition-colors hover:bg-stone-100 hover:text-stone-700 dark:hover:bg-stone-800 dark:hover:text-stone-200"
        aria-label="Copy command"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-green-500" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
      </button>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden border-b border-stone-200/80 bg-white px-4 dark:border-stone-800 dark:bg-stone-950 sm:px-6">

      {/* ── Background SVGs Constrained to max-w-6xl ── */}
      <div className="absolute inset-0 w-full max-w-5xl mx-auto">
        {/* ── TOP LOBE — pinned top-left ── */}
        <div
          className="pointer-events-none absolute -top-24 -left-20"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 150 150"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[520px] w-[520px] opacity-75 dark:opacity-55"
          >
            <defs>
              <linearGradient id="topGrad" x1="5" x2="146.8" y1="75" y2="75" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D80B0B" offset="0" />
                <stop stopColor="#FC2208" offset=".5225" />
                <stop stopColor="#FF3903" offset="1" />
              </linearGradient>
            </defs>
            {/* Only the top lobe path */}
            <path
              fill="url(#topGrad)"
              d="m5.1 49.7c1.1-14.7 10.1-29.2 21.1-36.6 8.1-5.5 17.7-10.2 31.1-10.6h87.8c1.1 0 1.9 1.1 1.4 2.1l-2.4 5.4c-8.1 18.1-21.4 37.3-45.2 40.6-6.4 0.9-10.3 0.8-13.4 0.8h-19.4c-6.8 0-9.9 1.2-14.4 5.1l-43.2 43.6c-1.4 1.3-3.5 0.5-3.5-1.4l0.1-49z"
            />
          </svg>
        </div>

        {/* ── BOTTOM LOBE — pinned bottom-right ── */}
        <div
          className="pointer-events-none absolute -bottom-24 -right-20"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 150 150"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[520px] w-[520px] opacity-75 dark:opacity-55"
          >
            <defs>
              <linearGradient id="botGrad" x1="3.5" x2="145.6" y1="99.85" y2="99.85" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E8120C" offset="0" />
                <stop stopColor="#FE2E08" offset=".5171" />
                <stop stopColor="#FF6107" offset="1" />
              </linearGradient>
            </defs>
            {/* Only the bottom lobe path */}
            <path
              fill="url(#botGrad)"
              d="m141.5 45.1-43.9 44.6c-3.8 3.5-5.5 4.2-11.5 4.2h-18c-3.1 0-7 0.1-13.3 1.4-18.7 3.8-35.4 17-47 39.1-1.6 3-4.2 8.7-4.3 11.3 0 1 0.7 2 1.7 2l82.1 0.1c10.6 0 22.8-1.9 31.2-7.2 12.3-7.3 27.1-24.6 27.1-49.1v-44.6c0-2.2-2.5-3.3-4.1-1.8z"
            />
          </svg>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.h1
          className="mb-6 max-w-full text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-stone-900 dark:text-stone-100 sm:text-6xl lg:text-[4.5rem]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <span className="block">Production-ready</span>
          <span className="gradient-text block font-bold">React components</span>
        </motion.h1>

        <motion.p
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-stone-500 dark:text-stone-400 sm:text-lg"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Stop building UI from scratch. Add accessible, customizable components
          directly to your codebase and ship your product faster.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-5"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <CLISnippet />
          <div className="flex flex-wrap justify-center">
            <Link href="/docs/components/accordion">
              <Button
                size="lg"
                className="rounded-xl bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700 dark:bg-white dark:text-stone-900 dark:hover:bg-stone-200"
              >
                Browse Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
