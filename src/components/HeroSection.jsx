import React from "react";

const HeroSection = () => {
  return (
    <div class="text-white">
      <section class=" py-10 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 class="mt-4 text-4xl font-bold  lg:mt-8 sm:text-6xl xl:text-7xl">
                The trusted partner in cyber risk quantification
              </h1>

              <a
                href="#"
                title=""
                class="inline-flex items-center px-6 py-4 mt-8 font-semibold  transition-all duration-200 bg-blue-500 rounded-full lg:mt-16 hover:bg-blue-700 focus:bg-blue-700"
                role="button"
              >
                Join for free
                <svg
                  class="w-6 h-6 ml-8 -mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>

              <p class="mt-5 text-gray-600">
                Already joined us?{" "}
                <a
                  href="#"
                  title=""
                  class=" transition-all duration-200 hover:underline"
                >
                  Log in
                </a>
              </p>
            </div>

            <div>
              <img
                class="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
