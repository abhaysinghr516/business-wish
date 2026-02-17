"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
 ArrowLeft,
 Download,
 Copy,
 Check,
 Smartphone,
 QrCode,
} from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";

interface QROptions {
 size: number;
 errorCorrection: "L" | "M" | "Q" | "H";
}

export default function QRGenerator() {
 const [content, setContent] = useState("");
 const [options, setOptions] = useState<QROptions>({
 size: 512,
 errorCorrection: "M",
 });
 const [isCopied, setIsCopied] = useState(false);
 const qrRef = useRef<HTMLDivElement>(null);

 const formatContent = (): string => {
 if (!content) return "";
 if (content.startsWith("http://") || content.startsWith("https://")) {
 return content;
 }
 return `https://${content}`;
 };

 const copyToClipboard = async (text: string) => {
 try {
 await navigator.clipboard.writeText(text);
 setIsCopied(true);
 setTimeout(() => setIsCopied(false), 2500);
 } catch (err) {}
 };

 const downloadQR = () => {
 if (qrRef.current) {
 const canvas = qrRef.current.querySelector("canvas");
 if (canvas) {
 const tempCanvas = document.createElement("canvas");
 const ctx = tempCanvas.getContext("2d");
 if (!ctx) return;

 tempCanvas.width = options.size;
 tempCanvas.height = options.size;

 ctx.fillStyle = "#FFFFFF";
 ctx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

 const qrSize = Math.min(tempCanvas.width, tempCanvas.height) * 0.9;
 const x = (tempCanvas.width - qrSize) / 2;
 const y = (tempCanvas.height - qrSize) / 2;

 ctx.drawImage(canvas, x, y, qrSize, qrSize);

 const link = document.createElement("a");
 link.download = `qr-${
 content.replace(/^https?:\/\//, "").split("/")[0]
 }-${options.size}px.png`;
 link.href = tempCanvas.toDataURL("image/png");
 document.body.appendChild(link);
 link.click();
 document.body.removeChild(link);
 }
 }
 };

 const formattedContent = formatContent();
 const hasContent = content.trim().length > 0;

 return (
 <div className="min-h-screen bg-white dark:bg-stone-950">
 <div className="border-b border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950">
 <div className="max-w-6xl mx-auto px-6 py-6">
 <Link
 href="/tools"
 className="inline-flex items-center gap-2 text-stone-500 dark:text-stone-400 mb-4"
 >
 <ArrowLeft className="h-4 w-4" />
 Back to Tools
 </Link>

 <div className="flex items-center gap-3">
 <div className="p-2 bg-stone-900 dark:bg-stone-100 rounded-lg">
 <QrCode className="h-5 w-5 text-white dark:text-stone-900" />
 </div>
 <div>
 <h1 className="text-xl font-medium text-stone-900 dark:text-stone-100">
 QR Code Generator
 </h1>
 <p className="text-stone-500 dark:text-stone-400 text-sm">
 Generate, customize, and download QR codes instantly
 </p>
 </div>
 </div>
 </div>
 </div>

 <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
 <div className="bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl p-6 space-y-6">
 <h2 className="text-lg font-medium text-stone-900 dark:text-stone-100">
 QR Code Settings
 </h2>

 <div>
 <label
 htmlFor="url-input"
 className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2"
 >
 Enter URL or Text
 </label>
 <input
 id="url-input"
 type="text"
 value={content}
 onChange={(e) => setContent(e.target.value)}
 placeholder="https://example.com or any text"
 className="w-full px-4 py-3 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg text-sm focus:outline-none text-stone-900 dark:text-stone-100"
 />
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
 <div>
 <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
 Size:{" "}
 <span className="font-medium text-stone-900 dark:text-stone-100">
 {options.size}px
 </span>
 </label>
 <input
 type="range"
 min="256"
 max="2048"
 step="128"
 value={options.size}
 onChange={(e) =>
 setOptions((prev) => ({
 ...prev,
 size: Number(e.target.value),
 }))
 }
 disabled={!hasContent}
 className="w-full disabled:opacity-40"
 />
 <div className="flex justify-between text-xs text-stone-400 dark:text-stone-500 mt-1">
 <span>256px</span>
 <span>2048px</span>
 </div>
 </div>

 <div>
 <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
 Error Correction Level
 </label>
 <select
 value={options.errorCorrection}
 onChange={(e) =>
 setOptions((prev) => ({
 ...prev,
 errorCorrection: e.target.value as any,
 }))
 }
 disabled={!hasContent}
 className="w-full px-3 py-2 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg text-sm focus:outline-none disabled:opacity-40 text-stone-900 dark:text-stone-200"
 >
 <option value="L">Low (7%)</option>
 <option value="M">Medium (15%)</option>
 <option value="Q">Quartile (25%)</option>
 <option value="H">High (30%)</option>
 </select>
 </div>
 </div>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
 <div className="bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden">
 <div className="p-4 border-b border-stone-200 dark:border-stone-800">
 <h3 className="text-sm font-medium text-stone-900 dark:text-stone-100">
 Preview
 </h3>
 </div>

 <div className="p-6 flex flex-col items-center">
 <div
 ref={qrRef}
 className="w-64 h-64 flex items-center justify-center bg-stone-50 dark:bg-stone-900 rounded-lg"
 >
 {hasContent ? (
 <QRCodeCanvas
 value={formattedContent}
 size={240}
 bgColor="transparent"
 fgColor="#FFFFFF"
 level={options.errorCorrection}
 marginSize={2}
 />
 ) : (
 <div className="text-center text-stone-400 dark:text-stone-600">
 <Smartphone className="h-12 w-12 mx-auto mb-3" />
 <p className="text-sm">QR code will appear here</p>
 </div>
 )}
 </div>

 {hasContent && (
 <>
 <div className="mt-4 text-xs text-stone-500 dark:text-stone-400 space-y-1 text-center">
 <p>Content: {formattedContent}</p>
 <p>
 Size: {options.size}px • Level: {options.errorCorrection}
 </p>
 </div>
 <div className="mt-5 space-y-3 w-full">
 <button
 onClick={downloadQR}
 className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-stone-900 dark:bg-stone-50 text-white dark:text-black text-sm rounded-lg font-medium"
 >
 <Download className="h-4 w-4" />
 Download PNG
 </button>
 <button
 onClick={() => copyToClipboard(formattedContent)}
 className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-sm rounded-lg border border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-700"
 >
 {isCopied ? (
 <>
 <Check className="h-4 w-4 text-stone-500" />
 Copied!
 </>
 ) : (
 <>
 <Copy className="h-4 w-4" />
 Copy Link
 </>
 )}
 </button>
 </div>
 </>
 )}
 </div>
 </div>

 <div className="bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl p-6">
 <h3 className="text-sm font-medium text-stone-900 dark:text-stone-100 mb-3">
 How it Works
 </h3>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-stone-600 dark:text-stone-400">
 <ul className="space-y-2">
 <li>• Enter any URL or text</li>
 <li>• Preview updates instantly</li>
 <li>• Adjust size from 256px–2048px</li>
 </ul>
 <ul className="space-y-2">
 <li>• Choose error correction level</li>
 <li>• Download QR as PNG</li>
 <li>• Copy the encoded link</li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}
