"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import {
 ArrowLeft,
 Download,
 Upload,
 FileImage,
 Minimize2,
 X,
 Settings,
 Info,
 Zap,
 Target,
 CheckCircle,
 Eye,
 RefreshCw,
 Sliders,
 BarChart3,
} from "lucide-react";

interface CompressedImage {
 original: File;
 compressed: string;
 originalSize: number;
 compressedSize: number;
 compressionRatio: number;
 originalDataUrl?: string;
}

interface CompressionPreset {
 name: string;
 quality: number;
 maxWidth: number;
 maxHeight: number;
 format: "jpeg" | "webp";
 description: string;
}

const presets: CompressionPreset[] = [
 {
 name: "Web Optimized",
 quality: 0.8,
 maxWidth: 1920,
 maxHeight: 1080,
 format: "jpeg",
 description: "Best for websites and web galleries",
 },
 {
 name: "Social Media",
 quality: 0.85,
 maxWidth: 1080,
 maxHeight: 1080,
 format: "jpeg",
 description: "Perfect for Instagram and Facebook",
 },
 {
 name: "Email Friendly",
 quality: 0.7,
 maxWidth: 800,
 maxHeight: 600,
 format: "jpeg",
 description: "Small file sizes for email attachments",
 },
 {
 name: "High Quality",
 quality: 0.95,
 maxWidth: 2560,
 maxHeight: 1440,
 format: "webp",
 description: "Minimal compression with best quality",
 },
 {
 name: "Thumbnail",
 quality: 0.75,
 maxWidth: 400,
 maxHeight: 400,
 format: "jpeg",
 description: "Small thumbnails for previews",
 },
 {
 name: "Print Ready",
 quality: 0.92,
 maxWidth: 3000,
 maxHeight: 3000,
 format: "jpeg",
 description: "High resolution for printing",
 },
];

