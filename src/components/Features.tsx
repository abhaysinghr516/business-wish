export const BasicFeatures: React.FC = () => (
  <section className="bg-gray-100 py-20">
    <div className="container mx-auto px-4">
      <h2 className="m-0 mb-8 text-center text-4xl font-bold text-gray-800">
        Our Features
      </h2>
      <div className="-mx-4 flex flex-wrap">
        <div className="mb-8 w-full px-4 md:w-1/2 ">
          <div className="overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="p-6">
              <div className="mb-4 flex items-center">
                <svg
                  className="mr-3 h-8 w-8 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
                <h3 className="m-0 text-xl font-bold">Customizable</h3>
              </div>
              <p className="m-0 text-gray-600">
                Easily customize components to match your brand&apos;s design
                and style guidelines.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-8 w-full px-4 md:w-1/2 ">
          <div className="overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="p-6">
              <div className="mb-4 flex items-center">
                <svg
                  className="mr-3 h-8 w-8 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
                <h3 className="m-0 text-xl font-bold">Customizable</h3>
              </div>
              <p className="m-0 text-gray-600">
                Easily customize components to match your brand&apos;s design
                and style guidelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const AlternateFeatures: React.FC = () => (
  <section className="bg-white py-20">
    <div className="container mx-auto px-4">
      <h2 className="m-0 mb-8 text-center text-4xl font-bold text-gray-800">
        Key Features
      </h2>

      <div className="flex flex-col-reverse flex-wrap md:flex-row">
        <div className="mb-8 w-full px-4 md:mb-0 md:w-1/2">
          <div className="rounded-lg bg-gray-100 p-6">
            <h3 className="m-0 mb-4 text-2xl font-bold text-gray-800">
              Responsive Design
            </h3>
            <p className="m-0 mb-4 text-gray-600">
              Our UI library is built with responsive design in mind, ensuring
              your components look great on any device.
            </p>
            <div className=" cursor-pointer inline-block rounded-lg bg-indigo-500 px-4 py-2 text-white transition duration-300 hover:bg-indigo-600">
              Learn More
            </div>
          </div>
        </div>
        <div className="mb-8 w-full px-4 md:order-last md:mb-0 md:w-1/2">
          <img
            src="https://source.unsplash.com/random"
            alt="Responsive Design"
            className="m-0 h-56 w-full rounded-lg shadow-lg "
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col flex-wrap md:flex-row">
        <div className="mb-8 w-full px-4 md:mb-0 md:w-1/2">
          <img
            src="https://source.unsplash.com/random"
            alt="Utility-First CSS"
            className="m-0 h-56 w-full rounded-lg shadow-lg "
          />
        </div>
        <div className="mb-8 w-full px-4 md:mb-0 md:w-1/2">
          <div className="rounded-lg bg-gray-100 p-6">
            <h3 className="m-0 mb-4 text-2xl font-bold text-gray-800">
              Utility-First CSS
            </h3>
            <p className="m-0 mb-4 text-gray-600">
              Build custom designs without leaving your HTML with our
              utility-first approach.
            </p>
            <div className="cursor-pointer inline-block rounded-lg bg-indigo-500 px-4 py-2 text-white transition duration-300 hover:bg-indigo-600">
              Learn More
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const VerticalFeatureList: React.FC = () => (
  <section className="bg-gray-100 py-20">
    <div className="container mx-auto px-4">
      <h2 className="m-0 mb-8 text-center text-4xl font-bold text-gray-800">
        Key Features
      </h2>

      <div className="grid grid-cols-1  gap-8">
        <div className="mb-8 flex items-center">
          <div className="mr-6 rounded-lg bg-white p-6 shadow-lg">
            <svg
              className="h-8 w-8 text-indigo-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              ></path>
            </svg>
          </div>
          <div>
            <h3 className="m-0 mb-2 text-xl font-bold text-gray-800">
              Highly Customizable
            </h3>
            <p className="m-0 text-gray-600">
              Easily customize components to match your brand&apos;s design and
              style guidelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const TabbedFeatures: React.FC = () => (
  <section className="bg-white py-20">
    <div className="container mx-auto px-4">
      <h2 className="m-0 mb-8 text-center text-4xl font-bold text-gray-800">
        Key Features
      </h2>

      <div className="mx-auto max-w-3xl">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <div
              className="cursor-pointer whitespace-nowrap border-b-2 border-indigo-500 px-1 py-4 text-sm font-medium text-gray-900"
              aria-current="page"
            >
              Components
            </div>
            <div className="cursor-pointer whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
              Utilities
            </div>
            <div className="cursor-pointer whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
              Plugins
            </div>
          </nav>
        </div>

        <div className="mt-8">
          <p className="m-0 text-gray-600">
            Our extensive component library includes pre-built UI elements like
            buttons, cards, modals, and more, making it easy to create
            consistent and polished user interfaces.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export const FeatureswithBenefits: React.FC = () => (
  <section className="bg-gray-900 py-20">
    <div className="container mx-auto px-4">
      <h2 className="m-0 mb-8 text-center text-4xl font-bold text-white">
        Key Features
      </h2>

      <div className="-mx-4 flex flex-wrap">
        <div className="mb-8 w-full px-4 md:w-1/2 ">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center">
              <svg
                className="mr-3 h-8 w-8 text-indigo-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              <h3 className="m-0 text-xl font-bold">Utility-First CSS</h3>
            </div>
            <p className="m-0 text-gray-600">
              Build custom designs without leaving your HTML with
              Tailwind&apos;s utility-first approach.
            </p>
          </div>
        </div>
        <div className="mb-8 w-full px-4 md:w-1/2 ">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center">
              <svg
                className="mr-3 h-8 w-8 text-indigo-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              <h3 className="m-0 text-xl font-bold">Utility-First CSS</h3>
            </div>
            <p className="m-0 text-gray-600">
              Build custom designs without leaving your HTML with
              Tailwind&apos;s utility-first approach.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="m-0 mb-6 text-2xl font-bold text-white">Benefits</h3>
        <div className="list-inside list-disc text-gray-400">
          <div className="mb-2">
            <span className="font-bold text-green-500">Rapid Development:</span>{" "}
            Utility-first CSS approach helps you build user interfaces faster
            than ever before.
          </div>
          <div className="mb-2">
            <span className="font-bold text-blue-500">Consistent Design:</span>{" "}
            Extensive component library ensures a cohesive design across your
            entire application.
          </div>
          <div className="mb-2">
            <span className="font-bold text-purple-500">Future-Proof:</span>{" "}
            Built with the latest web standards, ensuring compatibility with
            modern browsers and future updates.
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <div className="cursor-pointer inline-block rounded-lg bg-indigo-500 px-6 py-3 text-white transition duration-300 hover:bg-indigo-600">
          {" "}
          Learn More Features{" "}
        </div>
      </div>
    </div>
  </section>
);

export const CarouselFeatures: React.FC = () => (
  <section className="bg-gray-900 py-20">
    <div className="container mx-auto px-4">
      <h2 className="m-0 mb-8 text-center text-4xl font-bold text-white">
        Key Features
      </h2>

      <div className="relative">
        <div className="overflow-hidden">
          <div className="flex flex-col md:-mx-4 md:flex-row">
            <div className="mx-auto px-4 lg:mx-20">
              <div className="rounded-lg bg-white p-6 shadow-lg">
                <div className="mb-4 flex items-center">
                  <svg
                    className="mr-3 h-8 w-8 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                  <h3 className="m-0 text-xl font-bold">Customizable</h3>
                </div>
                <p className="m-0 text-gray-600">
                  Easily customize components to match your brand&apos;s design
                  and style guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 right-0 mb-4 mt-3 flex justify-center md:hidden">
          <button className="mx-2 rounded-full bg-gray-800 p-2 text-white transition duration-300 hover:bg-gray-700">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>

          <button className="mx-2 rounded-full bg-gray-800 p-2 text-white transition duration-300 hover:bg-gray-700">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="absolute inset-y-0 left-0 hidden items-center pl-4 md:flex">
          <button className="rounded-full bg-gray-800 p-2 text-white transition duration-300 hover:bg-gray-700">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 hidden items-center pr-4 md:flex">
          <button className="rounded-full bg-gray-800 p-2 text-white transition duration-300 hover:bg-gray-700">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
);
