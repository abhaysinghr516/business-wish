"use client";

import React, { useState, useCallback } from "react";
import { RotateCcw } from "lucide-react";
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
      <div className="relative border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
        {/* Toolbar */}
        <div className="flex items-center justify-end px-3 py-2 bg-gray-50/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 backdrop-blur-sm">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-2.5 text-xs gap-1.5"
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
          className="bg-white dark:bg-gray-950 p-6 sm:p-8 flex items-center justify-center min-h-[200px] overflow-hidden"
        >
          <div className="w-full overflow-hidden" key={previewKey}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotionPreview;
