import { Metadata } from "next";
import Link from "next/link";
import { Shield, Eye, Lock, Server, Cookie, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Business Wish",
  description:
    "Learn how Business Wish protects your privacy. We prioritize user privacy with offline tools and minimal data collection.",
  keywords: [
    "privacy policy",
    "data protection",
    "user privacy",
    "offline tools",
    "no tracking",
    "privacy-focused",
    "GDPR compliant",
    "data security",
  ],
  openGraph: {
    title: "Privacy Policy | Business Wish",
    description:
      "Learn how Business Wish protects your privacy with offline tools and minimal data collection.",
    type: "website",
    url: "https://www.businesswish.tech/privacy",
  },
  alternates: {
    canonical: "https://www.businesswish.tech/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-gray-50 dark:from-black dark:via-gray-950/30 dark:to-gray-950">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-black/80 border border-gray-200/60 dark:border-gray-800/60 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 mb-6 backdrop-blur-sm">
            <Shield className="h-4 w-4 text-green-500" />
            <span>Privacy First</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-light text-black dark:text-white mb-6 leading-tight">
            Privacy Policy
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
            Your privacy matters to us. Learn how we protect your data and
            respect your privacy.
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
            Last updated: September 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="bg-white/80 dark:bg-black/80 rounded-2xl border border-gray-200/60 dark:border-gray-800/60 p-8 mb-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <Eye className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-xl font-semibold text-black dark:text-white m-0">
                Our Privacy Commitment
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed m-0">
              Business Wish is built with privacy as a core principle. Our tools
              work entirely offline in your browser, ensuring your data never
              leaves your device. We collect minimal information and are
              transparent about our practices.
            </p>
          </div>

          <div className="space-y-8">
            {/* Information We Collect */}
            <section className="bg-white/60 dark:bg-black/60 rounded-xl border border-gray-200/40 dark:border-gray-800/40 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Server className="h-5 w-5 text-blue-500" />
                <h2 className="text-lg font-semibold text-black dark:text-white m-0">
                  Information We Collect
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-black dark:text-white mb-2">
                    Analytics Data
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed">
                    We use Google Analytics to understand how our website is
                    used. This includes:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-light text-sm mt-2 space-y-1">
                    <li>Page views and user interactions</li>
                    <li>Browser type and device information</li>
                    <li>Geographic location (country/city level)</li>
                    <li>Referral sources</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-black dark:text-white mb-2">
                    Tool Usage
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed">
                    <strong>Important:</strong> All our developer tools run
                    entirely in your browser. We do not collect, store, or
                    transmit any data you input into our tools.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-black dark:text-white mb-2">
                    Contact Information
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed">
                    If you contact us via email, we store your email address and
                    message content solely for the purpose of responding to your
                    inquiry.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="bg-white/60 dark:bg-black/60 rounded-xl border border-gray-200/40 dark:border-gray-800/40 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-5 w-5 text-purple-500" />
                <h2 className="text-lg font-semibold text-black dark:text-white m-0">
                  How We Use Your Information
                </h2>
              </div>

              <ul className="space-y-3 text-gray-600 dark:text-gray-400 font-light text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Improve our website and user experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Understand which components and tools are most popular
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Respond to support requests and feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Monitor for technical issues and security threats</span>
                </li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section className="bg-white/60 dark:bg-black/60 rounded-xl border border-gray-200/40 dark:border-gray-800/40 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-5 w-5 text-green-500" />
                <h2 className="text-lg font-semibold text-black dark:text-white m-0">
                  Data Sharing and Third Parties
                </h2>
              </div>

              <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to
                third parties. We only share data with:
              </p>

              <div className="space-y-3">
                <div>
                  <h3 className="font-medium text-black dark:text-white mb-2">
                    Google Analytics
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed">
                    For website analytics. Google's privacy policy applies to
                    this data.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-black dark:text-white mb-2">
                    Vercel Analytics
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed">
                    For performance monitoring and basic usage statistics.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section className="bg-white/60 dark:bg-black/60 rounded-xl border border-gray-200/40 dark:border-gray-800/40 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Cookie className="h-5 w-5 text-orange-500" />
                <h2 className="text-lg font-semibold text-black dark:text-white m-0">
                  Cookies and Local Storage
                </h2>
              </div>

              <div className="space-y-3 text-gray-600 dark:text-gray-400 font-light text-sm">
                <p>We use cookies and local storage for:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Remembering your theme preference (dark/light mode)</li>
                  <li>Analytics tracking (Google Analytics cookies)</li>
                  <li>Storing your tool preferences locally in your browser</li>
                </ul>
                <p>
                  You can disable cookies in your browser settings, though this
                  may affect some functionality.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section className="bg-white/60 dark:bg-black/60 rounded-xl border border-gray-200/40 dark:border-gray-800/40 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-5 w-5 text-blue-500" />
                <h2 className="text-lg font-semibold text-black dark:text-white m-0">
                  Your Rights and Choices
                </h2>
              </div>

              <div className="space-y-3 text-gray-600 dark:text-gray-400 font-light text-sm">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Request information about data we collect</li>
                  <li>Request deletion of your data</li>
                  <li>Opt out of analytics tracking</li>
                  <li>Contact us with privacy concerns</li>
                </ul>
                <p>
                  To exercise these rights, contact us at{" "}
                  <a
                    href="mailto:rathoreabhay1234@gmail.com"
                    className="text-black dark:text-white hover:underline font-medium"
                  >
                    rathoreabhay1234@gmail.com
                  </a>
                </p>
              </div>
            </section>

            {/* Updates */}
            <section className="bg-white/60 dark:bg-black/60 rounded-xl border border-gray-200/40 dark:border-gray-800/40 p-6 backdrop-blur-sm">
              <h2 className="text-lg font-semibold text-black dark:text-white mb-3">
                Policy Updates
              </h2>
              <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed">
                We may update this privacy policy from time to time. We will
                notify users of any material changes by posting the new policy
                on this page with an updated "Last modified" date.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-gray-50 to-gray-100/50 dark:from-gray-900 dark:to-gray-800/50 rounded-xl border border-gray-200/60 dark:border-gray-800/60 p-6">
              <h2 className="text-lg font-semibold text-black dark:text-white mb-3">
                Contact Us
              </h2>
              <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed mb-4">
                If you have any questions about this privacy policy or our
                practices, please contact us:
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600 dark:text-gray-400">
                  <strong className="text-black dark:text-white">Email:</strong>{" "}
                  <a
                    href="mailto:rathoreabhay1234@gmail.com"
                    className="text-black dark:text-white hover:underline"
                  >
                    rathoreabhay1234@gmail.com
                  </a>
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong className="text-black dark:text-white">
                    Website:
                  </strong>{" "}
                  <Link
                    href="/"
                    className="text-black dark:text-white hover:underline"
                  >
                    businesswish.tech
                  </Link>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
