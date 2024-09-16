import React from "react";

export default function Page() {
  return (
    <div className="flex py-20 text-base items-center justify-center">
      <div className="max-w-md text-center">
        <p className="m-0 text-9xl font-bold text-gray-800 dark:text-gray-200">
          404
        </p>
        <p className="m-0 mt-4 text-2xl font-semibold text-gray-600 dark:text-gray-400">
          Page not found
        </p>
        <p className="m-0 mt-2 text-gray-500">
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <div className="cursor-pointer mt-6 inline-block rounded-md bg-black dark:bg-gray-50 px-6 py-2 text-sm font-semibold text-white dark:text-gray-800">
          Go Back Home
        </div>
      </div>
    </div>
  );
}
