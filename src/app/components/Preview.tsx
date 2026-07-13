"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { createRoot } from "react-dom/client";
import {
  Smartphone,
  Monitor,
  Tablet,
  Maximize2,
  RotateCcw,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface PreviewProps {
  children: React.ReactNode;
}

type ViewType = "desktop" | "tablet" | "mobile";

const Preview: React.FC<PreviewProps> = ({ children }) => {
  const [view, setView] = useState<ViewType>("desktop");
  const [fullView, setFullView] = useState<ViewType>("desktop");
  const [isOpen, setIsOpen] = useState(false);
  const [previewKey, setPreviewKey] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const fullViewIframeRef = useRef<HTMLIFrameElement>(null);

  const restartPreview = useCallback(() => {
    setPreviewKey((prev) => prev + 1);
  }, []);

  const updateIframeContent = useCallback(
    (iframeElement: HTMLIFrameElement | null) => {
      if (!iframeElement) return;
      const iframeDoc = iframeElement.contentDocument;
      if (!iframeDoc) return;

      const htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <script src="https://cdn.tailwindcss.com"><\/script>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              @keyframes pulse {
                0%, 100% { transform: scaleY(1); }
                50% { transform: scaleY(0.4); }
              }
              @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
              }
              @keyframes slide {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(400%); }
              }
              @keyframes rotate {
                0% { transform: perspective(120px) rotateX(0deg) rotateY(0deg); }
                50% { transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg); }
                100% { transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg); }
              }
              @keyframes hourglass {
                0% { transform: rotate(0deg); border-radius: 50%; }
                25% { transform: rotate(180deg); border-radius: 4px; }
                50% { transform: rotate(180deg); border-radius: 50%; }
                75% { transform: rotate(360deg); border-radius: 4px; }
                100% { transform: rotate(360deg); border-radius: 50%; }
              }
              @keyframes shimmer {
                0% { background-position: -1000px 0; }
                100% { background-position: 1000px 0; }
              }
              @media (prefers-color-scheme: dark) {
                body { background-color: #020817; color: #ffffff; }
              }
              @media (prefers-color-scheme: light) {
                body { background-color: #ffffff; color: #000000; }
              }
              body, html {
                margin: 0;
                padding: 0;
                animation: none !important;
              }
              /* Hide scrollbar utility */
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
              /* Custom scrollbars inside the iframe */
              * {
                scrollbar-width: thin;
                scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
              }
              *::-webkit-scrollbar {
                width: 8px;
                height: 8px;
              }
              *::-webkit-scrollbar-track {
                background: var(--scrollbar-track);
                border-radius: 10px;
              }
              *::-webkit-scrollbar-thumb {
                background-color: var(--scrollbar-thumb);
                border-radius: 20px;
                border: 2px solid var(--scrollbar-track);
                transition: background-color 0.2s ease;
              }
              *::-webkit-scrollbar-thumb:hover {
                background-color: var(--scrollbar-thumb-hover);
              }
              /* Theme variable definitions for iframe */
              :root {
                --scrollbar-track: rgba(0, 0, 0, 0.03);
                --scrollbar-thumb: rgba(0, 0, 0, 0.15);
                --scrollbar-thumb-hover: rgba(0, 0, 0, 0.25);
              }
              .dark {
                --scrollbar-track: rgba(0, 0, 0, 0.2);
                --scrollbar-thumb: rgba(255, 255, 255, 0.15);
                --scrollbar-thumb-hover: rgba(255, 255, 255, 0.25);
              }
            </style>
          </head>
          <body>
            <div id="root"></div>
          </body>
        </html>
      `;
      iframeDoc.open();
      iframeDoc.write(htmlContent);
      iframeDoc.close();

      iframeElement.onload = () => {
        // Sync theme class from parent document
        const isDark = document.documentElement.classList.contains("dark");
        if (isDark) {
          iframeDoc.documentElement.classList.add("dark");
        } else {
          iframeDoc.documentElement.classList.remove("dark");
        }

        setTimeout(() => {
          const root = iframeDoc.getElementById("root");
          if (root) {
            const reactRoot = createRoot(root);
            reactRoot.render(<>{children}</>);
          }
        }, 0);
      };
    },
    [children]
  );

  // Re-render inline iframe when view or previewKey changes
  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) updateIframeContent(iframe);
  }, [updateIframeContent, view, previewKey]);

  // Re-render fullscreen iframe when dialog opens or fullView/previewKey changes
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        const fullViewIframe = fullViewIframeRef.current;
        if (fullViewIframe) updateIframeContent(fullViewIframe);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isOpen, updateIframeContent, fullView, previewKey]);

  const getViewportDimensions = (viewType: ViewType) => {
    switch (viewType) {
      case "mobile":
        return { width: 375, height: 600 };
      case "tablet":
        return { width: 768, height: 600 };
      default:
        return { width: "100%" as const, height: 500 };
    }
  };

  const viewDimensions = getViewportDimensions(view);
  const fullViewDimensions = getViewportDimensions(fullView);

  return (
    <div className="not-prose my-6">
      <div className="relative overflow-hidden rounded-[18px] border border-neutral-200/80 bg-white dark:border-white/[0.08] dark:bg-neutral-950">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-3 border-b border-neutral-200/80 bg-neutral-50/70 px-3 py-2.5 dark:border-white/[0.07] dark:bg-white/[0.03] sm:px-4">
          {/* Viewport toggles — hidden on mobile */}
          <div className="hidden items-center gap-2 sm:flex">
            <Eye className="h-3.5 w-3.5 text-neutral-400 dark:text-neutral-500" />
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">Preview</span>
          </div>
          <div className="hidden rounded-lg border border-neutral-200 bg-white p-0.5 sm:flex dark:border-white/[0.08] dark:bg-neutral-900">
            {(["desktop", "tablet", "mobile"] as ViewType[]).map((v) => {
              const Icon =
                v === "desktop"
                  ? Monitor
                  : v === "tablet"
                  ? Tablet
                  : Smartphone;
              return (
                <Button
                  key={v}
                  onClick={() => setView(v)}
                  variant="ghost"
                  size="sm"
                  className={`h-7 w-8 rounded-md px-0 ${view === v ? "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200" : "text-neutral-400 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-white"}`}
                  aria-label={`${v} viewport`}
                >
                  <Icon className="h-3 w-3" />
                </Button>
              );
            })}
          </div>
          <div className="sm:hidden text-xs font-medium text-neutral-500 dark:text-neutral-400">Preview</div>

          {/* Right-side actions */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="h-7 gap-1.5 rounded-md px-2 text-xs text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              onClick={restartPreview}
              title="Restart preview"
            >
              <RotateCcw className="h-3 w-3" />
              <span className="hidden sm:inline">Restart</span>
            </Button>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden h-7 rounded-md px-2 text-neutral-500 hover:text-neutral-900 sm:inline-flex dark:text-neutral-400 dark:hover:text-white"
                  aria-label="Open full-screen preview"
                >
                  <Maximize2 className="h-3 w-3" />
                </Button>
              </DialogTrigger>
              <DialogContent className="h-screen max-h-full w-screen max-w-full border-0 bg-white p-0 dark:bg-neutral-950">
                <DialogTitle className="sr-only">Full-screen component preview</DialogTitle>
                <div className="flex flex-col h-full">
                  {/* Fullscreen toolbar */}
                  <div className="flex items-center justify-between border-b border-neutral-200/80 bg-neutral-50/70 px-4 py-3 dark:border-white/[0.07] dark:bg-white/[0.03]">
                    <div className="flex items-center gap-1 rounded-lg border border-neutral-200 bg-white p-0.5 dark:border-white/[0.08] dark:bg-neutral-900">
                      {(["desktop", "tablet", "mobile"] as ViewType[]).map(
                        (v) => {
                          const Icon =
                            v === "desktop"
                              ? Monitor
                              : v === "tablet"
                              ? Tablet
                              : Smartphone;
                          const label =
                            v.charAt(0).toUpperCase() + v.slice(1);
                          return (
                            <Button
                              key={v}
                              onClick={() => setFullView(v)}
                              variant="ghost"
                              size="sm"
                              className={`h-8 rounded-md px-3 text-xs ${fullView === v ? "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200" : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"}`}
                            >
                              <Icon className="mr-1.5 h-3.5 w-3.5" /> {label}
                            </Button>
                          );
                        }
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 gap-1.5 rounded-md px-3 text-xs text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                      onClick={restartPreview}
                      title="Restart preview"
                    >
                      <RotateCcw className="h-4 w-4" />
                      <span>Restart</span>
                    </Button>
                  </div>

                  {/* Fullscreen iframe */}
                  <div className="flex-grow overflow-auto bg-neutral-100/70 p-4 dark:bg-black/20 flex justify-center items-start">
                    {fullView === "desktop" ? (
                      <iframe
                        ref={fullViewIframeRef}
                        className="h-full w-full rounded-xl border border-neutral-200 bg-white dark:border-white/[0.08] dark:bg-neutral-950"
                        style={{ minHeight: "600px" }}
                      />
                    ) : (
                      <div className="flex justify-center items-start h-full">
                        <iframe
                          ref={fullViewIframeRef}
                          className="rounded-xl border border-neutral-200 bg-white dark:border-white/[0.08] dark:bg-neutral-950"
                          style={{
                            width: fullViewDimensions.width,
                            height: "80vh",
                            minHeight: "600px",
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Preview content with iframe */}
        <div className="overflow-hidden bg-neutral-100/70 p-2.5 dark:bg-black/20 sm:p-4">
          {view === "desktop" ? (
            <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-white/[0.08] dark:bg-neutral-950">
              <iframe
                ref={iframeRef}
                className="w-full border-0"
                style={{
                  height: viewDimensions.height,
                  minHeight: "400px",
                }}
              />
            </div>
          ) : (
            <div className="flex justify-center overflow-x-auto">
              <div
                className="flex-shrink-0 overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-white/[0.08] dark:bg-neutral-950"
                style={{
                  width: view === "tablet" ? "768px" : "375px",
                  maxWidth:
                    view === "mobile" ? "calc(100vw - 2rem)" : "100%",
                  minWidth: view === "mobile" ? "320px" : "375px",
                }}
              >
                <iframe
                  ref={iframeRef}
                  className="w-full border-0"
                  style={{
                    height: viewDimensions.height,
                    minHeight: "400px",
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Preview;
