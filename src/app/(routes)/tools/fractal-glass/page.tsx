"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check, Columns, Upload, ImageIcon, Download } from "lucide-react";

interface FractalConfig {
  blur: number;
  ribCount: number; // How many vertical ribs
  refractionStrength: number; // Scale of displacement
  angle: number; // Rotation angle
}

export default function FractalGlassGenerator() {
  const [config, setConfig] = useState<FractalConfig>({
    blur: 8,
    ribCount: 24,
    refractionStrength: 30,
    angle: 0,
  });

  const [copiedCss, setCopiedCss] = useState(false);
  const [copiedSvg, setCopiedSvg] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load default abstract background for demo
    if (!imagePreview) {
      setImagePreview("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop");
    }
  }, [imagePreview]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateDisplacementMap = () => {
    // Generate the SVG data URI that serves as the displacement map
    // We create a repetitive vertical gradient pattern.
    
    // Width of each rib is 100% / ribCount
    
    // Fluted or Reeded use sine wave approximation or multiple stops
    const gradientStops = `
        <linearGradient id="rib" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stop-color="#808080" />
            <stop offset="15%" stop-color="#aaaaaa" />
            <stop offset="50%" stop-color="#ffffff" />
            <stop offset="85%" stop-color="#aaaaaa" />
            <stop offset="100%" stop-color="#808080" />
        </linearGradient>
       `;

    const svg = `<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
  <defs>
    ${gradientStops}
    <pattern id="rib-pattern" width="${1000 / config.ribCount}" height="1000" patternUnits="userSpaceOnUse" patternTransform="rotate(${config.angle})">
       <rect width="100%" height="100%" fill="url(#rib)" />
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#rib-pattern)" />
</svg>`;
    
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
  };

  const generateSVGFilter = () => {
    return `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <defs>
    <filter id="fractal-glass-filter" x="-20%" y="-20%" width="140%" height="140%">
      <!-- 1. Import the displacement map Image -->
      <feImage href="${generateDisplacementMap()}" result="map" preserveAspectRatio="none" />
      
      <!-- 2. Apply Displacement -->
      <feDisplacementMap 
        in="SourceGraphic" 
        in2="map" 
        scale="${config.refractionStrength}" 
        xChannelSelector="R" 
        yChannelSelector="G" 
        result="displaced"
      />
      
      <!-- 3. Blur the displaced result -->
      <feGaussianBlur in="displaced" stdDeviation="${config.blur}" result="blurred" />
    </filter>
  </defs>
</svg>`;
  };

  const generateCSS = () => {
    return `.fractal-glass-panel {
  position: relative;
  /* Apply the complex refraction/blur SVG filter */
  filter: url('#fractal-glass-filter');
}

/* Optional: Add specular highlights based on the ribs via pseudo-element */
.fractal-glass-panel::after {
  content: '';
  position: absolute;
  inset: -50%;
  pointer-events: none;
  background: repeating-linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.1) calc(100% / ${config.ribCount} * 0.5),
    rgba(0, 0, 0, 0.1) calc(100% / ${config.ribCount}),
    rgba(255, 255, 255, 0) calc(100% / ${config.ribCount})
  );
  transform: rotate(${config.angle}deg);
  border-radius: inherit;
}`;
  };

  const handleCopy = async (text: string, type: "svg" | "css") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "svg") {
        setCopiedSvg(true);
        setTimeout(() => setCopiedSvg(false), 2000);
      } else {
        setCopiedCss(true);
        setTimeout(() => setCopiedCss(false), 2000);
      }
    } catch {
      console.error("Failed to copy");
    }
  };

  const handleExport = async (format: 'png' | 'jpeg') => {
    if (!imagePreview) {
        alert("Please upload a background image first.");
        return;
    }
    
    try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // 1. Get the original image
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = imagePreview;
        
        await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = () => reject(new Error("Failed to load image"));
        });
        
        // Use a standard 16:9 1080p resolution for high quality export
        canvas.width = 1920;
        canvas.height = 1080;
        
        // Draw background
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        // Setup Glass Area
        const padding = 200;
        const glassWidth = canvas.width - padding * 2;
        const glassHeight = canvas.height - padding * 2;
        const glassX = padding;
        const glassY = padding;

        // Draw the refracted/blurred image inside the glass panel
        // We will simulate the blur and displacement using canvas filters and scaling
        ctx.save();
        
        // Clip to the rounded rectangle
        ctx.beginPath();
        ctx.roundRect(glassX, glassY, glassWidth, glassHeight, 32);
        ctx.clip();

        // Apply blur
        ctx.filter = `blur(${config.blur}px)`;
        
        // Draw the image slightly scaled up and shifted to simulate displacement
        const scale = 1.1; // Simulated displacement scale
        const shiftX = -96;
        const shiftY = -54;
        
        ctx.drawImage(
            img, 
            glassX + shiftX - (glassWidth * (scale - 1) / 2), 
            glassY + shiftY - (glassHeight * (scale - 1) / 2), 
            glassWidth * scale, 
            glassHeight * scale
        );
        
        // Reset filter
        ctx.filter = 'none';

        // Draw the Ribs Layer
        const radians = (config.angle * Math.PI) / 180;
        const cx = glassX + glassWidth / 2;
        const cy = glassY + glassHeight / 2;

        // Create a repeating linear gradient for the flutes
        // Canvas doesn't have createRepeatingLinearGradient natively, 
        // so we draw a large rectangle rotated with many gradient stripes
        ctx.translate(cx, cy);
        ctx.rotate(radians);

        const diag = Math.sqrt(glassWidth * glassWidth + glassHeight * glassHeight);
        const ribWidth = glassWidth / config.ribCount;
        
        // We need to draw across the diagonal safely
        const startX = -diag / 2;
        const endX = diag / 2;
        const yTop = -diag / 2;
        const yHeight = diag;

        ctx.globalCompositeOperation = "overlay";
        ctx.globalAlpha = 0.8;

        for (let x = startX; x < endX; x += ribWidth) {
            const grad = ctx.createLinearGradient(x, 0, x + ribWidth, 0);
            grad.addColorStop(0, "rgba(255,255,255,0)");
            grad.addColorStop(0.5, "rgba(255,255,255,0.1)");
            grad.addColorStop(1, "rgba(0,0,0,0.15)");
            
            ctx.fillStyle = grad;
            ctx.fillRect(x, yTop, ribWidth + 1, yHeight); // +1 to avoid gaps
        }

        ctx.restore();

        // Draw the Border
        ctx.beginPath();
        ctx.roundRect(glassX, glassY, glassWidth, glassHeight, 32);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw the Text
        ctx.fillStyle = "white";
        ctx.textBaseline = "alphabetic";
        
        // "08"
        ctx.font = "24px sans-serif";
        ctx.globalAlpha = 0.9;
        ctx.letterSpacing = "4px";
        ctx.fillText("08", glassX + 64, glassY + glassHeight - 100);
        
        // Reset letter spacing (Canvas API support varies, but usually 0 is default behavior if unset)
        ctx.letterSpacing = "0px";
        ctx.globalAlpha = 1.0;

        // "Linear"
        ctx.font = "600 64px sans-serif";
        ctx.fillText("Linear", glassX + 64, glassY + glassHeight - 40);

        // "Fractal Glass."
        ctx.font = "italic 300 64px sans-serif";
        // Calculate the width of "Linear " to offset the next text
        const linearWidth = ctx.measureText("Linear ").width;
        ctx.fillText("Fractal Glass.", glassX + 64 + linearWidth + 20, glassY + glassHeight - 40);


        // Download
        const dataUrl = canvas.toDataURL(`image/${format}`, 0.95);
        const link = document.createElement('a');
        link.download = `fractal-glass-${Date.now()}.${format}`;
        link.href = dataUrl;
        link.click();

    } catch (err) {
        console.error("Export failed:", err);
        alert("Failed to export image. Make sure the background image allows cross-origin requests.");
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex flex-col">
      
      {/* Hidden SVG Filter Injection for Live Preview */}
      <div dangerouslySetInnerHTML={{ __html: generateSVGFilter() }} />

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
                <Columns className="h-5 w-5 text-white dark:text-stone-900" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                  Linear Fractal Glass
                </h1>
                <p className="text-stone-500 dark:text-stone-400 text-sm">
                  Generate fluted, ribbed, and ribbed refractive glass effects
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
                <button
                    onClick={() => handleExport('png')}
                    className="flex items-center gap-2 bg-white hover:bg-stone-50 dark:bg-stone-900 dark:hover:bg-stone-800 text-stone-900 dark:text-stone-100 border border-stone-200 dark:border-stone-800 px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                >
                    <Download className="h-4 w-4" />
                    Export PNG
                </button>
                <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2 bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-white text-white dark:text-stone-900 px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                >
                    <Upload className="h-4 w-4" />
                    Upload Background
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
              <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100 mb-6">
                Glass Properties
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1.5 font-medium text-xs text-stone-700 dark:text-stone-300">
                    <label>Rib Count (Density)</label>
                    <span className="font-mono text-stone-500">{config.ribCount}</span>
                  </div>
                  <input
                    type="range" min="2" max="100" step="2"
                    value={config.ribCount}
                    onChange={(e) => setConfig({ ...config, ribCount: parseInt(e.target.value) })}
                    className="w-full accent-stone-900 dark:accent-stone-100"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Number of vertical segments</p>
                </div>

                <div>
                  <div className="flex justify-between mb-1.5 font-medium text-xs text-stone-700 dark:text-stone-300">
                    <label>Refraction Strength</label>
                    <span className="font-mono text-stone-500">{config.refractionStrength}</span>
                  </div>
                  <input
                    type="range" min="0" max="200" step="5"
                    value={config.refractionStrength}
                    onChange={(e) => setConfig({ ...config, refractionStrength: parseInt(e.target.value) })}
                    className="w-full accent-stone-900 dark:accent-stone-100"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Intensity of the spatial shift</p>
                </div>

                <div>
                  <div className="flex justify-between mb-1.5 font-medium text-xs text-stone-700 dark:text-stone-300">
                    <label>Blur Depth</label>
                    <span className="font-mono text-stone-500">{config.blur}px</span>
                  </div>
                  <input
                    type="range" min="0" max="32" step="1"
                    value={config.blur}
                    onChange={(e) => setConfig({ ...config, blur: parseInt(e.target.value) })}
                    className="w-full accent-stone-900 dark:accent-stone-100"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1.5 font-medium text-xs text-stone-700 dark:text-stone-300">
                    <label>Light/Rib Angle</label>
                    <span className="font-mono text-stone-500">{config.angle}°</span>
                  </div>
                  <input
                    type="range" min="0" max="360" step="1"
                    value={config.angle}
                    onChange={(e) => setConfig({ ...config, angle: parseInt(e.target.value) })}
                    className="w-full accent-stone-900 dark:accent-stone-100"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Rotation angle of the flutes</p>
                </div>



              </div>
            </div>
          </div>

          {/* Visualization */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Live Preview Area */}
            <div className="flex-1 relative rounded-xl overflow-hidden min-h-[500px]">
                
                {imagePreview ? (
                    <div className="absolute inset-0 w-full h-full">
                        {/* 
                            Instead of CSS backdrop-filter, we apply the SVG filter directly to the image 
                            or to a cloned container containing the image.
                            For the best replication of the video's effect, we overlay the filtered image
                            on top of the original image, masked to a certain area.
                        */}
                        
                        {/* Background (Unfiltered) */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                            src={imagePreview} 
                            alt="Background" 
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        
                        {/* The Glass Panel */}
                        <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
                            <div 
                                className="relative w-full max-w-2xl aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300"
                                style={{
                                    border: "1px solid rgba(255, 255, 255, 0.2)",
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255,255,255,0.1), inset 0 0 20px rgba(255,255,255,0.05)"
                                }}
                            >
                                {/* Filtered Background Clone */}
                                <div className="absolute inset-0 overflow-hidden">
                                     {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img 
                                        src={imagePreview} 
                                        alt="Refracted Background" 
                                        className="absolute w-full h-full object-cover scale-110"
                                        style={{ 
                                            // Scale up slightly to avoid edge clipping from displacement
                                            filter: "url('#fractal-glass-filter')" 
                                        }}
                                    />
                                </div>
                                
                                {/* CSS Highlight Specular Layer (The physical ribs) */}
                                <div className="absolute inset-0 overflow-hidden mix-blend-overlay opacity-80 rounded-2xl">
                                    <div 
                                        className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2"
                                        style={{
                                            background: `repeating-linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) calc(100% / ${config.ribCount} * 0.5), rgba(0,0,0,0.15) calc(100% / ${config.ribCount}), rgba(255,255,255,0) calc(100% / ${config.ribCount}))`,
                                            transform: `translate(-50%, -50%) rotate(${config.angle}deg)`
                                        }}
                                    />
                                </div>

                                {/* Foreground Content inside the Glass */}
                                <div className="relative z-10 w-full h-full flex flex-col justify-end p-8">
                                    <p className="text-white tracking-widest text-sm font-medium opacity-90 mb-2 drop-shadow-md">08</p>
                                    <h2 className="text-white text-4xl md:text-5xl font-semibold tracking-tight leading-tight drop-shadow-md">Linear <br/><span className="italic font-light">Fractal Glass.</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-400 bg-stone-900 border border-stone-800">
                        <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
                        <p>Loading preview...</p>
                    </div>
                )}

            </div>

             {/* Code Output */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* SVG Config Output */}
                <div className="border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden flex flex-col h-[350px]">
                    <div className="px-4 py-3 flex items-center justify-between border-b border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950">
                        <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                            SVG Filter Definition
                        </h3>
                        <button
                            onClick={() => handleCopy(generateSVGFilter(), "svg")}
                            className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 rounded-md text-xs font-medium transition-colors"
                        >
                            {copiedSvg ? <><Check className="w-3.5 h-3.5"/> Copied</> : <><Copy className="w-3.5 h-3.5"/> Copy</>}
                        </button>
                    </div>
                    <div className="p-4 bg-stone-900 flex-1 overflow-auto custom-scrollbar">
                        <code className="text-[13px] font-mono text-stone-300 whitespace-pre">
                            {generateSVGFilter()}
                        </code>
                    </div>
                </div>

                {/* CSS Output */}
                <div className="border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden flex flex-col h-[350px]">
                    <div className="px-4 py-3 flex items-center justify-between border-b border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950">
                        <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                            CSS Application
                        </h3>
                        <button
                            onClick={() => handleCopy(generateCSS(), "css")}
                            className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 rounded-md text-xs font-medium transition-colors"
                        >
                            {copiedCss ? <><Check className="w-3.5 h-3.5"/> Copied</> : <><Copy className="w-3.5 h-3.5"/> Copy</>}
                        </button>
                    </div>
                    <div className="p-4 bg-stone-900 flex-1 overflow-auto custom-scrollbar">
                        <code className="text-[13px] font-mono text-stone-300 whitespace-pre">
                            {generateCSS()}
                        </code>
                    </div>
                </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
