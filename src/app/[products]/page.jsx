import { CardInfo, TopSellingInfo } from "@/Components/Constants";

const page = (params) => {
  return (
    <div>
      <h1>
        {CardInfo.map((info, index) =>
          info.id === params.params.products ? (
            <section key={index} class="overflow-hidden">
              <div class="mx-auto max-w-5xl px-5 py-24">
                <div class="mx-auto flex items-center lg:w-4/5 md:flex-col">
                  <img
                    class="h-[400px] w-full rounded object-contain lg:h-96 lg:w-1/2"
                    src={info.imgUrl}
                  />
                  <div class="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
                    <h2 class="text-sm font-semibold tracking-widest text-gray-500">
                      SHOP THE BEST QUALITY
                    </h2>
                    <h1 class="my-4 text-3xl font-semibold text-black">
                      {info.title}
                    </h1>
                    <div class="my-4 flex items-center">
                      <span class="flex items-center space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="text-yellow-500"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="text-yellow-500"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="text-yellow-500"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="text-yellow-500"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="text-yellow-500"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <span class="ml-3 inline-block text-xs font-semibold">
                          4 Reviews
                        </span>
                      </span>
                    </div>
                    <p class="leading-relaxed">
                      A classic t-shirt never goes out of style. This is our
                      most premium collection of shirt. This shirt is made up of
                      pure cotton and has a premium finish.
                    </p>
                    <div class="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5"></div>
                    <div class="flex items-center justify-between">
                      <span class="title-font text-xl font-bold text-gray-900">
                        {info.price}
                      </span>
                      <button
                        type="button"
                        class="px-8 py-4 bg-[#024E82] text-white text-center"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : null
        )}

        {TopSellingInfo.map((info, index) =>
          info.id === params.params.products ? (
            <section key={index} class="overflow-hidden">
              <div class="mx-auto max-w-5xl px-5 py-24">
                <div class="mx-auto flex items-center lg:w-4/5 md:flex-col">
                  <img
                    class="h-[400px] w-full rounded object-contain lg:h-96 lg:w-1/2"
                    src={info.imgUrl}
                  />
                  <div class="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
                    <h2 class="text-sm font-semibold tracking-widest text-gray-500">
                      SHOP THE BEST QUALITY
                    </h2>
                    <h1 class="my-4 text-3xl font-semibold text-black">
                      {info.title}
                    </h1>
                    <div class="my-4 flex items-center">
                      <span class="flex items-center space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="text-yellow-500"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="text-yellow-500"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="text-yellow-500"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="text-yellow-500"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="text-yellow-500"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <span class="ml-3 inline-block text-xs font-semibold">
                          4 Reviews
                        </span>
                      </span>
                    </div>
                    <p class="leading-relaxed">
                      A classic t-shirt never goes out of style. This is our
                      most premium collection of shirt. This shirt is made up of
                      pure cotton and has a premium finish.
                    </p>
                    <div class="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5"></div>
                    <div class="flex items-center justify-between">
                      <span class="title-font text-xl font-bold text-gray-900">
                        {info.price}
                      </span>
                      <button
                        type="button"
                        class="px-8 py-4 bg-[#024E82] text-white text-center"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : null
        )}
      </h1>
    </div>
  );
};

export default page;
