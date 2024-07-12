export const MinimalCardTestimonial: React.FC = () => (
  <div className="py-8 text-base">
    <div className="mx-auto max-w-md px-4">
      <div className="overflow-hidden rounded-lg border border-gray-300 bg-white">
        <div className="p-6">
          <div className="text-lg font-semibold">Testimonial Title</div>
          <div className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="mt-4 flex items-center">
            <img
              src="https://source.unsplash.com/random/100x100?face"
              alt="Avatar"
              className="m-0 mr-4 h-10 w-10 rounded-full"
            />
            <div>
              <div className="font-semibold">John Doe</div>
              <div className="text-sm text-gray-500">CEO, Company Name</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const TestimonialSectionwithGridlayout: React.FC = () => (
  <div className="bg-gray-100 text-base py-12">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8 text-center text-3xl font-bold text-gray-800">
        Testimonials
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 ">
        <div className="rounded-lg bg-white p-6">
          <div className="mb-4 text-gray-600">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer posuere erat a ante.&quot;
          </div>
          <div className="font-semibold text-gray-800">John Doe</div>
          <div className="text-gray-500">CEO, Company ABC</div>
        </div>
        <div className="rounded-lg bg-white p-6">
          <div className="mb-4 text-gray-600">
            &quot;Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.&quot;
          </div>
          <div className="font-semibold text-gray-800">Jane Smith</div>
          <div className="text-gray-500">Designer, Company XYZ</div>
        </div>
      </div>
    </div>
  </div>
);

export const FullWidthTestimonial: React.FC = () => (
  <div className="bg-gray-100 text-base py-8">
    <div className="mx-auto max-w-4xl px-4">
      <div className="overflow-hidden rounded-lg bg-white">
        <div className="p-8">
          <p className="m-0 text-xl font-semibold">Testimonial Title</p>
          <p className="m-0 mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mt-4 flex items-center">
            <img
              src="https://source.unsplash.com/random/100x100?face"
              alt="Avatar"
              className="m-0 mr-4 h-10 w-10 rounded-full"
            />
            <div>
              <p className="m-0 font-semibold">John Doe</p>
              <p className="m-0 text-sm text-gray-500">CEO, Company Name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const SliderTestimonial: React.FC = () => (
  <div className="bg-gray-100 text-base py-12">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <div className="overflow-hidden rounded-lg bg-white">
          <div className="px-6 py-8">
            <p className="m-0 mb-4 text-xl font-semibold text-gray-800">
              Testimonial Title
            </p>
            <p className="m-0 mb-4 text-gray-600">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer posuere erat a ante.&quot;
            </p>
            <div className="mb-4 flex items-center">
              <img
                src="https://source.unsplash.com/random/100x100?face"
                alt="Avatar"
                className="m-0 mr-4 h-10 w-10 rounded-full"
              />
              <div>
                <p className="m-0 font-semibold">John Doe</p>
                <p className="m-0 text-sm text-gray-500">CEO, Company Name</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex gap-2">
        <button className="m-0 rounded-full bg-purple-200 p-2 font-bold text-purple-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6 pr-0.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button className="m-0 rounded-full bg-purple-200 p-2 font-bold text-purple-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="ml-0.5 h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
);
