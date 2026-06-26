"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sliders, RefreshCw } from "lucide-react";

interface TrailImage {
  id: number;
  x: number;
  y: number;
  url: string;
  rotation: number;
}

interface ImageTrailProps {
  children?: React.ReactNode;
  images: string[];
  distanceThreshold?: number;
  maxImages?: number;
  decayDuration?: number;
  rotationRange?: number;
  imageWidth?: number | string;
  imageHeight?: number | string;
  containerClassName?: string;
  imageClassName?: string;
}

export const ImageTrail: React.FC<ImageTrailProps> = ({
  children,
  images,
  distanceThreshold = 80,
  maxImages = 8,
  decayDuration = 0.8,
  rotationRange = 15,
  imageWidth = 140,
  imageHeight = 140,
  containerClassName = "",
  imageClassName = "",
}) => {
  const [trailImages, setTrailImages] = useState<TrailImage[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const imageIndexRef = useRef(0);
  const imageIdCounterRef = useRef(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dx = x - lastPositionRef.current.x;
    const dy = y - lastPositionRef.current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const isFirst = lastPositionRef.current.x === 0 && lastPositionRef.current.y === 0;

    if (isFirst || distance >= distanceThreshold) {
      if (images.length === 0) return;
      const nextIndex = imageIndexRef.current % images.length;
      imageIndexRef.current += 1;

      const newId = imageIdCounterRef.current++;
      const rotation = (Math.random() - 0.5) * rotationRange;

      const newImage: TrailImage = {
        id: newId,
        x,
        y,
        url: images[nextIndex],
        rotation,
      };

      setTrailImages((prev) => {
        const updated = [...prev, newImage];
        if (updated.length > maxImages) {
          return updated.slice(updated.length - maxImages);
        }
        return updated;
      });

      lastPositionRef.current = { x, y };

      // Decay the image after the specified duration
      setTimeout(() => {
        setTrailImages((prev) => prev.filter((img) => img.id !== newId));
      }, decayDuration * 1000);
    }
  };

  const handleMouseLeave = () => {
    lastPositionRef.current = { x: 0, y: 0 };
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-stone-200/80 dark:border-stone-800 bg-stone-50 dark:bg-stone-950/40 select-none",
        containerClassName
      )}
    >
      <div className="relative z-10 pointer-events-none">{children}</div>

      <AnimatePresence>
        {trailImages.map((img) => (
          <motion.img
            key={img.id}
            src={img.url}
            alt="Image trail item"
            initial={{
              opacity: 0,
              scale: 0.3,
              x: img.x,
              y: img.y,
              translateX: "-50%",
              translateY: "-50%",
              rotate: img.rotation,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: img.rotation,
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
              filter: "blur(4px)",
              transition: { duration: 0.3 },
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 18,
            }}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: imageWidth,
              height: imageHeight,
              objectFit: "cover",
            }}
            className={cn(
              "pointer-events-none rounded-xl shadow-lg border border-white/20 dark:border-black/20",
              imageClassName
            )}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

/* ── Interactive Playground Demo ── */
const PRESETS = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?w=500&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=500&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?w=500&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&auto=format&fit=crop&q=80",
];

export const ImageTrailDemo: React.FC = () => {
  const [distanceThreshold, setDistanceThreshold] = useState(60);
  const [maxImages, setMaxImages] = useState(8);
  const [decayDuration, setDecayDuration] = useState(0.8);
  const [rotationRange, setRotationRange] = useState(20);
  const [imageWidth, setImageWidth] = useState(130);
  const [imageHeight, setImageHeight] = useState(130);

  const resetSettings = () => {
    setDistanceThreshold(60);
    setMaxImages(8);
    setDecayDuration(0.8);
    setRotationRange(20);
    setImageWidth(130);
    setImageHeight(130);
  };

  return (
    <div className="w-full max-w-4xl py-6 px-4 flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

        {/* Dynamic Trail Preview Area */}
        <div className="md:col-span-2 h-[400px] relative">
          <ImageTrail
            images={PRESETS}
            distanceThreshold={distanceThreshold}
            maxImages={maxImages}
            decayDuration={decayDuration}
            rotationRange={rotationRange}
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            containerClassName="w-full h-full cursor-crosshair flex items-center justify-center border border-dashed border-stone-300 dark:border-stone-800"
          >
            <div className="text-center p-6 max-w-sm pointer-events-none select-none">
              <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-widest bg-stone-200/50 dark:bg-stone-800/80 text-stone-600 dark:text-stone-300 rounded-full mb-3">
                Playground
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                Move Your Cursor
              </h3>
              <p className="text-sm text-stone-500 dark:text-stone-400 mt-2">
                Drag or hover over this container to see the premium animated photo trail trail behind your mouse.
              </p>
            </div>
          </ImageTrail>
        </div>

        {/* Control Dashboard */}
        <div className="flex flex-col justify-between border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 p-6 rounded-2xl shadow-sm">
          <div className="space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-stone-150 dark:border-stone-900">
              <span className="flex items-center gap-2 font-semibold text-stone-950 dark:text-stone-50 text-sm">
                <Sliders className="h-4 w-4 text-stone-500" />
                Settings
              </span>
              <button
                onClick={resetSettings}
                className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition-colors p-1"
                title="Reset Settings"
              >
                <RefreshCw className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Threshold Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-stone-500 dark:text-stone-400">Distance Threshold</span>
                <span className="text-stone-900 dark:text-stone-100 font-mono">{distanceThreshold}px</span>
              </div>
              <input
                type="range"
                min="30"
                max="150"
                value={distanceThreshold}
                onChange={(e) => setDistanceThreshold(Number(e.target.value))}
                className="w-full accent-stone-800 dark:accent-stone-200 cursor-pointer h-1 bg-stone-200 dark:bg-stone-850 rounded-lg appearance-none"
              />
            </div>

            {/* Max Images Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-stone-500 dark:text-stone-400">Max Active Images</span>
                <span className="text-stone-900 dark:text-stone-100 font-mono">{maxImages}</span>
              </div>
              <input
                type="range"
                min="3"
                max="15"
                value={maxImages}
                onChange={(e) => setMaxImages(Number(e.target.value))}
                className="w-full accent-stone-800 dark:accent-stone-200 cursor-pointer h-1 bg-stone-200 dark:bg-stone-850 rounded-lg appearance-none"
              />
            </div>

            {/* Decay Duration Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-stone-500 dark:text-stone-400">Decay Time</span>
                <span className="text-stone-900 dark:text-stone-100 font-mono">{decayDuration}s</span>
              </div>
              <input
                type="range"
                min="0.3"
                max="2.0"
                step="0.1"
                value={decayDuration}
                onChange={(e) => setDecayDuration(Number(e.target.value))}
                className="w-full accent-stone-800 dark:accent-stone-200 cursor-pointer h-1 bg-stone-200 dark:bg-stone-850 rounded-lg appearance-none"
              />
            </div>

            {/* Rotation Range Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-stone-500 dark:text-stone-400">Rotation Range</span>
                <span className="text-stone-900 dark:text-stone-100 font-mono">±{rotationRange}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="45"
                value={rotationRange}
                onChange={(e) => setRotationRange(Number(e.target.value))}
                className="w-full accent-stone-800 dark:accent-stone-200 cursor-pointer h-1 bg-stone-200 dark:bg-stone-850 rounded-lg appearance-none"
              />
            </div>

            {/* Image Width/Height Sliders */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-stone-500 dark:text-stone-400">Image Size</span>
                <span className="text-stone-950 dark:text-stone-50 font-mono">{imageWidth}px</span>
              </div>
              <input
                type="range"
                min="80"
                max="200"
                value={imageWidth}
                onChange={(e) => {
                  setImageWidth(Number(e.target.value));
                  setImageHeight(Number(e.target.value));
                }}
                className="w-full accent-stone-850 dark:accent-stone-200 cursor-pointer h-1 bg-stone-200 dark:bg-stone-850 rounded-lg appearance-none"
              />
            </div>
          </div>

          <div className="text-[10px] text-stone-400 dark:text-stone-600 mt-6 pt-3 border-t border-stone-100 dark:border-stone-900 font-mono">
            IMAGE_TRAIL // BUILD_v1.0
          </div>
        </div>

      </div>
    </div>
  );
};
