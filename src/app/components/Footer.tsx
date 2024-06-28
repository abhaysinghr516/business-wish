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
              <span className="text-purple-400 font-semibold">
                Abhay Singh Rathore
              </span>
              , a passionate Full-Stack Developer & UI/UX designer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "Components", "Templates"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <div className="flex space-x-4 mt-4">
              {[Github, Twitter, Linkedin, Mail].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  target="_blank"
                  className="text-gray-400 hover:text-purple-400 transition duration-300"
                >
                  <Icon size={20} />
                </Link>
              ))}
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
