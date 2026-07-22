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
  Mail
} from "lucide-react";
import React, { useState } from "react";

export const Minimal404Section: React.FC = () => (
  <div className="flex min-h-[600px] py-20 items-center justify-center bg-white dark:bg-neutral-950">
    <div className="text-center px-4 max-w-xl mx-auto flex flex-col items-center">
      <span className="text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase mb-2">
        Error 404
      </span>
      <h1 className="text-[100px] sm:text-[140px] font-medium leading-none tracking-tighter text-neutral-900 dark:text-white select-none">
        404
      </h1>
      <p className="mt-6 text-2xl sm:text-3xl font-medium tracking-tight text-neutral-900 dark:text-white">
        Page not found
      </p>
      <p className="mt-3 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-md mx-auto">
        The page you are looking for does not exist or has been moved to a new URL.
      </p>
      <button className="mt-8 group flex items-center justify-center space-x-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 rounded-full font-medium text-sm hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-200">
        <span>Return to homepage</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </button>
    </div>
  </div>
);

export const Playful404Section: React.FC = () => (
  <div className="flex flex-col min-h-[600px] py-20 items-center justify-center bg-white dark:bg-neutral-950">
    <div className="flex flex-col items-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white animate-[bounce_3s_ease-in-out_infinite]">
        <Ghost className="w-10 h-10" strokeWidth={1.5} />
      </div>
    </div>
    
    <div className="mt-10 text-center px-4 max-w-md mx-auto">
      <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-neutral-900 dark:text-white mb-3">
        Looks like you&apos;re lost
      </h2>
      <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 mb-8">
        The resource you are looking for has vanished into thin air.
      </p>
      <button className="px-8 py-3.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-200">
        Take me home
      </button>
    </div>
  </div>
);

export const Informative404Section: React.FC = () => (
  <div className="flex flex-col min-h-[600px] items-center justify-center px-4 py-20 bg-white dark:bg-neutral-950">
    <div className="text-center mb-12 max-w-xl mx-auto">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 mb-6">
        <AlertCircle className="w-6 h-6" />
      </div>
      <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white mb-3">
        Page Not Found
      </h1>
      <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400">
        We couldn&apos;t locate that page. Here are some helpful links to get you back on track.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-4xl">
      {[ 
        { icon: Home, title: "Homepage", desc: "Return to the main application landing page" },
        { icon: Search, title: "Search Directory", desc: "Find features, documentation, and tools" },
        { icon: HelpCircle, title: "Help Center", desc: "Browse support articles and guides" }
      ].map((item, idx) => (
        <div key={idx} className="group flex flex-col p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-neutral-200/60 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white mb-6">
            <item.icon className="w-5 h-5" />
          </div>
          <h3 className="text-base font-medium text-neutral-900 dark:text-white mb-1.5">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
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
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center min-h-[600px] justify-center py-20 px-4 bg-white dark:bg-neutral-950">
      <div className="max-w-xl mx-auto w-full flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white mb-3 text-center">
          Are you lost?
        </h1>
        <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 mb-10 text-center">
          Let&apos;s search our directory to find what you&apos;re looking for.
        </p>

        <div className="w-full max-w-md h-14 relative">
          {!searchComplete && (
            <button
              onClick={handleSearch}
              disabled={isSearching}
              className={`absolute inset-0 w-full rounded-full flex items-center justify-center transition-all duration-300 ${
                isSearching 
                  ? "bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-500 cursor-wait" 
                  : "bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100"
              }`}
            >
              {isSearching ? (
                 <>
                   <Loader2 className="w-4 h-4 mr-2.5 animate-spin text-neutral-500" />
                   <span className="font-medium text-sm text-neutral-600 dark:text-neutral-300">Searching directory...</span>
                 </>
              ) : (
                <>
                  <Search className="w-4 h-4 mr-2.5" />
                  <span className="font-medium text-sm">Quick Search</span>
                </>
              )}
            </button>
          )}

          {searchComplete && (
            <div className="absolute inset-0 w-full">
              <div className="w-full flex items-center px-6 h-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full">
                <Search className="w-4 h-4 mr-3 text-emerald-500" />
                <span className="font-medium text-sm text-neutral-900 dark:text-white">Found 4 relevant pages</span>
              </div>
            </div>
          )}
        </div>

        <div className={`w-full max-w-lg mt-10 transition-all duration-500 ${searchComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {[
              { title: "Dashboard", url: "/dashboard" },
              { title: "Settings", url: "/settings" },
              { title: "Support Articles", url: "/support" },
              { title: "Contact Us", url: "/contact" }
            ].map((item, i) => (
              <div
                key={i}
                className="group flex items-center justify-between p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all cursor-pointer"
              >
                <span className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200">
                  {item.title}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Grid404Section: React.FC = () => (
  <div className="flex min-h-[600px] items-center justify-center p-4 sm:p-6 bg-white dark:bg-neutral-950">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-5xl md:h-[500px]">
      <div className="md:col-span-2 md:row-span-2 rounded-3xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 relative overflow-hidden flex flex-col items-center justify-center p-8 border border-neutral-800 dark:border-neutral-200 min-h-[300px]">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-600 mb-2">
          Page Not Found
        </span>
        <h1 className="text-[90px] sm:text-[120px] font-semibold tracking-tighter text-white dark:text-neutral-950 leading-none select-none">
          404
        </h1>
        <p className="text-sm sm:text-base font-normal text-neutral-400 dark:text-neutral-600 mb-8 select-none text-center max-w-xs">
          Oops! You have reached an unlinked path.
        </p>
        <button className="px-6 py-3 bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white text-sm font-medium rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
          Back to Safety
        </button>
      </div>
      
      <div className="rounded-3xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 p-8 flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-all cursor-pointer min-h-[180px] md:min-h-0">
        <div className="w-10 h-10 bg-neutral-200/70 dark:bg-neutral-800 rounded-2xl flex items-center justify-center text-neutral-900 dark:text-white">
          <Briefcase className="w-5 h-5" />
        </div>
        <div className="mt-6 md:mt-0">
          <h3 className="text-base font-medium text-neutral-900 dark:text-white mb-1">Our Work</h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">Discover our latest projects</p>
        </div>
      </div>
      
      <div className="rounded-3xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 p-8 flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-all cursor-pointer min-h-[180px] md:min-h-0">
        <div className="w-10 h-10 bg-neutral-200/70 dark:bg-neutral-800 rounded-2xl flex items-center justify-center text-neutral-900 dark:text-white">
          <Mail className="w-5 h-5" />
        </div>
        <div className="mt-6 md:mt-0">
          <h3 className="text-base font-medium text-neutral-900 dark:text-white mb-1">Contact Us</h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">Get in touch with our team</p>
        </div>
      </div>
    </div>
  </div>
);