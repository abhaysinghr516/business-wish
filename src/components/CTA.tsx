import React from "react";

export const SimpleCTA: React.FC = () => (
  <div className="bg-purple-50 dark:bg-gray-900 py-16">
    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white sm:text-4xl">
        Join Us Today!
      </h2>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
        Sign up now to get exclusive offers and updates.
      </p>
      <div className="mt-8">
        <button className="rounded-md bg-purple-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:bg-purple-500 dark:hover:bg-purple-600 dark:focus:ring-purple-400 dark:focus:ring-offset-purple-900">
          Sign Up
        </button>
      </div>
    </div>
  </div>
);

export const CardStyleCTA: React.FC = () => (
  <div className="bg-gray-50 dark:bg-gray-900 py-16">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-lg bg-white dark:bg-gray-800 p-8 shadow-sm dark:shadow-gray-700">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Get Started Today!
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Start your journey with us and enjoy exclusive benefits.
        </p>
        <div className="mt-6">
          <button className="rounded-md bg-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:bg-purple-500 dark:hover:bg-purple-600 dark:focus:ring-purple-400 dark:focus:ring-offset-gray-800">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </div>
);

export const CTAwithForm: React.FC = () => (
  <div className="bg-white dark:bg-gray-900 py-16">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-8 shadow-sm dark:shadow-gray-700">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Subscribe to Our Newsletter
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Get the latest news and updates delivered straight to your inbox.
        </p>
        <form className="mt-6 sm:flex sm:max-w-md">
          <input
            type="email"
            className="w-full rounded-md border-gray-300 dark:border-gray-600 px-4 py-2 placeholder-gray-500 dark:placeholder-gray-400 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:focus:border-purple-400 dark:focus:ring-purple-400 sm:max-w-xs dark:bg-gray-700 dark:text-white"
            placeholder="Your Email Address"
          />
          <button
            type="submit"
            className="mt-3 w-full rounded-md bg-purple-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto dark:bg-purple-500 dark:hover:bg-purple-600 dark:focus:ring-purple-400 dark:focus:ring-offset-gray-800"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
);
