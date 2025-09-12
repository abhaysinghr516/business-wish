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

  const getModeColor = () => {
    switch (mode) {
      case "work":
        return "from-red-500 to-pink-500";
      case "shortBreak":
        return "from-green-500 to-emerald-500";
      case "longBreak":
        return "from-blue-500 to-cyan-500";
    }
  };

  const getModeIcon = () => {
    switch (mode) {
      case "work":
        return <Target className="h-4 w-4" />;
      case "shortBreak":
      case "longBreak":
        return <Coffee className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            href="/tools"
            className="flex items-center gap-2 text-gray-500 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <h1 className="text-xl font-medium text-gray-800">Pomodoro Timer</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10 space-y-10">
        {/* Timer */}
        <section className="text-center">
          <div className="relative inline-block">
            <svg className="w-72 h-72 -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="8"
              />
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 54}`}
                strokeDashoffset={`${
                  2 * Math.PI * 54 * (1 - getProgress() / 100)
                }`}
                className="transition-all duration-700 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    className={
                      mode === "work"
                        ? "stop-red-500"
                        : mode === "shortBreak"
                        ? "stop-green-500"
                        : "stop-blue-500"
                    }
                  />
                  <stop
                    offset="100%"
                    className={
                      mode === "work"
                        ? "stop-pink-500"
                        : mode === "shortBreak"
                        ? "stop-emerald-500"
                        : "stop-cyan-500"
                    }
                  />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div
                className={`flex items-center gap-1 px-3 py-1 text-xs font-medium text-white rounded-full bg-gradient-to-r ${getModeColor()}`}
              >
                {getModeIcon()}
                {mode === "work"
                  ? "Work"
                  : mode === "shortBreak"
                  ? "Short Break"
                  : "Long Break"}
              </div>
              <div className="text-5xl font-light text-gray-900 my-3">
                {formatTime(timeLeft)}
              </div>
              <p className="text-xs text-gray-500">
                Session {completedPomodoros + 1}
              </p>
            </div>
          </div>
        </section>
        {/* Controls */}
        <section className="flex justify-center gap-3">
          <button
            onClick={toggleTimer}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-medium bg-gradient-to-r ${getModeColor()}`}
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
            className="flex items-center gap-2 px-5 py-3 bg-gray-600 text-white rounded-xl text-sm"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-700"
          >
            <Settings className="h-4 w-4" />
            Settings
          </button>
        </section>
        {/* Mode Switcher */}
        <section className="flex justify-center gap-2">
          <button
            onClick={() => switchMode("work")}
            className={`px-4 py-2 rounded-lg text-sm ${
              mode === "work"
                ? "bg-red-100 text-red-700 border border-red-200"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Work ({settings.workDuration}m)
          </button>
          <button
            onClick={() => switchMode("shortBreak")}
            className={`px-4 py-2 rounded-lg text-sm ${
              mode === "shortBreak"
                ? "bg-green-100 text-green-700 border border-green-200"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Short Break ({settings.shortBreakDuration}m)
          </button>
          <button
            onClick={() => switchMode("longBreak")}
            className={`px-4 py-2 rounded-lg text-sm ${
              mode === "longBreak"
                ? "bg-blue-100 text-blue-700 border border-blue-200"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Long Break ({settings.longBreakDuration}m)
          </button>
        </section>
        {/* Stats */}
        <section className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-base font-medium text-gray-800 mb-4 text-center">
            Today&apos;s Progress
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-light text-red-600">
                {completedPomodoros}
              </p>
              <p className="text-xs text-gray-600">Completed Pomodoros</p>
            </div>
            <div>
              <p className="text-2xl font-light text-green-600">
                {Math.floor(completedPomodoros / settings.longBreakInterval)}
              </p>
              <p className="text-xs text-gray-600">Long Breaks Earned</p>
            </div>
            <div>
              <p className="text-2xl font-light text-blue-600">
                {Math.round(
                  ((completedPomodoros * settings.workDuration) / 60) * 10
                ) / 10}
                h
              </p>
              <p className="text-xs text-gray-600">Focus Time</p>
            </div>
          </div>
        </section>
        {/* Settings */}
        {showSettings && (
          <section className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
            <h3 className="text-base font-medium text-gray-800">Settings</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Work Duration: {settings.workDuration} min
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="60"
                    value={settings.workDuration}
                    onChange={(e) =>
                      setSettings((prev) => ({
                        ...prev,
                        workDuration: parseInt(e.target.value),
                      }))
                    }
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Short Break: {settings.shortBreakDuration} min
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={settings.shortBreakDuration}
                    onChange={(e) =>
                      setSettings((prev) => ({
                        ...prev,
                        shortBreakDuration: parseInt(e.target.value),
                      }))
                    }
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Long Break: {settings.longBreakDuration} min
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="60"
                    value={settings.longBreakDuration}
                    onChange={(e) =>
                      setSettings((prev) => ({
                        ...prev,
                        longBreakDuration: parseInt(e.target.value),
                      }))
                    }
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Long Break Interval: Every {settings.longBreakInterval}{" "}
                    pomodoros
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="8"
                    value={settings.longBreakInterval}
                    onChange={(e) =>
                      setSettings((prev) => ({
                        ...prev,
                        longBreakInterval: parseInt(e.target.value),
                      }))
                    }
                    className="w-full"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={settings.autoStartBreaks}
                    onChange={(e) =>
                      setSettings((prev) => ({
                        ...prev,
                        autoStartBreaks: e.target.checked,
                      }))
                    }
                  />
                  Auto-start breaks
                </label>

                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={settings.autoStartWork}
                    onChange={(e) =>
                      setSettings((prev) => ({
                        ...prev,
                        autoStartWork: e.target.checked,
                      }))
                    }
                  />
                  Auto-start work
                </label>

                <button
                  onClick={() => {
                    setCompletedPomodoros(0);
                  }}
                  className="px-4 py-2 bg-red-500 text-white text-xs rounded-lg"
                >
                  Reset Statistics
                </button>
              </div>
            </div>
          </section>
        )}
        {/* Features */}{" "}
        <div className="mt-12 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8">
          {" "}
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Features
          </h3>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {" "}
            <div>
              {" "}
              <h4 className="font-medium text-gray-800 mb-2">
                {" "}
                Customizable Timer{" "}
              </h4>{" "}
              <ul className="text-sm text-gray-600 space-y-1">
                {" "}
                <li>• Adjustable work and break durations</li>{" "}
                <li>• Visual progress ring with smooth animations</li>{" "}
                <li>• Auto-start options for seamless workflow</li>{" "}
              </ul>{" "}
            </div>{" "}
            <div>
              {" "}
              <h4 className="font-medium text-gray-800 mb-2">
                {" "}
                Progress Tracking{" "}
              </h4>{" "}
              <ul className="text-sm text-gray-600 space-y-1">
                {" "}
                <li>• Daily pomodoro completion tracking</li>{" "}
                <li>• Focus time calculation and statistics</li>{" "}
                <li>• Persistent settings and progress storage</li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </main>
    </div>
  );
}
