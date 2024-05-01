"use client";

import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => state.cart.products);
  const { products, total } = useSelector((state) => state.cart);

  return (
    <div>
      {items.length !== 0 ? (
        <div>
          <section class="mx-auto w-full max-w-7xl px-4 py-4 min-h-[90vh]">
            <div class="mt-6 flex flex-col">
              <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div class="overflow-hidden border border-gray-200 md:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                      <thead class="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                          >
                            <span>Product Name</span>
                          </th>
                          <th
                            scope="col"
                            class="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                          >
                            Quantity
                          </th>
                          <th
                            scope="col"
                            class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                          >
                            Total
                          </th>
                          <th scope="col" class="relative px-4 py-3.5">
                            <span class="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-200 bg-white">
                        {items.map((item, index) => (
                          <tr key={index}>
                            <td class="whitespace-nowrap px-4 py-4">
                              <div class="flex items-center">
                                <div class="">
                                  <div class="text-sm font-medium text-gray-900">
                                    {item.name}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td class="whitespace-nowrap px-12 py-4">
                              <div class="text-sm text-gray-900 ">
                                ${item.price}.00
                              </div>
                            </td>
                            <td class="whitespace-nowrap px-4 py-4">
                              <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                {item.quantity}
                              </span>
                            </td>
                            <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                              {products.map((product) =>
                                product.id === item.id ? (
                                  <div key={product.id}>
                                    <p>
                                      $
                                      {(
                                        product.price * product.quantity
                                      ).toFixed(2)}
                                    </p>
                                  </div>
                                ) : null
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <section>
                <div class="grid grid-cols-1 lg:grid-cols-2">
                  <div class="flex items-center justify-start px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                    <div class="w-2/4">
                      <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
                        Cart Total
                      </h2>
                      <form action="#" method="POST" class="mt-8">
                        <div class="space-y-5">
                          <div className="flex justify-between border-b-2 border-gray-200 p-2">
                            <p>SubTotal</p>
                            <p>${total}.00</p>
                          </div>
                          <div className="flex justify-between border-b-2 border-gray-200 p-2">
                            <p>Shipping Charges</p>
                            <p>$0</p>
                          </div>
                          <div className="flex justify-between border-b-2 border-gray-200 p-2">
                            <p>Total</p>
                            <p>${total}.00</p>
                          </div>
                          <div>
                            <button className="px-8 py-4 bg-[#D6763C] uppercase text-white">
                              Proceed to checkout
                            </button>
                          </div>
                          <div></div>
                        </div>
                      </form>
                      <div class="mt-3 space-y-3"></div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      ) : (
        <div className="w-full h-[90vh] flex items-center justify-center">
          <h1 className="text-center text-3xl font-bold m-10 text-[#D6763C]">
            Cart is Empty
          </h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
