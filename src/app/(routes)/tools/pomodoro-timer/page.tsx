"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
 ArrowLeft,
 Play,
 Pause,
 RotateCcw,
 Settings,
 Coffee,
 Target,
} from "lucide-react";

type TimerMode = "work" | "shortBreak" | "longBreak";

interface PomodoroSettings {
 workDuration: number;
 shortBreakDuration: number;
 longBreakDuration: number;
 longBreakInterval: number;
 autoStartBreaks: boolean;
 autoStartWork: boolean;
}

export default function PomodoroTimer() {
 const [timeLeft, setTimeLeft] = useState(25 * 60);
 const [isActive, setIsActive] = useState(false);
 const [mode, setMode] = useState<TimerMode>("work");
 const [completedPomodoros, setCompletedPomodoros] = useState(0);
 const [showSettings, setShowSettings] = useState(false);
 const [settings, setSettings] = useState<PomodoroSettings>({
 workDuration: 25,
 shortBreakDuration: 5,
 longBreakDuration: 15,
 longBreakInterval: 4,
 autoStartBreaks: false,
 autoStartWork: false,
 });

 const intervalRef = useRef<NodeJS.Timeout | null>(null);
 const audioRef = useRef<HTMLAudioElement | null>(null);

 useEffect(() => {
 const savedSettings = localStorage.getItem("pomodoroSettings");
 const savedPomodoros = localStorage.getItem("completedPomodoros");

 if (savedSettings) {
 const parsed = JSON.parse(savedSettings);
 setSettings(parsed);
 setTimeLeft(parsed.workDuration * 60);
 }

 if (savedPomodoros) {
 setCompletedPomodoros(parseInt(savedPomodoros));
 }

 audioRef.current = new Audio();
 audioRef.current.src =
 "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT";

 return () => {
 if (intervalRef.current) clearInterval(intervalRef.current);
 };
 }, []);

 useEffect(() => {
 localStorage.setItem("pomodoroSettings", JSON.stringify(settings));
 }, [settings]);

 useEffect(() => {
 localStorage.setItem("completedPomodoros", completedPomodoros.toString());
 }, [completedPomodoros]);

 useEffect(() => {
 if (isActive && timeLeft > 0) {
 intervalRef.current = setInterval(() => {
 setTimeLeft((time) => time - 1);
 }, 1000);
 } else if (timeLeft === 0) {
 handleTimerComplete();
 } else {
 if (intervalRef.current) clearInterval(intervalRef.current);
 }

 return () => {
 if (intervalRef.current) clearInterval(intervalRef.current);
 };
 }, [isActive, timeLeft]);

 const handleTimerComplete = () => {
 setIsActive(false);
 if (audioRef.current) {
 audioRef.current.play();
 }

 if (mode === "work") {
 const newCompleted = completedPomodoros + 1;
 setCompletedPomodoros(newCompleted);

 const isLongBreak = newCompleted % settings.longBreakInterval === 0;
 const nextMode = isLongBreak ? "longBreak" : "shortBreak";

 setMode(nextMode);
 setTimeLeft(
 isLongBreak
 ? settings.longBreakDuration * 60
 : settings.shortBreakDuration * 60
 );

 if (settings.autoStartBreaks) setIsActive(true);
 } else {
 setMode("work");
 setTimeLeft(settings.workDuration * 60);

 if (settings.autoStartWork) setIsActive(true);
 }
 };

 const toggleTimer = () => setIsActive(!isActive);

 const resetTimer = () => {
 setIsActive(false);
 setMode("work");
 setTimeLeft(settings.workDuration * 60);
 };

 const switchMode = (newMode: TimerMode) => {
 setIsActive(false);
 setMode(newMode);

 switch (newMode) {
 case "work":
 setTimeLeft(settings.workDuration * 60);
 break;
 case "shortBreak":
 setTimeLeft(settings.shortBreakDuration * 60);
 break;
 case "longBreak":
 setTimeLeft(settings.longBreakDuration * 60);
 break;
 }
 };

 const formatTime = (seconds: number) => {
 const mins = Math.floor(seconds / 60);
 const secs = seconds % 60;
 return `${mins.toString().padStart(2, "0")}:${secs
 .toString()
 .padStart(2, "0")}`;
 };

 const getProgress = () => {
 let totalTime: number;
 switch (mode) {
 case "work":
 totalTime = settings.workDuration * 60;
 break;
 case "shortBreak":
 totalTime = settings.shortBreakDuration * 60;
 break;
 case "longBreak":
 totalTime = settings.longBreakDuration * 60;
 break;
 }
 return ((totalTime - timeLeft) / totalTime) * 100;
 };

 const modeLabel =
 mode === "work" ? "Focus" : mode === "shortBreak" ? "Short Break" : "Long Break";

 return (
 <div className="min-h-screen bg-white dark:bg-stone-950">
 {/* Header */}
 <div className="border-b border-stone-200 dark:border-stone-800">
 <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
 <div>
 <Link
 href="/tools"
 className="inline-flex items-center gap-2 text-stone-500 dark:text-stone-400 text-sm mb-3"
 >
 <ArrowLeft className="h-4 w-4" />
 Back to Tools
 </Link>
 <h1 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
 Pomodoro Timer
 </h1>
 <p className="text-stone-500 dark:text-stone-400 text-sm">
 Stay focused with timed work sessions and breaks
 </p>
 </div>
 <button
 onClick={() => setShowSettings(!showSettings)}
 className="p-2.5 border border-stone-200 dark:border-stone-800 rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
 >
 <Settings className="h-4 w-4" />
 </button>
 </div>
 </div>

 <div className="max-w-2xl mx-auto px-6 py-12">
 {/* Mode Tabs */}
 <div className="flex justify-center mb-10">
 <div className="inline-flex border border-stone-200 dark:border-stone-800 rounded-lg p-1">
 {(
 [
 { key: "work" as TimerMode, label: `Focus ${settings.workDuration}m`, icon: <Target className="h-3.5 w-3.5" /> },
 { key: "shortBreak" as TimerMode, label: `Short ${settings.shortBreakDuration}m`, icon: <Coffee className="h-3.5 w-3.5" /> },
 { key: "longBreak" as TimerMode, label: `Long ${settings.longBreakDuration}m`, icon: <Coffee className="h-3.5 w-3.5" /> },
 ] as const
 ).map((item) => (
 <button
 key={item.key}
 onClick={() => switchMode(item.key)}
 className={`flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
 mode === item.key
 ? "bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900"
 : "text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300"
 }`}
 >
 {item.icon}
 {item.label}
 </button>
 ))}
 </div>
 </div>

 {/* Timer Circle */}
 <div className="flex flex-col items-center mb-10">
 <div className="relative">
 <svg className="w-64 h-64 -rotate-90" viewBox="0 0 120 120">
 <circle
 cx="60"
 cy="60"
 r="54"
 fill="none"
 className="stroke-stone-200 dark:stroke-stone-800"
 strokeWidth="4"
 />
 <circle
 cx="60"
 cy="60"
 r="54"
 fill="none"
 className="stroke-stone-900 dark:stroke-stone-100"
 strokeWidth="4"
 strokeLinecap="round"
 strokeDasharray={`${2 * Math.PI * 54}`}
 strokeDashoffset={`${
 2 * Math.PI * 54 * (1 - getProgress() / 100)
 }`}
 style={{ transition: "stroke-dashoffset 0.7s ease-out" }}
 />
 </svg>

 <div className="absolute inset-0 flex flex-col items-center justify-center">
 <span className="text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-1">
 {modeLabel}
 </span>
 <div className="text-5xl font-light text-stone-900 dark:text-stone-100 tabular-nums tracking-tight">
 {formatTime(timeLeft)}
 </div>
 <p className="text-xs text-stone-400 dark:text-stone-500 mt-1">
 Session {completedPomodoros + 1}
 </p>
 </div>
 </div>
 </div>

 {/* Controls */}
 <div className="flex justify-center gap-3 mb-10">
 <button
 onClick={toggleTimer}
 className="flex items-center gap-2 px-8 py-3 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-lg text-sm font-medium hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
 >
 {isActive ? (
 <Pause className="h-4 w-4" />
 ) : (
 <Play className="h-4 w-4" />
 )}
 {isActive ? "Pause" : "Start"}
 </button>
 <button
 onClick={resetTimer}
 className="flex items-center gap-2 px-5 py-3 border border-stone-200 dark:border-stone-800 rounded-lg text-sm text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
 >
 <RotateCcw className="h-4 w-4" />
 Reset
 </button>
 </div>

 {/* Progress */}
 <div className="border border-stone-200 dark:border-stone-800 rounded-lg divide-y divide-stone-200 dark:divide-stone-800">
 <div className="px-4 py-3">
 <h3 className="text-sm font-medium text-stone-900 dark:text-stone-100">
 Today&apos;s Progress
 </h3>
 </div>
 <div className="grid grid-cols-3 divide-x divide-stone-200 dark:divide-stone-800">
 <div className="px-4 py-4 text-center">
 <div className="text-2xl font-light text-stone-900 dark:text-stone-100 tabular-nums">
 {completedPomodoros}
 </div>
 <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
 Pomodoros
 </div>
 </div>
 <div className="px-4 py-4 text-center">
 <div className="text-2xl font-light text-stone-900 dark:text-stone-100 tabular-nums">
 {Math.floor(completedPomodoros / settings.longBreakInterval)}
 </div>
 <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
 Cycles
 </div>
 </div>
 <div className="px-4 py-4 text-center">
 <div className="text-2xl font-light text-stone-900 dark:text-stone-100 tabular-nums">
 {Math.round(
 ((completedPomodoros * settings.workDuration) / 60) * 10
 ) / 10}
 h
 </div>
 <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
 Focus Time
 </div>
 </div>
 </div>
 </div>

 {/* Settings Panel */}
 {showSettings && (
 <div className="mt-6 border border-stone-200 dark:border-stone-800 rounded-lg divide-y divide-stone-200 dark:divide-stone-800">
 <div className="px-4 py-3">
 <h3 className="text-sm font-medium text-stone-900 dark:text-stone-100">
 Settings
 </h3>
 </div>
 <div className="p-4 space-y-5">
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
 {[
 { label: "Work Duration", key: "workDuration" as const, min: 1, max: 60, value: settings.workDuration },
 { label: "Short Break", key: "shortBreakDuration" as const, min: 1, max: 30, value: settings.shortBreakDuration },
 { label: "Long Break", key: "longBreakDuration" as const, min: 1, max: 60, value: settings.longBreakDuration },
 { label: "Long Break Interval", key: "longBreakInterval" as const, min: 2, max: 8, value: settings.longBreakInterval },
 ].map((item) => (
 <div key={item.key}>
 <div className="flex justify-between mb-1.5">
 <label className="text-xs font-medium text-stone-700 dark:text-stone-300">
 {item.label}
 </label>
 <span className="text-xs text-stone-500 dark:text-stone-400 tabular-nums">
 {item.value} {item.key === "longBreakInterval" ? "sessions" : "min"}
 </span>
 </div>
 <input
 type="range"
 min={item.min}
 max={item.max}
 value={item.value}
 onChange={(e) =>
 setSettings((prev) => ({
 ...prev,
 [item.key]: parseInt(e.target.value),
 }))
 }
 className="w-full h-1.5 bg-stone-200 dark:bg-stone-800 rounded-full cursor-pointer accent-stone-900 dark:accent-stone-100"
 />
 </div>
 ))}
 </div>

 <div className="flex flex-col gap-3 pt-2 border-t border-stone-200 dark:border-stone-800">
 <label className="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300 cursor-pointer">
 <input
 type="checkbox"
 checked={settings.autoStartBreaks}
 onChange={(e) =>
 setSettings((prev) => ({
 ...prev,
 autoStartBreaks: e.target.checked,
 }))
 }
 className="accent-stone-900 dark:accent-stone-100"
 />
 Auto-start breaks
 </label>

 <label className="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300 cursor-pointer">
 <input
 type="checkbox"
 checked={settings.autoStartWork}
 onChange={(e) =>
 setSettings((prev) => ({
 ...prev,
 autoStartWork: e.target.checked,
 }))
 }
 className="accent-stone-900 dark:accent-stone-100"
 />
 Auto-start work sessions
 </label>
 </div>

 <button
 onClick={() => setCompletedPomodoros(0)}
 className="px-4 py-2 text-xs font-medium text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-800 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
 >
 Reset Statistics
 </button>
 </div>
 </div>
 )}
 </div>
 </div>
 );
}