export default function ImageCompressor() {
 const [images, setImages] = useState<CompressedImage[]>([]);
 const [quality, setQuality] = useState(0.8);
 const [maxWidth, setMaxWidth] = useState(1920);
 const [maxHeight, setMaxHeight] = useState(1080);
 const [format, setFormat] = useState<"jpeg" | "webp">("jpeg");
 const [isProcessing, setIsProcessing] = useState(false);
 const [showAdvanced, setShowAdvanced] = useState(false);
 const [selectedPreset, setSelectedPreset] = useState<string>("Web Optimized");
 const [showComparison, setShowComparison] = useState<{
 [key: number]: boolean;
 }>({});
 const [selectedImageForRetry, setSelectedImageForRetry] = useState<
 number | null
 >(null);
 const [retrySettings, setRetrySettings] = useState({
 quality: 0.8,
 maxWidth: 1920,
 maxHeight: 1080,
 format: "jpeg" as "jpeg" | "webp",
 });
 const fileInputRef = useRef<HTMLInputElement>(null);

 useEffect(() => {
 if (images.length > 0) {
 const newComparison: { [key: number]: boolean } = {};
 images.forEach((_, index) => {
 newComparison[index] = true;
 });
 setShowComparison(newComparison);
 }
 }, [images.length]);

 const applyPreset = useCallback((preset: CompressionPreset) => {
 setQuality(preset.quality);
 setMaxWidth(preset.maxWidth);
 setMaxHeight(preset.maxHeight);
 setFormat(preset.format);
 setSelectedPreset(preset.name);
 }, []);

 const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
 const files = Array.from(event.target.files || []);
 if (files.length === 0) return;

 const validFiles = files.filter(
 (file) =>
 file.type.startsWith("image/") &&
 ["image/jpeg", "image/png", "image/webp", "image/gif"].includes(
 file.type
 )
 );

 if (validFiles.length !== files.length) {
 alert(
 "Some files were skipped. Only JPEG, PNG, WebP, and GIF are supported."
 );
 }

 if (validFiles.length > 0) {
 compressImages(validFiles);
 }
 };

 const handleDrop = useCallback(
 (e: React.DragEvent) => {
 e.preventDefault();
 const files = Array.from(e.dataTransfer.files);
 const validFiles = files.filter(
 (file) =>
 file.type.startsWith("image/") &&
 ["image/jpeg", "image/png", "image/webp", "image/gif"].includes(
 file.type
 )
 );

 if (validFiles.length > 0) {
 compressImages(validFiles);
 }
 },
 [quality, maxWidth, maxHeight, format]
 );

 const handleDragOver = useCallback((e: React.DragEvent) => {
 e.preventDefault();
 }, []);

 const compressImages = async (files: File[], customSettings?: any) => {
 setIsProcessing(true);
 const compressed: CompressedImage[] = [];

 const settings = customSettings || { quality, maxWidth, maxHeight, format };

 for (const file of files) {
 try {
 const compressedImage = await compressImage(file, settings);
 compressed.push(compressedImage);
 } catch (error) {
 console.error(`Error compressing ${file.name}:`, error);
 alert(`Failed to compress ${file.name}`);
 }
 }

 setImages((prev) => [...prev, ...compressed]);
 setIsProcessing(false);
 };

 const compressImage = (
 file: File,
 settings = { quality, maxWidth, maxHeight, format }
 ): Promise<CompressedImage> => {
 return new Promise((resolve, reject) => {
 const canvas = document.createElement("canvas");
 const ctx = canvas.getContext("2d");
 const img = new Image();

 img.onload = () => {
 let { width, height } = img;

 if (width > settings.maxWidth || height > settings.maxHeight) {
 const ratio = Math.min(
 settings.maxWidth / width,
 settings.maxHeight / height
 );
 width *= ratio;
 height *= ratio;
 }

 canvas.width = width;
 canvas.height = height;
 ctx?.drawImage(img, 0, 0, width, height);

 const originalCanvas = document.createElement("canvas");
 const originalCtx = originalCanvas.getContext("2d");
 originalCanvas.width = img.width;
 originalCanvas.height = img.height;
 originalCtx?.drawImage(img, 0, 0);
 const originalDataUrl = originalCanvas.toDataURL();

 canvas.toBlob(
 (blob) => {
 if (!blob) {
 reject(new Error("Failed to compress image"));
 return;
 }

 const reader = new FileReader();
 reader.onload = () => {
 const compressedSize = blob.size;
 const compressionRatio =
 ((file.size - compressedSize) / file.size) * 100;

 resolve({
 original: file,
 compressed: reader.result as string,
 originalSize: file.size,
 compressedSize,
 compressionRatio,
 originalDataUrl,
 });
 };
 reader.readAsDataURL(blob);
 },
 `image/${settings.format}`,
 settings.quality
 );
 };

 img.onerror = () => reject(new Error("Failed to load image"));
 img.src = URL.createObjectURL(file);
 });
 };

 const retryCompression = async (index: number) => {
 const image = images[index];
 if (!image) return;

 setIsProcessing(true);
 try {
 const recompressed = await compressImage(image.original, retrySettings);
 setImages((prev) =>
 prev.map((img, i) => (i === index ? recompressed : img))
 );
 } catch (error) {
 console.error("Retry failed:", error);
 alert("Failed to recompress image");
 }
 setIsProcessing(false);
 setSelectedImageForRetry(null);
 };

 const downloadImage = (image: CompressedImage, index: number) => {
 const link = document.createElement("a");
 link.href = image.compressed;
 const extension = format === "jpeg" ? "jpg" : format;
 const originalName = image.original.name.split(".")[0];
 link.download = `${originalName}_compressed.${extension}`;
 document.body.appendChild(link);
 link.click();
 document.body.removeChild(link);
 };

 const downloadAll = () => {
 images.forEach((image, index) => {
 setTimeout(() => downloadImage(image, index), index * 100);
 });
 };

 const removeImage = (index: number) => {
 setImages((prev) => prev.filter((_, i) => i !== index));
 setShowComparison((prev) => {
 const updated = { ...prev };
 delete updated[index];
 return updated;
 });
 };

 const toggleComparison = (index: number) => {
 setShowComparison((prev) => ({
 ...prev,
 [index]: !prev[index],
 }));
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
 setShowComparison({});
 };

 const totalOriginalSize = images.reduce(
 (sum, img) => sum + img.originalSize,
 0
 );
 const totalCompressedSize = images.reduce(
 (sum, img) => sum + img.compressedSize,
 0
 );
 const totalSavings =
 totalOriginalSize > 0
 ? ((totalOriginalSize - totalCompressedSize) / totalOriginalSize) * 100
 : 0;

 return (
 <div className="min-h-screen bg-white dark:bg-stone-950">
 <div className="bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 sticky top-0 z-10">
 <div className="max-w-6xl mx-auto px-6 py-4">
 <Link
 href="/tools"
 className="inline-flex items-center gap-2 text-stone-500 dark:text-stone-400 text-sm mb-3"
 >
 <ArrowLeft className="h-4 w-4" />
 Back to Tools
 </Link>

 <div className="flex items-center justify-between">
 <div className="flex items-center gap-4">
 <div className="p-3 bg-stone-900 dark:bg-stone-100 rounded-lg">
 <Minimize2 className="h-6 w-6 text-white dark:text-stone-900" />
 </div>
 <div>
 <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-1">
 Image Compressor
 </h1>
 <p className="text-stone-600 dark:text-stone-400">
 Professional image optimization with advanced controls
 </p>
 </div>
 </div>

 {images.length > 0 && (
 <div className="flex items-center gap-3">
 <div className="flex items-center gap-2 px-3 py-2 bg-stone-100 dark:bg-stone-800 rounded-lg">
 <BarChart3 className="h-4 w-4 text-stone-700 dark:text-stone-300" />
 <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
 {totalSavings.toFixed(1)}% saved
 </span>
 </div>
 </div>
 )}
 </div>
 </div>
 </div>

 <div className="max-w-6xl mx-auto px-6 py-6">
 <div className="bg-white dark:bg-stone-950 rounded-lg border border-stone-200 dark:border-stone-800 p-5 mb-6">
 <div className="flex items-center justify-between mb-4">
 <div className="flex items-center gap-2">
 <Sliders className="h-4 w-4 text-stone-600 dark:text-stone-400" />
 <h3 className="font-semibold text-stone-900 dark:text-stone-100">
 Compression Presets
 </h3>
 </div>
 <button
 onClick={() => setShowAdvanced(!showAdvanced)}
 className={`flex items-center gap-2 px-3 py-1 text-sm rounded-lg transition-colors ${
 showAdvanced
 ? "bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900"
 : "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300"
 }`}
 >
 <Settings className="h-3 w-3" />
 {showAdvanced ? "Hide Advanced" : "Show Advanced"}
 </button>
 </div>

 <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
 {presets.map((preset) => (
 <button
 key={preset.name}
 onClick={() => applyPreset(preset)}
 className={`p-4 text-left rounded-lg border-2 transition-all ${
 selectedPreset === preset.name
 ? "border-stone-900 bg-stone-100 dark:border-stone-100 dark:bg-stone-900"
 : "border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950"
 }`}
 >
 <div className="font-medium text-sm text-stone-900 dark:text-stone-100 mb-1">
 {preset.name}
 </div>
 <div className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
 {preset.description}
 </div>
 <div className="text-xs text-stone-500 dark:text-stone-500 mt-2">
 {Math.round(preset.quality * 100)}% • {preset.maxWidth}px
 </div>
 </button>
 ))}
 </div>
 </div>

 {showAdvanced && (
 <div className="bg-white dark:bg-stone-950 rounded-lg border border-stone-200 dark:border-stone-800 p-5 mb-6">
 <h3 className="font-semibold text-stone-900 dark:text-stone-100 mb-4 flex items-center gap-2">
 <Settings className="h-4 w-4" />
 Advanced Settings
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 <div className="space-y-3">
 <label className="block text-sm font-medium text-stone-700 dark:text-stone-300">
 Quality: {Math.round(quality * 100)}%
 </label>
 <input
 type="range"
 min="0.1"
 max="1"
 step="0.05"
 value={quality}
 onChange={(e) => {
 setQuality(parseFloat(e.target.value));
 setSelectedPreset("Custom");
 }}
 className="w-full h-2 bg-stone-200 dark:bg-stone-700 rounded-full appearance-none cursor-pointer"
 />
 <div className="flex justify-between text-xs text-stone-500 dark:text-stone-400">
 <span>Lower size</span>
 <span>Higher quality</span>
 </div>
 </div>

 <div className="space-y-3">
 <label className="block text-sm font-medium text-stone-700 dark:text-stone-300">
 Max Width (px)
 </label>
 <input
 type="number"
 value={maxWidth}
 onChange={(e) => {
 setMaxWidth(parseInt(e.target.value) || 1920);
 setSelectedPreset("Custom");
 }}
 className="w-full px-4 py-2 border border-stone-200 dark:border-stone-700 rounded-lg focus:outline-none focus:border-stone-400 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
 />
 </div>

 <div className="space-y-3">
 <label className="block text-sm font-medium text-stone-700 dark:text-stone-300">
 Max Height (px)
 </label>
 <input
 type="number"
 value={maxHeight}
 onChange={(e) => {
 setMaxHeight(parseInt(e.target.value) || 1080);
 setSelectedPreset("Custom");
 }}
 className="w-full px-4 py-2 border border-stone-200 dark:border-stone-700 rounded-lg focus:outline-none focus:border-stone-400 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
 />
 </div>

 <div className="space-y-3">
 <label className="block text-sm font-medium text-stone-700 dark:text-stone-300">
 Output Format
 </label>
 <select
 value={format}
 onChange={(e) => {
 setFormat(e.target.value as "jpeg" | "webp");
 setSelectedPreset("Custom");
 }}
 className="w-full px-4 py-2 border border-stone-200 dark:border-stone-700 rounded-lg focus:outline-none focus:border-stone-400 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
 >
 <option value="jpeg">JPEG (.jpg)</option>
 <option value="webp">WebP (.webp)</option>
 </select>
 </div>
 </div>
 </div>
 )}

 <div className="flex items-center justify-between mb-6">
 <div className="flex items-center gap-3">
 <input
 ref={fileInputRef}
 type="file"
 multiple
 accept="image/jpeg,image/png,image/webp,image/gif"
 onChange={handleFileSelect}
 className="hidden"
 />
 <button
 onClick={() => fileInputRef.current?.click()}
 disabled={isProcessing}
 className="flex items-center gap-3 px-4 py-3 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-lg font-medium text-sm disabled:opacity-50"
 >
 <Upload className="h-4 w-4" />
 {isProcessing ? "Processing..." : "Select Images"}
 </button>

 {images.length > 0 && (
 <div className="flex items-center gap-2">
 <button
 onClick={downloadAll}
 className="flex items-center gap-2 px-4 py-3 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-sm rounded-lg font-medium"
 >
 <Download className="h-4 w-4" />
 Download All
 </button>
 <button
 onClick={clearAll}
 className="flex items-center gap-2 px-4 py-3 text-stone-600 rounded-lg border border-stone-300 bg-white dark:bg-stone-800 dark:text-stone-300 dark:border-stone-700"
 >
 <X className="h-4 w-4" />
 Clear All
 </button>
 </div>
 )}
 </div>

 {images.length > 0 && (
 <div className="flex items-center gap-6 text-sm text-stone-600 dark:text-stone-400">
 <div className="flex items-center gap-2 px-3 py-2 bg-stone-100 dark:bg-stone-800 rounded-lg">
 <Target className="h-4 w-4" />
 <span className="font-medium">{images.length} images</span>
 </div>
 <div className="text-stone-500 dark:text-stone-500">
 {formatFileSize(totalOriginalSize)} →{" "}
 {formatFileSize(totalCompressedSize)}
 </div>
 </div>
 )}
 </div>

 {images.length > 0 && (
 <div className="space-y-4">
 <div className={"grid gap-6 grid-cols-1"}>
 {images.map((image, index) => (
 <div
 key={index}
 className="bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-lg p-5"
 >
 <div className="flex items-center justify-between mb-4">
 <h3 className="font-medium text-stone-900 dark:text-stone-100 truncate flex-1 mr-3">
 {image.original.name}
 </h3>
 <div className="flex items-center gap-1">
 <button
 onClick={() => {
 setSelectedImageForRetry(index);
 setRetrySettings({
 quality,
 maxWidth,
 maxHeight,
 format,
 });
 }}
 className="p-2 text-stone-500 dark:text-stone-400 rounded-lg"
 title="Retry with different settings"
 >
 <RefreshCw className="h-4 w-4" />
 </button>
 <button
 onClick={() => removeImage(index)}
 className="p-2 text-stone-500 dark:text-stone-400 rounded-lg"
 title="Remove image"
 >
 <X className="h-4 w-4" />
 </button>
 </div>
 </div>

 <div className="grid grid-cols-2 gap-4 mb-4">
 <div>
 <div className="text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
 Original
 </div>
 <div className="aspect-video bg-stone-100 dark:bg-stone-900 rounded-lg overflow-hidden relative cursor-crosshair">
 <img
 src={
 image.originalDataUrl ||
 URL.createObjectURL(image.original)
 }
 alt="Original"
 className="w-full h-full object-cover"
 />
 </div>
 <div className="text-sm text-stone-600 dark:text-stone-400 mt-2 text-center font-medium">
 {formatFileSize(image.originalSize)}
 </div>
 </div>

 <div>
 <div className="text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
 Compressed
 </div>
 <div className="aspect-video bg-stone-100 dark:bg-stone-900 rounded-lg overflow-hidden relative cursor-crosshair">
 <img
 src={image.compressed}
 alt={image.original.name}
 className="w-full h-full object-cover"
 />
 </div>
 <div className="text-sm text-stone-600 dark:text-stone-400 mt-2 text-center font-medium">
 {formatFileSize(image.compressedSize)}
 </div>
 </div>
 </div>

 <div className="flex items-center justify-between">
 <div className="flex items-center gap-3">
 <div className="flex items-center gap-2 px-3 py-1 bg-stone-100 dark:bg-stone-800 rounded-lg">
 <CheckCircle className="h-4 w-4 text-stone-700 dark:text-stone-300" />
 <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
 -{Math.round(image.compressionRatio)}%
 </span>
 </div>
 <div className="text-sm text-stone-500 dark:text-stone-500">
 {formatFileSize(
 image.originalSize - image.compressedSize
 )}{" "}
 saved
 </div>
 </div>
 <button
 onClick={() => downloadImage(image, index)}
 className="flex items-center gap-2 px-4 py-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-lg font-medium"
 >
 <Download className="h-4 w-4" />
 Download
 </button>
 </div>
 </div>
 ))}
 </div>
 </div>
 )}

 {selectedImageForRetry !== null && (
 <div className="fixed inset-0 bg-stone-950/50 flex items-center justify-center z-50 p-4">
 <div className="bg-white dark:bg-stone-950 rounded-lg p-6 max-w-md w-full border border-stone-200 dark:border-stone-800">
 <h3 className="text-lg font-semibold mb-4 text-stone-900 dark:text-stone-100">
 Retry Compression
 </h3>
 <div className="space-y-4">
 <div>
 <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
 Quality: {Math.round(retrySettings.quality * 100)}%
 </label>
 <input
 type="range"
 min="0.1"
 max="1"
 step="0.05"
 value={retrySettings.quality}
 onChange={(e) =>
 setRetrySettings((prev) => ({
 ...prev,
 quality: parseFloat(e.target.value),
 }))
 }
 className="w-full h-2 bg-stone-200 dark:bg-stone-700 rounded-full appearance-none cursor-pointer"
 />
 </div>
 <div className="grid grid-cols-2 gap-3">
 <div>
 <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
 Width
 </label>
 <input
 type="number"
 value={retrySettings.maxWidth}
 onChange={(e) =>
 setRetrySettings((prev) => ({
 ...prev,
 maxWidth: parseInt(e.target.value) || 1920,
 }))
 }
 className="w-full px-3 py-2 border border-stone-200 dark:border-stone-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
 />
 </div>
 <div>
 <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
 Height
 </label>
 <input
 type="number"
 value={retrySettings.maxHeight}
 onChange={(e) =>
 setRetrySettings((prev) => ({
 ...prev,
 maxHeight: parseInt(e.target.value) || 1080,
 }))
 }
 className="w-full px-3 py-2 border border-stone-200 dark:border-stone-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
 />
 </div>
 </div>
 <div>
 <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
 Format
 </label>
 <select
 value={retrySettings.format}
 onChange={(e) =>
 setRetrySettings((prev) => ({
 ...prev,
 format: e.target.value as "jpeg" | "webp",
 }))
 }
 className="w-full px-3 py-2 border border-stone-200 dark:border-stone-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
 >
 <option value="jpeg">JPEG</option>
 <option value="webp">WebP</option>
 </select>
 </div>
 </div>
 <div className="flex gap-3 mt-6">
 <button
 onClick={() => setSelectedImageForRetry(null)}
 className="flex-1 px-4 py-2 text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-700 rounded-lg bg-white dark:bg-stone-800"
 >
 Cancel
 </button>
 <button
 onClick={() => retryCompression(selectedImageForRetry)}
 disabled={isProcessing}
 className="flex-1 px-4 py-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-lg disabled:opacity-50"
 >
 {isProcessing ? "Processing..." : "Retry"}
 </button>
 </div>
 </div>
 </div>
 )}

 {images.length === 0 && !isProcessing && (
 <div
 onClick={() => fileInputRef.current?.click()}
 onDrop={handleDrop}
 onDragOver={handleDragOver}
 className="border-2 border-dashed border-stone-300 dark:border-stone-700 rounded-lg p-16 text-center cursor-pointer bg-white dark:bg-stone-950 transition-all hover:border-stone-400 dark:hover:border-stone-600 hover:bg-stone-50/30 dark:hover:bg-stone-900/30"
 >
 <div className="max-w-md mx-auto">
 <FileImage className="h-16 w-16 text-stone-400 dark:text-stone-600 mx-auto mb-6" />
 <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-3">
 Drop images here or click to select
 </h3>
 <p className="text-stone-600 dark:text-stone-400 mb-4">
 Supports JPEG, PNG, WebP, and GIF formats
 </p>
 <div className="grid grid-cols-2 gap-4 text-sm text-stone-500 dark:text-stone-500">
 <div className="flex items-center justify-center gap-2">
 <Upload className="h-4 w-4" />
 Batch Upload
 </div>
 <div className="flex items-center justify-center gap-2">
 <Zap className="h-4 w-4" />
 Smart Compression
 </div>
 <div className="flex items-center justify-center gap-2">
 <Eye className="h-4 w-4" />
 Live Preview
 </div>
 <div className="flex items-center justify-center gap-2">
 <Target className="h-4 w-4" />
 Precise Control
 </div>
 </div>
 </div>
 </div>
 )}

 {isProcessing && (
 <div className="fixed bottom-6 right-6 bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-lg p-4">
 <div className="flex items-center gap-3">
 <div className="w-5 h-5 border-2 border-stone-900 dark:border-stone-100 border-t-transparent rounded-full animate-spin"></div>
 <span className="text-sm font-medium text-stone-900 dark:text-stone-100">
 Processing images...
 </span>
 </div>
 </div>
 )}

 {images.length > 0 && (
 <div className="mt-8 bg-stone-50 dark:bg-stone-900 rounded-lg p-6 border border-stone-200 dark:border-stone-800">
 <div className="flex items-center gap-3 mb-6">
 <BarChart3 className="h-5 w-5 text-stone-700 dark:text-stone-300" />
 <h3 className="font-semibold text-stone-900 dark:text-stone-100">
 Compression Statistics
 </h3>
 </div>

 <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
 <div className="text-center">
 <div className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-1">
 {images.length}
 </div>
 <div className="text-sm text-stone-600 dark:text-stone-400">
 Images Processed
 </div>
 </div>

 <div className="text-center">
 <div className="text-2xl font-bold text-stone-700 dark:text-stone-300 mb-1">
 {totalSavings.toFixed(1)}%
 </div>
 <div className="text-sm text-stone-600 dark:text-stone-400">
 Average Savings
 </div>
 </div>

 <div className="text-center">
 <div className="text-2xl font-bold text-stone-700 dark:text-stone-300 mb-1">
 {formatFileSize(totalOriginalSize - totalCompressedSize)}
 </div>
 <div className="text-sm text-stone-600 dark:text-stone-400">
 Space Saved
 </div>
 </div>

 <div className="text-center">
 <div className="text-2xl font-bold text-stone-700 dark:text-stone-300 mb-1">
 {format.toUpperCase()}
 </div>
 <div className="text-sm text-stone-600 dark:text-stone-400">
 Output Format
 </div>
 </div>
 </div>

 <div className="mt-6 pt-6 border-t border-stone-200 dark:border-stone-800">
 <div className="flex justify-between items-center text-sm">
 <span className="text-stone-600 dark:text-stone-400">
 Original: {formatFileSize(totalOriginalSize)}
 </span>
 <span className="text-stone-600 dark:text-stone-400">
 Compressed: {formatFileSize(totalCompressedSize)}
 </span>
 </div>
 <div className="mt-2 bg-stone-200 dark:bg-stone-700 rounded-full h-2 overflow-hidden">
 <div
 className="bg-stone-900 dark:bg-stone-100 h-full transition-all duration-500"
 style={{
 width: `${
 100 - (totalCompressedSize / totalOriginalSize) * 100
 }%`,
 }}
 ></div>
 </div>
 </div>
 </div>
 )}

 <div className="mt-8 bg-stone-50 dark:bg-stone-900 rounded-lg p-8 border border-stone-200 dark:border-stone-800">
 <div className="flex items-center gap-3 mb-6">
 <Info className="h-5 w-5 text-stone-600 dark:text-stone-400" />
 <h3 className="font-semibold text-stone-900 dark:text-stone-100 text-lg">
 Advanced Features
 </h3>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 <div className="space-y-4">
 <h4 className="font-semibold text-stone-800 dark:text-stone-200 flex items-center gap-2">
 <Zap className="h-4 w-4 text-stone-500" />
 Smart Compression
 </h4>
 <ul className="text-stone-600 dark:text-stone-400 space-y-2 text-sm leading-relaxed">
 <li>• Intelligent quality optimization</li>
 <li>• Automatic aspect ratio preservation</li>
 <li>• Multiple format support (JPEG, WebP)</li>
 <li>• Custom dimension control</li>
 </ul>
 </div>

 <div className="space-y-4">
 <h4 className="font-semibold text-stone-800 dark:text-stone-200 flex items-center gap-2">
 <Eye className="h-4 w-4 text-stone-500" />
 Visual Tools
 </h4>
 <ul className="text-stone-600 dark:text-stone-400 space-y-2 text-sm leading-relaxed">
 <li>• Real-time before/after comparison</li>
 <li>• Grid and list view modes</li>
 <li>• Instant compression feedback</li>
 </ul>
 </div>

 <div className="space-y-4">
 <h4 className="font-semibold text-stone-800 dark:text-stone-200 flex items-center gap-2">
 <Target className="h-4 w-4 text-stone-500" />
 Professional Controls
 </h4>
 <ul className="text-stone-600 dark:text-stone-400 space-y-2 text-sm leading-relaxed">
 <li>• Batch processing support</li>
 <li>• Retry with different settings</li>
 <li>• Preset configurations</li>
 <li>• Detailed compression statistics</li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}
