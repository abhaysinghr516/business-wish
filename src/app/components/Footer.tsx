import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/logo2.png" alt="logo" className="h-8" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Empowering developers with intuitive and efficient UI components.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Created by{" "}
              <Link
                href="https://x.com/abhaysinghr1"
                className="text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
              >
                Abhay Singh Rathore
              </Link>
              , a passionate Full-Stack Developer & UI/UX designer.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/components/accordion"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  href="/templates"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  Templates
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/abhaysinghr516/business-wish"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/abhaysinghr516/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:rathoreabhay1234@gmail.com"
                className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            © {currentYear} Business Wish. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
