"use client";

import "boxicons";
import Link from "next/link";

const Header = () => {
  return (
    <div className="z-10">
      <div class="relative w-full bg-white p-4">
        <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div class="inline-flex items-center space-x-2">
            <span class="text-3xl">NorthStar</span>
          </div>
          <div class="sm:hidden grow items-start flex">
            <ul class="ml-28 inline-flex space-x-8">
              <li>
                <Link
                  href="/"
                  class="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  class="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  class="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div class="flex gap-5">
            <box-icon name="user"></box-icon>
            <box-icon name="shopping-bag"></box-icon>
            <box-icon name="menu"></box-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
