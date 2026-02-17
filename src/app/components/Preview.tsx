"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { createRoot } from "react-dom/client";
import {
  Smartphone,
  Monitor,
  Tablet,
  Maximize2,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
      <div className="relative border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-gray-950">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-2 sm:px-4 py-2 bg-gray-50/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 backdrop-blur-sm">
          {/* Viewport toggles — hidden on mobile */}
          <div className="hidden sm:flex items-center gap-1">
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
                  variant={view === v ? "default" : "ghost"}
                  size="sm"
                  className="h-8 px-2"
                >
                  <Icon className="h-3 w-3" />
                </Button>
              );
            })}
          </div>
          <div className="sm:hidden" />

          {/* Right-side actions */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-2 text-xs gap-1.5"
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
                  className="hidden sm:inline-flex h-8 px-2"
                >
                  <Maximize2 className="h-3 w-3" />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-screen h-screen max-w-full max-h-full p-0">
                <div className="flex flex-col h-full">
                  {/* Fullscreen toolbar */}
                  <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                    <div className="flex items-center gap-2">
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
                              variant={fullView === v ? "default" : "outline"}
                              size="sm"
                            >
                              <Icon className="mr-2 h-4 w-4" /> {label}
                            </Button>
                          );
                        }
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-1.5"
                      onClick={restartPreview}
                      title="Restart preview"
                    >
                      <RotateCcw className="h-4 w-4" />
                      <span>Restart</span>
                    </Button>
                  </div>

                  {/* Fullscreen iframe */}
                  <div className="flex-grow overflow-auto p-4 flex justify-center items-start">
                    {fullView === "desktop" ? (
                      <iframe
                        ref={fullViewIframeRef}
                        className="border border-gray-200 dark:border-gray-800 rounded-lg w-full h-full"
                        style={{ minHeight: "600px" }}
                      />
                    ) : (
                      <div className="flex justify-center items-start h-full">
                        <iframe
                          ref={fullViewIframeRef}
                          className="border border-gray-200 dark:border-gray-800 rounded-lg"
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
        <div className="p-2 sm:p-4 bg-gray-50 dark:bg-gray-900 overflow-hidden">
          {view === "desktop" ? (
            <div className="bg-white dark:bg-gray-950 rounded border border-gray-200 dark:border-gray-800 overflow-hidden">
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
                className="bg-white dark:bg-gray-950 rounded border border-gray-200 dark:border-gray-800 overflow-hidden flex-shrink-0"
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
