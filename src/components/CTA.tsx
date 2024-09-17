import React from "react";

export const SimpleCTA: React.FC = () => (
  <div className="bg-purple-50 py-16">
    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
        Join Us Today!
      </h2>
      <p className="mt-4 text-xl text-gray-600">
        Sign up now to get exclusive offers and updates.
      </p>
      <div className="mt-8">
        <button className="rounded-md bg-purple-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
          Sign Up
        </button>
      </div>
    </div>
  </div>
);

export const CardStyleCTA: React.FC = () => (
  <div className="bg-gray-50 py-16">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-lg bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900">
          Get Started Today!
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Start your journey with us and enjoy exclusive benefits.
        </p>
        <div className="mt-6">
          <button className="rounded-md bg-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </div>
);

export const CTAwithForm: React.FC = () => (
  <div className="bg-white py-16">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-lg bg-gray-50 p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900">
          Subscribe to Our Newsletter
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Get the latest news and updates delivered straight to your inbox.
        </p>
        <form className="mt-6 sm:flex sm:max-w-md">
          <input
            type="email"
            className="w-full rounded-md border-gray-300 px-4 py-2 placeholder-gray-500 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:max-w-xs"
            placeholder="Your Email Address"
          />
          <button
            type="submit"
            className="mt-3 w-full rounded-md bg-purple-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
);
