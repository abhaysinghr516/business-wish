import Link from "next/link";
import {
  Github,
  Twitter,
  Mail,
  Heart,
  Star,
  Users,
  Wrench,
  Palette,
  Code2,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50/50 dark:from-black dark:to-gray-950/50 border-t border-gray-200/60 dark:border-gray-800/60">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-xl font-semibold text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              Business Wish
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-md leading-relaxed font-light">
              Production-ready Tailwind CSS components and professional
              developer tools. Copy, paste, and build beautiful interfaces with
              complete privacy.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-6 mt-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                <Code2 className="h-4 w-4" />
                <span className="font-medium">50+ Components</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                <Wrench className="h-4 w-4" />
                <span className="font-medium">17 Tools</span>
              </div>
            </div>
          </div>

          {/* Components */}
          <div>
            <h3 className="font-semibold text-black dark:text-white mb-6 flex items-center gap-2">
              <Code2 className="h-4 w-4" />
              Components
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/docs/components/accordion"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm font-light"
                >
                  Browse All
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/components/button"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm font-light"
                >
                  Buttons
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/components/card"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm font-light"
                >
                  Cards
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/components/hero"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm font-light"
                >
                  Hero Sections
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold text-black dark:text-white mb-6 flex items-center gap-2">
              <Wrench className="h-4 w-4" />
              Tools
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/tools"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm font-light"
                >
                  Browse All
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/palette-generator"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm font-light"
                >
                  Color Palette
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/css-grid"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm font-light"
                >
                  CSS Grid
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/json-formatter"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm font-light"
                >
                  JSON Formatter
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-black dark:text-white mb-6">
              Connect
            </h3>
            <div className="flex flex-col space-y-4">
              <a
                href="https://github.com/abhaysinghr516/business-wish"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200 group"
              >
                <div className="p-2 bg-gray-100 dark:bg-gray-900 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-colors">
                  <Github className="h-4 w-4" />
                </div>
                <span className="text-sm font-light">GitHub</span>
              </a>
              <a
                href="https://x.com/abhaysinghr1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200 group"
              >
                <div className="p-2 bg-gray-100 dark:bg-gray-900 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-colors">
                  <Twitter className="h-4 w-4" />
                </div>
                <span className="text-sm font-light">Twitter</span>
              </a>
              <a
                href="mailto:rathoreabhay1234@gmail.com"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200 group"
              >
                <div className="p-2 bg-gray-100 dark:bg-gray-900 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-sm font-light">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200/60 dark:border-gray-800/60">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <p>© {currentYear} Business Wish. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <Link
                  href="/privacy"
                  className="hover:text-black dark:hover:text-white transition-colors font-light"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-black dark:hover:text-white transition-colors font-light"
                >
                  Terms
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                Built with{" "}
                <Heart className="inline h-3 w-3 text-red-500 fill-red-500" />{" "}
                by{" "}
                <Link
                  href="https://x.com/abhaysinghr1"
                  className="text-black dark:text-white hover:underline font-medium"
                >
                  Abhay Singh Rathore
                </Link>
              </p>

              {/* Trust Badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100/80 dark:bg-gray-900/80 rounded-full">
                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                  1,000+ users
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
