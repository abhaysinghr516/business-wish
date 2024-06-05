import React from "react";

export const SimpleAlert: React.FC = () => (
  <div
    className="bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md"
    role="alert"
  >
    <div className="flex">
      <div>
        <p className="m-0 font-bold">Informational Alert</p>
        <p className="m-0 text-sm">Some additional information for the user.</p>
      </div>
    </div>
  </div>
);

export const DismissableAlert: React.FC = () => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
      <strong className="font-bold text-red-700 mr-2">Error!</strong>
      <span className="block sm:inline">
        Something went wrong, please try again.
      </span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke="currentColor"
          className="h-6 w-6 fill-current text-red-500"
        >
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </span>
    </div>
  );
};

export const CustomAlert: React.FC = () => (
  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4" role="alert">
    <div className="flex">
      <div className="flex-shrink-0">
        <svg
          className="h-5 w-5 text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11h-2v5h2V7zm0 6h-2v2h2v-2z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="ml-3">
        <p className=" m-0 text-sm text-yellow-700">
          Warning! There might be potential issues with your action.
        </p>
      </div>
    </div>
  </div>
);
