"use client";
import {
  AlertCircle,
  Ghost,
  HelpCircle,
  Home,
  Loader2,
  Search,
  ArrowRight,
  Briefcase,
  Mail,
  Zap
} from "lucide-react";
import React, { useState, useEffect } from "react";

export const Minimal404Section: React.FC = () => (
  <div className="flex h-screen items-center justify-center bg-neutral-50 dark:bg-[#0A0A0A]">
    <div className="text-center px-4 max-w-2xl mx-auto flex flex-col items-center">
      <h1 className="text-[120px] sm:text-[180px] font-medium leading-none tracking-tighter text-neutral-900 dark:text-white drop-shadow-sm">
        404
      </h1>
      <p className="mt-8 text-2xl sm:text-3xl font-medium tracking-tight text-neutral-800 dark:text-neutral-200">
        Page not found
      </p>
      <p className="mt-4 text-base sm:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-md mx-auto">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <button className="mt-10 group flex items-center justify-center space-x-2 px-6 py-3 bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-white/10 rounded-full shadow-sm hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-300">
        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Return to homepage
        </span>
        <ArrowRight className="w-4 h-4 text-neutral-500 dark:text-neutral-400 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  </div>
);

export const Playful404Section: React.FC = () => (
  <div className="flex flex-col h-screen items-center justify-center bg-neutral-50 dark:bg-[#0A0A0A] overflow-hidden">
    <div className="relative flex flex-col items-center">
      <div className="relative z-10 animate-[bounce_3s_ease-in-out_infinite]">
           <Ghost className="w-16 h-16 text-neutral-800 dark:text-white/80" strokeWidth={1.5} />
      </div>
      <div className="absolute -bottom-10 w-24 h-4 bg-neutral-900/10 dark:bg-black/40 blur-xl rounded-full animate-[pulse_3s_ease-in-out_infinite]" />
    </div>
    
    <div className="mt-16 text-center z-20 px-4">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-4">
        Looks like you&apos;re lost
      </h2>
      <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-10">
        The page you are looking for has vanished.
      </p>
      <button className="px-8 py-3.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-neutral-900/20 dark:shadow-white/10">
        Take me home
      </button>
    </div>
  </div>
);

