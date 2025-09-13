"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Image as ImageIcon,
  Download,
  Upload,
  RefreshCw,
  Settings,
  FileImage,
  ArrowRight,
} from "lucide-react";
import { toast } from "react-toastify";

type ImageFormat = "png" | "jpeg" | "webp";

interface ConvertedImage {
  original: File;
  converted: string;
  originalFormat: string;
  targetFormat: ImageFormat;
  originalSize: number;
  convertedSize: number;
}

export default function ImageFormatter() {
  const [images, setImages] = useState<ConvertedImage[]>([]);
  const [targetFormat, setTargetFormat] = useState<ImageFormat>("webp");
  const [quality, setQuality] = useState(0.9);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) return;

    const validFiles = files.filter(
      (file) =>
        file.type.startsWith("image/") &&
        [
          "image/jpeg",
          "image/png",
          "image/webp",
          "image/gif",
          "image/bmp",
        ].includes(file.type)
    );

    if (validFiles.length !== files.length) {
      toast.error("Some files were skipped. Only image files are supported.");
    }

    if (validFiles.length > 0) {
      convertImages(validFiles);
    }
  };

  const convertImages = async (files: File[]) => {
    setIsProcessing(true);
    const converted: ConvertedImage[] = [];

    for (const file of files) {
      try {
        const convertedImage = await convertImage(file);
        converted.push(convertedImage);
      } catch (error) {
        console.error(`Error converting ${file.name}:`, error);
        toast.error(`Failed to convert ${file.name}`);
      }
    }

    setImages((prev) => [...prev, ...converted]);
    setIsProcessing(false);

    if (converted.length > 0) {
      toast.success(`Converted ${converted.length} image(s) successfully!`);
    }
  };

  const convertImage = (file: File): Promise<ConvertedImage> => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw image on canvas
        ctx?.drawImage(img, 0, 0);

        // Convert to target format
        const mimeType = `image/${targetFormat}`;
        const qualityValue = targetFormat === "png" ? undefined : quality;

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error("Failed to convert image"));
              return;
            }

            const reader = new FileReader();
            reader.onload = () => {
              const originalFormat = file.type.split("/")[1];

              resolve({
                original: file,
                converted: reader.result as string,
                originalFormat,
                targetFormat,
                originalSize: file.size,
                convertedSize: blob.size,
              });
            };
            reader.readAsDataURL(blob);
          },
          mimeType,
          qualityValue
        );
      };

      img.onerror = () => reject(new Error("Failed to load image"));
      img.src = URL.createObjectURL(file);
    });
  };

  const downloadImage = (image: ConvertedImage, index: number) => {
    const link = document.createElement("a");
    link.href = image.converted;
    const originalName = image.original.name.split(".")[0];
    link.download = `${originalName}.${image.targetFormat}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Image downloaded successfully!");
  };

  const downloadAll = () => {
    images.forEach((image, index) => {
      setTimeout(() => downloadImage(image, index), index * 100);
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const clearAll = () => {
    setImages([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const getFormatColor = (format: string) => {
    switch (format.toLowerCase()) {
      case "png":
        return "bg-blue-100 text-blue-800";
      case "jpeg":
      case "jpg":
        return "bg-orange-100 text-orange-800";
      case "webp":
        return "bg-green-100 text-green-800";
      case "gif":
        return "bg-purple-100 text-purple-800";
      case "bmp":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tools
          </Link>

          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl">
              <ImageIcon className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-light text-gray-900">
                Image Formatter
              </h1>
              <p className="text-gray-500 text-sm">
                Convert between image formats (PNG, JPEG, WebP) with quality
                settings
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Controls */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Format
              </label>
              <select
                value={targetFormat}
                onChange={(e) => setTargetFormat(e.target.value as ImageFormat)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-300"
              >
                <option value="png">PNG (Lossless)</option>
                <option value="jpeg">JPEG (Lossy)</option>
                <option value="webp">WebP (Modern)</option>
              </select>
            </div>

            {targetFormat !== "png" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quality: {Math.round(quality * 100)}%
                </label>
                <input
                  type="range"
                  min="0.1"
                  max="1"
                  step="0.1"
                  value={quality}
                  onChange={(e) => setQuality(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            )}

            <div className="flex items-end">
              <div className="text-sm text-gray-600">
                <div className="font-medium mb-1">Format Benefits:</div>
                {targetFormat === "png" && (
                  <div>
                    • Lossless compression
                    <br />• Transparency support
                  </div>
                )}
                {targetFormat === "jpeg" && (
                  <div>
                    • Small file sizes
                    <br />• Wide compatibility
                  </div>
                )}
                {targetFormat === "webp" && (
                  <div>
                    • Best compression
                    <br />• Modern browsers
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isProcessing}
              className="flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium disabled:opacity-50"
            >
              <Upload className="h-4 w-4" />
              {isProcessing ? "Processing..." : "Select Images"}
            </button>

            {images.length > 0 && (
              <>
                <button
                  onClick={downloadAll}
                  className="flex items-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                >
                  <Download className="h-4 w-4" />
                  Download All
                </button>
                <button
                  onClick={clearAll}
                  className="flex items-center gap-2 px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
                >
                  <RefreshCw className="h-4 w-4" />
                  Clear All
                </button>
              </>
            )}
          </div>
        </div>

        {/* Results */}
        {images.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900">
              Converted Images ({images.length})
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-4"
                >
                  <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={image.converted}
                      alt={image.original.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-medium text-gray-900 truncate">
                      {image.original.name}
                    </h3>

                    {/* Format Conversion */}
                    <div className="flex items-center justify-center gap-2">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${getFormatColor(
                          image.originalFormat
                        )}`}
                      >
                        {image.originalFormat.toUpperCase()}
                      </span>
                      <ArrowRight className="h-3 w-3 text-gray-400" />
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${getFormatColor(
                          image.targetFormat
                        )}`}
                      >
                        {image.targetFormat.toUpperCase()}
                      </span>
                    </div>

                    {/* File Sizes */}
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>
                        Original: {formatFileSize(image.originalSize)}
                      </span>
                      <span>
                        Converted: {formatFileSize(image.convertedSize)}
                      </span>
                    </div>

                    {/* Size Change */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-sm font-medium ${
                          image.convertedSize < image.originalSize
                            ? "text-green-600"
                            : image.convertedSize > image.originalSize
                            ? "text-red-600"
                            : "text-gray-600"
                        }`}
                      >
                        {image.convertedSize < image.originalSize && "-"}
                        {image.convertedSize > image.originalSize && "+"}
                        {Math.round(
                          Math.abs(
                            ((image.convertedSize - image.originalSize) /
                              image.originalSize) *
                              100
                          )
                        )}
                        %
                        {image.convertedSize < image.originalSize
                          ? " smaller"
                          : image.convertedSize > image.originalSize
                          ? " larger"
                          : " same size"}
                      </span>
                      <button
                        onClick={() => downloadImage(image, index)}
                        className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        <Download className="h-3 w-3" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upload Area */}
        {images.length === 0 && !isProcessing && (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center cursor-pointer hover:border-gray-400 transition-colors"
          >
            <FileImage className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Drop images here or click to select
            </h3>
            <p className="text-gray-500 mb-4">
              Supports PNG, JPEG, WebP, GIF, and BMP formats
            </p>
            <div className="flex justify-center gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                PNG
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                JPEG
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                WebP
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                GIF
              </span>
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                BMP
              </span>
            </div>
          </div>
        )}

        {/* Format Comparison */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-lg font-medium text-gray-900 mb-6">
            Format Comparison
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">PNG</span>
                </div>
                <h4 className="font-medium text-gray-900">PNG Format</h4>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Lossless compression</li>
                <li>• Transparency support</li>
                <li>• Best for graphics, logos</li>
                <li>• Larger file sizes</li>
                <li>• Universal browser support</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm">JPG</span>
                </div>
                <h4 className="font-medium text-gray-900">JPEG Format</h4>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Lossy compression</li>
                <li>• Small file sizes</li>
                <li>• Best for photographs</li>
                <li>• No transparency</li>
                <li>• Universal compatibility</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">WebP</span>
                </div>
                <h4 className="font-medium text-gray-900">WebP Format</h4>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Superior compression</li>
                <li>• Lossless & lossy modes</li>
                <li>• Transparency support</li>
                <li>• 25-35% smaller than JPEG</li>
                <li>• Modern browser support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">
                Format Conversion
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Convert between PNG, JPEG, and WebP formats</li>
                <li>• Adjustable quality settings for lossy formats</li>
                <li>• Batch processing for multiple images</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">
                Smart Processing
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Preserve image dimensions and quality</li>
                <li>• Real-time file size comparison</li>
                <li>• Individual and bulk download options</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
