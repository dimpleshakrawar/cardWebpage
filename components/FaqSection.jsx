"use client";

import { useState } from "react";

const accordianData = [
  {
    id: 1,
    label: "Who’s eligible for the Card? ",
    content:
      "If you’re between 23-60 years of age, have a monthly income of ₹25,000 or more, and have never defaulted on a credit card or loan payment, we’d encourage you to apply. However, your application will be declined if your location isn’t serviceable or if your credit score is low.",
  },
  {
    id: 2,
    label: "Is my location serviceable?",
    content:
      "If you’re between 23-60 years of age, have a monthly income of ₹25,000 or more, and have never defaulted on a credit card or loan payment, we’d encourage you to apply. However, your application will be declined if your location isn’t serviceable or if your credit score is low.",
  },
  {
    id: 3,
    label: "What if I don’t want to pay at all?",
    content:
      "If you’re between 23-60 years of age, have a monthly income of ₹25,000 or more, and have never defaulted on a credit card or loan payment, we’d encourage you to apply. However, your application will be declined if your location isn’t serviceable or if your credit score is low.",
  },
  {
    id: 4,
    label: "What happens after I’ve build my card?",
    content:
      "If you’re between 23-60 years of age, have a monthly income of ₹25,000 or more, and have never defaulted on a credit card or loan payment, we’d encourage you to apply. However, your application will be declined if your location isn’t serviceable or if your credit score is low.",
  },
];

export default function FaqSection() {
  const [activeAccordion, setActiveAccordion] = useState(1);

  const toggleAccordion = (accordionId) => {
    setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
  };
  return (
    <div className="py-12 px-2">
      <h2 className="text-4xl font-bold md:text-center mb-8">FAQ</h2>
      <div className="md:px-[14rem]">
        <div
          id="accordion-flush"
          data-accordion="collapse"
          data-active-classes="bg-white text-pinkBg "
          data-inactive-classes="text-gray-500 dark:text-gray-400"
        >
          {accordianData.map((data) => (
            <div key={data.id}>
              <h2 id="accordion-flush-heading-1">
                <button
                  type="button"
                  className={`flex items-center justify-between w-full py-5 md:text-xl font-medium rtl:text-right text-buttonColor gap-3 transition-colors duration-300 ${
                    activeAccordion === data.id
                      ? "active"
                      : "border-b border-gray-200"
                  }`}
                  onClick={() => toggleAccordion(data.id)}
                  aria-expanded={activeAccordion === data.id}
                  aria-controls={`accordion-${data.id}`}
                  data-accordion-target={`#accordion-${data.id}`}
                >
                  <span className="max-sm:text-[15px]">{data.label}</span>
                  <svg
                    data-accordion-icon
                    className={`w-3 h-3 transform transition-transform duration-300 ${
                      activeAccordion === data.id ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                    style={{
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id={`accordion-${data.id}`}
                className={`py-1 ${
                  activeAccordion === data.id
                    ? "block border-b border-gray-200"
                    : "hidden"
                }`}
                aria-labelledby={`accordion-${data.id}`}
              >
                <div className="py-2 ">
                  <p className="mb-2 text-black max-sm:text-sm">
                    {data.content}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* <h2 id="accordion-flush-heading-2">
            <button
              type="button"
              className={`flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3 ${
                activeAccordion === "accordion-flush-body-2" && "active"
              }`}
              onClick={() => toggleAccordion("accordion-flush-body-2")}
              aria-expanded={activeAccordion === "accordion-flush-body-2"}
              aria-controls="accordion-flush-body-2"
              data-accordion-target="#accordion-flush-body-2"
            >
              <span>Is there a Figma file available?</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-2"
            className={`py-5 border-b border-gray-200 dark:border-gray-700 ${
              activeAccordion === "accordion-flush-body-2" ? "block" : "hidden"
            }`}
            aria-labelledby="accordion-flush-heading-2"
          >
            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is first conceptualized and designed using the Figma
                software so everything you see in the library has a design
                equivalent in our Figma file.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out the{" "}
                <a
                  href="https://flowbite.com/figma/"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Figma design system
                </a>{" "}
                based on the utility classNamees from Tailwind CSS and
                components from Flowbite.
              </p>
            </div>
          </div> */}
          {/* <h2 id="accordion-flush-heading-3">
            <button
              type="button"
              className={`flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3 ${
                activeAccordion === "accordion-flush-body-3" && "active"
              }`}
              onClick={() => toggleAccordion("accordion-flush-body-3")}
              aria-expanded={activeAccordion === "accordion-flush-body-3"}
              aria-controls="accordion-flush-body-3"
              data-accordion-target="#accordion-flush-body-3"
            >
              <span>
                What are the differences between Flowbite and Tailwind UI?
              </span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-3"
            className={`py-5 border-b border-gray-200 dark:border-gray-700 ${
              activeAccordion === "accordion-flush-body-3" ? "block" : "hidden"
            }`}
            aria-labelledby="accordion-flush-heading-3"
          >
            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Learn more about these technologies:
              </p>
              <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                <li>
                  <a
                    href="https://flowbite.com/pro/"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