export const Informative404Section: React.FC = () => (
  <div className="flex flex-col min-h-screen items-center justify-center px-4 py-20 bg-neutral-50 dark:bg-[#0A0A0A]">
    <div className="text-center mb-14 max-w-2xl mx-auto">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 mb-6">
        <AlertCircle className="w-8 h-8" />
      </div>
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-4">
        Page Not Found
      </h1>
      <p className="text-lg text-neutral-500 dark:text-neutral-400">
        We couldn&apos;t locate that page. Here are some helpful links to get you back on track.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
      {[ 
        { icon: Home, title: "Homepage", desc: "Return to the main page" },
        { icon: Search, title: "Search", desc: "Find exactly what you need" },
        { icon: HelpCircle, title: "Help Center", desc: "Browse our articles" }
      ].map((item, idx) => (
        <div key={idx} className="group flex flex-col p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-white/10 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 cursor-pointer relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neutral-100 to-transparent dark:from-white/5 dark:to-transparent rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <item.icon className="w-8 h-8 mb-6 text-neutral-700 dark:text-neutral-300 transition-transform duration-300 group-hover:scale-110 group-hover:text-neutral-900 dark:group-hover:text-white" />
          <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">
            {item.title}
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export const Interactive404Section: React.FC = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchComplete, setSearchComplete] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setSearchComplete(true);
    }, 2500);
  };

  return (
    <div className="flex flex-col items-center min-h-screen justify-center py-20 px-4 bg-neutral-50 dark:bg-[#0A0A0A]">
      <div className="max-w-2xl mx-auto w-full flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-6 text-center">
          Are you lost?
        </h1>
        <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 mb-12 text-center">
          Let&apos;s search our directory to find what you&apos;re looking for.
        </p>

        <div className="w-full max-w-md h-16 relative">
          {!searchComplete && (
            <button
              onClick={handleSearch}
              disabled={isSearching}
              className={`absolute inset-0 w-full rounded-full flex items-center justify-center transition-all duration-500 ${
                isSearching 
                  ? "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 text-neutral-500 shadow-sm cursor-wait" 
                  : "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:scale-[1.02] shadow-xl shadow-neutral-900/10 active:scale-[0.98]"
              }`}
            >
              {isSearching ? (
                 <>
                   <Loader2 className="w-5 h-5 mr-3 animate-spin text-neutral-500 dark:text-neutral-400" />
                   <span className="font-medium text-neutral-600 dark:text-neutral-300">Searching directory...</span>
                 </>
              ) : (
                <>
                  <Search className="w-5 h-5 mr-3" />
                  <span className="font-medium text-lg">Quick Search</span>
                </>
              )}
            </button>
          )}

          {searchComplete && (
            <div className="absolute inset-0 w-full animate-in fade-in zoom-in duration-500">
              <div className="w-full flex items-center px-6 h-full bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-white/10 rounded-full shadow-sm">
                <Search className="w-5 h-5 mr-3 text-green-500" />
                <span className="font-medium text-neutral-900 dark:text-white">Found 4 relevant pages</span>
              </div>
            </div>
          )}
        </div>

        <div className={`w-full max-w-xl mt-12 transition-all duration-700 ${searchComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Dashboard", url: "/dashboard" },
              { title: "Settings", url: "/settings" },
              { title: "Support Articles", url: "/support" },
              { title: "Contact Us", url: "/contact" }
            ].map((item, i) => (
              <div
                key={i}
                className="group flex items-center justify-between p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-white/10 transition-all hover:border-neutral-300 dark:hover:border-white/20 hover:shadow-sm cursor-pointer"
              >
                <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                  {item.title}
                </span>
                <ArrowRight className="w-4 h-4 text-neutral-400 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Grid404Section: React.FC = () => (
  <div className="flex h-screen items-center justify-center p-4 sm:p-6 bg-neutral-50 dark:bg-[#0A0A0A]">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl md:h-[600px]">
      <div className="md:col-span-2 md:row-span-2 rounded-3xl bg-neutral-900 dark:bg-neutral-900 relative overflow-hidden flex flex-col items-center justify-center p-8 group border border-transparent dark:border-white/10 min-h-[300px]">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-950 dark:from-neutral-800/50 dark:to-neutral-950/50 opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <h1 className="relative z-10 text-[100px] sm:text-[120px] md:text-[180px] font-bold tracking-tighter text-white drop-shadow-xl select-none">
          404
        </h1>
        <p className="relative z-10 text-lg md:text-xl font-medium text-neutral-400 mb-8 select-none text-center">
          Oops! You&apos;ve reached a dead end.
        </p>
        <button className="relative z-10 px-6 py-3 bg-white text-neutral-900 font-medium rounded-full hover:scale-105 transition-transform">
          Back to Safety
        </button>
      </div>
      
      <div className="rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-white/10 p-8 flex flex-col justify-between group hover:shadow-lg hover:shadow-neutral-200/50 dark:hover:shadow-black/50 transition-all cursor-pointer min-h-[200px] md:min-h-0">
        <div className="w-12 h-12 bg-blue-50 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
          <Briefcase className="w-6 h-6" />
        </div>
        <div className="mt-8 md:mt-0">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">Our Work</h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Discover our latest projects</p>
        </div>
      </div>
      
      <div className="rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-white/10 p-8 flex flex-col justify-between group hover:shadow-lg hover:shadow-neutral-200/50 dark:hover:shadow-black/50 transition-all cursor-pointer min-h-[200px] md:min-h-0">
        <div className="w-12 h-12 bg-amber-50 dark:bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
          <Mail className="w-6 h-6" />
        </div>
        <div className="mt-8 md:mt-0">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">Contact Us</h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Get in touch with the team</p>
        </div>
      </div>
    </div>
  </div>
);