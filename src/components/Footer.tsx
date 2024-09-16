export const SimpleFooter: React.FC = () => (
  <footer className="bg-gray-900 py-6 text-white">
    <div className="container mx-auto text-center">
      <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
    </div>
  </footer>
);

export const FooterwithMultipleSections: React.FC = () => (
  <footer className="bg-gray-900 py-8 text-white">
    <div className="container mx-auto flex flex-col sm:flex-row justify-around">
      <section>
        <p className="text-lg font-semibold">Your Company</p>
        <address className="not-italic">
          123 Street, Cityville
          <br />
          <a href="#" className="hover:text-gray-400">
            info@example.com
          </a>
        </address>
      </section>
      <section>
        <p className="text-lg font-semibold">Company</p>
        <ul className="mt-2">
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              Press
            </a>
          </li>
        </ul>
      </section>
      <section>
        <p className="text-lg font-semibold">Follow Us</p>
        <div className="mt-2 flex">
          <a
            href="#"
            aria-label="Follow on Instagram"
            className="mr-2 text-gray-400 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="currentColor"
            >
              <path d="m19 4-5.93 6.93M5 20l5.93-6.93m0 0 5.795 6.587c.19.216.483.343.794.343h1.474c.836 0 1.307-.85.793-1.435L13.07 10.93m-2.14 2.14L4.214 5.435C3.7 4.85 4.17 4 5.007 4h1.474c.31 0 .604.127.794.343l5.795 6.587" />
            </svg>
          </a>
          <a href="#" aria-label="Follow on X" className="mr-2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="currentColor"
            >
              <path d="M15.462 11.487a3.5 3.5 0 1 1-6.925 1.026 3.5 3.5 0 0 1 6.925-1.026M17 6.5h.5" />
              <path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  </footer>
);

export const CenteredwithBranding: React.FC = () => (
  <footer className="bg-gray-900 py-4 text-center text-white">
    <p className="text-3xl font-bold">Company Name</p>
    <p className="mt-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <div className="border-t border-gray-300 my-4"></div>
    <nav
      className="flex flex-wrap justify-center"
      aria-label="Footer Navigation"
    >
      <a href="#" className="mx-4 my-2 hover:text-gray-400">
        Home
      </a>
      <a href="#" className="mx-4 my-2 hover:text-gray-400">
        About
      </a>
      <a href="#" className="mx-4 my-2 hover:text-gray-400">
        Services
      </a>
      <a href="#" className="mx-4 my-2 hover:text-gray-400">
        Contact
      </a>
    </nav>
  </footer>
);

export const FooterwithNewsletter: React.FC = () => (
  <footer className="bg-gray-900 text-white px-8">
    <div className="container mx-auto flex flex-col items-center justify-between border-b border-gray-700 py-12 md:flex-row">
      <div className="mb-6 md:mb-0 md:w-1/2">
        <h2 className="text-lg font-semibold">Subscribe to our Newsletter</h2>
        <p className="mt-2 text-sm">
          Stay updated with the latest news and offers.
        </p>
      </div>
      <form
        className="flex items-center md:w-1/2"
        aria-label="Newsletter Subscription"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="newsletter-email"
          placeholder="Enter your email"
          className="rounded-l-md bg-gray-800 p-2 text-white"
          required
        />
        <a className="cursor-pointer rounded-r-md bg-blue-500 p-2 text-white hover:bg-blue-600">
          Subscribe
        </a>
      </form>
    </div>
    <div className="container mx-auto py-6 text-center">
      <p className="text-sm">&copy; 2023 Your Company. All rights reserved.</p>
    </div>
  </footer>
);

export const FooterwithCTA: React.FC = () => (
  <footer className="bg-gray-900 py-8 text-center text-white">
    <h2 className="text-2xl font-bold">Join our community</h2>
    <p className="mt-2">Get updates on our latest products and promotions.</p>
    <button className="mt-4 rounded-full bg-purple-500 px-6 py-2 font-bold text-white hover:bg-purple-600 focus:outline-none">
      Join Now
    </button>
    <div className="my-4 flex items-center justify-center">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="mx-4 text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6 text-purple-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09z"
          />
        </svg>
      </span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
    <div className="container mx-auto mt-8 flex flex-col sm:flex-row justify-between">
      <div>
        <p className="text-lg font-semibold">Your Company</p>
        <p className="text-sm">123 Street, Cityville</p>
        <p className="text-sm">info@example.com</p>
      </div>
      <nav>
        <p className="text-lg font-semibold">Company</p>
        <ul className="mt-2 space-y-2">
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              Press
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <p className="text-lg font-semibold">Follow Us</p>
        <div className="mt-2 flex justify-center lg:justify-end space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white"
            aria-label="Follow on Social Media"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09z" />
            </svg>
          </a>
          {/* Other icons */}
        </div>
      </div>
    </div>
  </footer>
);

