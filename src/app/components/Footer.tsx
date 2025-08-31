import Link from "next/link";
import { Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-xl font-medium text-black dark:text-white"
            >
              Business Wish
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-md">
              Production-ready Tailwind CSS components. Copy, paste, and build
              beautiful interfaces.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-black dark:text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li></li>
              <li>
                <Link
                  href="/docs/components/accordion"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  href="/templates"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Templates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-black dark:text-white mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/abhaysinghr516/business-wish"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/abhaysinghr1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:rathoreabhay1234@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Business Wish. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 md:mt-0">
            Built by{" "}
            <Link
              href="https://x.com/abhaysinghr1"
              className="text-black dark:text-white hover:underline"
            >
              Abhay Singh Rathore
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
