import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-gray-200">
        <div className="container flex flex-col flex-wrap px-4 py-16 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <a className="flex items-center justify-center text-4xl font-bold text-blue-700 md:justify-start">
              Logo
            </a>
            <p className="mt-2 text-sm text-justify text-gray-500">
              Footer Dummay data Lorem....
            </p>
            <div className="flex mt-4">
              <input
                type="text"
                className="h-auto p-2 text-sm border border-grey-light round text-grey-dark"
                placeholder="Your email address"
              />
              <button className="h-auto p-3 text-xs text-white bg-red-600 rounded-sm">
                Subscribe
              </button>
            </div>
            <div className="flex justify-center mt-4 lg:mt-2">
              <a>
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6 text-blue-600"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6 text-blue-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6 text-pink-400"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-6 h-6 text-blue-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </div>
          </div>
          <div className="justify-between w-full mt-4 text-center lg:flex">
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className="mb-2 font-bold tracking-widest text-gray-900">
                Useful Links
              </h2>
              <ul className="mb-8 space-y-2 text-sm list-none">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Home</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">About Us</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Blogs</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className="mb-2 font-bold tracking-widest text-gray-900">
                Useful Links
              </h2>
              <ul className="mb-8 space-y-2 text-sm list-none">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Home</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">About Us</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Blogs</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className="mb-2 font-bold tracking-widest text-gray-900">
                Useful Links
              </h2>
              <ul className="mb-8 space-y-2 text-sm list-none">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Home</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">About Us</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Blogs</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
