import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Mail } from "lucide-react";

const footerLinks = {
  Resources: [
    { label: "Components", href: "/docs/components/accordion" },
    { label: "Motion", href: "/docs/motion/text-reveal" },
    { label: "Documentation", href: "/docs/components/accordion" },
  ],
  "Useful Links": [
    { label: "License", href: "https://github.com/abhaysinghr516/business-wish/blob/main/LICENSE" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  "Help and Support": [
    { label: "GitHub Issues", href: "https://github.com/abhaysinghr516/business-wish/issues" },
    { label: "Email", href: "mailto:rathoreabhay1234@gmail.com" },
  ],
};

const socialLinks = [
  { icon: Github, href: "https://github.com/abhaysinghr516/business-wish", label: "GitHub" },
  { icon: Twitter, href: "https://x.com/abhaysinghr1", label: "Twitter" },
  { icon: Mail, href: "mailto:rathoreabhay1234@gmail.com", label: "Email" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 py-16">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/bw-logo.svg"
                alt="Business Wish"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span className="text-sm font-semibold tracking-tight text-stone-900 dark:text-white">
                Business Wish
              </span>
            </Link>
            <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed max-w-xs">
              An open-source React UI component library built with Tailwind CSS, including UI blocks and pre-built templates for modern web apps.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-semibold text-stone-900 dark:text-white uppercase tracking-wider mb-4 font-mono">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
                      {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 dark:text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-stone-500 dark:text-stone-400">
            © {currentYear} Business Wish. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
