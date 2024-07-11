export const SimpleCTA: React.FC = () => (
  <div className="bg-purple-50 py-12">
    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
      <p className="m-0 mb-4 text-3xl font-bold">Join Us Today!</p>
      <p className="m-0 mb-6 text-lg text-gray-800">
        Sign up now to get exclusive offers and updates.
      </p>
      <button className="focus:shadow-outline text-base rounded-full bg-purple-500 px-6 py-2 font-bold text-white hover:bg-purple-600 focus:outline-none">
        Sign Up
      </button>
    </div>
  </div>
);

export const CardStyleCTA: React.FC = () => (
  <div className="bg-gray-100 py-12">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <p className="m-0 mb-4 text-2xl font-semibold text-gray-800">
          Get Started Today!
        </p>
        <p className="m-0 mb-6 text-base text-gray-600">
          Start your journey with us and enjoy exclusive benefits.
        </p>
        <button className="focus:shadow-outline text-base rounded-full bg-purple-500 px-6 py-2 font-bold text-white hover:bg-purple-600 focus:outline-none">
          Sign Up
        </button>
      </div>
    </div>
  </div>
);

export const CTAwithForm: React.FC = () => (
  <div className="bg-gray-200 py-12">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <p className="m-0 mb-4 text-2xl font-semibold text-gray-800">
          Subscribe to Our Newsletter
        </p>
        <p className="m-0 mb-6 text-base text-gray-600">
          Get the latest news and updates delivered straight to your inbox.
        </p>
        <form className="flex flex-col text-base sm:flex-row">
          <input
            type="email"
            className="mb-2 rounded-l-lg bg-gray-100 px-4 py-2 focus:outline-none sm:mb-0"
            placeholder="Your Email Address"
          />
          <button
            type="submit"
            className="focus:shadow-outline rounded-r-lg bg-purple-500 px-6 py-2 font-medium text-white hover:bg-purple-600 focus:outline-none"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
);

export const SplitImageCTA: React.FC = () => (
  <div className="bg-gray-100 py-12">
    <div className="mx-auto flex max-w-4xl flex-col-reverse items-center justify-between px-4 sm:px-6 md:flex-row lg:px-8">
      <div className="w-full pr-0 md:w-1/2 md:pr-4">
        <p className="m-0 mb-4 text-3xl font-bold text-gray-800">
          Get Started Today!
        </p>
        <p className="m-0 mb-6 text-lg text-gray-600">
          Join our community and unlock exclusive benefits.
        </p>
        <button className="focus:shadow-outline text-base rounded-full bg-purple-500 px-6 py-2 font-bold text-white hover:bg-purple-600 focus:outline-none">
          Join Now
        </button>
      </div>
      <div className="w-full pl-0 md:w-1/2 md:pl-4">
        <img
          src="https://source.unsplash.com/random"
          alt="CTA Image"
          className="m-0 h-64 w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
);

export const ImageOverlayCTA: React.FC = () => (
  <div className="relative bg-gray-800 py-24">
    <img
      className="m-0 absolute inset-0 h-full w-full object-cover"
      src="https://source.unsplash.com/random"
      alt="Background Image"
    />
    <div className="absolute inset-0 bg-gray-800 to-transparent opacity-70"></div>
    <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
      <p className="m-0 mb-4 text-4xl font-bold text-white">
        Unlock Your Potential
      </p>
      <p className="m-0 mb-6 text-lg text-gray-300">
        Join our community and explore endless opportunities.
      </p>
      <button className="focus:shadow-outline rounded-full text-base bg-blue-500 px-8 py-3 font-bold text-white hover:bg-blue-600 focus:outline-none">
        Join Now
      </button>
    </div>
  </div>
);
