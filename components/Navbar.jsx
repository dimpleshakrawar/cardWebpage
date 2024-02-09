"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 p-1">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          type="button"
          className="bg-black text-white font-medium text-sm px-4 py-2 text-center"
        >
          AFC Inc.
        </button>

        <button
          type="button"
          className="inline-flex text-black items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={toggleMobileMenu}
        >
          {/* <span className="sr-only">Open main menu</span> */}
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:gap-4 md:w-auto border border-gray-100 md:border-0 p-2`}
        >
          <div>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Track Application
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Manage my Card
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="bg-buttonColor text-white  font-medium rounded-lg text-sm px-4 py-2 text-center "
          >
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
}
