import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-300 py-12 px-4 md:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About section */}
          <div className="md:col-span-2">
            <div className="flex gap-x-5 mb-4">
              <img src="/logo2.png" alt="logo" className="h-8" />
              <h2 className="text-2xl font-bold text-white mb-4">
                {/* Business Wish */}
              </h2>
            </div>
            <p className="mb-4">
              Empowering developers with intuitive and efficient UI components.
            </p>
            <p className="text-sm">
              Created by{" "}
              <Link href="https://x.com/abhaysinghr1">
                <span className="text-purple-400 font-semibold">
                  Abhay Singh Rathore
                </span>
              </Link>
              , a passionate Full-Stack Developer & UI/UX designer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/components/accordion"
                  className="hover:text-purple-400 transition duration-300"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  href="/templates"
                  className="hover:text-purple-400 transition duration-300"
                >
                  Templates
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Socials</h3>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/abhaysinghr516/business-wish"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/abhaysinghr516/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:rathoreabhay1234@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {currentYear} Business Wish. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
