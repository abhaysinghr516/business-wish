export const JobCard: React.FC = () => (
  <div className="mx-auto w-80 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
    <div className="flex flex-1 flex-col p-8">
      <div className="mt-6 text-sm font-medium text-gray-900">
        Product Manager
      </div>
      <div className="mt-1 flex flex-grow flex-col justify-between">
        <div className="text-sm text-gray-500">Stark Industries</div>
        <div className="mt-3">
          <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
            New York, NY
          </span>
        </div>
        <div className="sr-only">Type</div>
        <div className="mt-3">
          <span className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800">
            Full-time
          </span>
        </div>
      </div>
    </div>
    <div>
      <div className="-mt-px flex divide-x divide-gray-200">
        <div className="flex w-0 flex-1">
          <div className="cursor-pointer relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
            View Details
          </div>
        </div>
        <div className="-ml-px flex w-0 flex-1">
          <div className="cursor-pointer relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
            Apply
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ProductCard: React.FC = () => (
  <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
    <img
      className="m-0 h-48 w-full object-cover"
      src="https://source.unsplash.com/random"
      alt="Product Image"
    />
    <div className="p-4">
      <p className="m-0 text-lg font-semibold text-gray-800">Product Name</p>
      <p className="m-0 mt-2 text-sm text-gray-600">
        Product Description goes here. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </p>
      <div className="mt-3 flex items-center">
        <span className="text-base font-semibold text-gray-700">$49.99</span>
        <div className="ml-auto flex items-center">
          <span className="text-base text-yellow-500">★</span>
          <span className="ml-1 text-sm text-gray-600">(4.8)</span>
        </div>
      </div>
      <button className="mt-3 w-full rounded-full bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  </div>
);

export const ProfileCard: React.FC = () => (
  <div className="mx-auto mt-5 max-w-md overflow-hidden rounded-lg bg-white shadow">
    <img
      src="https://source.unsplash.com/random"
      alt="Cover Picture"
      className="m-0 h-40 w-full object-cover object-center"
    />
    <div className="relative">
      <img
        src="https://source.unsplash.com/random/100x100?face"
        alt="Profile Picture"
        className="m-0 mx-auto -mt-12 h-24 w-24 rounded-full border-4 border-white shadow-lg"
      />
    </div>
    <div className="p-6">
      <p className="m-0 text-xl font-semibold text-gray-800">John Doe</p>
      <p className="m-0 mt-2 text-sm text-gray-600">Frontend Developer</p>
      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          className="rounded bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
        >
          Follow
        </button>
        <button
          type="button"
          className="rounded border border-blue-500 bg-transparent px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-50 focus:bg-blue-50 focus:outline-none"
        >
          Message
        </button>
      </div>
      <div className="mt-4 border-t border-gray-200"></div>
      <div className="mt-4 cursor-pointer text-sm text-blue-500 hover:text-blue-700">
        View Profile
      </div>
    </div>
  </div>
);

export const PropertyCard: React.FC = () => (
  <div className="mx-auto mt-5 max-w-md overflow-hidden rounded-lg bg-white border shadow">
    <div className="w-max overflow-hidden rounded-lg shadow-lg">
      <div className="mx-auto max-w-md bg-white">
        <div className="flex">
          <img
            className="m-0 h-36 w-64 object-cover rounded-lg ml-2 mt-2 object-center"
            src="https://source.unsplash.com/random"
            alt="Property Image"
          />
          <div className="p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
              Builder
            </div>
            <p className="m-0 cursor-pointer text-lg font-semibold text-gray-800">
              Property Name
            </p>
            <p className="m-0 mt-2 text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 border-t border-gray-300"></div>
      <div className="flex justify-evenly py-4">
        <div className="flex items-center text-sm text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="mr-1 h-5 w-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>

          <span>7 beds</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="mr-1 h-5 w-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>

          <span>More Detail</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="mr-1 h-5 w-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <span>Price</span>
        </div>
      </div>
    </div>
  </div>
);

export const ArticleCard: React.FC = () => (
  <div className="mx-auto my-8 max-w-2xl rounded-lg border border-gray-900 bg-white p-6 md:flex">
    <img
      src="https://source.unsplash.com/random"
      alt="News Image"
      className="m-0 mb-4 h-48 w-full rounded-md object-cover md:mb-0 md:mr-4 md:w-1/3"
    />
    <div className="md:flex-1">
      <p className="m-0 mb-2 text-2xl font-bold">Article Title</p>
      <p className="m-0 mb-2 text-base text-gray-600">
        Published on <span className="text-blue-500">March 1, 2024</span> by{" "}
        <span className="text-blue-500">Author Name</span>
      </p>
      <p className="m-0 mb-4 text-base leading-7 text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        justo eu neque vulputate, a eleifend purus.
      </p>
      <div className="cursor-pointer text-base text-blue-500 hover:underline">
        Read More
      </div>
    </div>
  </div>
);

export const ForumCard: React.FC = () => (
  <div className="mx-auto mt-5 max-w-md overflow-hidden rounded-lg ">
    <div className="overflow-hidden bg-white sm:flex">
      <div className="p-4 sm:flex-1">
        <p className="m-0 text-lg font-semibold">Forum Topic Title</p>
        <div className="mt-2 flex items-center">
          <img
            src="https://source.unsplash.com/random/32x32"
            alt="Avatar"
            className="m-0 h-8 w-8 rounded-full"
          />
          <div className="ml-2">
            <p className="m-0 text-base text-gray-600">
              Posted by <span className="text-blue-500">John Doe</span>
            </p>
            <p className="m-0 text-sm text-gray-500">Member since 2020</p>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 p-4">
        <button className="rounded-full bg-gray-200 p-2 hover:bg-gray-300">
          <svg
            className="h-5 w-5 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>
    </div>
    <div className="flex justify-between bg-gray-100 px-4 py-2">
      <p className="m-0 text-base text-gray-600">Last reply on March 5, 2024</p>
      <p className="m-0 text-base text-gray-600">12 replies</p>
    </div>
  </div>
);

export const PodcastCard: React.FC = () => (
  <div className="mx-auto mt-5 max-w-md overflow-hidden rounded-lg ">
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src="https://source.unsplash.com/random/600x400"
          alt="Podcast Image"
          className="m-0 w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="m-0 text-lg font-semibold text-white">Podcast Title</p>
          <p className="m-0 text-sm text-gray-300">Episode 12: Episode Name</p>
        </div>
      </div>
      <div className="p-4">
        <p className="m-0 text-base text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          justo eu neque vulputate, a eleifend purus tristique.
        </p>
        <div className="mt-4 flex items-center">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full mr-2">
            Episode 12
          </span>
          <p className="m-0 text-base text-gray-600">1h 22m</p>
        </div>
      </div>
      <div className="px-4 py-2 bg-gray-100 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://source.unsplash.com/random/32x32"
            alt="Avatar"
            className="m-0 h-8 w-8 rounded-full"
          />
          <p className="m-0 text-base text-gray-600 ml-2">
            Featuring <span className="text-blue-500">John Doe</span>
          </p>
        </div>
        <button className="bg-blue-500 text-base text-white px-3 py-1 rounded-full">
          Play
        </button>
      </div>
    </div>
  </div>
);
