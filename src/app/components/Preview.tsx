"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { createRoot } from "react-dom/client";
import { Smartphone, Monitor, Maximize2, Tablet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ThemeToggle from "./theme-switch";

interface PreviewProps {
  children: React.ReactNode;
}

type ViewType = "desktop" | "tablet" | "mobile";
type FullViewType = "desktop" | "tablet" | "mobile";

const Preview: React.FC<PreviewProps> = ({ children }) => {
  const [view, setView] = useState<ViewType>("desktop");
  const [fullView, setFullView] = useState<FullViewType>("desktop");
  const [isOpen, setIsOpen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const fullViewIframeRef = useRef<HTMLIFrameElement>(null);

  const updateIframeContent = useCallback(
    (iframeElement: HTMLIFrameElement | null) => {
      if (!iframeElement) return;
      const iframeDoc = iframeElement.contentDocument;
      const iframeWindow = iframeElement.contentWindow;
      if (iframeDoc && iframeWindow) {
        const htmlContent = `
          <!DOCTYPE html>
          <html>
            <head>
              <script src="https://cdn.tailwindcss.com"></script>
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
                  0% {
                    background-position: -1000px 0;
                  }
                  100% {
                    background-position: 1000px 0;
                  }
                }
                @media (prefers-color-scheme: dark) {
                  body {
                    background-color: #020817;
                    color: #ffffff;
                  }
                }
                @media (prefers-color-scheme: light) {
                  body {
                    background-color: #ffffff;
                    color: #000000;
                  }
                }
                body, html {
                  margin:0;
                  padding:0;
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
      }
    },
    [children]
  );

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) updateIframeContent(iframe);
  }, [updateIframeContent, view]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        const fullViewIframe = fullViewIframeRef.current;
        if (fullViewIframe) updateIframeContent(fullViewIframe);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isOpen, updateIframeContent, fullView]);

  const getViewportDimensions = (viewType: ViewType | FullViewType) => {
    switch (viewType) {
      case "mobile":
        return { width: 375, height: 600 };
      case "tablet":
        return { width: 768, height: 600 };
      default:
        return { width: "100%", height: 500 };
    }
  };

  const viewDimensions = getViewportDimensions(view);
  const fullViewDimensions = getViewportDimensions(fullView);

  const ViewToggle: React.FC<{
    currentView: ViewType;
    setView: (view: ViewType) => void;
  }> = ({ currentView, setView }) => (
    <div className="flex space-x-1">
      <Button
        onClick={() => setView("desktop")}
        variant={currentView === "desktop" ? "default" : "ghost"}
        size="sm"
        className="h-8 px-2"
      >
        <Monitor className="h-3 w-3" />
      </Button>
      <Button
        onClick={() => setView("tablet")}
        variant={currentView === "tablet" ? "default" : "ghost"}
        size="sm"
        className="h-8 px-2"
      >
        <Tablet className="h-3 w-3" />
      </Button>
      <Button
        onClick={() => setView("mobile")}
        variant={currentView === "mobile" ? "default" : "ghost"}
        size="sm"
        className="h-8 px-2"
      >
        <Smartphone className="h-3 w-3" />
      </Button>
    </div>
  );

  const FullViewToggle: React.FC<{
    currentView: FullViewType;
    setView: (view: FullViewType) => void;
  }> = ({ currentView, setView }) => (
    <div className="flex space-x-2">
      <Button
        onClick={() => setView("desktop")}
        variant={currentView === "desktop" ? "default" : "outline"}
        size="sm"
      >
        <Monitor className="mr-2 h-4 w-4" /> Desktop
      </Button>
      <Button
        onClick={() => setView("tablet")}
        variant={currentView === "tablet" ? "default" : "outline"}
        size="sm"
      >
        <Tablet className="mr-2 h-4 w-4" /> Tablet
      </Button>
      <Button
        onClick={() => setView("mobile")}
        variant={currentView === "mobile" ? "default" : "outline"}
        size="sm"
      >
        <Smartphone className="mr-2 h-4 w-4" /> Mobile
      </Button>
    </div>
  );

  return (
    <div className="not-prose my-6">
      <div className="relative border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-white dark:bg-gray-950">
        {/* Header with controls */}
        <div className="flex items-center justify-between px-2 sm:px-4 py-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 overflow-x-auto">
          {/* Hide view toggle buttons on mobile screens */}
          <div className="hidden sm:flex items-center space-x-2 flex-shrink-0">
            <ViewToggle currentView={view} setView={setView} />
          </div>
          {/* Show empty div on mobile to maintain layout */}
          <div className="sm:hidden"></div>
          <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
            {/* Hide fullscreen button on mobile screens */}
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
                  <div className="flex justify-between items-center p-4 border-b">
                    <FullViewToggle
                      currentView={fullView}
                      setView={setFullView}
                    />
                  </div>
                  <div className="flex-grow overflow-auto p-4 flex justify-center items-start">
                    {fullView === "desktop" ? (
                      <iframe
                        ref={fullViewIframeRef}
                        className="border border-gray-200 dark:border-gray-800 rounded-lg w-full h-full"
                        style={{
                          minHeight: "600px",
                        }}
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
            <ThemeToggle />
          </div>
        </div>

        {/* Preview content */}
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
                  maxWidth: view === "mobile" ? "calc(100vw - 2rem)" : "100%",
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
