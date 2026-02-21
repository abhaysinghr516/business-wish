import React from "react";
import { Instagram, Twitter, Facebook, Linkedin, ArrowRight, Github } from "lucide-react";

export const SimpleFooter: React.FC = () => (
  <footer className="bg-white dark:bg-neutral-950 py-8 border-t border-neutral-100 dark:border-white/5">
    <div className="container mx-auto px-6 text-center flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:justify-between">
      <p className="text-[13px] font-medium text-neutral-500 dark:text-neutral-400">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
      <div className="flex space-x-6">
        <a href="#" className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
          <Twitter className="w-4 h-4" strokeWidth={1.5} />
        </a>
        <a href="#" className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
          <Github className="w-4 h-4" strokeWidth={1.5} />
        </a>
      </div>
    </div>
  </footer>
);

export const FooterwithMultipleSections: React.FC = () => (
  <footer className="bg-white dark:bg-neutral-950 py-16 border-t border-neutral-100 dark:border-white/5">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-[16px] font-semibold tracking-tight text-neutral-900 dark:text-white">
            Your Company
          </h2>
          <p className="text-[14px] text-neutral-500 dark:text-neutral-400 max-w-sm leading-relaxed">
            Building the infrastructure for the modern web. We design tools that help developers move faster and build better experiences.
          </p>
          <div className="flex space-x-5">
            {[Twitter, Github, Linkedin].map((Icon, idx) => (
              <a key={idx} href="#" className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                <Icon className="w-4 h-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-[14px] font-semibold tracking-tight text-neutral-900 dark:text-white">
            Resources
          </h3>
          <ul className="space-y-4">
            {["Documentation", "Component Library", "Blog", "Showcase"].map((item) => (
              <li key={item}>
                <a href="#" className="text-[14px] text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-[14px] font-semibold tracking-tight text-neutral-900 dark:text-white">
            Company
          </h3>
          <ul className="space-y-4">
            {["About Us", "Careers", "Changelog", "Contact"].map((item) => (
              <li key={item}>
                <a href="#" className="text-[14px] text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-16 pt-8 border-t border-neutral-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between">
        <p className="text-[13px] text-neutral-500 dark:text-neutral-400">
          &copy; {new Date().getFullYear()} Your Company Inc.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-[13px] text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-[13px] text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export const FooterwithNewsletter: React.FC = () => (
  <footer className="bg-neutral-50 dark:bg-neutral-900 py-20 border-t border-neutral-200 dark:border-white/5">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12 pb-16 border-b border-neutral-200 dark:border-white/5">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">
            Subscribe to our newsletter
          </h2>
          <p className="text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-md">
            The latest news, articles, and resources, sent to your inbox weekly. No spam, unsubscribe at any time.
          </p>
        </div>
        
        <div className="w-full md:w-1/2 md:max-w-md">
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-white/10 rounded-xl text-[14px] text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/5 dark:focus:ring-white/10 transition-all shadow-sm"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-[14px] font-medium rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div className="pt-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded bg-neutral-900 dark:bg-white flex items-center justify-center">
            <span className="text-[10px] font-bold text-white dark:text-neutral-900">YC</span>
          </div>
          <span className="text-[14px] font-semibold text-neutral-900 dark:text-white tracking-tight">Your Company</span>
        </div>
        <p className="text-[13px] text-neutral-500 dark:text-neutral-400 mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export const FooterwithCTA: React.FC = () => (
  <footer className="bg-white dark:bg-neutral-950 pt-24 pb-12 border-t border-neutral-100 dark:border-white/5 relative overflow-hidden">
    {/* Subtle Background Glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-neutral-100 dark:bg-white/5 blur-[100px] rounded-full opacity-50 pointer-events-none"></div>

    <div className="container mx-auto px-6 max-w-4xl relative z-10">
      <div className="text-center space-y-6 mb-24">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white">
          Ready to build the future?
        </h2>
        <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
          Join thousands of developers building fast, beautiful, and modern applications with our UI library.
        </p>
        <div className="pt-4 flex items-center justify-center gap-4 cursor-pointer">
          <button className="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-[15px] font-medium rounded-full hover:scale-105 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-lg flex items-center gap-2">
            Get started for free <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-neutral-100 dark:border-white/5">
        <div className="col-span-2 md:col-span-1 space-y-4">
          <span className="text-[16px] font-semibold text-neutral-900 dark:text-white">Your Brand</span>
          <div className="flex space-x-4">
            {[Github, Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                <Icon className="w-4 h-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
        
        {[
          { title: "Product", links: ["Features", "Integrations", "Pricing", "Changelog"] },
          { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
          { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
        ].map((section, idx) => (
          <div key={idx} className="space-y-4">
            <h4 className="text-[13px] font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">{section.title}</h4>
            <ul className="space-y-3">
              {section.links.map(link => (
                <li key={link}>
                  <a href="#" className="text-[14px] text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </footer>
);

export const DetailedFooter: React.FC = () => (
  <footer className="bg-neutral-50 dark:bg-neutral-900 py-24 border-t border-neutral-200 dark:border-white/5">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 mb-16">
        <div className="space-y-6 lg:col-span-2 xl:col-span-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 dark:bg-white flex items-center justify-center">
              <span className="text-[12px] font-bold text-white dark:text-neutral-900">YB</span>
            </div>
            <span className="text-[18px] font-semibold tracking-tight text-neutral-900 dark:text-white">Your Brand</span>
          </div>
          <p className="text-[14px] text-neutral-500 dark:text-neutral-400 max-w-xs leading-relaxed">
            We are dedicated to pushing the boundaries of what's possible with modern web technologies, building tools for next-generation teams.
          </p>
        </div>
        
        {[
          { title: "Products", items: ["AI Models", "APIs", "Platforms", "Solutions"] },
          { title: "Resources", items: ["Documentation", "Case Studies", "Blog", "Support"] },
          { title: "Company", items: ["About Us", "Careers", "Contact", "Press"] },
          { title: "Legal", items: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"] },
        ].map((section) => (
          <div key={section.title} className="space-y-6">
            <h2 className="text-[14px] font-semibold tracking-tight text-neutral-900 dark:text-white">
              {section.title}
            </h2>
            <ul className="space-y-3.5">
              {section.items.map((item) => (
                <li key={item}>
                  <a href="#" className="text-[14px] text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="pt-8 border-t border-neutral-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex space-x-6">
          {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
            <a key={index} href="#" className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
              <Icon className="w-4 h-4" strokeWidth={1.5} />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          <span className="text-[13px] font-medium text-neutral-600 dark:text-neutral-300">All systems operational</span>
        </div>
        <p className="text-[13px] text-neutral-500 dark:text-neutral-400">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export const UltraMinimalFooter: React.FC = () => (
  <footer className="bg-white dark:bg-neutral-950 py-12 border-t border-neutral-100 dark:border-white/5">
    <div className="container mx-auto px-6 max-w-5xl flex flex-col items-center">
      <div className="flex items-center space-x-8 mb-8">
        {["Home", "About", "Services", "Contact"].map((link) => (
          <a key={link} href="#" className="text-[14px] font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors tracking-tight">
            {link}
          </a>
        ))}
      </div>
      <p className="text-[13px] text-neutral-400 dark:text-neutral-500">
        &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
      </p>
    </div>
  </footer>
);
