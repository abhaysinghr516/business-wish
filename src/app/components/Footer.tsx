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
    <footer className="bg-white dark:bg-[#050505] border-t border-neutral-200/50 dark:border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-xl font-medium tracking-tight text-neutral-900 dark:text-white hover:opacity-80 transition-opacity"
            >
              Business Wish
            </Link>
            <p className="text-neutral-500 dark:text-neutral-400 mt-6 max-w-md leading-relaxed">
              Production-ready Tailwind CSS components and professional
              developer tools. Copy, paste, and build beautiful interfaces with
              complete privacy.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center gap-2.5 text-sm font-medium text-neutral-600 dark:text-neutral-300">
                <div className="p-1.5 rounded-md bg-neutral-100 dark:bg-white/5 border border-neutral-200/50 dark:border-white/5 transition-colors">
                  <Code2 className="h-4 w-4" />
                </div>
                <span>50+ Components</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-neutral-600 dark:text-neutral-300">
                <div className="p-1.5 rounded-md bg-neutral-100 dark:bg-white/5 border border-neutral-200/50 dark:border-white/5 transition-colors">
                  <Wrench className="h-4 w-4" />
                </div>
                <span>17 Tools</span>
              </div>
            </div>
          </div>

          {/* Components */}
          <div>
            <h3 className="font-medium tracking-tight text-neutral-900 dark:text-white mb-6 flex items-center gap-2.5">
              <Code2 className="h-4 w-4 text-neutral-400" />
              Components
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/docs/components/accordion"
                  className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-[15px]"
                >
                  Browse All
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/components/button"
                  className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-[15px]"
                >
                  Buttons
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/components/card"
                  className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-[15px]"
                >
                  Cards
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/components/hero"
                  className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-[15px]"
                >
                  Hero Sections
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-medium tracking-tight text-neutral-900 dark:text-white mb-6 flex items-center gap-2.5">
              <Wrench className="h-4 w-4 text-neutral-400" />
              Tools
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/tools"
                  className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-[15px]"
                >
                  Browse All
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/palette-generator"
                  className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-[15px]"
                >
                  Color Palette
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/css-grid"
                  className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-[15px]"
                >
                  CSS Grid
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/json-formatter"
                  className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-[15px]"
                >
                  JSON Formatter
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-medium tracking-tight text-neutral-900 dark:text-white mb-6">
              Connect
            </h3>
            <div className="flex flex-col space-y-4">
              <a
                href="https://github.com/abhaysinghr516/business-wish"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all duration-300 group"
              >
                <div className="p-2 bg-neutral-100 dark:bg-white/5 rounded-lg group-hover:bg-neutral-200 dark:group-hover:bg-white/10 transition-colors border border-transparent dark:border-white/5">
                  <Github className="h-4 w-4" />
                </div>
                <span className="text-[15px]">GitHub</span>
              </a>
              <a
                href="https://x.com/abhaysinghr1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all duration-300 group"
              >
                <div className="p-2 bg-neutral-100 dark:bg-white/5 rounded-lg group-hover:bg-neutral-200 dark:group-hover:bg-white/10 transition-colors border border-transparent dark:border-white/5">
                  <Twitter className="h-4 w-4" />
                </div>
                <span className="text-[15px]">Twitter</span>
              </a>
              <a
                href="mailto:rathoreabhay1234@gmail.com"
                className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all duration-300 group"
              >
                <div className="p-2 bg-neutral-100 dark:bg-white/5 rounded-lg group-hover:bg-neutral-200 dark:group-hover:bg-white/10 transition-colors border border-transparent dark:border-white/5">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-[15px]">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 pt-8 border-t border-neutral-200/60 dark:border-white/5">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-[15px] text-neutral-500 dark:text-neutral-400">
              <p>© {currentYear} Business Wish. All rights reserved.</p>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-neutral-200 dark:bg-neutral-800" />
              <div className="flex items-center gap-6">
                <Link
                  href="/privacy"
                  className="hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Terms
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <p className="text-[15px] text-neutral-500 dark:text-neutral-400 flex items-center">
                Built with{" "}
                <Heart className="mx-1.5 h-4 w-4 text-neutral-300 dark:text-neutral-600" />{" "}
                by{" "}
                <Link
                  href="https://x.com/abhaysinghr1"
                  className="ml-1 text-neutral-900 dark:text-white hover:opacity-70 transition-opacity font-medium"
                >
                  Abhay Singh Rathore
                </Link>
              </p>

              {/* Trust Badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-100 dark:bg-white/5 border border-neutral-200/50 dark:border-white/5 rounded-full">
                <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                <span className="text-[13px] font-medium tracking-wide text-neutral-700 dark:text-neutral-300">
                  2,500+ users
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
