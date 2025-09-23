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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tools
          </Link>
          <div className="flex items-center gap-3 mt-4">
            <div className="p-2 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg">
              <Pipette className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                Image Color Picker
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Pick exact colors from any image
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {!selectedImage ? (
          <div className="text-center py-16">
            <div
              className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-12 cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <ImageIcon className="h-10 w-10 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Upload an Image
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                Click to select an image file or drag and drop
              </p>
              <button className="inline-flex items-center gap-2 px-5 py-2 bg-gray-900 dark:bg-gray-50 text-white dark:text-black rounded-md text-sm font-medium">
                <Upload className="h-4 w-4" /> Choose Image
              </button>
            </div>
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
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200">
                  Image
                </h2>
                <button
                  onClick={clearImage}
                  className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="bg-white dark:bg-black rounded-xl p-3 relative border border-gray-200 dark:border-gray-800">
                <img
                  ref={imageRef}
                  src={selectedImage}
                  alt="Selected"
                  className="w-full h-auto rounded-lg cursor-crosshair"
                  onClick={handleImageClick}
                  onLoad={setupCanvas}
                />
                {pickedColors.map((color) => (
                  <div
                    key={color.id}
                    className="absolute w-4 h-4 border-2 border-white dark:border-gray-900 rounded-full shadow -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      left: `${color.position.x}%`,
                      top: `${color.position.y}%`,
                      backgroundColor: color.hex,
                    }}
                  />
                ))}
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                  Click anywhere on the image to pick a color
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200">
                  Picked Colors ({pickedColors.length})
                </h2>
                {pickedColors.length > 0 && (
                  <div className="flex gap-2">
                    <button
                      onClick={exportPalette}
                      className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-sm flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <Download className="h-3 w-3" /> Export
                    </button>
                    <button
                      onClick={copyAllColors}
                      className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-sm flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <Copy className="h-3 w-3" /> Copy All
                    </button>
                    <button
                      onClick={clearAllColors}
                      className="px-3 py-1.5 bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-md text-sm flex items-center gap-1"
                    >
                      <Trash2 className="h-3 w-3" /> Clear
                    </button>
                  </div>
                )}
              </div>

              {pickedColors.length === 0 ? (
                <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-10 text-center">
                  <Pipette className="h-6 w-6 text-gray-400 dark:text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Click on the image to start picking colors
                  </p>
                </div>
              ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                  {pickedColors.map((color) => (
                    <div
                      key={color.id}
                      className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg p-3 flex items-center gap-4"
                    >
                      <div
                        className="w-12 h-12 rounded border border-gray-200 dark:border-gray-700"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-mono text-sm text-gray-900 dark:text-gray-100">
                          {color.hex}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          RGB({color.rgb.r}, {color.rgb.g}, {color.rgb.b})
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => copyToClipboard(color.hex, "HEX")}
                          className="p-1.5 text-gray-400 dark:text-gray-500 rounded-md hover:text-gray-600 dark:hover:text-gray-300"
                        >
                          {copiedColor === color.hex ? (
                            <Check className="h-4 w-4 text-green-600 dark:text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                        <button
                          onClick={() => removeColor(color.id)}
                          className="p-1.5 text-gray-400 dark:text-gray-500 rounded-md hover:text-gray-600 dark:hover:text-gray-300"
                        >
                          <X className="h-4 w-4" />
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
