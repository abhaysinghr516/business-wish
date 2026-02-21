"use client";

import { Check, CopyIcon } from "lucide-react";
import { useState } from "react";
import { trackComponentCopy } from "@/lib/analytics";

export default function Copy({ content }: { content: string }) {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(content);
    setIsCopied(true);

    const firstLine = content.split("\n")[0]?.trim() || "unknown";
    const componentName = firstLine.replace(/^(import|export|const|function)\s+/, "").slice(0, 50);
    trackComponentCopy(componentName);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center justify-center p-2 rounded-lg bg-neutral-100/80 hover:bg-neutral-200/80 dark:bg-neutral-800/50 dark:hover:bg-neutral-700/80 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white backdrop-blur-sm border border-neutral-200/50 dark:border-white/5 transition-all duration-200 active:scale-95"
      aria-label={isCopied ? "Copied!" : "Copy code"}
    >
      {isCopied ? (
        <Check className="w-4 h-4" />
      ) : (
        <CopyIcon className="w-4 h-4" />
      )}
    </button>
  );
}
