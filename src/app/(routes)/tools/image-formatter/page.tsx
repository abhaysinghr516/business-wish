"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
 ArrowLeft,
 Image as ImageIcon,
 Download,
 Upload,
 RefreshCw,
 FileImage,
 ArrowRight,
 Info,
 Zap,
 Shield,
 Layers,
 X,
 Eye,
 EyeOff,
 Copy,
 Check,
} from "lucide-react";

type ImageFormat = "png" | "jpeg" | "webp";

interface ConvertedImage {
 original: File;
 converted: string;
 originalFormat: string;
 targetFormat: ImageFormat;
 originalSize: number;
 convertedSize: number;
 dimensions: { width: number; height: number };
}

export default function ImageFormatter() {
 const [images, setImages] = useState<ConvertedImage[]>([]);
 const [targetFormat, setTargetFormat] = useState<ImageFormat>("webp");
 const [quality, setQuality] = useState(0.9);
 const [isProcessing, setIsProcessing] = useState(false);
 const [dragActive, setDragActive] = useState(false);
 const [previewImage, setPreviewImage] = useState<string | null>(null);
 const [showComparison, setShowComparison] = useState(true);
 const [copied, setCopied] = useState(false);
 const fileInputRef = useRef<HTMLInputElement>(null);

 const handleDrag = (e: React.DragEvent) => {
 e.preventDefault();
 e.stopPropagation();
 if (e.type === "dragenter" || e.type === "dragover") {
 setDragActive(true);
 } else if (e.type === "dragleave") {
 setDragActive(false);
 }
 };

 const handleDrop = (e: React.DragEvent) => {
 e.preventDefault();
 e.stopPropagation();
 setDragActive(false);

 const files = Array.from(e.dataTransfer.files);
 if (files.length > 0) {
 processFiles(files);
 }
 };

 const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
 const files = Array.from(event.target.files || []);
 if (files.length === 0) return;
 processFiles(files);
 };

 const processFiles = (files: File[]) => {
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
 console.error("Some files were skipped. Only image files are supported.");
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
 }
 }

 setImages((prev) => [...prev, ...converted]);
 setIsProcessing(false);

 if (converted.length > 0) {
 console.log(`Converted ${converted.length} image(s) successfully!`);
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

 ctx?.drawImage(img, 0, 0);

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
 dimensions: { width: img.width, height: img.height },
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
 };

 const downloadAll = () => {
 images.forEach((image, index) => {
 setTimeout(() => downloadImage(image, index), index * 100);
 });
 };

 const copyToClipboard = async (text: string) => {
 try {
 await navigator.clipboard.writeText(text);
 setCopied(true);
 setTimeout(() => setCopied(false), 2000);
 } catch (err) {
 console.error("Failed to copy to clipboard");
 }
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

 const removeImage = (index: number) => {
 setImages((prev) => prev.filter((_, i) => i !== index));
 };

 const getFormatColor = (format: string) => {
 switch (format.toLowerCase()) {
 case "png":
 return "bg-stone-100 text-stone-700 border-stone-300 dark:bg-stone-800 dark:text-stone-300 dark:border-stone-600";
 case "jpeg":
 case "jpg":
 return "bg-stone-100 text-stone-700 border-stone-300 dark:bg-stone-800 dark:text-stone-300 dark:border-stone-600";
 case "webp":
 return "bg-stone-100 text-stone-700 border-stone-300 dark:bg-stone-800 dark:text-stone-300 dark:border-stone-600";
 case "gif":
 return "bg-stone-100 text-stone-700 border-stone-300 dark:bg-stone-800 dark:text-stone-300 dark:border-stone-600";
 case "bmp":
 return "bg-stone-100 text-stone-700 border-stone-300 dark:bg-stone-800 dark:text-stone-300 dark:border-stone-600";
 default:
 return "bg-stone-50 text-stone-700 border-stone-200 dark:bg-stone-800 dark:text-stone-300 dark:border-stone-700";
 }
 };

 const getTotalStats = () => {
 const totalOriginal = images.reduce(
 (sum, img) => sum + img.originalSize,
 0
 );
 const totalConverted = images.reduce(
 (sum, img) => sum + img.convertedSize,
 0
 );
 const savings = totalOriginal - totalConverted;
 const savingsPercentage =
 totalOriginal > 0 ? (savings / totalOriginal) * 100 : 0;

 return { totalOriginal, totalConverted, savings, savingsPercentage };
 };

 const stats = getTotalStats();

 return (
 <div className="min-h-screen bg-white dark:bg-stone-950">
 <div className="bg-white dark:bg-stone-950 border-b border-stone-100 dark:border-stone-800">
 <div className="max-w-6xl mx-auto px-4 py-4">
 <Link
 href="/tools"
 className="inline-flex items-center gap-2 text-stone-500 dark:text-stone-400 text-sm mb-3"
 >
 <ArrowLeft className="h-4 w-4" />
 Back to Tools
 </Link>

 <div className="flex items-start justify-between">
 <div className="flex items-center gap-3">
 <div className="p-2 bg-stone-900 dark:bg-stone-100 rounded-lg">
 <ImageIcon className="h-5 w-5 text-white dark:text-stone-900" />
 </div>
 <div>
 <h1 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
 Image Formatter
 </h1>
 <p className="text-stone-600 dark:text-stone-400 text-sm">
 Convert between PNG, JPEG & WebP with quality control
 </p>
 </div>
 </div>

 {images.length > 0 && (
 <div className="text-right">
 <div className="text-sm text-stone-600 dark:text-stone-400">
 {images.length} image{images.length !== 1 ? "s" : ""}{" "}
 converted
 </div>
 {stats.savings !== 0 && (
 <div
 className={`text-sm font-medium ${
 stats.savings > 0 ? "text-stone-700 dark:text-stone-300" : "text-stone-500 dark:text-stone-400"
 }`}
 >
 {stats.savings > 0 ? "↓" : "↑"}{" "}
 {formatFileSize(Math.abs(stats.savings))}(
 {Math.abs(stats.savingsPercentage).toFixed(1)}%)
 </div>
 )}
 </div>
 )}
 </div>
 </div>
 </div>

 <div className="max-w-6xl mx-auto px-4 py-6">
 <div className="bg-white dark:bg-stone-950 rounded-xl border border-stone-200 dark:border-stone-800 p-5 mb-6">
 <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
 <div className="lg:col-span-1">
 <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
 Target Format
 </label>
 <select
 value={targetFormat}
 onChange={(e) => setTargetFormat(e.target.value as ImageFormat)}
 className="w-full px-3 py-2 border border-stone-200 dark:border-stone-700 rounded-lg text-sm focus:outline-none focus:border-stone-400 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
 >
 <option value="png">PNG (Lossless)</option>
 <option value="jpeg">JPEG (Lossy)</option>
 <option value="webp">WebP (Modern)</option>
 </select>
 </div>

 {targetFormat !== "png" && (
 <div className="lg:col-span-1">
 <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
 Quality: {Math.round(quality * 100)}%
 </label>
 <input
 type="range"
 min="0.1"
 max="1"
 step="0.1"
 value={quality}
 onChange={(e) => setQuality(parseFloat(e.target.value))}
 className="w-full"
 />
 </div>
 )}

 <div className="lg:col-span-2">
 <div className="text-sm text-stone-600 dark:text-stone-400">
 <div className="font-medium mb-1">Format Benefits:</div>
 {targetFormat === "png" && (
 <div className="text-xs">
 Lossless • Transparency • Graphics
 </div>
 )}
 {targetFormat === "jpeg" && (
 <div className="text-xs">
 Small sizes • Wide compatibility • Photos
 </div>
 )}
 {targetFormat === "webp" && (
 <div className="text-xs">
 Best compression • Modern • 25-35% smaller
 </div>
 )}
 </div>
 </div>
 </div>

 <div className="flex flex-wrap gap-2">
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
 className="flex items-center gap-2 px-4 py-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-lg text-sm font-medium disabled:opacity-50"
 >
 <Upload className="h-4 w-4" />
 {isProcessing ? "Processing..." : "Select Images"}
 </button>

 {images.length > 0 && (
 <>
 <button
 onClick={downloadAll}
 className="flex items-center gap-2 px-4 py-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-lg text-sm"
 >
 <Download className="h-4 w-4" />
 Download All
 </button>
 <button
 onClick={clearAll}
 className="flex items-center gap-2 px-4 py-2 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 rounded-lg text-sm"
 >
 <RefreshCw className="h-4 w-4" />
 Clear All
 </button>
 <button
 onClick={() => setShowComparison(!showComparison)}
 className="flex items-center gap-2 px-4 py-2 border border-stone-300 dark:border-stone-700 rounded-lg text-sm text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-800"
 >
 {showComparison ? (
 <EyeOff className="h-4 w-4" />
 ) : (
 <Eye className="h-4 w-4" />
 )}
 {showComparison ? "Hide" : "Show"} Details
 </button>
 </>
 )}
 </div>
 </div>

 {images.length === 0 && !isProcessing && (
 <div
 onDragEnter={handleDrag}
 onDragLeave={handleDrag}
 onDragOver={handleDrag}
 onDrop={handleDrop}
 onClick={() => fileInputRef.current?.click()}
 className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
 dragActive
 ? "border-stone-400 bg-stone-50 dark:border-stone-500 dark:bg-stone-900"
 : "border-stone-300 dark:border-stone-700 hover:border-stone-400 dark:hover:border-stone-600"
 }`}
 >
 <div className="max-w-sm mx-auto">
 <FileImage className="h-12 w-12 text-stone-400 dark:text-stone-600 mx-auto mb-3" />
 <h3 className="text-lg font-medium text-stone-900 dark:text-stone-100 mb-2">
 {dragActive ? "Drop images here" : "Select or drop images"}
 </h3>
 <p className="text-stone-500 dark:text-stone-400 text-sm mb-4">
 PNG, JPEG, WebP, GIF, BMP supported
 </p>
 <div className="flex justify-center gap-1 flex-wrap">
 {["PNG", "JPEG", "WebP", "GIF", "BMP"].map((format) => (
 <span
 key={format}
 className={`px-2 py-1 rounded text-xs font-medium ${getFormatColor(
 format.toLowerCase()
 )}`}
 >
 {format}
 </span>
 ))}
 </div>
 </div>
 </div>
 )}

 {images.length > 0 && (
 <div className="space-y-4">
 <div className="flex items-center justify-between">
 <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
 Converted Images
 </h2>
 <div className="text-sm text-stone-600 dark:text-stone-400">
 {images.length} image{images.length !== 1 ? "s" : ""}
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
 {images.map((image, index) => (
 <div
 key={index}
 className="bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-lg overflow-hidden"
 >
 <div className="aspect-video bg-stone-50 dark:bg-stone-900 relative group">
 <img
 src={image.converted}
 alt={image.original.name}
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-stone-950 bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
 <button
 onClick={() => setPreviewImage(image.converted)}
 className="opacity-0 group-hover:opacity-100 bg-white dark:bg-stone-800 rounded-full p-2 transition-opacity"
 >
 <Eye className="h-4 w-4 text-stone-700 dark:text-stone-300" />
 </button>
 </div>
 <button
 onClick={() => removeImage(index)}
 className="absolute top-2 right-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
 >
 <X className="h-3 w-3" />
 </button>
 </div>

 <div className="p-3 space-y-3">
 <div className="flex items-center justify-between">
 <h3 className="font-medium text-stone-900 dark:text-stone-100 text-sm truncate flex-1 mr-2">
 {image.original.name}
 </h3>
 <button
 onClick={() => copyToClipboard(image.original.name)}
 className="p-1 text-stone-400 dark:text-stone-500"
 >
 {copied ? (
 <Check className="h-3 w-3 text-stone-500" />
 ) : (
 <Copy className="h-3 w-3" />
 )}
 </button>
 </div>

 <div className="text-xs text-stone-500 dark:text-stone-400">
 {image.dimensions.width} × {image.dimensions.height}
 </div>

 <div className="flex items-center justify-center gap-2">
 <span
 className={`px-2 py-1 rounded text-xs font-medium border ${getFormatColor(
 image.originalFormat
 )}`}
 >
 {image.originalFormat.toUpperCase()}
 </span>
 <ArrowRight className="h-3 w-3 text-stone-400 dark:text-stone-500" />
 <span
 className={`px-2 py-1 rounded text-xs font-medium border ${getFormatColor(
 image.targetFormat
 )}`}
 >
 {image.targetFormat.toUpperCase()}
 </span>
 </div>

 {showComparison && (
 <>
 <div className="grid grid-cols-2 gap-2 text-xs">
 <div className="text-center p-2 bg-stone-50 dark:bg-stone-800 rounded">
 <div className="font-medium text-stone-900 dark:text-stone-100">
 Original
 </div>
 <div className="text-stone-600 dark:text-stone-400">
 {formatFileSize(image.originalSize)}
 </div>
 </div>
 <div className="text-center p-2 bg-stone-50 dark:bg-stone-800 rounded">
 <div className="font-medium text-stone-900 dark:text-stone-100">
 Converted
 </div>
 <div className="text-stone-600 dark:text-stone-400">
 {formatFileSize(image.convertedSize)}
 </div>
 </div>
 </div>

 <div
 className={`text-center text-xs font-medium p-2 rounded ${
 image.convertedSize < image.originalSize
 ? "bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300"
 : image.convertedSize > image.originalSize
 ? "bg-stone-100 text-stone-500 dark:bg-stone-800 dark:text-stone-400"
 : "bg-stone-50 text-stone-700 dark:bg-stone-800 dark:text-stone-300"
 }`}
 >
 {image.convertedSize < image.originalSize && "↓ "}
 {image.convertedSize > image.originalSize && "↑ "}
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
 : " same"}
 </div>
 </>
 )}

 <button
 onClick={() => downloadImage(image, index)}
 className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-lg text-sm font-medium"
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

 {previewImage && (
 <div className="fixed inset-0 bg-stone-950 bg-opacity-50 flex items-center justify-center p-4 z-50">
 <div className="max-w-4xl max-h-full bg-white dark:bg-stone-950 rounded-lg overflow-hidden">
 <div className="flex items-center justify-between p-4 border-b dark:border-stone-800">
 <h3 className="font-medium text-stone-900 dark:text-stone-100">
 Image Preview
 </h3>
 <button
 onClick={() => setPreviewImage(null)}
 className="p-1 hover:bg-stone-100 dark:hover:bg-stone-800 rounded text-stone-700 dark:text-stone-300"
 >
 <X className="h-5 w-5" />
 </button>
 </div>
 <div className="p-4">
 <img
 src={previewImage}
 alt="Preview"
 className="max-w-full max-h-96 object-contain mx-auto"
 />
 </div>
 </div>
 </div>
 )}

 <div className="mt-8 bg-white dark:bg-stone-950 rounded-xl border border-stone-200 dark:border-stone-800 p-6">
 <div className="flex items-center gap-2 mb-4">
 <Info className="h-5 w-5 text-stone-500" />
 <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
 Format Comparison
 </h3>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
 <div className="p-4 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800">
 <div className="flex items-center gap-2 mb-3">
 <Shield className="h-4 w-4 text-stone-700 dark:text-stone-300" />
 <h4 className="font-medium text-stone-900 dark:text-stone-200">
 PNG
 </h4>
 </div>
 <ul className="text-sm text-stone-600 dark:text-stone-400 space-y-1">
 <li>• Lossless compression</li>
 <li>• Transparency support</li>
 <li>• Best for graphics & logos</li>
 <li>• Larger file sizes</li>
 </ul>
 </div>

 <div className="p-4 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800">
 <div className="flex items-center gap-2 mb-3">
 <Layers className="h-4 w-4 text-stone-700 dark:text-stone-300" />
 <h4 className="font-medium text-stone-900 dark:text-stone-200">
 JPEG
 </h4>
 </div>
 <ul className="text-sm text-stone-600 dark:text-stone-400 space-y-1">
 <li>• Lossy compression</li>
 <li>• Small file sizes</li>
 <li>• Best for photographs</li>
 <li>• Universal compatibility</li>
 </ul>
 </div>

 <div className="p-4 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800">
 <div className="flex items-center gap-2 mb-3">
 <Zap className="h-4 w-4 text-stone-700 dark:text-stone-300" />
 <h4 className="font-medium text-stone-900 dark:text-stone-200">
 WebP
 </h4>
 </div>
 <ul className="text-sm text-stone-600 dark:text-stone-400 space-y-1">
 <li>• Superior compression</li>
 <li>• 25-35% smaller than JPEG</li>
 <li>• Lossless & lossy modes</li>
 <li>• Modern browser support</li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}
