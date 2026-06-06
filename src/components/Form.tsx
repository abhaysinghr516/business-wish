"use client";

import React, { useState } from "react";
import { Mail, Lock, ArrowRight, Send, Check, Star, MessageSquare, ShieldCheck } from "lucide-react";

// --- CONTACT FORM ---
export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && subject && message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
        setSubject("");
        setMessage("");
      }, 4000);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 sm:p-8 bg-stone-50 dark:bg-stone-900/40 rounded-2xl border border-stone-200/60 dark:border-stone-800/60 transition-colors duration-300">
      {submitted ? (
        <div className="flex flex-col items-center justify-center py-10 text-center animate-fadeIn">
          <div className="h-12 w-12 rounded-full bg-[#FF3903]/10 dark:bg-[#FF3903]/20 flex items-center justify-center mb-4 text-[#FF3903]">
            <Check className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">Message Sent!</h3>
          <p className="text-sm text-stone-500 dark:text-stone-400 mt-2 max-w-xs">
            Thank you for reaching out. We will get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">Contact Us</h3>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              We&apos;d love to hear from you. Please fill out the form below.
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-medium text-stone-700 dark:text-stone-300">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF3903] focus:border-[#FF3903] transition-all text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-600"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-xs font-medium text-stone-700 dark:text-stone-300">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="How can we help you?"
                className="w-full bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF3903] focus:border-[#FF3903] transition-all text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-600"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-medium text-stone-700 dark:text-stone-300">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                className="w-full bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF3903] focus:border-[#FF3903] transition-all text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-600 resize-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-stone-200 text-white dark:text-stone-900 font-medium rounded-xl text-sm transition-all duration-200 active:scale-[0.98]"
          >
            <Send className="h-4 w-4" />
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

// --- AUTH FORM ---
export const AuthForm: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Success: ${isSignUp ? "Account created" : "Logged in"} for ${email}`);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 sm:p-8 bg-white dark:bg-stone-950 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-colors duration-300">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
          {isSignUp ? "Create your account" : "Welcome back"}
        </h3>
        <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
          {isSignUp ? "Get started with your free workspace" : "Sign in to continue to your dashboard"}
        </p>
      </div>

      {/* Social Logins */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button
          onClick={() => alert("Google Auth Triggered")}
          className="flex items-center justify-center gap-2 px-4 py-2 border border-stone-200 dark:border-stone-800 rounded-xl text-xs font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-900/60 transition-colors"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          Google
        </button>
        <button
          onClick={() => alert("GitHub Auth Triggered")}
          className="flex items-center justify-center gap-2 px-4 py-2 border border-stone-200 dark:border-stone-800 rounded-xl text-xs font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-900/60 transition-colors"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
            />
          </svg>
          GitHub
        </button>
      </div>

      <div className="relative mb-6 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-stone-200 dark:border-stone-800"></div>
        </div>
        <span className="relative bg-white dark:bg-stone-950 px-3 text-[10px] uppercase tracking-wider text-stone-400 font-medium">
          Or continue with
        </span>
      </div>

      <form onSubmit={handleAuth} className="space-y-4">
        <div className="space-y-1.5">
          <label htmlFor="auth-email" className="text-xs font-medium text-stone-700 dark:text-stone-300">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-3 h-4 w-4 text-stone-400 dark:text-stone-600" />
            <input
              id="auth-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="w-full bg-stone-50 dark:bg-stone-900/40 border border-stone-200 dark:border-stone-800/80 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF3903] focus:border-[#FF3903] transition-all text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-600"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <label htmlFor="auth-password" className="text-xs font-medium text-stone-700 dark:text-stone-300">
              Password
            </label>
            {!isSignUp && (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Forgot password clicked");
                }}
                className="text-xs text-[#FF3903] hover:underline"
              >
                Forgot?
              </a>
            )}
          </div>
          <div className="relative">
            <Lock className="absolute left-3.5 top-3 h-4 w-4 text-stone-400 dark:text-stone-600" />
            <input
              id="auth-password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-stone-50 dark:bg-stone-900/40 border border-stone-200 dark:border-stone-800/80 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF3903] focus:border-[#FF3903] transition-all text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-600"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-[#FF3903] hover:bg-[#e23202] text-white font-medium rounded-xl text-sm transition-all duration-200 active:scale-[0.98]"
        >
          {isSignUp ? "Create Account" : "Sign In"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <div className="text-center mt-6 text-xs text-stone-500 dark:text-stone-400">
        {isSignUp ? "Already have an account?" : "Don't have an account yet?"}{" "}
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-[#FF3903] font-medium hover:underline focus:outline-none"
        >
          {isSignUp ? "Sign In" : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

// --- NEWSLETTER FORM ---
export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-stone-50 dark:bg-stone-900/30 rounded-2xl border border-stone-200/60 dark:border-stone-800/60 transition-colors duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-1 max-w-xs">
          <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-100 uppercase tracking-wider">
            Newsletter
          </h4>
          <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
            Get early access to updates, component releases, and designs.
          </p>
        </div>

        <div className="flex-grow max-w-md">
          {subscribed ? (
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 py-2.5 animate-fadeIn">
              <ShieldCheck className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm font-medium">Subscription activated! Check your inbox.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2 w-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow min-w-0 bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF3903] focus:border-[#FF3903] transition-all text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-600"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-stone-200 text-white dark:text-stone-900 font-medium rounded-xl text-sm transition-all duration-200 active:scale-[0.98] flex-shrink-0"
              >
                Join
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// --- FEEDBACK FORM ---
export const FeedbackForm: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [choices, setChoices] = useState<string[]>([]);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleChoice = (choice: string) => {
    setChoices((prev) =>
      prev.includes(choice) ? prev.filter((c) => c !== choice) : [...prev, choice]
    );
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setRating(null);
        setChoices([]);
        setFeedback("");
      }, 4000);
    } else {
      alert("Please select a rating before submitting.");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 sm:p-8 bg-white dark:bg-stone-950 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-[0_8px_30px_rgb(0,0,0,0.01)] transition-colors duration-300">
      {submitted ? (
        <div className="flex flex-col items-center justify-center py-8 text-center animate-fadeIn">
          <div className="h-12 w-12 rounded-full bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center mb-4 text-emerald-500">
            <Check className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">Feedback Submitted</h3>
          <p className="text-sm text-stone-500 dark:text-stone-400 mt-2 max-w-xs">
            Thank you! Your feedback helps us improve our component library daily.
          </p>
        </div>
      ) : (
        <form onSubmit={handleFeedbackSubmit} className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">Share your experience</h3>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Your feedback is anonymous and highly valuable.
            </p>
          </div>

          {/* Rating Stars */}
          <div className="space-y-2">
            <span className="text-xs font-medium text-stone-700 dark:text-stone-300 block">
              How would you rate the library?
            </span>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(null)}
                  className="p-1 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
                >
                  <Star
                    className={`h-6 w-6 transition-all ${
                      (hoveredRating !== null ? star <= hoveredRating : star <= (rating || 0))
                        ? "fill-[#FF3903] text-[#FF3903]"
                        : "text-stone-300 dark:text-stone-700"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-2">
            <span className="text-xs font-medium text-stone-700 dark:text-stone-300 block">
              What stands out the most?
            </span>
            <div className="grid grid-cols-2 gap-2">
              {["Design aesthetics", "Ease of integration", "Documentation", "Customizability"].map((item) => {
                const isChecked = choices.includes(item);
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggleChoice(item)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-medium transition-all text-left ${
                      isChecked
                        ? "border-[#FF3903] bg-[#FF3903]/5 text-[#FF3903]"
                        : "border-stone-200 dark:border-stone-850 hover:bg-stone-50 dark:hover:bg-stone-900/40 text-stone-700 dark:text-stone-300"
                    }`}
                  >
                    <span>{item}</span>
                    {isChecked && <Check className="h-3.5 w-3.5" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Text Area */}
          <div className="space-y-1.5">
            <label htmlFor="comments" className="text-xs font-medium text-stone-700 dark:text-stone-300">
              Any additional thoughts?
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-stone-400 dark:text-stone-600" />
              <textarea
                id="comments"
                rows={3}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Let us know what we can do better..."
                className="w-full bg-stone-50 dark:bg-stone-900/40 border border-stone-200 dark:border-stone-800 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF3903] focus:border-[#FF3903] transition-all text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-600 resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-stone-200 text-white dark:text-stone-900 font-medium rounded-xl text-sm transition-all duration-200 active:scale-[0.98]"
          >
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
};
