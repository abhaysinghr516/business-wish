export const CenterContentHeroSection: React.FC = () => (
  <section className="bg-gray-900 text-base py-20">
    <div className="mx-auto max-w-3xl px-4 text-left sm:text-center sm:px-6 lg:px-8">
      <p className="m-0 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
        Simplicity at its Best
      </p>
      <p className="m-0 mx-auto mt-6 max-w-xl text-xl text-gray-300 sm:text-center">
        Our app embraces simplicity, with a clean and minimalistic design that
        puts the focus on what truly matters.
      </p>
      <div className="mt-8 sm:flex sm:justify-center">
        <button className="w-full sm:w-auto rounded-md bg-indigo-500 px-6 py-3 text-white shadow-lg transition-colors duration-300 hover:bg-indigo-600 sm:mx-auto sm:mt-8">
          Get Started
        </button>
      </div>
    </div>
  </section>
);

export const SideImageHero: React.FC = () => (
  <section className="bg-gray-900 py-10 text-base sm:py-20">
    <div className="mx-auto flex flex-col-reverse sm:flex-row max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <div className="text-center sm:text-left">
        <p className="m-0 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white sm:tracking-tight">
          Experience the Power
        </p>
        <p className="m-0 mt-4 sm:mt-6 max-w-xl text-base sm:text-xl text-gray-300">
          Our app offers a powerful and intuitive experience, designed to
          simplify your workflow and boost your productivity.
        </p>
        <div className="mt-6 sm:mt-8">
          <button className="rounded-md bg-indigo-500 px-6 py-3 text-white shadow-lg transition-colors duration-300 hover:bg-indigo-600">
            Get Started
          </button>
        </div>
      </div>
      <div className="mt-6 sm:mt-0">
        <img
          src="https://source.unsplash.com/random"
          alt="Hero Image"
          className="m-0 w-full max-w-md rounded-lg"
        />
      </div>
    </div>
  </section>
);

export const IsolatedComponentHero: React.FC = () => (
  <section className="bg-gray-900 text-base py-10 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <img
          src="https://source.unsplash.com/random"
          alt="Component 1"
          className="m-0 absolute -top-12 h-48 w-48 rounded-xl shadow-lg sm:h-64 sm:w-64"
        />
        <img
          src="https://source.unsplash.com/random"
          alt="Component 2"
          className="m-0 absolute right-8 top-8 h-32 w-32 rounded-xl shadow-lg sm:right-20 sm:top-20 sm:h-48 sm:w-48"
        />
        <img
          src="https://source.unsplash.com/random"
          alt="Component 3"
          className="m-0 relative z-10 mx-auto h-72 w-72 rounded-xl shadow-2xl sm:h-96 sm:w-96"
        />
      </div>
      <p className="m-0 mt-10 text-2xl font-extrabold text-white sm:mt-20 sm:text-4xl sm:tracking-tight lg:text-6xl">
        Experience the Power of Isolated Components
      </p>
      <p className="m-0 mt-4 max-w-xl text-base text-gray-300 sm:mt-6 sm:text-xl">
        Our app showcases the best of UI components, isolated and combined for
        maximum impact.
      </p>
    </div>
  </section>
);

export const BentoHero: React.FC = () => (
  <section className="bg-gray-800 text-base py-10 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="m-0 mt-6 text-2xl font-extrabold text-white sm:mt-12 sm:text-4xl sm:tracking-tight lg:text-6xl">
          Build Stunning UIs with Tailwind Components
        </p>
        <p className="m-0 mx-auto mt-4 max-w-xl text-base text-gray-300 sm:mt-6 sm:text-xl">
          Our library offers a curated collection of Tailwind CSS components,
          organized in a visually stunning bento layout.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 md:grid-cols-3 ">
        <div className="flex flex-col items-center justify-center rounded-xl bg-yellow-100 p-4 md:row-span-2">
          <div className="text-base font-medium sm:text-xl">Buttons</div>
          <p className="m-0 mt-2 text-sm text-gray-600">
            A variety of button styles and sizes for all your UI needs.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl bg-green-100 p-4 md:col-span-2 md:row-span-2">
          <div className="text-base font-medium sm:text-xl">Forms</div>
          <p className="m-0 mt-2 text-sm text-gray-600">
            Sleek and user-friendly form components for seamless data
            collection.
          </p>
        </div>
        <div className="flex flex-col items-center md:row-span-2 justify-center rounded-xl bg-purple-100 p-4">
          <div className="text-base font-medium sm:text-xl">Alerts</div>
          <p className="m-0 mt-2 text-sm text-gray-600">
            Customizable alert components for displaying important messages.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl bg-red-100 p-4 md:row-span-2">
          <div className="text-base font-medium sm:text-xl">Navigation</div>
          <p className="m-0 mt-2 text-sm text-gray-600">
            A suite of navigation components for creating intuitive user
            experiences.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg bg-indigo-100 p-4">
          <div className="text-base font-medium sm:text-xl">Cards</div>
          <p className="m-0 mt-2 text-sm text-gray-600">
            Versatile card components for showcasing content in various layouts.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl bg-orange-100 p-4">
          <div className="text-base font-medium sm:text-xl">Modals</div>
          <p className="m-0 mt-2 text-sm text-gray-600">
            Elegant modal components for displaying additional content or
            actions.
          </p>
        </div>
      </div>
      <div className="mt-6 flex justify-center sm:mt-10">
        <button
          type="button"
          className="rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Explore Components
        </button>
      </div>
    </div>
  </section>
);

