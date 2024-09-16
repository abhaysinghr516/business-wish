"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { createRoot } from "react-dom/client";
import { Smartphone, Monitor, Maximize2, Tablet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
      const iframeDoc = iframeElement?.contentDocument;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <body>
              <div id="root"></div>
            </body>
          </html>
        `);
        iframeDoc.close();

        const root = iframeDoc.getElementById("root");
        if (root) {
          const reactRoot = createRoot(root);
          reactRoot.render(<>{children}</>);
        }
      }
    },
    [children]
  );

  useEffect(() => {
    updateIframeContent(iframeRef.current);
  }, [updateIframeContent, view]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        updateIframeContent(fullViewIframeRef.current);
      }, 0);
    }
  }, [isOpen, updateIframeContent]);

  useEffect(() => {
    if (isOpen && fullViewIframeRef.current) {
      updateIframeContent(fullViewIframeRef.current);
    }
  }, [fullView, updateIframeContent, isOpen]);

  const getViewportDimensions = (viewType: ViewType | FullViewType) => {
    switch (viewType) {
      case "mobile":
        return { width: 375, height: 667 };
      case "tablet":
        return { width: 768, height: 1024 };
      default:
        return { width: 1280, height: 720 };
    }
  };

  const viewDimensions = getViewportDimensions(view);
  const fullViewDimensions = getViewportDimensions(fullView);

  const ViewToggle: React.FC<{
    currentView: ViewType;
    setView: (view: ViewType) => void;
  }> = ({ currentView, setView }) => (
    <div className="flex space-x-2">
      <Button
        onClick={() => setView("desktop")}
        variant={currentView === "desktop" ? "default" : "outline"}
        size="sm"
      >
        <Monitor className="mr-2 h-4 w-4" />
        Desktop
      </Button>
      <Button
        onClick={() => setView("mobile")}
        variant={currentView === "mobile" ? "default" : "outline"}
        size="sm"
      >
        <Smartphone className="mr-2 h-4 w-4" />
        Mobile
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
        <Monitor className="mr-2 h-4 w-4" />
        Desktop
      </Button>
      <Button
        onClick={() => setView("tablet")}
        variant={currentView === "tablet" ? "default" : "outline"}
        size="sm"
      >
        <Tablet className="mr-2 h-4 w-4" />
        Tablet
      </Button>
      <Button
        onClick={() => setView("mobile")}
        variant={currentView === "mobile" ? "default" : "outline"}
        size="sm"
      >
        <Smartphone className="mr-2 h-4 w-4" />
        Mobile
      </Button>
    </div>
  );

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex space-x-2 items-center">
        <ViewToggle currentView={view} setView={setView} />
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Maximize2 className="mr-2 h-4 w-4" />
              Full View
            </Button>
          </DialogTrigger>
          <DialogContent className="w-screen h-screen max-w-full max-h-full p-0">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b">
                <FullViewToggle currentView={fullView} setView={setFullView} />
              </div>
              <div className="flex-grow overflow-auto p-4 flex justify-center items-start">
                <iframe
                  ref={fullViewIframeRef}
                  className="border border-gray-300 rounded-lg w-full h-full"
                  style={{
                    maxWidth: fullViewDimensions.width,
                    maxHeight: fullViewDimensions.height,
                  }}
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="w-full overflow-hidden" style={{ height: "405px" }}>
        <iframe
          ref={iframeRef}
          className="border border-gray-300 rounded-lg"
          width={viewDimensions.width}
          height={viewDimensions.height}
          style={{
            transformOrigin: "top left",
            transform: `scale(${Math.min(
              720 / viewDimensions.width,
              405 / viewDimensions.height
            )})`,
          }}
        />
      </div>
    </div>
  );
};

export default Preview;
