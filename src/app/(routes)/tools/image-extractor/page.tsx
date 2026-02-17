"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Upload,
  Image as ImageIcon,
  Copy,
  Check,
  Download,
  Pipette,
  X,
  Trash2,
} from "lucide-react";

interface PickedColor {
  hex: string;
  rgb: { r: number; g: number; b: number };
  position: { x: number; y: number };
  id: string;
}

export default function ImageColorExtractor() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [copiedColor, setCopiedColor] = useState("");
  const [pickedColors, setPickedColors] = useState<PickedColor[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const rgbToHex = (r: number, g: number, b: number): string => {
    return (
      "#" +
      [r, g, b]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("")
    );
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target?.result as string);
      setPickedColors([]);
    };
    reader.readAsDataURL(file);
  };

  const setupCanvas = () => {
    if (!selectedImage || !canvasRef.current || !imageRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = imageRef.current;
    if (!ctx) return;
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0);
  };

  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    if (!canvasRef.current || !imageRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = imageRef.current;
    const rect = img.getBoundingClientRect();
    if (!ctx) return;
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = Math.floor((event.clientX - rect.left) * scaleX);
    const y = Math.floor((event.clientY - rect.top) * scaleY);
    const imageData = ctx.getImageData(x, y, 1, 1);
    const [r, g, b] = imageData.data;
    const hex = rgbToHex(r, g, b);

    const newColor: PickedColor = {
      hex,
      rgb: { r, g, b },
      position: {
        x: ((event.clientX - rect.left) / rect.width) * 100,
        y: ((event.clientY - rect.top) / rect.height) * 100,
      },
      id: Date.now().toString(),
    };
    setPickedColors((prev) => [...prev, newColor]);
    copyToClipboard(hex, "picked color");
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedColor(text);
      setTimeout(() => setCopiedColor(""), 2000);
    } catch {
      alert(`Failed to copy ${label}`);
    }
  };

  const exportPalette = () => {
    if (pickedColors.length === 0) return;
    const data = {
      name: "Picked Color Palette",
      source: "Image Color Picker",
      colors: pickedColors.map((color) => ({
        hex: color.hex,
        rgb: `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`,
        position: color.position,
      })),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "picked-colors-palette.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyAllColors = async () => {
    const all = pickedColors.map((c) => c.hex).join(", ");
    await copyToClipboard(all, "all colors");
  };

  const removeColor = (id: string) => {
    setPickedColors((prev) => prev.filter((color) => color.id !== id));
  };

  const clearAllColors = () => {
    setPickedColors([]);
  };

  const clearImage = () => {
    setSelectedImage(null);
    setPickedColors([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="min-h-screen bg-white dark:bg-stone-950">
      {/* Header */}
      <div className="border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-stone-500 dark:text-stone-400 text-sm mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tools
          </Link>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-stone-900 dark:bg-stone-100 rounded-lg">
              <Pipette className="h-5 w-5 text-white dark:text-stone-900" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                Image Color Picker
              </h1>
              <p className="text-stone-500 dark:text-stone-400 text-sm">
                Pick exact colors from any image
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {!selectedImage ? (
          <div
            className="border-2 border-dashed border-stone-300 dark:border-stone-700 rounded-lg p-16 text-center cursor-pointer hover:border-stone-400 dark:hover:border-stone-600 transition-colors"
            onClick={() => fileInputRef.current?.click()}
          >
            <ImageIcon className="h-10 w-10 text-stone-400 dark:text-stone-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-stone-900 dark:text-stone-100 mb-1">
              Upload an Image
            </h3>
            <p className="text-stone-500 dark:text-stone-400 text-sm mb-5">
              Click to select an image file
            </p>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-lg text-sm font-medium hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors">
              <Upload className="h-4 w-4" /> Choose Image
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Panel */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-medium text-stone-900 dark:text-stone-100">
                  Image
                </h2>
                <button
                  onClick={clearImage}
                  className="p-1.5 text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 border border-stone-200 dark:border-stone-700 rounded-lg transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
              <div className="border border-stone-200 dark:border-stone-800 rounded-lg p-3 relative">
                <img
                  ref={imageRef}
                  src={selectedImage}
                  alt="Selected"
                  className="w-full h-auto rounded-md cursor-crosshair"
                  onClick={handleImageClick}
                  onLoad={setupCanvas}
                />
                {pickedColors.map((color) => (
                  <div
                    key={color.id}
                    className="absolute w-4 h-4 border-2 border-white dark:border-stone-900 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      left: `${color.position.x}%`,
                      top: `${color.position.y}%`,
                      backgroundColor: color.hex,
                    }}
                  />
                ))}
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-2 text-center">
                  Click anywhere on the image to pick a color
                </p>
              </div>
            </div>

            {/* Picked Colors Panel */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-medium text-stone-900 dark:text-stone-100">
                  Picked Colors ({pickedColors.length})
                </h2>
                {pickedColors.length > 0 && (
                  <div className="flex gap-1.5">
                    <button
                      onClick={exportPalette}
                      className="px-3 py-1.5 border border-stone-200 dark:border-stone-700 rounded-lg text-xs flex items-center gap-1.5 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
                    >
                      <Download className="h-3 w-3" /> Export
                    </button>
                    <button
                      onClick={copyAllColors}
                      className="px-3 py-1.5 border border-stone-200 dark:border-stone-700 rounded-lg text-xs flex items-center gap-1.5 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
                    >
                      <Copy className="h-3 w-3" /> Copy All
                    </button>
                    <button
                      onClick={clearAllColors}
                      className="px-3 py-1.5 border border-stone-200 dark:border-stone-700 rounded-lg text-xs flex items-center gap-1.5 text-stone-500 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
                    >
                      <Trash2 className="h-3 w-3" /> Clear
                    </button>
                  </div>
                )}
              </div>

              {pickedColors.length === 0 ? (
                <div className="border border-stone-200 dark:border-stone-800 rounded-lg p-10 text-center">
                  <Pipette className="h-6 w-6 text-stone-400 dark:text-stone-500 mx-auto mb-3" />
                  <p className="text-stone-500 dark:text-stone-400 text-sm">
                    Click on the image to start picking colors
                  </p>
                </div>
              ) : (
                <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
                  {pickedColors.map((color) => (
                    <div
                      key={color.id}
                      className="border border-stone-200 dark:border-stone-800 rounded-lg p-3 flex items-center gap-4"
                    >
                      <div
                        className="w-10 h-10 rounded-md border border-stone-200 dark:border-stone-700 flex-shrink-0"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-mono text-sm text-stone-900 dark:text-stone-100">
                          {color.hex}
                        </div>
                        <div className="text-xs text-stone-500 dark:text-stone-400">
                          RGB({color.rgb.r}, {color.rgb.g}, {color.rgb.b})
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => copyToClipboard(color.hex, "HEX")}
                          className="p-1.5 text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
                        >
                          {copiedColor === color.hex ? (
                            <Check className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                          ) : (
                            <Copy className="h-3.5 w-3.5" />
                          )}
                        </button>
                        <button
                          onClick={() => removeColor(color.id)}
                          className="p-1.5 text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        <canvas ref={canvasRef} className="hidden" />
      </div>
    </div>
  );
}
