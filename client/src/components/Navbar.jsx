import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const checkLocation = useLocation().pathname;
  const token = localStorage.getItem("token");
  return (
    <nav
      className={` fixed w-full   border-b z-50 	 ${
        checkLocation == "/products" ||
        checkLocation == "/allCombo" ||
        checkLocation == "/allCombo"
          ? "shadow-none bg-white"
          : "shadow-md backdrop-blur-xl bg-white/75"
      }`}
    >
      <div className="px-3 sm:px-6 smd:py-2 py-[10px] mx-auto  smd:flex smd:justify-between smd:items-center">
        <div className="flex items-center justify-between">
          <Link to={`${"/#hero"}`} className="sm:pr-2">
            <img
              alt=""
              className=""
              height={100}
              width={100}
              src="/logo-tr.png"
            />
          </Link>
          <div className="w-7/12  smd:hidden flex">
            <form className="flex justify-center w-full items-center">
              <input
                type="text"
                name="search"
                className="p-[5px] w-full px-[10px] rounded-l-lg focus:outline-none bg-gray-50 border "
                placeholder="search"
              />
              <button
                type="submit"
                className="bg-red-600 p-[10px] text-white rounded-r-lg"
              >
                <IoSearch />
              </button>
            </form>
          </div>
          <div className="flex smd:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="toggle menu"
              className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              type="button"
            >
              {isOpen ? (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <span className="text-3xl  ">
                  <IoMenu />
                </span>
                // <svg
                //   className="w-6 h-6"
                //   fill="none"
                //   stroke="currentColor"
                //   strokeWidth="2"
                //   viewBox="0 0 24 24"
                //   xmlns="http://www.w3.org/2000/svg"
                // >
                //   <path
                //     d="M4 8h16M4 16h16"
                //     strokeLinecap="round"
                //     strokeLinejoin="round"
                //   />
                // </svg>
              )}
            </button>
          </div>
        </div>
        <div className="w-5/12 smd:flex hidden">
          <form className="flex justify-center w-full items-center">
            <input
              type="text"
              name="search"
              className="p-[5px] w-full px-[10px] rounded-l-lg focus:outline-none bg-gray-50 border "
              placeholder="search"
            />
            <button
              type="submit"
              className="bg-red-500 p-[10px] text-white rounded-r-lg"
            >
              <IoSearch />
            </button>
          </form>
        </div>
        <div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } smd:flex smd:flex-row items-center mt-4 smd:mt-0`}
          >
            <div className="flex  flex-col  smd:flex-row lg:mx-2">
              <Link
                onClick={() => setIsOpen(false)}
                className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-red-500  smd:mx-3 smd:my-0 smd:text-left text-center smd:bg-transparent py-2 px-1 bg-gray-200 rounded-md  "
                to="/products"
              >
                Shop
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                to="/#latest"
                className="my-2 cursor-pointer text-gray-700 transition-colors duration-300 transform hover:text-red-500  smd:mx-3 smd:my-0 smd:text-left text-center smd:bg-transparent py-2 px-1 bg-gray-200 rounded-md  "
              >
                Latest
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-red-500  smd:mx-3 smd:my-0 smd:text-left text-center smd:bg-transparent py-2 px-1 bg-gray-200 rounded-md  "
                to="/#about"
              >
                About
              </Link>
              {token ? (
                <Link
                  to={"/profile"}
                  className="my-2 font-medium transition-colors duration-300 transform hover:text-red-200 shadow-md shadow-gray-400 text-sm flex justify-center items-center smd:mx-3 smd:my-1 smd:text-left text-center bg-red-600 text-white  py-2 smd:py-1 px-2 rounded-md"
                >
                  <div className="flex gap-1">
                    <div>
                      <AiOutlineUser />
                    </div>
                    <div>Profile</div>
                  </div>
                </Link>
              ) : (
                <Link
                  onClick={() => setIsOpen(false)}
                  className="my-2 font-medium transition-colors duration-300 transform hover:text-red-200 shadow-md shadow-gray-400 text-sm flex justify-center items-center smd:mx-3 smd:my-1 smd:text-left text-center bg-red-600 text-white  py-2 smd:py-1 px-2 rounded-md "
                  to="/signin"
                >
                  Sign in
                </Link>
              )}
            </div>

            <div className="flex justify-center my-2 smd:my-auto smd:block">
              <Link
                onClick={() => setIsOpen(false)}
                className="relative text-gray-700 transition-colors duration-300 transform hover:text-gray-600 dark:hover:text-red-500"
                to="/cart"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                <span className="absolute top-0 left-0 p-1 text-xs text-white bg-red-500 rounded-full" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
