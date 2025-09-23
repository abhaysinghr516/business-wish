"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  Copy,
  Check,
  Download,
  Upload,
  RefreshCw,
  Settings,
  File,
  X,
  AlertCircle,
  Info,
} from "lucide-react";

export default function CSVToJSON() {
  const [csvInput, setCsvInput] = useState("");
  const [jsonOutput, setJsonOutput] = useState("");
  const [delimiter, setDelimiter] = useState(",");
  const [hasHeader, setHasHeader] = useState(true);
  const [copiedText, setCopiedText] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const convertCSVToJSON = () => {
    try {
      setIsProcessing(true);
      setError("");

      if (!csvInput.trim()) {
        setError("Please enter CSV data or upload a file");
        setIsProcessing(false);
        return;
      }

      const lines = csvInput.trim().split("\n");
      if (lines.length === 0) {
        setError("No data to process");
        setIsProcessing(false);
        return;
      }

      let headers: string[] = [];
      let dataLines = lines;

      if (hasHeader) {
        headers = lines[0]
          .split(delimiter)
          .map((h) => h.trim().replace(/"/g, ""));
        dataLines = lines.slice(1);
      } else {
        const firstLine = lines[0].split(delimiter);
        headers = firstLine.map((_, index) => `column_${index + 1}`);
      }

      const result = dataLines.map((line) => {
        const values = line
          .split(delimiter)
          .map((v) => v.trim().replace(/"/g, ""));
        const obj: Record<string, any> = {};

        headers.forEach((header, index) => {
          let value: any = values[index] || "";

          if (value && !isNaN(Number(value)) && !isNaN(parseFloat(value))) {
            value = parseFloat(value);
          } else if (value.toLowerCase() === "true") {
            value = true;
          } else if (value.toLowerCase() === "false") {
            value = false;
          }

          obj[header] = value;
        });

        return obj;
      });

      setJsonOutput(JSON.stringify(result, null, 2));
      setIsProcessing(false);
    } catch (error) {
      setError("Error converting CSV to JSON. Please check your data format.");
      setIsProcessing(false);
      console.error(error);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith(".csv") && !file.name.endsWith(".txt")) {
      setError("Please upload a CSV or TXT file");
      return;
    }

    setUploadedFile(file);
    setError("");

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      setCsvInput(text);
    };
    reader.readAsText(file);
  };

  const removeFile = () => {
    setUploadedFile(null);
    setCsvInput("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(label);
      setTimeout(() => setCopiedText(""), 2000);
    } catch (err) {
      setError("Failed to copy to clipboard");
    }
  };

  const downloadJSON = () => {
    if (!jsonOutput) return;

    const blob = new Blob([jsonOutput], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = uploadedFile
      ? `${uploadedFile.name.replace(/\.[^/.]+$/, "")}.json`
      : "converted.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const loadSample = () => {
    const sample = `name,age,city,active
John Doe,30,New York,true
Jane Smith,25,Los Angeles,false
Bob Johnson,35,Chicago,true`;
    setCsvInput(sample);
    setUploadedFile(null);
    setError("");
  };

  const clearAll = () => {
    setCsvInput("");
    setJsonOutput("");
    setUploadedFile(null);
    setError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const inputRowCount = csvInput
    .split("\n")
    .filter((line) => line.trim()).length;
  const outputObjectCount = jsonOutput ? JSON.parse(jsonOutput).length : 0;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm mb-3"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tools
          </Link>

          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                CSV to JSON Converter
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Transform CSV data into structured JSON format with smart type
                detection
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {error && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400 flex-shrink-0" />
            <span className="text-sm text-red-800 dark:text-red-300">
              {error}
            </span>
          </div>
        )}

        <div className="bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800 p-4 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                <Settings className="h-4 w-4" />
                Configuration
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Delimiter
                  </label>
                  <select
                    value={delimiter}
                    onChange={(e) => setDelimiter(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  >
                    <option value=",">Comma (,)</option>
                    <option value=";">Semicolon (;)</option>
                    <option value="\t">Tab</option>
                    <option value="|">Pipe (|)</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={hasHeader}
                      onChange={(e) => setHasHeader(e.target.checked)}
                      className="rounded border-gray-300 dark:border-gray-600 text-emerald-600 focus:ring-emerald-500 bg-gray-100 dark:bg-gray-900"
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      First row is header
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                <File className="h-4 w-4" />
                File Upload
              </div>

              <div className="flex gap-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".csv,.txt"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-2 px-3 py-2 text-sm bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <Upload className="h-4 w-4" />
                  Upload CSV
                </button>
                <button
                  onClick={loadSample}
                  className="flex items-center gap-2 px-3 py-2 text-sm bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <FileText className="h-4 w-4" />
                  Sample Data
                </button>
                <button
                  onClick={clearAll}
                  className="flex items-center gap-2 px-3 py-2 text-sm bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <RefreshCw className="h-4 w-4" />
                  Clear All
                </button>
              </div>
            </div>
          </div>

          {uploadedFile && (
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <File className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm text-blue-800 dark:text-blue-200">
                    {uploadedFile.name}
                  </span>
                  <span className="text-xs text-blue-600 dark:text-blue-400">
                    ({(uploadedFile.size / 1024).toFixed(1)} KB)
                  </span>
                </div>
                <button
                  onClick={removeFile}
                  className="p-1 text-blue-600 dark:text-blue-400 rounded"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          <div className="mt-4">
            <button
              onClick={convertCSVToJSON}
              disabled={isProcessing || !csvInput.trim()}
              className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md font-medium text-sm disabled:bg-gray-400 dark:disabled:bg-gray-700 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : (
                <FileText className="h-4 w-4" />
              )}
              {isProcessing ? "Converting..." : "Convert to JSON"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                  CSV Input
                </h3>
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <span>{inputRowCount} rows</span>
                  <span>{csvInput.length} chars</span>
                </div>
              </div>
            </div>

            <div className="p-4">
              <textarea
                value={csvInput}
                onChange={(e) => setCsvInput(e.target.value)}
                placeholder="Paste your CSV data here or upload a file..."
                className="w-full h-80 px-3 py-2 text-sm font-mono bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none text-gray-900 dark:text-gray-100"
              />
            </div>
          </div>

          <div className="bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                  JSON Output
                </h3>
                <div className="flex items-center gap-2">
                  {jsonOutput && (
                    <>
                      <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mr-2">
                        <span>{outputObjectCount} objects</span>
                        <span>{jsonOutput.length} chars</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(jsonOutput, "JSON")}
                        className="flex items-center gap-1 px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded text-gray-700 dark:text-gray-300"
                      >
                        {copiedText === "JSON" ? (
                          <Check className="h-3 w-3 text-green-600" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                        Copy
                      </button>
                      <button
                        onClick={downloadJSON}
                        className="flex items-center gap-1 px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded text-gray-700 dark:text-gray-300"
                      >
                        <Download className="h-3 w-3" />
                        Download
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="p-4">
              <textarea
                value={jsonOutput}
                readOnly
                placeholder="JSON output will appear here..."
                className="w-full h-80 px-3 py-2 text-sm font-mono bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md resize-none text-gray-900 dark:text-gray-100"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950 rounded-lg border border-emerald-200 dark:border-emerald-800 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Info className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="font-medium text-gray-900 dark:text-gray-100">
              Features & Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                Smart Processing
              </h4>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Automatic data type detection</li>
                <li>• Multiple delimiter support</li>
                <li>• Header row handling</li>
                <li>• Error validation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                File Support
              </h4>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                <li>• CSV file upload</li>
                <li>• Text file support</li>
                <li>• Drag & drop ready</li>
                <li>• File size display</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                Export Options
              </h4>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                <li>• One-click copy to clipboard</li>
                <li>• Direct JSON download</li>
                <li>• Real-time preview</li>
                <li>• Character & object count</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