export const TypographyFocusedHero: React.FC = () => (
  <section className="bg-gray-900 text-base py-10 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 md:px-8">
      <p className="m-0 font-serif text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight md:text-7xl">
        <span className="block">Experience the</span>
        <span className="block text-indigo-500">Power of Typography</span>
      </p>
      <p className="m-0 mx-auto mt-4 max-w-xl text-base text-gray-300 sm:mt-6 sm:text-xl">
        Our app celebrates the art of typography, with a bold and visually
        striking hero section that speaks volumes.
      </p>
      <div className="mt-6 sm:mt-8">
        <button className="rounded-md bg-indigo-500 px-6 py-3 text-white shadow-lg transition-colors duration-300 hover:bg-indigo-600">
          Join the Movement
        </button>
      </div>
    </div>
  </section>
);

export const CenterContentwithTrustedLogos: React.FC = () => (
  <section className="bg-gray-900 text-base py-20">
    <div className="mx-auto max-w-3xl px-4 text-left sm:px-6 md:text-center lg:px-8">
      <p className="m-0 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
        Trusted by the Best
      </p>
      <p className="m-0 mx-auto mt-6 max-w-xl text-xl text-gray-300">
        Our app is trusted by leading companies and organizations across various
        industries.
      </p>
      <div className="mt-8">
        <button className="rounded-md bg-indigo-500 px-6 py-3 text-white shadow-lg transition-colors duration-300 hover:bg-indigo-600">
          Join the Movement
        </button>
        <div className="mx-auto mt-20 max-w-screen-xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="col-span-1 flex items-center justify-center">
              <svg
                className="h-10 fill-current text-gray-500 dark:text-gray-300"
                viewBox="0 0 398 120"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill-rule="nonzero">
                  <path d="M247.292 94.106C224.124 111.016 190.526 120 161.608 120c-40.544 0-77.046-14.822-104.673-39.476-2.164-1.936-.235-4.583 2.369-3.082 29.806 17.15 66.66 27.475 104.731 27.475 25.677 0 53.906-5.271 79.884-16.163 3.923-1.646 7.21 2.545 3.373 5.352"></path>
                  <path d="M256.533 82.534c-2.965-3.771-19.551-1.787-27.003-.897-2.254.277-2.605-1.692-.57-3.122 13.233-9.265 34.922-6.587 37.447-3.487 2.54 3.13-.666 24.802-13.073 35.147-1.91 1.59-3.718.744-2.877-1.357 2.782-6.952 9.04-22.505 6.076-26.284zM230.05 13.058V4.063c.015-1.378 1.04-2.29 2.291-2.283l40.493-.007c1.295 0 2.335.94 2.335 2.268v7.726c-.015 1.29-1.113 2.983-3.053 5.668l-20.97 29.843c7.78-.182 16.022.985 23.093 4.939 1.596.897 2.027 2.217 2.152 3.516v9.607c0 1.32-1.457 2.86-2.987 2.057-12.458-6.507-29-7.214-42.776.08-1.405.745-2.884-.765-2.884-2.086v-9.133c0-1.459.03-3.961 1.508-6.186l24.302-34.738h-21.162c-1.295 0-2.327-.927-2.342-2.276zM82.354 69.294H70.042c-1.171-.08-2.108-.956-2.203-2.072l.014-63.006c0-1.262 1.062-2.268 2.38-2.268L81.71 1.94c1.2.059 2.159.963 2.232 2.116v8.221h.234C87.163 4.326 92.8.613 100.39.613c7.708 0 12.539 3.713 15.98 11.664C119.361 4.326 126.14.613 133.393.613c5.175 0 10.804 2.123 14.251 6.893 3.916 5.311 3.111 12.993 3.111 19.755l-.015 39.764c0 1.255-1.061 2.262-2.379 2.262h-12.304c-1.23-.08-2.203-1.05-2.203-2.262l-.007-33.41c0-2.648.234-9.28-.344-11.796-.923-4.246-3.675-5.435-7.24-5.435-2.986 0-6.09 1.985-7.356 5.165-1.266 3.188-1.15 8.484-1.15 12.066v33.403c0 1.255-1.06 2.262-2.378 2.262h-12.297c-1.237-.08-2.21-1.051-2.21-2.262l-.015-33.41c0-7.025 1.142-17.362-7.59-17.362-8.858 0-8.506 10.074-8.506 17.362l-.007 33.403c-.022 1.276-1.084 2.283-2.401 2.283zm227.788-55.82c-9.084 0-9.662 12.328-9.662 20.017s-.117 24.131 9.545 24.131c9.545 0 10.006-13.262 10.006-21.345 0-5.303-.234-11.664-1.845-16.705-1.383-4.377-4.143-6.098-8.044-6.098zM310.025.613c18.284 0 28.173 15.647 28.173 35.533 0 19.222-10.92 34.468-28.173 34.468-17.933 0-27.712-15.647-27.712-35.132C282.305 15.86 292.2.612 310.025.612zm51.882 68.681h-12.275c-1.23-.08-2.211-1.05-2.211-2.261l-.015-63.028c.103-1.16 1.12-2.057 2.365-2.057l11.426-.008c1.076.059 1.961.788 2.188 1.766v9.636h.234c3.448-8.622 8.279-12.73 16.785-12.73 5.519 0 10.92 1.992 14.375 7.427C398 13.072 398 21.556 398 27.662v39.64c-.14 1.117-1.142 1.985-2.364 1.985h-12.349c-1.141-.073-2.064-.912-2.188-1.984V33.097c0-6.894.805-16.968-7.708-16.968-2.993 0-5.753 1.984-7.13 5.033-1.72 3.845-1.953 7.69-1.953 11.935v33.928c-.03 1.262-1.091 2.27-2.401 2.27zm-151.715-.16c-.813.73-1.991.78-2.913.284-4.092-3.385-4.824-4.953-7.064-8.177-6.756 6.864-11.543 8.921-20.305 8.921-10.372 0-18.438-6.376-18.438-19.134 0-9.965 5.424-16.742 13.139-20.061 6.683-2.925 16.023-3.458 23.167-4.253v-1.598c0-2.925.234-6.375-1.5-8.9-1.501-2.26-4.378-3.195-6.918-3.195-4.692 0-8.871 2.4-9.904 7.375-.212 1.11-1.024 2.204-2.137 2.262l-11.938-1.291c-1.01-.234-2.13-1.029-1.838-2.568C166.288 4.362 179.37 0 191.087 0c5.995 0 13.827 1.59 18.556 6.113 5.995 5.58 5.416 13.021 5.416 21.126v19.127c0 5.756 2.401 8.28 4.648 11.373.79 1.116.967 2.444-.036 3.26-2.518 2.102-6.983 5.968-9.443 8.15l-.036-.015zm-12.414-29.931v-2.656c-8.908 0-18.322 1.897-18.322 12.35 0 5.319 2.767 8.908 7.488 8.908 3.455 0 6.566-2.123 8.528-5.58 2.423-4.254 2.306-8.237 2.306-13.022zM48.72 69.133c-.813.73-1.991.781-2.913.285-4.092-3.385-4.824-4.953-7.064-8.177-6.763 6.864-11.55 8.921-20.305 8.921C8.06 70.162 0 63.786 0 51.028c0-9.965 5.417-16.742 13.139-20.061 6.683-2.925 16.015-3.458 23.16-4.253v-1.598c0-2.925.233-6.375-1.501-8.9-1.5-2.26-4.377-3.195-6.91-3.195-4.7 0-8.879 2.4-9.904 7.375-.212 1.11-1.024 2.204-2.137 2.262L3.91 21.367c-1.01-.234-2.13-1.029-1.845-2.568C4.81 4.362 17.89.007 29.615.007c5.995 0 13.827 1.59 18.556 6.113 5.995 5.581 5.416 13.022 5.416 21.126v19.128c0 5.755 2.401 8.28 4.648 11.372.79 1.116.967 2.444-.036 3.261-2.518 2.101-6.99 5.967-9.45 8.148l-.03-.021zm-12.422-29.93v-2.656c-8.908 0-18.32 1.897-18.32 12.35 0 5.319 2.766 8.908 7.487 8.908 3.462 0 6.573-2.123 8.528-5.58 2.422-4.254 2.305-8.237 2.305-13.022z"></path>
                </g>
              </svg>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <svg
                className="h-8 fill-current text-gray-500 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 278.7 36.3"
              >
                <g>
                  <path
                    className="st0"
                    d="M238.1 14.4v21.9h7V21.7h25.6v14.6h7V14.4h-39.6m6.2-7.1h27c3.8-.7 6.5-4.1 7.3-7.3H237c.8 3.2 3.6 6.5 7.3 7.3m-27.5 29c3.5-1.5 5.4-4.1 6.2-7.1h-31.5V.1h-7.1v36.2h32.4M131.9 7.2h25c3.8-1.1 6.9-4 7.7-7.1H125v21.4h32.4V29H132c-4 1.1-7.4 3.8-9.1 7.3h41.5V14.4H132l-.1-7.2m-61.6.1h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3m0 14.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3m0 14.7h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.6 7.4 7.3M0 .1c.8 3.2 3.6 6.4 7.3 7.2h11.4l.6.2v28.7h7.1V7.5l.6-.2h11.4c3.8-1 6.5-4 7.3-7.2V0L0 .1"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <svg
                className="h-10 fill-current text-gray-500 dark:text-gray-300"
                viewBox="0 0 2270 546"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill-rule="evenodd">
                  <path
                    d="M888.413 394.397l-31.127 144.717h-71.593L903.977 14.642h84.81l111.28 524.472h-72.371l-30.35-144.717H888.413zm100.373-58.364l-24.124-125.3c-7.003-35.797-14.007-82.463-19.441-119.828h-3.126c-5.434 38.13-13.242 86.365-20.22 119.827l-24.902 125.301h91.813zM1373.34.648v441.205c0 28.806 1.556 70.828 3.1 97.274h-63.02l-4.67-45.9h-2.334c-12.451 26.445-41.244 52.138-79.362 52.138-70.037 0-112.837-76.275-112.837-193.755 0-133.848 56.794-196.881 116.728-196.881 30.336 0 54.46 14.02 67.689 42.8h1.556V.648h73.15zm-73.163 304.258c0-6.991 0-15.551-.778-23.359-3.89-34.227-23.345-63.798-49.79-63.798-45.927 0-61.477 63.798-61.477 133.848 0 77.818 20.232 132.278 59.142 132.278 16.342 0 38.118-8.56 50.569-53.681 1.556-6.226 2.334-15.577 2.334-24.111V304.906zm247.399 240.446c-75.471 0-129.957-64.59-129.957-194.52 0-137.752 64.576-196.116 133.835-196.116 74.705 0 128.387 66.924 128.387 194.546 0 150.19-73.927 196.09-131.5 196.09h-.765zm2.321-57.573c45.122 0 55.251-80.153 55.251-137.726 0-56.82-10.116-137.739-56.794-137.739-48.26 0-57.586 80.919-57.586 137.74 0 63.02 10.895 137.725 58.364 137.725h.765zM1723.938.648h73.137V203.74h1.556c19.455-34.227 45.913-49.025 79.375-49.025 64.577 0 105.055 73.15 105.055 189.099 0 135.391-55.25 201.537-117.506 201.537-37.353 0-58.364-20.246-74.719-53.708h-3.086l-3.904 47.47h-63.02c1.556-25.668 3.112-68.468 3.112-97.274V.648zm73.137 404.618c0 8.586.778 17.146 3.113 23.358 11.66 45.926 34.24 55.251 49.012 55.251 43.579 0 59.92-57.572 59.92-135.391 0-72.371-17.106-130.735-60.698-130.735-24.124 0-43.578 28.793-49.025 56.03-1.557 7.781-2.335 17.91-2.335 25.68v105.807h.013zm293.92-40.453c.779 97.273 42.788 121.384 87.145 121.384 26.458 0 49.025-6.213 65.367-14.007l10.895 52.916c-22.568 11.673-56.808 17.912-90.27 17.912-94.925 0-144.73-71.594-144.73-188.321 0-123.732 56.795-199.994 135.392-199.994s115.172 75.484 115.172 170.435c0 18.664-.792 30.35-1.557 40.453l-177.413-.778zm109.712-52.126c.778-66.924-22.567-102.707-51.347-102.707-38.144 0-55.264 55.251-57.586 102.707h108.933z"
                    fill-rule="nonzero"
                  ></path>
                  <path d="M373.462 16.043h218.501v523.07L373.462 16.044zm-153.926 0H.88v523.07l218.657-523.07zm76.976 192.77l139.218 330.3H344.5l-41.633-105.197H200.964l95.548-225.103z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
