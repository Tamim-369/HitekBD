import React, { useContext, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { ShopContext } from "../context/shop-context";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [profileMenu, setProfileMenu] = React.useState(false);
  const checkLocation = useLocation().pathname;
  const { cartItems, addedProducts, setAddedProducts } =
    useContext(ShopContext);

  const token = localStorage.getItem("token");
  if (
    checkLocation == "/admin-panel" ||
    checkLocation == "/admin-auth" ||
    checkLocation == "/editProduct" ||
    checkLocation == "/order"
  ) {
    return null;
  } else {
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
                  <>
                    <button
                      onClick={() => setProfileMenu(!profileMenu)}
                      className="my-2 font-medium transition-colors duration-300 transform hover:text-red-200  text-sm flex justify-center items-center smd:mx-3 smd:my-1 smd:text-left text-center bg-red-600 text-white  py-2 smd:py-1 px-2 rounded-md"
                    >
                      <div className="flex gap-1 justify-center items-center">
                        <div className="text-xl font-bold">
                          <AiOutlineUser />
                        </div>
                        <div className="text-sm">Profile</div>
                      </div>
                    </button>
                    {profileMenu && (
                      <div className="profile-menu relative smd:absolute smd:right-16 smd:mt-10 flex flex-col justify-center items-center bg-white px-2 pb-2 rounded-md border shadow-lg">
                        <Link
                          to={"/orders"}
                          onClick={() => {
                            setProfileMenu(false);
                            setIsOpen(false);
                          }}
                          className="w-full p-1 px-2 hover:text-red-500 smd:text-left text-center smd:bg-transparent bg-gray-200 mt-2 smd:border-b smd:rounded-none text-black smd:text-black rounded-lg "
                        >
                          Orders
                        </Link>
                        <Link
                          to={"/details"}
                          onClick={() => {
                            setProfileMenu(false);
                            setIsOpen(false);
                          }}
                          className="w-full p-1 px-2 hover:text-red-500 smd:text-left text-center smd:bg-transparent bg-gray-200 mt-2 smd:border-b smd:rounded-none text-black smd:text-black rounded-lg "
                        >
                          Your details
                        </Link>
                        <Link
                          onClick={() => {
                            localStorage.removeItem("token");
                            localStorage.removeItem("email");
                            localStorage.removeItem("phoneNumber");
                            setProfileMenu(false);
                            setIsOpen(false);
                            navigate("/signin");
                          }}
                          className="w-full p-1 px-2 hover:text-red-500 smd:text-left text-center smd:bg-transparent bg-gray-200 mt-2  smd:rounded-none text-black smd:text-black rounded-lg "
                        >
                          Logout
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    onClick={() => setIsOpen(false)}
                    className="my-2 font-medium transition-colors duration-300 transform hover:text-red-200  text-sm flex justify-center items-center smd:mx-3 smd:my-1 smd:text-left text-center bg-red-600 text-white  py-2 smd:py-1 px-2 rounded-md "
                    to="/signin"
                  >
                    Sign in
                  </Link>
                )}
              </div>

              <div className="flex justify-center my-2 smd:my-auto smd:block">
                <Link
                  onClick={() => setIsOpen(false)}
                  className="relative text-gray-700 transition-colors duration-300 transform hover:text-gray-600 dark:hover:text-red-500 text-[1.57rem]"
                  to="/cart"
                >
                  <PiShoppingCartSimpleBold />
                  {addedProducts && (
                    <span className="absolute py-[0.2rem] px-[0.2rem] top-0 left-0 shadow-lg border border-red-500 text-[0.5rem] font-bold text-white bg-red-500 rounded-full "></span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
