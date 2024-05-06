import React from "react";

const page = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="px-6 py-8">
          <h2 className="text-center text-3xl font-semibold text-gray-800">
            Choose Your Plan
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="flex w-full flex-col justify-center p-6 md:w-1/3">
              <div className="flex justify-center">
                <span className="text-4xl font-bold">$19</span>
                <span className="text-xl text-gray-600">/month</span>
              </div>
              <h3 className="mt-2 text-center text-xl font-semibold">Basic</h3>
              <ul className="mt-4 text-sm">
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Unlimited Projects
                </li>
                <li className="mt-2 flex items-center">
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Unlimited Users
                </li>
                <li className="mt-2 flex items-center">
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  24/7 Support
                </li>
              </ul>
              <button className="focus:shadow-outline mt-6 rounded-full bg-indigo-600 px-4 py-2 font-bold text-white hover:bg-indigo-700 focus:outline-none">
                Choose Plan
              </button>
            </div>
            <div className="flex w-full flex-col justify-center bg-gray-100 p-6 md:w-1/3">
              <div className="flex justify-center">
                <span className="text-4xl font-bold">$39</span>
                <span className="text-xl text-gray-600">/month</span>
              </div>
              <h3 className="mt-2 text-center text-xl font-semibold">Pro</h3>
              <ul className="mt-4 text-sm">
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Unlimited Projects
                </li>
                <li className="mt-2 flex items-center">
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Unlimited Users
                </li>
                <li className="mt-2 flex items-center">
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  24/7 Support
                </li>
                <li className="mt-2 flex items-center">
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Advanced Analytics
                </li>
              </ul>
              <button className="focus:shadow-outline mt-6 rounded-full bg-indigo-600 px-4 py-2 font-bold text-white hover:bg-indigo-700 focus:outline-none">
                Choose Plan
              </button>
            </div>
            <div className="flex w-full flex-col justify-center p-6 md:w-1/3">
              <div className="flex justify-center">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-xl text-gray-600">/month</span>
              </div>
              <h3 className="mt-2 text-center text-xl font-semibold">
                Enterprise
              </h3>
              <ul className="mt-4 text-sm">
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Unlimited Projects
                </li>
                <li className="mt-2 flex items-center">
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Unlimited Users
                </li>
                <li className="mt-2 flex items-center">
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  24/7 Support
                </li>
                <li className="mt-2 flex items-center">
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Premium Support
                </li>
                <li className="mt-2 flex items-center">
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Personal Account Manager
                </li>
              </ul>
              <button className="focus:shadow-outline mt-6 rounded-full bg-indigo-600 px-4 py-2 font-bold text-white hover:bg-indigo-700 focus:outline-none">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
