"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { RefreshCw, Image as ImageIcon } from "lucide-react";

interface ScratchCardProps {
  children: React.ReactNode;
  className?: string;
  brushRadius?: number;
  finishPercent?: number;
  coverColor?: string;
  coverText?: string;
  coverImage?: string;
  coverGradient?: string[];
  onComplete?: () => void;
  onProgress?: (progress: number) => void;
}

export const ScratchCard: React.FC<ScratchCardProps> = ({
  children,
  className = "",
  brushRadius = 20,
  finishPercent = 50,
  coverColor = "#292524", // Stone-800
  coverText = "Scratch to Reveal",
  coverImage,
  coverGradient,
  onComplete,
  onProgress,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScratching, setIsScratching] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawText = () => {
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 13px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(coverText, canvas.width / 2, canvas.height / 2);
    };

    const drawNoiseAndStripes = () => {
      // Noise texture
      ctx.fillStyle = "rgba(255, 255, 255, 0.02)";
      for (let i = 0; i < canvas.width; i += 4) {
        for (let j = 0; j < canvas.height; j += 4) {
          if (Math.random() > 0.5) {
            ctx.fillRect(i, j, 2, 2);
          }
        }
      }

      // Stripes texture
      ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
      ctx.lineWidth = 1.5;
      for (let i = -canvas.height; i < canvas.width; i += 8) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i + canvas.height, canvas.height);
        ctx.stroke();
      }
    };

    const initializeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      canvas.width = rect.width;
      canvas.height = rect.height;

      if (coverImage) {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = coverImage;
        img.onload = () => {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          drawText();
        };
      } else if (coverGradient && coverGradient.length >= 2) {
        const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        grad.addColorStop(0, coverGradient[0]);
        grad.addColorStop(1, coverGradient[1]);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawNoiseAndStripes();
        drawText();
      } else {
        ctx.fillStyle = coverColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawNoiseAndStripes();
        drawText();
      }
    };

    initializeCanvas();
    window.addEventListener("resize", initializeCanvas);
    return () => window.removeEventListener("resize", initializeCanvas);
  }, [coverColor, coverText, coverImage, coverGradient]);

  const draw = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, brushRadius, 0, Math.PI * 2);
    ctx.fill();

    checkPercentage();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsScratching(true);
    draw(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isScratching || isCompleted) return;
    draw(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    setIsScratching(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsScratching(true);
    const touch = e.touches[0];
    draw(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isScratching || isCompleted) return;
    const touch = e.touches[0];
    draw(touch.clientX, touch.clientY);
  };

  const checkPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas || isCompleted) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const imgData = ctx.getImageData(0, 0, width, height);
    const pixels = imgData.data;
    let transparentCount = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) {
        transparentCount++;
      }
    }

    const percentage = (transparentCount / (width * height)) * 100;
    if (onProgress) {
      onProgress(Math.round(percentage));
    }

    if (percentage >= finishPercent) {
      setIsCompleted(true);
      if (onComplete) onComplete();
    }
  };

  return (
    <div className={cn("relative overflow-hidden select-none touch-none rounded-2xl w-full", className)}>
      {/* Revealed Content */}
      <div className="w-full h-full bg-stone-50 dark:bg-stone-900/60 p-6 flex flex-col items-center justify-center text-center">
        {children}
      </div>

      {/* Covering canvas layer */}
      <AnimatePresence>
        {!isCompleted && (
          <motion.canvas
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute inset-0 z-20 cursor-crosshair w-full h-full block"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── Upgraded Single Example Demo ── */
export const ScratchCardDemo: React.FC = () => {
  const [key, setKey] = useState(0);
  const [progress, setProgress] = useState(0);
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="flex flex-col gap-4 py-8 w-full max-w-sm px-4 items-center">
      <div className="w-full border border-stone-200 dark:border-stone-850 bg-white dark:bg-stone-900 p-5 rounded-2xl shadow-sm flex flex-col justify-between items-center gap-4">
        <div className="text-center w-full">
          <span className="text-[10px] text-stone-400 font-mono font-semibold tracking-wider uppercase">
            Textured Card Reveal
          </span>
          <div className="w-full h-44 rounded-xl overflow-hidden mt-3 relative border border-stone-100 dark:border-stone-850">
            <ScratchCard
              key={key}
              coverText="Wipe screen to view details"
              coverColor="#1c1917" // Charcoal Stone-900
              brushRadius={22}
              finishPercent={40}
              onProgress={setProgress}
              onComplete={() => {
                setRevealed(true);
                setProgress(100);
              }}
              className="h-full"
            >
              <div className="flex flex-col items-center gap-1 text-stone-900 dark:text-white">
                <div className="w-8 h-8 rounded-full bg-sky-500/10 flex items-center justify-center mb-1">
                  <ImageIcon className="h-4 w-4 text-sky-500" />
                </div>
                <h5 className="text-xs font-bold font-mono">WORKSPACE ACCESS</h5>
                <p className="text-base font-extrabold tracking-tight mt-1 text-[#FF3903]">ADMIN PRIVILEGES</p>
                <p className="text-[9px] text-stone-400 mt-1">TOKEN // bw_auth_8f031b</p>
              </div>
            </ScratchCard>
          </div>
        </div>

        <div className="flex justify-between items-center w-full px-2 mt-2">
          <span className="text-xs font-mono text-stone-500">
            Scratched: <span className="font-bold text-[#FF3903]">{progress}%</span>
          </span>
          <button
            onClick={() => {
              setKey(prev => prev + 1);
              setProgress(0);
              setRevealed(false);
            }}
            className="flex items-center gap-1 px-2.5 py-1 text-[10px] font-semibold border border-stone-200 dark:border-stone-750 bg-stone-50 dark:bg-stone-800 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-750 transition-colors"
          >
            <RefreshCw className="h-2.5 w-2.5" />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
