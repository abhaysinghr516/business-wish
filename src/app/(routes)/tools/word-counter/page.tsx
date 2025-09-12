"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  Copy,
  Check,
  Upload,
  BarChart3,
  Clock,
  Eye,
  Zap,
  Target,
  TrendingUp,
  Hash,
  Type,
  BookOpen,
  RefreshCw,
  Sparkles,
  Activity,
} from "lucide-react";

interface TextStats {
  characters: number;
  charactersNoSpaces: number;
  words: number;
  sentences: number;
  paragraphs: number;
  readingTime: number;
  speakingTime: number;
  mostCommonWords: Array<{ word: string; count: number }>;
  averageWordsPerSentence: number;
  averageCharactersPerWord: number;
  uniqueWords: number;
  longestWord: string;
  shortestSentence: number;
  longestSentence: number;
  keywordDensity: Array<{ word: string; density: number }>;
}

export default function WordCounter() {
  const [text, setText] = useState("");
  const [stats, setStats] = useState<TextStats | null>(null);
  const [copiedText, setCopiedText] = useState("");
  const [activeTab, setActiveTab] = useState<
    "overview" | "analysis" | "readability"
  >("overview");

  const analyzeText = (inputText: string): TextStats => {
    // Basic counts
    const characters = inputText.length;
    const charactersNoSpaces = inputText.replace(/\s/g, "").length;

    // Words (split by whitespace and filter empty strings)
    const words = inputText.trim()
      ? inputText
          .trim()
          .split(/\s+/)
          .filter((word) => word.length > 0)
      : [];
    const wordCount = words.length;

    // Sentences (split by sentence endings)
    const sentences = inputText
      .split(/[.!?]+/)
      .filter((s) => s.trim().length > 0);
    const sentenceCount = sentences.length;

    // Paragraphs (split by double line breaks)
    const paragraphs = inputText
      .split(/\n\s*\n/)
      .filter((p) => p.trim().length > 0);
    const paragraphCount = Math.max(
      paragraphs.length,
      inputText.trim() ? 1 : 0
    );

    // Reading time (average 200 words per minute)
    const readingTime = Math.ceil(wordCount / 200);

    // Speaking time (average 150 words per minute)
    const speakingTime = Math.ceil(wordCount / 150);

    // Most common words
    const wordFrequency: Record<string, number> = {};
    words.forEach((word) => {
      const cleanWord = word.toLowerCase().replace(/[^\w]/g, "");
      if (cleanWord.length > 2) {
        // Only count words longer than 2 characters
        wordFrequency[cleanWord] = (wordFrequency[cleanWord] || 0) + 1;
      }
    });

    const mostCommonWords = Object.entries(wordFrequency)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([word, count]) => ({ word, count }));

    // Averages
    const averageWordsPerSentence =
      sentenceCount > 0 ? Math.round((wordCount / sentenceCount) * 10) / 10 : 0;
    const averageCharactersPerWord =
      wordCount > 0
        ? Math.round((charactersNoSpaces / wordCount) * 10) / 10
        : 0;

    // Enhanced metrics
    const uniqueWords = Object.keys(wordFrequency).length;
    const longestWord = words.reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ""
    );

    const sentenceLengths = sentences.map((s) => s.trim().split(/\s+/).length);
    const shortestSentence =
      sentenceLengths.length > 0 ? Math.min(...sentenceLengths) : 0;
    const longestSentence =
      sentenceLengths.length > 0 ? Math.max(...sentenceLengths) : 0;

    const avgSentenceLength = averageWordsPerSentence;
    const avgSyllablesPerWord = averageCharactersPerWord * 0.5; // Rough approximation

    // Keyword density (top 5 words by frequency)
    const keywordDensity = mostCommonWords
      .slice(0, 5)
      .map(({ word, count }) => ({
        word,
        density: Math.round((count / wordCount) * 10000) / 100,
      }));

    return {
      characters,
      charactersNoSpaces,
      words: wordCount,
      sentences: sentenceCount,
      paragraphs: paragraphCount,
      readingTime,
      speakingTime,
      mostCommonWords,
      averageWordsPerSentence,
      averageCharactersPerWord,
      uniqueWords,
      longestWord,
      shortestSentence,
      longestSentence,
      keywordDensity,
    };
  };

  useEffect(() => {
    setStats(analyzeText(text));
  }, [text]);

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(label);
      setTimeout(() => setCopiedText(""), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setText(result);
    };
    reader.readAsText(file);
  };

  const loadSample = () => {
    const sample = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`;
    setText(sample);
  };

  const clearText = () => {
    setText("");
  };

  const generateReport = () => {
    if (!stats) return;

    const report = `Text Analysis Report
${"=".repeat(50)}

BASIC STATISTICS:
- Characters: ${stats.characters}
- Characters (no spaces): ${stats.charactersNoSpaces}
- Words: ${stats.words}
- Unique words: ${stats.uniqueWords}
- Sentences: ${stats.sentences}
- Paragraphs: ${stats.paragraphs}

READING METRICS:
- Reading time: ${stats.readingTime} minute(s)
- Speaking time: ${stats.speakingTime} minute(s)
- Average words per sentence: ${stats.averageWordsPerSentence}
- Average characters per word: ${stats.averageCharactersPerWord}
- Shortest sentence: ${stats.shortestSentence} words
- Longest sentence: ${stats.longestSentence} words
- Longest word: "${stats.longestWord}"

KEYWORD DENSITY:
${stats.keywordDensity
  .map((item) => `- ${item.word}: ${item.density}%`)
  .join("\n")}

MOST COMMON WORDS:
${stats.mostCommonWords
  .map((item, index) => `${index + 1}. ${item.word} (${item.count} times)`)
  .join("\n")}

Generated by Business Wish Word Counter Tool
Report generated on ${new Date().toLocaleString()}`;

    copyToClipboard(report, "detailed analysis report");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-slate-500 text-sm mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tools
          </Link>

          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg shadow-sm">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-slate-900">
                Word Counter
              </h1>
              <p className="text-slate-600 text-sm">
                Comprehensive text analysis with readability insights
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Input Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Type className="h-4 w-4 text-slate-600" />
              <h2 className="text-sm font-medium text-slate-900">Text Input</h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={loadSample}
                className="flex items-center gap-2 px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-700"
              >
                <Sparkles className="h-3 w-3" />
                Sample
              </button>
              <label className="flex items-center gap-2 px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-700 cursor-pointer">
                <Upload className="h-3 w-3" />
                Upload
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="hidden"
                  accept=".txt,.md,.rtf"
                />
              </label>
              {text && (
                <button
                  onClick={clearText}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-500 border border-slate-200 rounded-lg"
                >
                  <RefreshCw className="h-3 w-3" />
                  Clear
                </button>
              )}
            </div>
          </div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter or paste your text here to analyze..."
            className="w-full h-48 px-3 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-opacity-5 focus:border-slate-900 resize-none"
          />

          {text && (
            <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-100">
              <div className="text-xs text-slate-500">
                Live analysis • {text.length} characters
              </div>
              <button
                onClick={generateReport}
                className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 text-white text-xs rounded-lg"
              >
                {copiedText === "detailed analysis report" ? (
                  <Check className="h-3 w-3" />
                ) : (
                  <Copy className="h-3 w-3" />
                )}
                Copy Report
              </button>
            </div>
          )}
        </div>

        {stats && stats.words > 0 && (
          <>
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
              <div className="bg-white border border-slate-200 rounded-lg p-3 text-center">
                <div className="text-lg font-semibold text-slate-900 mb-0.5">
                  {stats.characters.toLocaleString()}
                </div>
                <div className="text-xs text-slate-600">Characters</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-3 text-center">
                <div className="text-lg font-semibold text-slate-900 mb-0.5">
                  {stats.words.toLocaleString()}
                </div>
                <div className="text-xs text-slate-600">Words</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-3 text-center">
                <div className="text-lg font-semibold text-slate-900 mb-0.5">
                  {stats.sentences}
                </div>
                <div className="text-xs text-slate-600">Sentences</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-3 text-center">
                <div className="text-lg font-semibold text-slate-900 mb-0.5">
                  {stats.paragraphs}
                </div>
                <div className="text-xs text-slate-600">Paragraphs</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-3 text-center">
                <div className="text-lg font-semibold text-slate-900 mb-0.5">
                  {stats.readingTime}m
                </div>
                <div className="text-xs text-slate-600">Read Time</div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="border-b border-slate-200">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === "overview"
                        ? "border-slate-900 text-slate-900 bg-slate-50"
                        : "border-transparent text-slate-600"
                    }`}
                  >
                    <BarChart3 className="h-4 w-4" />
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab("analysis")}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === "analysis"
                        ? "border-slate-900 text-slate-900 bg-slate-50"
                        : "border-transparent text-slate-600"
                    }`}
                  >
                    <Activity className="h-4 w-4" />
                    Analysis
                  </button>
                  <button
                    onClick={() => setActiveTab("readability")}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === "readability"
                        ? "border-slate-900 text-slate-900 bg-slate-50"
                        : "border-transparent text-slate-600"
                    }`}
                  >
                    <Target className="h-4 w-4" />
                    Readability
                  </button>
                </div>
              </div>

              <div className="p-6">
                {activeTab === "overview" && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Detailed Statistics */}
                    <div>
                      <h3 className="text-sm font-medium text-slate-900 mb-4 flex items-center gap-2">
                        <Hash className="h-4 w-4" />
                        Detailed Statistics
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                          <FileText className="h-4 w-4 text-slate-500" />
                          <div>
                            <div className="text-sm font-medium text-slate-900">
                              {stats.charactersNoSpaces.toLocaleString()}
                            </div>
                            <div className="text-xs text-slate-600">
                              No spaces
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                          <Sparkles className="h-4 w-4 text-slate-500" />
                          <div>
                            <div className="text-sm font-medium text-slate-900">
                              {stats.uniqueWords.toLocaleString()}
                            </div>
                            <div className="text-xs text-slate-600">
                              Unique words
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                          <Clock className="h-4 w-4 text-slate-500" />
                          <div>
                            <div className="text-sm font-medium text-slate-900">
                              {stats.speakingTime}m
                            </div>
                            <div className="text-xs text-slate-600">
                              Speaking
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                          <TrendingUp className="h-4 w-4 text-slate-500" />
                          <div>
                            <div className="text-sm font-medium text-slate-900">
                              {stats.averageWordsPerSentence}
                            </div>
                            <div className="text-xs text-slate-600">
                              Avg/sentence
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg">
                        <h4 className="text-sm font-medium text-slate-900 mb-3">
                          Text Composition
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-slate-600">
                              Longest word:
                            </span>
                            <span className="font-medium text-slate-900">
                              &quot;{stats.longestWord}&quot;
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">
                              Shortest sentence:
                            </span>
                            <span className="font-medium text-slate-900">
                              {stats.shortestSentence} words
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">
                              Longest sentence:
                            </span>
                            <span className="font-medium text-slate-900">
                              {stats.longestSentence} words
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">
                              Avg chars per word:
                            </span>
                            <span className="font-medium text-slate-900">
                              {stats.averageCharactersPerWord}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Most Common Words */}
                    <div>
                      <h3 className="text-sm font-medium text-slate-900 mb-4 flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        Most Common Words
                      </h3>
                      {stats.mostCommonWords.length > 0 ? (
                        <div className="space-y-2">
                          {stats.mostCommonWords
                            .slice(0, 8)
                            .map((item, index) => (
                              <div
                                key={item.word}
                                className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg"
                              >
                                <div className="flex items-center gap-3">
                                  <span className="w-5 h-5 bg-slate-200 rounded-full flex items-center justify-center text-xs font-medium text-slate-700">
                                    {index + 1}
                                  </span>
                                  <span className="text-sm font-medium text-slate-900">
                                    {item.word}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-12 bg-slate-200 rounded-full h-1.5">
                                    <div
                                      className="bg-slate-600 h-1.5 rounded-full"
                                      style={{
                                        width: `${
                                          (item.count /
                                            stats.mostCommonWords[0].count) *
                                          100
                                        }%`,
                                      }}
                                    />
                                  </div>
                                  <span className="text-xs text-slate-600 w-6 text-right">
                                    {item.count}
                                  </span>
                                </div>
                              </div>
                            ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <BookOpen className="h-8 w-8 text-slate-400 mx-auto mb-3" />
                          <p className="text-slate-500 text-sm">
                            No words to analyze yet
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === "analysis" && (
                  <div className="space-y-6">
                    {/* Keyword Density */}
                    <div>
                      <h3 className="text-sm font-medium text-slate-900 mb-4 flex items-center gap-2">
                        <Zap className="h-4 w-4" />
                        Keyword Density Analysis
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {stats.keywordDensity.map((item, index) => (
                          <div
                            key={item.word}
                            className="p-4 bg-slate-50 rounded-lg"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-slate-900">
                                {item.word}
                              </span>
                              <span className="text-xs text-slate-600">
                                {item.density}%
                              </span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2">
                              <div
                                className="bg-slate-600 h-2 rounded-full"
                                style={{
                                  width: `${Math.min(
                                    100,
                                    (item.density / 5) * 100
                                  )}%`,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Word Distribution */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg">
                        <h4 className="text-sm font-medium text-slate-900 mb-3">
                          Word Distribution
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Total words:</span>
                            <span className="font-medium text-slate-900">
                              {stats.words.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">
                              Unique words:
                            </span>
                            <span className="font-medium text-slate-900">
                              {stats.uniqueWords.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">
                              Vocabulary richness:
                            </span>
                            <span className="font-medium text-slate-900">
                              {Math.round(
                                (stats.uniqueWords / stats.words) * 100
                              )}
                              %
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg">
                        <h4 className="text-sm font-medium text-slate-900 mb-3">
                          Sentence Structure
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">
                              Average length:
                            </span>
                            <span className="font-medium text-slate-900">
                              {stats.averageWordsPerSentence} words
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Shortest:</span>
                            <span className="font-medium text-slate-900">
                              {stats.shortestSentence} words
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Longest:</span>
                            <span className="font-medium text-slate-900">
                              {stats.longestSentence} words
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "readability" && (
                  <div className="space-y-6">
                    {/* Reading Metrics */}
                    <div className="grid grid-cols-1 gap-6">
                      <div className="p-5 bg-white border border-slate-200 rounded-lg">
                        <h4 className="text-sm font-medium text-slate-900 mb-4 flex items-center gap-2">
                          <Eye className="h-4 w-4" />
                          Text Complexity
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">
                              Avg words per sentence:
                            </span>
                            <span className="font-medium text-slate-900">
                              {stats.averageWordsPerSentence}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">
                              Avg chars per word:
                            </span>
                            <span className="font-medium text-slate-900">
                              {stats.averageCharactersPerWord}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Readability Guidelines */}
                    <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                      <h4 className="text-sm font-medium text-slate-900 mb-4 flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        Readability Guidelines
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-medium text-slate-800 mb-2">
                            Sentence Length
                          </div>
                          <div className="text-slate-600">
                            {stats.averageWordsPerSentence <= 15
                              ? "✓ Excellent - Easy to read"
                              : stats.averageWordsPerSentence <= 20
                              ? "⚠ Good - Slightly complex"
                              : "⚠ Consider shorter sentences"}
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-slate-800 mb-2">
                            Word Choice
                          </div>
                          <div className="text-slate-600">
                            {stats.averageCharactersPerWord <= 4.5
                              ? "✓ Simple vocabulary"
                              : stats.averageCharactersPerWord <= 6
                              ? "⚠ Moderate complexity"
                              : "⚠ Complex vocabulary"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* Empty State */}
        {!stats?.words && (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-slate-600" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">
              Ready to Analyze Your Text
            </h3>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">
              Paste or type your content above to get comprehensive statistics,
              readability analysis, and writing insights.
            </p>
            <button
              onClick={loadSample}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm rounded-lg"
            >
              <Sparkles className="h-4 w-4" />
              Try Sample Text
            </button>
          </div>
        )}

        {/* Enhanced Tips */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-5 flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Writing Optimization Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Target className="h-4 w-4 text-green-600" />
                <h4 className="font-medium text-slate-800">Readability</h4>
              </div>
              <ul className="text-sm text-slate-600 space-y-1.5">
                <li>• Keep sentences under 20 words</li>
                <li>• Use active voice when possible</li>
                <li>• Break up long paragraphs</li>
                <li>• Choose simple, clear words</li>
              </ul>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-4 w-4 text-blue-600" />
                <h4 className="font-medium text-slate-800">SEO Content</h4>
              </div>
              <ul className="text-sm text-slate-600 space-y-1.5">
                <li>• Blog posts: 1,000-2,500 words</li>
                <li>• Keyword density: 1-3%</li>
                <li>• Use subheadings for structure</li>
                <li>• Include related keywords</li>
              </ul>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-4 w-4 text-purple-600" />
                <h4 className="font-medium text-slate-800">Engagement</h4>
              </div>
              <ul className="text-sm text-slate-600 space-y-1.5">
                <li>• Vary sentence lengths</li>
                <li>• Use transition words</li>
                <li>• Include questions and examples</li>
                <li>• Maintain consistent tone</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
