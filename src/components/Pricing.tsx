"use client";

import React, { useState } from "react";
import { Check, X, ArrowRight, Zap, Building2, Crown, Sparkles, ShieldCheck, ArrowUpRight } from "lucide-react";

export const MinimalPricingSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white mb-4">
            Simple, predictable pricing.
          </h2>
          <p className="text-base sm:text-lg text-neutral-500 dark:text-neutral-400 font-normal">
            No hidden fees. Upgrade, downgrade, or cancel at any time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="flex flex-col p-8 sm:p-9 rounded-3xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white">Starter</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">For creators & side projects</p>
              </div>
            </div>
            <div className="flex items-baseline gap-1 my-6">
              <span className="text-5xl sm:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-white">$0</span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono uppercase tracking-wider">/ free forever</span>
            </div>
            <button className="w-full py-3.5 px-4 bg-neutral-200/70 dark:bg-neutral-800 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 text-neutral-900 dark:text-white rounded-full font-medium text-sm transition-all duration-200 mb-8 flex items-center justify-center gap-1.5">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex flex-col gap-3.5 mt-auto pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80">
              {['Up to 3 active projects', 'Basic real-time analytics', 'Community forum support', '1 team member workspace'].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-neutral-200/80 dark:bg-neutral-800 text-neutral-900 dark:text-white">
                    <Check className="h-2.5 w-2.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col p-8 sm:p-9 rounded-3xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 border border-neutral-800 dark:border-neutral-200 relative hover:border-neutral-700 dark:hover:border-neutral-300 transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-medium text-white dark:text-neutral-950">Pro</h3>
                <p className="text-xs text-neutral-400 dark:text-neutral-600 mt-1">For growing teams & startups</p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-800 dark:bg-neutral-100 text-[11px] font-mono tracking-wider uppercase text-neutral-200 dark:text-neutral-800 border border-neutral-700 dark:border-neutral-200">
                <Sparkles className="w-3 h-3 text-amber-400 dark:text-amber-600" />
                Popular
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 my-6">
              <span className="text-5xl sm:text-6xl font-semibold tracking-tight text-white dark:text-neutral-950">$29</span>
              <span className="text-xs text-neutral-400 dark:text-neutral-600 font-mono uppercase tracking-wider">/ per month</span>
            </div>
            <button className="w-full py-3.5 px-4 bg-white dark:bg-neutral-950 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-950 dark:text-white rounded-full font-medium text-sm transition-all duration-200 mb-8 flex items-center justify-center gap-1.5">
              <span>Start 14-Day Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex flex-col gap-3.5 mt-auto pt-6 border-t border-neutral-800 dark:border-neutral-200">
              {['Unlimited active projects', 'Advanced telemetry & insights', '1-hour dedicated support response', 'Up to 10 team seats', 'Custom domain mapping'].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-neutral-800 dark:bg-neutral-100 text-white dark:text-neutral-950">
                    <Check className="h-2.5 w-2.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-300 dark:text-neutral-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col p-8 sm:p-9 rounded-3xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white">Enterprise</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">For scale & high performance</p>
              </div>
            </div>
            <div className="flex items-baseline gap-1 my-6">
              <span className="text-5xl sm:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-white">Custom</span>
            </div>
            <button className="w-full py-3.5 px-4 bg-neutral-200/70 dark:bg-neutral-800 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 text-neutral-900 dark:text-white rounded-full font-medium text-sm transition-all duration-200 mb-8 flex items-center justify-center gap-1.5">
              <span>Contact Sales</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="flex flex-col gap-3.5 mt-auto pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80">
              {['Everything included in Pro', 'Custom SLA & 99.99% uptime', '24/7 dedicated telephone line', 'Unlimited workspace seats', 'Dedicated solutions architect'].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-neutral-200/80 dark:bg-neutral-800 text-neutral-900 dark:text-white">
                    <Check className="h-2.5 w-2.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TabbedPricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-24 px-4 bg-white dark:bg-neutral-950">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6 text-center">
            Pricing built for every stage.
          </h2>
          
          <div className="flex items-center p-1 bg-neutral-100 dark:bg-neutral-900 rounded-full border border-neutral-200 dark:border-neutral-800">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2.5 rounded-full text-xs font-medium transition-all duration-200 ${!isAnnual ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-950' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'}`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-medium transition-all duration-200 ${isAnnual ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-950' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'}`}
            >
              <span>Annual Billing</span>
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-1 h-1 rounded-full bg-emerald-500" />
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800 flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-200/80 dark:bg-neutral-800 text-neutral-900 dark:text-white">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-neutral-900 dark:text-white">Basic Plan</h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">Essential building blocks</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl sm:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-white transition-all">
                    ${isAnnual ? '15' : '19'}
                  </span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400 font-mono">/month</span>
                </div>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
                  {isAnnual ? 'Billed annually ($180/yr)' : 'Billed monthly'}
                </p>
              </div>

              <ul className="space-y-3.5 mb-8 pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80">
                {['5 Active Team Projects', '10GB Encrypted Storage', 'Standard Email Support', 'Community Forum Access', 'Automated Daily Backups'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-neutral-400 dark:text-neutral-500 shrink-0" />
                    <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full py-3.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-medium text-sm hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-200">
              Select Basic Plan
            </button>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-neutral-950 border-2 border-neutral-900 dark:border-white flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950">
                    <Crown className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-neutral-900 dark:text-white">Premium Plan</h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">Full power & scalability</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800">
                  Recommended
                </span>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl sm:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-white transition-all">
                    ${isAnnual ? '79' : '99'}
                  </span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400 font-mono">/month</span>
                </div>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
                  {isAnnual ? 'Billed annually ($948/yr)' : 'Billed monthly'}
                </p>
              </div>

              <ul className="space-y-3.5 mb-8 pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80">
                {['Unlimited Active Projects', '500GB Encrypted Storage', 'Priority 24/7 Phone & Chat', 'Custom API & Webhook Integrations', 'Real-time Analytics Dashboard'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-neutral-900 dark:text-white shrink-0" />
                    <span className="text-xs sm:text-sm text-neutral-900 dark:text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full py-3.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-medium text-sm hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-200">
              Select Premium Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const GridPricingSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 max-w-xl">
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white">
            Tailored solutions for teams.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-1 p-8 sm:p-9 rounded-3xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white">Developer</h3>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Tier 01</span>
              </div>
              <div className="flex items-baseline gap-1 my-4">
                <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white">$0</span>
                <span className="text-xs text-neutral-500 font-mono">/ free</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                Start building immediately with our production API core.
              </p>
              <ul className="space-y-3 mb-8 pt-4 border-t border-neutral-200/80 dark:border-neutral-800">
                {['1 Developer Seat', '10 API Req / sec', 'Community Discord', 'Standard Bandwidth'].map((item) => (
                  <li key={item} className="flex items-center text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                    <ArrowRight className="h-3.5 w-3.5 mr-2.5 text-neutral-400 dark:text-neutral-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full py-3 rounded-full bg-neutral-200/70 dark:bg-neutral-800 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 text-neutral-900 dark:text-white text-sm font-medium transition-all duration-200">
              Deploy Free Tier
            </button>
          </div>

          <div className="col-span-1 md:col-span-2 p-8 sm:p-10 rounded-3xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 border border-neutral-800 dark:border-neutral-200 flex flex-col sm:flex-row gap-8 hover:border-neutral-700 dark:hover:border-neutral-300 transition-all duration-300">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase bg-neutral-800 dark:bg-neutral-100 text-neutral-300 dark:text-neutral-700 border border-neutral-700 dark:border-neutral-200">
                    <ShieldCheck className="w-3 h-3 text-emerald-400 dark:text-emerald-600" />
                    Business Team
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">Tier 02</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium mb-2">Team Workspace</h3>
                <p className="text-neutral-400 dark:text-neutral-600 text-xs sm:text-sm mb-6 max-w-xs">
                  Scale your production app with multi-region routing, team RBAC, and dedicated support.
                </p>
              </div>
              <div className="flex items-baseline gap-1.5 mt-4">
                <span className="text-5xl sm:text-6xl font-semibold tracking-tight">$49</span>
                <span className="text-xs text-neutral-400 dark:text-neutral-600 font-mono uppercase tracking-wider">/ user / mo</span>
              </div>
            </div>

            <div className="flex flex-col flex-1 justify-between border-t sm:border-t-0 sm:border-l border-neutral-800 dark:border-neutral-200 pt-6 sm:pt-0 sm:pl-8">
              <ul className="space-y-3.5 mb-8">
                {[
                  '10,000 API Req / sec',
                  'Granular Role-Based Permissions',
                  'Enterprise SSO & SAML 2.0',
                  '99.9% Uptime Guarantee',
                  'Personalized Onboarding Support',
                ].map((item) => (
                  <li key={item} className="flex items-center text-xs sm:text-sm font-medium text-neutral-200 dark:text-neutral-800">
                    <Check className="h-4 w-4 mr-3 text-white dark:text-neutral-950 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3.5 rounded-full bg-white text-neutral-950 hover:bg-neutral-100 dark:bg-neutral-950 dark:text-white dark:hover:bg-neutral-900 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-1.5">
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SplitPricingSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="lg:w-1/3">
          <div className="sticky top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 text-[11px] font-mono tracking-wider uppercase mb-6">
              <Building2 className="w-3.5 h-3.5" />
              Enterprise Tier
            </div>
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white mb-4">
              Right-sized for your ambition.
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
              Whether you are experimenting or scaling production architecture, select the exact capacity required.
            </p>

            <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 flex items-center gap-3.5 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300">
              <div className="p-2.5 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 shrink-0">
                <SearchIcon className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
              </div>
              <div>
                <h4 className="font-medium text-neutral-900 dark:text-white text-xs sm:text-sm">Need a custom contract?</h4>
                <a href="#" className="text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white underline underline-offset-4 transition-colors">
                  Speak with our engineering team
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col p-8 sm:p-9 rounded-3xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300">
            <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-1">Hobby Tier</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">For indie developers & prototypes</p>
            <div className="mb-8 pb-6 border-b border-neutral-200/80 dark:border-neutral-800">
              <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white">$0</span>
              <span className="text-xs text-neutral-500 font-mono ml-1">/ forever</span>
            </div>
            <ul className="space-y-3.5 mb-8 flex-1">
              {['Single developer seat', '1GB Encrypted Storage', 'Community Discord Support'].map(feature => (
                <li key={feature} className="flex items-center text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  <Check className="w-4 h-4 mr-3 text-neutral-400 dark:text-neutral-500 shrink-0" />
                  {feature}
                </li>
              ))}
              <li className="flex items-center text-xs sm:text-sm text-neutral-400 dark:text-neutral-600 line-through">
                <X className="w-4 h-4 mr-3 shrink-0" /> Dedicated SLA Support
              </li>
            </ul>
            <button className="w-full py-3 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
              Get Started Free
            </button>
          </div>

          <div className="flex flex-col p-8 sm:p-9 rounded-3xl bg-white dark:bg-neutral-950 border-2 border-neutral-900 dark:border-white relative">
            <div className="inline-flex self-start px-3 py-1 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-[11px] font-mono tracking-wider uppercase mb-4">
              Professional
            </div>
            <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-1">Pro Tier</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">For scaling startups & apps</p>
            <div className="mb-8 pb-6 border-b border-neutral-200 dark:border-neutral-800">
              <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white">$15</span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono ml-1">/ month</span>
            </div>
            <ul className="space-y-3.5 mb-8 flex-1">
              {['All Hobby features included', 'Unlimited team members', '100GB High-speed Storage', '24/7 Priority Ticket Support', 'Custom domain & SSL certificates'].map(feature => (
                <li key={feature} className="flex items-center text-xs sm:text-sm text-neutral-900 dark:text-white font-medium">
                  <Check className="w-4 h-4 mr-3 text-neutral-900 dark:text-white shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors mt-auto">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
