import React from "react";
import { Instagram, Twitter, Facebook, Linkedin, Sparkles } from "lucide-react";

export const SimpleFooter: React.FC = () => (
  <footer className="bg-gray-900 py-6 text-white">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </div>
  </footer>
);

export const FooterwithMultipleSections: React.FC = () => (
  <footer className="bg-gray-900 py-8 text-white">
    <div className="container mx-auto grid gap-8 px-4 sm:grid-cols-3">
      <section>
        <h2 className="text-lg font-semibold">Your Company</h2>
        <address className="mt-2 not-italic">
          123 Street, Cityville
          <br />
          <a href="mailto:info@example.com" className="hover:text-gray-400">
            info@example.com
          </a>
        </address>
      </section>
      <section>
        <h2 className="text-lg font-semibold">Company</h2>
        <ul className="mt-2 space-y-2">
          {["About Us", "Careers", "Press"].map((item) => (
            <li key={item}>
              <a href="#" className="text-gray-400 hover:text-white">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-lg font-semibold">Follow Us</h2>
        <div className="mt-2 flex space-x-4">
          <a
            href="#"
            aria-label="Follow on Instagram"
            className="text-gray-400 hover:text-white"
          >
            <Instagram size={24} />
          </a>
          <a
            href="#"
            aria-label="Follow on Twitter"
            className="text-gray-400 hover:text-white"
          >
            <Twitter size={24} />
          </a>
        </div>
      </section>
    </div>
  </footer>
);

export const CenteredwithBranding: React.FC = () => (
  <footer className="bg-gray-900 py-8 text-center text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold">Company Name</h2>
      <p className="mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="my-6 border-t border-gray-700"></div>
      <nav
        className="flex flex-wrap justify-center"
        aria-label="Footer Navigation"
      >
        {["Home", "About", "Services", "Contact"].map((item) => (
          <a key={item} href="#" className="mx-4 my-2 hover:text-gray-400">
            {item}
          </a>
        ))}
      </nav>
    </div>
  </footer>
);

export const FooterwithNewsletter: React.FC = () => (
  <footer className="bg-gray-900 text-white">
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-between border-b border-gray-700 pb-8 md:flex-row">
        <div className="mb-6 md:mb-0 md:w-1/2">
          <h2 className="text-lg font-semibold">Subscribe to our Newsletter</h2>
          <p className="mt-2 text-sm">
            Stay updated with the latest news and offers.
          </p>
        </div>
        <form className="w-full md:w-1/2" aria-label="Newsletter Subscription">
          <div className="flex">
            <input
              type="email"
              id="newsletter-email"
              placeholder="Enter your email"
              className="w-full rounded-l-md bg-gray-800 p-2 text-white"
              required
            />
            <button
              type="submit"
              className="rounded-r-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export const FooterwithCTA: React.FC = () => (
  <footer className="bg-gray-900 py-8 text-center text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold">Join our community</h2>
      <p className="mt-2">Get updates on our latest products and promotions.</p>
      <button className="mt-4 rounded-full bg-purple-500 px-6 py-2 font-bold text-white hover:bg-purple-600 focus:outline-none">
        Join Now
      </button>
      <div className="my-8 flex items-center justify-center">
        <div className="flex-grow border-t border-gray-700"></div>
        <span className="mx-4">
          <Sparkles className="h-6 w-6 text-purple-500" />
        </span>
        <div className="flex-grow border-t border-gray-700"></div>
      </div>
      <div className="grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">Your Company</h3>
          <p className="mt-2 text-sm">123 Street, Cityville</p>
          <p className="text-sm">info@example.com</p>
        </div>
        <nav>
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="mt-2 space-y-2">
            {["About Us", "Careers", "Press"].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="mt-2 flex justify-center space-x-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label={`Follow on ${Icon.name}`}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export const DetailedFooter: React.FC = () => (
  <footer className="bg-gray-900 py-12 text-gray-300">
    <div className="container mx-auto px-4">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="mb-4 text-lg font-bold">Your Brand</h2>
          <p className="mb-4">
            We are a cutting-edge AI company dedicated to pushing the boundaries
            of what&apos;s possible with technology.
          </p>
          <div className="flex space-x-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label={`Follow on ${Icon.name}`}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-bold">Products</h2>
          <ul className="space-y-2">
            {["AI Models", "APIs", "Platforms", "Solutions"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-bold">Resources</h2>
          <ul className="space-y-2">
            {["Blog", "Docs", "Research", "Tutorials"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-bold">Subscribe</h2>
          <p className="mb-4">
            Stay up to date with our latest news and updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-l-md bg-gray-800 p-2 text-white focus:outline-none"
              required
            />
            <button
              type="submit"
              className="rounded-r-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);
