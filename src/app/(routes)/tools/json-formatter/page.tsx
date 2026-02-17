"use client";

import { useState } from "react";
import Link from "next/link";
import {
 ArrowLeft,
 Code,
 Copy,
 Check,
 Download,
 Upload,
 RefreshCw,
 Minimize2,
 Maximize2,
 X,
 ArrowRightLeft,
} from "lucide-react";

export default function JSONFormatter() {
 const [input, setInput] = useState("");
 const [output, setOutput] = useState("");
 const [error, setError] = useState("");
 const [copiedText, setCopiedText] = useState("");
 const [indentSize, setIndentSize] = useState(2);

 const formatJSON = () => {
 try {
 setError("");
 const parsed = JSON.parse(input);
 const formatted = JSON.stringify(parsed, null, indentSize);
 setOutput(formatted);
 } catch (err) {
 setError(err instanceof Error ? err.message : "Invalid JSON");
 setOutput("");
 }
 };

 const minifyJSON = () => {
 try {
 setError("");
 const parsed = JSON.parse(input);
 const minified = JSON.stringify(parsed);
 setOutput(minified);
 } catch (err) {
 setError(err instanceof Error ? err.message : "Invalid JSON");
 setOutput("");
 }
 };

 const validateJSON = () => {
 try {
 JSON.parse(input);
 setError("");
 } catch (err) {
 setError(err instanceof Error ? err.message : "Invalid JSON");
 }
 };

 const copyToClipboard = async (text: string, label: string) => {
 try {
 await navigator.clipboard.writeText(text);
 setCopiedText(label);
 setTimeout(() => setCopiedText(""), 2000);
 } catch {
 // Ignore copy errors
 }
 };

 const downloadJSON = (asTxt = false) => {
 if (!output) return;
 const blob = new Blob([output], { type: "application/json" });
 const url = URL.createObjectURL(blob);
 const a = document.createElement("a");
 a.href = url;
 a.download = asTxt ? "formatted.txt" : "formatted.json";
 document.body.appendChild(a);
 a.click();
 document.body.removeChild(a);
 URL.revokeObjectURL(url);
 };

 const loadSample = () => {
 const sample = {
 name: "John Doe",
 age: 30,
 city: "New York",
 hobbies: ["reading", "swimming", "coding"],
 address: {
 street: "123 Main St",
 zipCode: "10001",
 },
 isActive: true,
 balance: 1250.5,
 };
 setInput(JSON.stringify(sample, null, 2));
 };

 const swapInputOutput = () => {
 if (!input && !output) return;
 setInput(output);
 setOutput(input);
 };

 return (
 <div className="min-h-screen bg-white dark:bg-stone-950">
 <div className="border-b border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950">
 <div className="max-w-6xl mx-auto px-6 py-6">
 <Link
 href="/tools"
 className="inline-flex items-center gap-2 text-stone-500 dark:text-stone-400 text-sm"
 >
 <ArrowLeft className="h-4 w-4" />
 Back to Tools
 </Link>

 <div className="flex items-center gap-3 mt-4">
 <div className="p-2 bg-stone-900 dark:bg-stone-100 rounded-lg">
 <Code className="h-5 w-5 text-white dark:text-stone-900" />
 </div>
 <div>
 <h1 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
 JSON Formatter
 </h1>
 <p className="text-stone-500 dark:text-stone-400 text-sm">
 Format, validate, and minify JSON data
 </p>
 </div>
 </div>
 </div>
 </div>

 <div className="max-w-6xl mx-auto px-6 py-8">
 <div className="bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl p-5 mb-8 space-y-4">
 <div className="flex flex-wrap items-center justify-between gap-4">
 <div className="flex items-center gap-3">
 <label className="text-sm font-medium text-stone-700 dark:text-stone-300">
 Indent:
 </label>
 <select
 value={indentSize}
 onChange={(e) => setIndentSize(Number(e.target.value))}
 className="px-3 py-1.5 border border-stone-200 dark:border-stone-700 rounded-md text-sm focus:outline-none bg-white dark:bg-stone-800 dark:text-stone-200"
 >
 <option value={2}>2 spaces</option>
 <option value={4}>4 spaces</option>
 <option value={8}>8 spaces</option>
 </select>
 </div>
 <div className="flex gap-2">
 <button
 onClick={loadSample}
 className="px-3 py-1.5 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-md text-sm flex items-center gap-2 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700"
 >
 <Upload className="h-3 w-3" /> Load Sample
 </button>
 <button
 onClick={swapInputOutput}
 className="px-3 py-1.5 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-md text-sm flex items-center gap-2 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700"
 >
 <ArrowRightLeft className="h-3 w-3" /> Swap
 </button>
 </div>
 </div>

 <div className="flex flex-wrap gap-2">
 <button
 onClick={formatJSON}
 className="px-4 py-2 bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-stone-200 dark:text-stone-900 text-white rounded-md text-sm flex items-center gap-2"
 >
 <Maximize2 className="h-3 w-3" /> Format
 </button>
 <button
 onClick={minifyJSON}
 className="px-4 py-2 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-900 rounded-md text-sm flex items-center gap-2"
 >
 <Minimize2 className="h-3 w-3" /> Minify
 </button>
 <button
 onClick={validateJSON}
 className="px-4 py-2 bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-stone-200 dark:text-stone-900 text-white rounded-md text-sm flex items-center gap-2"
 >
 <Check className="h-3 w-3" /> Validate
 </button>
 <button
 onClick={() => setInput("")}
 className="px-4 py-2 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-md text-sm flex items-center gap-2 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700"
 >
 <X className="h-3 w-3" /> Clear Input
 </button>
 <button
 onClick={() => setOutput("")}
 className="px-4 py-2 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-md text-sm flex items-center gap-2 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700"
 >
 <X className="h-3 w-3" /> Clear Output
 </button>
 </div>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
 <div className="bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl p-4 space-y-3">
 <div className="flex items-center justify-between">
 <h2 className="text-base font-semibold text-stone-800 dark:text-stone-200">
 Input JSON
 </h2>
 <span className="text-xs text-stone-500 dark:text-stone-400">
 {input.length} chars
 </span>
 </div>
 <textarea
 value={input}
 onChange={(e) => setInput(e.target.value)}
 placeholder="Paste your JSON here..."
 className="w-full h-96 px-3 py-2 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-md font-mono text-sm focus:outline-none resize-none text-stone-900 dark:text-stone-100"
 />
 {error && (
 <div className="p-3 bg-red-50 dark:bg-red-950 border border-stone-200 dark:border-red-800 rounded-md">
 <p className="text-red-700 dark:text-red-400 text-sm font-semibold">
 Error
 </p>
 <p className="text-red-600 dark:text-red-300 text-sm">
 {error}
 </p>
 </div>
 )}
 </div>

 <div className="bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl p-4 space-y-3">
 <div className="flex items-center justify-between">
 <h2 className="text-base font-semibold text-stone-800 dark:text-stone-200">
 Formatted Output
 </h2>
 <div className="flex gap-2">
 {output && (
 <>
 <button
 onClick={() => copyToClipboard(output, "JSON")}
 className="px-3 py-1.5 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-md text-sm flex items-center gap-1 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700"
 >
 {copiedText === "JSON" ? (
 <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
 ) : (
 <Copy className="h-3 w-3" />
 )}
 Copy
 </button>
 <button
 onClick={() => downloadJSON(false)}
 className="px-3 py-1.5 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-md text-sm flex items-center gap-1 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700"
 >
 <Download className="h-3 w-3" /> JSON
 </button>
 <button
 onClick={() => downloadJSON(true)}
 className="px-3 py-1.5 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-md text-sm flex items-center gap-1 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700"
 >
 <Download className="h-3 w-3" /> TXT
 </button>
 </>
 )}
 </div>
 </div>
 <textarea
 value={output}
 readOnly
 placeholder="Formatted JSON will appear here..."
 className="w-full h-96 px-3 py-2 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-md font-mono text-sm resize-none text-stone-900 dark:text-stone-100"
 />
 {output && (
 <p className="text-xs text-stone-500 dark:text-stone-400">
 {output.length} chars • {output.split("\n").length} lines
 </p>
 )}
 </div>
 </div>

 <div className="mt-10 bg-stone-50 dark:bg-stone-900 rounded-xl p-6">
 <h3 className="text-base font-semibold text-stone-800 dark:text-stone-200 mb-3">
 Features
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-600 dark:text-stone-400">
 <div>
 <h4 className="font-medium text-stone-700 dark:text-stone-300 mb-2">
 Format & Beautify
 </h4>
 <ul className="space-y-1">
 <li>• Pretty-print JSON with indentation</li>
 <li>• Customizable indent size (2, 4, or 8 spaces)</li>
 <li>• Maintains structure and types</li>
 </ul>
 </div>
 <div>
 <h4 className="font-medium text-stone-700 dark:text-stone-300 mb-2">
 Validate & Minify
 </h4>
 <ul className="space-y-1">
 <li>• Real-time JSON validation</li>
 <li>• Detailed error messages</li>
 <li>• Minify JSON for production</li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}
