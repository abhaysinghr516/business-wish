import Image from "next/image";
import React from "react";

export const Minimal404Section: React.FC = () => (
  <div className="flex py-20 items-center justify-center bg-gray-100">
    <div className="max-w-md text-center">
      <h1 className="m-0 text-9xl font-bold text-gray-800">404</h1>
      <p className="m-0 mt-4 text-2xl font-semibold text-gray-600">
        Page not found
      </p>
      <p className="m-0 mt-2 text-gray-500">
        The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable.
      </p>
      <div className="cursor-pointer mt-6 inline-block rounded-md bg-indigo-500 px-6 py-2 text-white hover:bg-indigo-600">
        Go Back Home
      </div>
    </div>
  </div>
);

export const Illustrated404Section: React.FC = () => (
  <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
    <Image
      src="/not-found.png"
      alt="404 Illustration"
      className="w-64 mb-8"
      width={256}
      height={200}
    />
    <h1 className="m-0 text-5xl font-bold text-gray-800 mb-4">
      Oops! Page not found
    </h1>
    <p className="m-0 text-lg text-gray-600 mb-8">
      The page you&apos;re looking for doesn&apos;t exist or has been moved.
    </p>
    <div className="cursor-pointer bg-indigo-500 text-white py-2 px-6 rounded-md hover:bg-indigo-600">
      Go Back Home
    </div>
  </div>
);
