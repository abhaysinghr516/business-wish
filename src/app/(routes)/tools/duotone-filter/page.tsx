"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, Download, Upload, ImageIcon, Paintbrush, Contrast } from "lucide-react";

interface DuotoneConfig {
  highlightColor: string;
  shadowColor: string;
  contrast: number; // 0-200%
  brightness: number; // 0-200%
  blendMode: string; // the way we apply the color map
}

const presetPalettes = [
  { name: "Spotify Green", h: "#1db954", s: "#191414" },
  { name: "Crimson Night", h: "#ff4b4b", s: "#1a0b2e" },
  { name: "Cyberpunk", h: "#00ffff", s: "#ff00ff" },
  { name: "Sunset Gold", h: "#ffb703", s: "#023047" },
  { name: "Vintage Sepia", h: "#e8d8c3", s: "#4a3c31" },
  { name: "Acid Wash", h: "#ccff00", s: "#3300cc" },
  { name: "Mint Chocolate", h: "#98ff98", s: "#3b2f2f" },
  { name: "Monochrome", h: "#ffffff", s: "#000000" },
];

export default function DuotoneFilterGenerator() {
  const [config, setConfig] = useState<DuotoneConfig>({
    highlightColor: "#1db954",
    shadowColor: "#191414",
    contrast: 120,
    brightness: 100,
    blendMode: "color", // 'color', 'multiply', 'screen' based on what looks best for simple mapping
  });

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const outputCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Load default image on mount
  useEffect(() => {
    setImageSrc("https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop");
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const applyDuotone = useCallback((targetCanvas: HTMLCanvasElement, forExport = false) => {
    if (!imgRef.current) return;
    
    const ctx = targetCanvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const img = imgRef.current;
    
    // Set Dimensions
    let width = img.width;
    let height = img.height;
    
    const MAX_PREVIEW_SIZE = 1200;
    if (!forExport) {
        if (width > MAX_PREVIEW_SIZE || height > MAX_PREVIEW_SIZE) {
            const ratio = Math.min(MAX_PREVIEW_SIZE / width, MAX_PREVIEW_SIZE / height);
            width = Math.round(width * ratio);
            height = Math.round(height * ratio);
        }
    }

    targetCanvas.width = width;
    targetCanvas.height = height;

    // 1. Draw base image with brightness/contrast filters to enhance the map separation
    ctx.filter = `contrast(${config.contrast}%) brightness(${config.brightness}%) grayscale(100%)`;
    ctx.drawImage(img, 0, 0, width, height);
    ctx.filter = 'none';

    // The most accurate "Duotone" effect (mapping shadows to Color A and highlights to Color B)
    // is often done using a pixel manipulation loop or by abusing globalCompositeOperations.
    
    // METHOD A: CSS-like Blend Mode Approach (Faster for huge images, less accurate map)
    // 1. Screen the highlight color
    // 2. Multiply the shadow color
    // But this doesn't map perfectly.

    // METHOD B: Pixel Luminance Mapping (Accurate Map)
    // We will do pixel mapping for precise duotone coloring.
    
    try {
        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;

        // Parse colors
        const hexToRgb = (hex: string) => {
            const h = hex.replace("#", "");
            return {
                r: parseInt(h.substring(0, 2), 16),
                g: parseInt(h.substring(2, 4), 16),
                b: parseInt(h.substring(4, 6), 16),
            };
        };

        const highlight = hexToRgb(config.highlightColor);
        const shadow = hexToRgb(config.shadowColor);

        for (let i = 0; i < data.length; i += 4) {
            // Because we grayscaled the canvas, R=G=B. We just use R as luminance.
            const luma = data[i] / 255; 

            // Interpolate between shadow and highlight color based on luma
            data[i]     = Math.round(shadow.r + (highlight.r - shadow.r) * luma); // R
            data[i + 1] = Math.round(shadow.g + (highlight.g - shadow.g) * luma); // G
            data[i + 2] = Math.round(shadow.b + (highlight.b - shadow.b) * luma); // B
            // Alpha stays same
        }

        ctx.putImageData(imageData, 0, 0);

    } catch (e) {
        console.error("Canvas tainted, falling back to blend modes.", e);
        // Fallback if CORS prevents pixel access
        ctx.globalCompositeOperation = 'multiply';
        ctx.fillStyle = config.highlightColor;
        ctx.fillRect(0, 0, width, height);
        
        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = config.shadowColor;
        ctx.fillRect(0, 0, width, height);
    }
    
    // Reset
    ctx.globalCompositeOperation = 'source-over';

  }, [config]);

  // Load Image and trigger render
  useEffect(() => {
    if (!imageSrc) return;
    
    setIsProcessing(true);
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;
    
    img.onload = () => {
       imgRef.current = img;
       if (outputCanvasRef.current) {
          // Render preview non-blocking
          requestAnimationFrame(() => {
             applyDuotone(outputCanvasRef.current!);
             setIsProcessing(false);
          });
       }
    };
    
    img.onerror = () => {
       setIsProcessing(false);
       console.error("Failed to load image. If using a URL, it might be blocked by CORS.");
    };
  }, [imageSrc, applyDuotone]); // trigger when img changes or config changes


  const handleExport = () => {
     if (!imgRef.current) {
         alert("Please upload an image first.");
         return;
     }

     setIsProcessing(true);
     setTimeout(() => {
         try {
             // Create an offscreen canvas for max resolution export
             const exportCanvas = document.createElement('canvas');
             applyDuotone(exportCanvas, true); 
             
             const dataUrl = exportCanvas.toDataURL('image/png', 1.0);
             const link = document.createElement("a");
             link.download = `duotone-${Date.now()}.png`;
             link.href = dataUrl;
             link.click();
         } catch(e) {
             console.error(e);
             alert("Error exporting high-res image.");
         } finally {
             setIsProcessing(false);
         }
     }, 50);
  };


  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex flex-col">
      <div className="border-b border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-stone-500 dark:text-stone-400 text-sm mb-4 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tools
          </Link>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-stone-900 dark:bg-stone-100 rounded-lg">
                <Paintbrush className="h-5 w-5 text-white dark:text-stone-900" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  Duotone Image Filter
                </h1>
                <p className="text-stone-500 dark:text-stone-400 text-sm">
                  Apply a vibrant, two-color map to any image.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleExport}
                disabled={isProcessing}
                className="flex items-center gap-2 bg-white hover:bg-stone-50 active:bg-stone-100 dark:bg-stone-900 dark:hover:bg-stone-800 text-stone-900 dark:text-stone-100 border border-stone-200 dark:border-stone-800 px-4 py-2 rounded-lg font-medium text-sm transition-colors disabled:opacity-50"
              >
                <Download className="h-4 w-4" />
                Export PNG
              </button>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-white text-white dark:text-stone-900 px-4 py-2 rounded-lg font-medium text-sm transition-colors"
              >
                <Upload className="h-4 w-4" />
                Upload Image
              </button>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto px-6 py-8 w-full flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1">
          
          {/* Controls */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                  <Contrast className="w-5 h-5 text-stone-500" />
                  <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                     Color Mapping
                  </h3>
              </div>

              <div className="space-y-6">
                
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-2">Highlights (Light)</label>
                        <div className="flex items-center gap-2">
                           <input type="color" value={config.highlightColor} onChange={e => setConfig({...config, highlightColor: e.target.value})} className="w-8 h-8 rounded cursor-pointer bg-transparent border-0 p-0" />
                           <input type="text" value={config.highlightColor} onChange={e => setConfig({...config, highlightColor: e.target.value})} className="flex-1 w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-md px-2 py-1.5 text-xs font-mono outline-none" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-2">Shadows (Dark)</label>
                        <div className="flex items-center gap-2">
                           <input type="color" value={config.shadowColor} onChange={e => setConfig({...config, shadowColor: e.target.value})} className="w-8 h-8 rounded cursor-pointer bg-transparent border-0 p-0" />
                           <input type="text" value={config.shadowColor} onChange={e => setConfig({...config, shadowColor: e.target.value})} className="flex-1 w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-md px-2 py-1.5 text-xs font-mono outline-none" />
                        </div>
                    </div>
                </div>

                <div>
                   <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-2">Preset Combinations</label>
                   <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                       {presetPalettes.map(palette => (
                           <button
                             key={palette.name}
                             onClick={() => setConfig({...config, highlightColor: palette.h, shadowColor: palette.s})}
                             className="flex flex-col gap-1 p-2 rounded border border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-500 bg-stone-50 dark:bg-stone-950 transition-all text-left group"
                           >
                              <div className="w-full h-8 rounded-sm rounded-bl-sm overflow-hidden flex">
                                  <div className="h-full flex-1" style={{backgroundColor: palette.h}}></div>
                                  <div className="h-full flex-1" style={{backgroundColor: palette.s}}></div>
                              </div>
                              <span className="text-[10px] sm:text-xs font-medium text-stone-600 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-100 truncate">{palette.name}</span>
                           </button>
                       ))}
                   </div>
                </div>

                <hr className="border-stone-100 dark:border-stone-800" />

                <div>
                  <div className="flex justify-between mb-1.5 font-medium text-xs text-stone-700 dark:text-stone-300">
                    <label>Luma Contrast</label>
                    <span className="font-mono text-stone-500">{config.contrast}%</span>
                  </div>
                  <input
                    type="range" min="50" max="250" step="5"
                    value={config.contrast}
                    onChange={(e) => setConfig({ ...config, contrast: parseInt(e.target.value) })}
                    className="w-full accent-stone-900 dark:accent-stone-100"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Increases definition before the colors are applied.</p>
                </div>

                <div>
                  <div className="flex justify-between mb-1.5 font-medium text-xs text-stone-700 dark:text-stone-300">
                    <label>Luma Brightness</label>
                    <span className="font-mono text-stone-500">{config.brightness}%</span>
                  </div>
                  <input
                    type="range" min="50" max="150" step="2"
                    value={config.brightness}
                    onChange={(e) => setConfig({ ...config, brightness: parseInt(e.target.value) })}
                    className="w-full accent-stone-900 dark:accent-stone-100"
                  />
                </div>

              </div>
            </div>
            
          </div>

          {/* Visualization */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="flex-1 relative rounded-xl overflow-hidden min-h-[500px] border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 flex items-center justify-center p-4">
              
              {/* Output Canvas */}
              <canvas 
                 ref={outputCanvasRef} 
                 className="max-w-full max-h-full object-contain shadow-xl transition-opacity duration-300"
                 style={{ opacity: isProcessing ? 0.5 : 1 }}
              />
              
              {!imageSrc && !isProcessing && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-400">
                  <ImageIcon className="w-12 h-12 mb-3 opacity-50" />
                  <p className="font-medium text-stone-600 dark:text-stone-300">No Image Loaded</p>
                  <p className="text-sm mt-1">Upload an image to process</p>
                </div>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
