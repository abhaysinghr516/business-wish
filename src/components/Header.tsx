export const BasicHeader: React.FC = () => (
  <nav className="bg-teal-500 py-4">
    <div className="container mx-auto flex justify-center">
      <div className="flex flex-wrap space-x-4 md:justify-center">
        <div>
          <div className="cursor-pointer text-white hover:text-gray-200">
            Home
          </div>
        </div>
        <div>
          <div className="cursor-pointer text-white hover:text-gray-200">
            About
          </div>
        </div>
        <div>
          <div className="cursor-pointer text-white hover:text-gray-200">
            Services
          </div>
        </div>
        <div>
          <div className="cursor-pointer text-white hover:text-gray-200">
            Contact
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export const BasicHeaderWithLogo: React.FC = () => (
  <nav className="bg-gray-800 py-4">
    <div className="container mx-auto flex justify-between">
      <div className="cursor-pointer ml-5 text-xl font-bold text-white md:mb-0">
        Logo
      </div>
      <div className="hidden flex-col space-y-4 mr-4 md:flex md:flex-row md:space-x-4 md:space-y-0">
        <div>
          <div className="cursor-pointer text-gray-300 hover:text-white">
            Home
          </div>
        </div>
        <div>
          <div className="cursor-pointer text-gray-300 hover:text-white">
            About
          </div>
        </div>
        <div>
          <div className="cursor-pointer text-gray-300 hover:text-white">
            Services
          </div>
        </div>
        <div>
          <div className="cursor-pointer text-gray-300 hover:text-white">
            Contact
          </div>
        </div>
      </div>
      <div id="menuToggle" className="mr-5 cursor-pointer text-white md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </div>
  </nav>
);

export const HeaderwithSearch: React.FC = () => (
  <nav className="bg-gray-100 py-4">
    <div className="container mx-auto flex items-center justify-between">
      <div className="cursor-pointer ml-2 text-xl font-bold">Logo</div>
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <input
            type="text"
            className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none"
            placeholder="Search..."
          />
          <div className="cursor-pointer absolute right-0 top-0 mr-4 mt-3">
            <svg
              className="h-4 w-4 fill-current text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
          </div>
        </div>
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="mr-2 h-8 w-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
  </nav>
);

export const HeaderwithAnimation: React.FC = () => (
  <nav className="bg-gray-900 py-4">
    <div className="container mx-auto flex items-center justify-between">
      <div className="cursor-pointer ml-5 text-xl font-bold text-white">
        Logo
      </div>
      <div className="hidden items-center space-x-6 md:flex mr-5">
        <div className="cursor-pointer relative text-gray-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:scale-x-100">
          Home
        </div>
        <div className="cursor-pointer relative text-gray-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:scale-x-100">
          About
        </div>
        <div className="cursor-pointer relative text-gray-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:scale-x-100">
          Services
        </div>
        <div className="cursor-pointer relative text-gray-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:scale-x-100">
          Contact
        </div>
      </div>
      <div className="md:hidden">
        <button
          id="menu-toggle"
          className="text-gray-300 hover:text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
);

export const CenteredAlignedHeader: React.FC = () => (
  <nav className="bg-gray-100 py-4">
    <div className="container mx-auto flex items-center justify-between">
      <div className="cursor-pointer ml-5 text-xl font-bold text-gray-800">
        Logo
      </div>
      <div className="md:hidden">
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="mr-5 h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="hidden items-center space-x-6 md:flex">
        <div className="cursor-pointer text-gray-600 hover:text-gray-800">
          Home
        </div>
        <div className="cursor-pointer text-gray-600 hover:text-gray-800">
          About
        </div>
        <div className="cursor-pointer text-gray-600 hover:text-gray-800">
          Services
        </div>
        <div className="cursor-pointer text-gray-600 hover:text-gray-800">
          Contact
        </div>
      </div>
      <div className="hidden items-center space-x-4 md:flex">
        <div className="cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Sign Up
        </div>
        <div className="cursor-pointer rounded bg-transparent px-4 py-2 font-semibold text-blue-700 hover:underline">
          Login
        </div>
      </div>
    </div>
  </nav>
);