export const DetailedFooter: React.FC = () => (
  <footer className="bg-gray-900  py-12 text-gray-300">
    <div className="container mx-auto grid grid-cols-2 gap-8 ">
      <div className="ml-5 ">
        <div className="cursor-pointer mb-4 flex items-center">
          <span className="text-lg font-bold">Your Brand</span>
        </div>
        <p className="m-0 mb-4">
          We are a cutting-edge AI company dedicated to pushing the boundaries
          of what&apos;s possible with technology.
        </p>
        <div className="flex">
          <div className="cursor-pointer mx-2 text-gray-400 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="currentColor"
            >
              <path d="M15.462 11.487a3.5 3.5 0 1 1-6.925 1.026 3.5 3.5 0 0 1 6.925-1.026M17 6.5h.5" />
              <path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z" />
            </svg>
          </div>
          <div className="cursor-pointer mx-2 text-gray-400 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="currentColor"
            >
              <path d="M15.462 11.487a3.5 3.5 0 1 1-6.925 1.026 3.5 3.5 0 0 1 6.925-1.026M17 6.5h.5" />
              <path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z" />
            </svg>
          </div>
          <div className="cursor-pointer mx-2 text-gray-400 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="currentColor"
            >
              <path d="M15.462 11.487a3.5 3.5 0 1 1-6.925 1.026 3.5 3.5 0 0 1 6.925-1.026M17 6.5h.5" />
              <path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z" />
            </svg>
          </div>
          <div className="cursor-pointer mx-2 text-gray-400 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="currentColor"
            >
              <path d="M15.462 11.487a3.5 3.5 0 1 1-6.925 1.026 3.5 3.5 0 0 1 6.925-1.026M17 6.5h.5" />
              <path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="ml-5 ">
        <p className="m-0 mb-4 text-lg font-bold text-gray-300">Products</p>
        <div className="space-y-2">
          <div>
            <div className="cursor-pointer hover:text-white">AI Models</div>
          </div>
          <div>
            <div className="cursor-pointer hover:text-white">APIs</div>
          </div>
          <div>
            <div className="cursor-pointer hover:text-white">Platforms</div>
          </div>
          <div>
            <div className="cursor-pointer hover:text-white">Solutions</div>
          </div>
        </div>
      </div>
      <div className="ml-5 ">
        <p className="m-0 mb-4 text-lg text-gray-300 font-bold">Resources</p>
        <div className="space-y-2">
          <div>
            <div className="cursor-pointer hover:text-white">Blog</div>
          </div>
          <div>
            <div className="cursor-pointer hover:text-white">Docs</div>
          </div>
          <div>
            <div className="cursor-pointer hover:text-white">Research</div>
          </div>
          <div>
            <div className="cursor-pointer hover:text-white">Tutorials</div>
          </div>
        </div>
      </div>
      <div className="ml-5">
        <p className="m-0 mb-4 text-lg text-gray-300 font-bold">Subscribe</p>
        <p className="m-0 mb-4">
          Stay up to date with our latest news and updates.
        </p>
        <form className="flex items-center mdw-1/2">
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-l-md  w-44 bg-gray-800 p-2 text-white focus:outline-none"
            required
          />
          <a className="cursor-pointer rounded-r-md bg-blue-500 p-2 text-white hover:bg-blue-600">
            Subscribe
          </a>
        </form>
      </div>
    </div>
    <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm ">
      &copy; 2023 Your Company. All rights reserved.
      <div className="cursor-pointer hover:text-white">Privacy Policy</div>
      <div className="cursor-pointer hover:text-white">Terms of Service</div>
    </div>
  </footer>
);
