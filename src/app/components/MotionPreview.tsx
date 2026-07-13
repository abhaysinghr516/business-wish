"use client";

import React, { useState, useCallback } from "react";
import { Eye, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MotionPreviewProps {
  children: React.ReactNode;
}

const MotionPreview: React.FC<MotionPreviewProps> = ({ children }) => {
  const [previewKey, setPreviewKey] = useState(0);

  const restartPreview = useCallback(() => {
    setPreviewKey((prev) => prev + 1);
  }, []);

  return (
    <div className="not-prose my-6">
      <div className="relative overflow-hidden rounded-[18px] border border-neutral-200/80 bg-white shadow-[0_18px_50px_-30px_rgba(0,0,0,0.22)] dark:border-white/[0.08] dark:bg-neutral-950 dark:shadow-none">
        {/* Toolbar */}
        <div className="flex items-center justify-between border-b border-neutral-200/80 bg-neutral-50/70 px-3 py-2.5 dark:border-white/[0.07] dark:bg-white/[0.03]">
          <div className="flex items-center gap-2">
            <Eye className="h-3.5 w-3.5 text-neutral-400 dark:text-neutral-500" />
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">Motion preview</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 gap-1.5 rounded-md px-2 text-xs text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            onClick={restartPreview}
            title="Restart animation"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Restart</span>
          </Button>
        </div>

        {/* Preview content — hide all nested scrollbars */}
        <style>{`
          [data-motion-preview] *::-webkit-scrollbar { display: none !important; }
          [data-motion-preview] * { scrollbar-width: none !important; -ms-overflow-style: none !important; }
        `}</style>
        <div
          data-motion-preview
          className="flex min-h-[220px] items-center justify-center overflow-hidden bg-neutral-100/70 p-6 dark:bg-black/20 sm:p-8"
        >
          <div className="w-full overflow-hidden rounded-xl border border-neutral-200 bg-white p-4 dark:border-white/[0.08] dark:bg-neutral-950 sm:p-6" key={previewKey}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotionPreview;
