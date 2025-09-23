import { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Scale,
  Shield,
  AlertTriangle,
  Users,
  Code,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Business Wish",
  description:
    "Terms of service for Business Wish. Learn about the usage terms for our UI components and developer tools.",
  keywords: [
    "terms of service",
    "terms of use",
    "legal terms",
    "usage agreement",
    "Apache license",
    "open source",
    "developer tools terms",
  ],
  openGraph: {
    title: "Terms of Service | Business Wish",
    description:
      "Terms of service for Business Wish UI components and developer tools.",
    type: "website",
    url: "https://www.businesswish.tech/terms",
  },
  alternates: {
    canonical: "https://www.businesswish.tech/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-gray-50 dark:from-black dark:via-gray-950/30 dark:to-gray-950">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-black/80 border border-gray-200/60 dark:border-gray-800/60 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 mb-6 backdrop-blur-sm">
            <Scale className="h-4 w-4 text-blue-500" />
            <span>Legal Terms</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-light text-black dark:text-white mb-6 leading-tight">
            Terms of Service
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
            Please read these terms carefully before using Business Wish
            services.
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
            Last updated: September 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="bg-white/80 dark:bg-black/80 rounded-2xl border border-gray-200/60 dark:border-gray-800/60 p-8 mb-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-xl font-semibold text-black dark:text-white m-0">
                Agreement to Terms
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed m-0">
              By accessing and using Business Wish, you accept and agree to be
              bound by the terms and provision of this agreement. If you do not
              agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div className="space-y-8">
            {/* License and Usage */}
            <section className="bg-white/60 dark:bg-black/60 rounded-xl border border-gray-200/40 dark:border-gray-800/40 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Code className="h-5 w-5 text-green-500" />
                <h2 className="text-lg font-semibold text-black dark:text-white m-0">
                  License and Usage Rights
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-black dark:text-white mb-2">
                    Open Source Components
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed">
                    Our UI components and code are released under the{" "}
                    <a
                      href="https://github.com/abhaysinghr516/business-wish/blob/main/LICENSE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black dark:text-white hover:underline font-medium"
                    >
                      Apache License 2.0
                    </a>
                    . You are free to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-light text-sm mt-2 space-y-1 ml-4">
                    <li>
                      Use the components in personal and commercial projects
                    </li>
                    <li>Modify and distribute the code</li>
                    <li>Create derivative works</li>
                    <li>
                      Use without attribution (though attribution is
                      appreciated)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-black dark:text-white mb-2">
                    Developer Tools
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed">
                    Our developer tools are provided free of charge for personal
                    and commercial use. All tools run locally in your browser
                    and do not require registration.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-black dark:text-white mb-2">
                    Website Content
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed">
                    The website design, documentation, and non-code content are
                    protected by copyright. You may not reproduce or distribute
                    this content without permission.
                  </p>
                </div>
              </div>
            </section>

            {/* Acceptable Use */}
            <section className="bg-white/60 dark:bg-black/60 rounded-xl border border-gray-200/40 dark:border-gray-800/40 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-5 w-5 text-purple-500" />
                <h2 className="text-lg font-semibold text-black dark:text-white m-0">
                  Acceptable Use Policy
                </h2>
              </div>

              <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed mb-4">
                You agree not to use Business Wish for any unlawful purpose or
                in any way that could damage, disable, overburden, or impair our
                services. Prohibited activities include:
              </p>

              <ul className="space-y-2 text-gray-600 dark:text-gray-400 font-light text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Attempting to gain unauthorized access to our systems
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Using automated tools to scrape or download content
                    excessively
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Distributing malware or harmful code through our platform
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Violating any applicable laws or regulations</span>
                </li>
              </ul>
            </section>

            {/* Disclaimers */}
            <section className="bg-white/60 dark:bg-black/60 rounded-xl border border-gray-200/40 dark:border-gray-800/40 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                <h2 className="text-lg font-semibold text-black dark:text-white m-0">
                  Disclaimers and Limitations
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-black dark:text-white mb-2">
                    Service Availability
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed">
                    We strive to maintain high availability but do not guarantee
                    uninterrupted service. We may temporarily suspend access for
                    maintenance or updates.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-black dark:text-white mb-2">
                    Code Quality
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed">
                    While we test our components and tools, we cannot guarantee
                    they are error-free or suitable for all use cases. Use at
                    your own discretion and test thoroughly in your projects.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-black dark:text-white mb-2">
                    Third-Party Services
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed">
                    Our website uses third-party services (Google Analytics,
                    Vercel). We are not responsible for their availability or
                    privacy practices.
                  </p>
                </div>
              </div>
            </section>

            {/* Liability */}
            <section className="bg-white/60 dark:bg-black/60 rounded-xl border border-gray-200/40 dark:border-gray-800/40 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-5 w-5 text-red-500" />
                <h2 className="text-lg font-semibold text-black dark:text-white m-0">
                  Limitation of Liability
                </h2>
              </div>

              <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed">
                In accordance with the Apache License 2.0, Business Wish and its
                contributors provide the service "AS IS" without warranties of
                any kind. We shall not be liable for any direct, indirect,
                incidental, special, or consequential damages resulting from the
                use or inability to use our service, even if we have been
                advised of the possibility of such damages.
              </p>
            </section>

            {/* Privacy */}
            <section className="bg-white/60 dark:bg-black/60 rounded-xl border border-gray-200/40 dark:border-gray-800/40 p-6 backdrop-blur-sm">
              <h2 className="text-lg font-semibold text-black dark:text-white mb-3">
                Privacy
              </h2>
              <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed">
                Your privacy is important to us. Please review our{" "}
                <Link
                  href="/privacy"
                  className="text-black dark:text-white hover:underline font-medium"
                >
                  Privacy Policy
                </Link>{" "}
                to understand how we collect, use, and protect your information.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="bg-white/60 dark:bg-black/60 rounded-xl border border-gray-200/40 dark:border-gray-800/40 p-6 backdrop-blur-sm">
              <h2 className="text-lg font-semibold text-black dark:text-white mb-3">
                Changes to Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed">
                We reserve the right to modify these terms at any time. We will
                notify users of material changes by posting the updated terms on
                this page with a new "Last updated" date. Continued use of the
                service after changes constitutes acceptance of the new terms.
              </p>
            </section>

            {/* Governing Law */}
            <section className="bg-white/60 dark:bg-black/60 rounded-xl border border-gray-200/40 dark:border-gray-800/40 p-6 backdrop-blur-sm">
              <h2 className="text-lg font-semibold text-black dark:text-white mb-3">
                Governing Law
              </h2>
              <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed">
                These terms shall be governed by and construed in accordance
                with applicable laws. Any disputes arising from these terms or
                your use of Business Wish shall be resolved through appropriate
                legal channels.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-gray-50 to-gray-100/50 dark:from-gray-900 dark:to-gray-800/50 rounded-xl border border-gray-200/60 dark:border-gray-800/60 p-6">
              <h2 className="text-lg font-semibold text-black dark:text-white mb-3">
                Contact Information
              </h2>
              <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed mb-4">
                If you have any questions about these terms, please contact us:
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
                    GitHub:
                  </strong>{" "}
                  <a
                    href="https://github.com/abhaysinghr516/business-wish"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white hover:underline"
                  >
                    github.com/abhaysinghr516/business-wish
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
