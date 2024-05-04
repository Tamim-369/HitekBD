import React, { useState } from "react";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";

const AdminAuth = () => {
  const images = ["/watch.png", "/fan.png", "/airpod.png"];
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="box-border z-20 w-full ">
      <div className=" my-auto mx-auto  min-w-screen flex justify-center items-center py-28 fixed flex-col">
        <div className="w-[100vw] my-28  opacity-[0.13] ">
          <Carousel images={images} />
        </div>
      </div>
      <div className="flex flex-col absolute w-full lg:flex-row">
        <div className=" lg:max-h-[92.2vh]  min-h-screen md:py-0 py-10 bg-gradient-to-t from-[#a8a8a883] to-transparent flex flex-col justify-center items-center w-full mx-auto lg:relative   md:w-full z-10 bg-transparent ">
          <form className="w-full  max-w-lg md:px-auto px-10 sm:border-white sm:bg-gray-100 py-10 rounded-xl">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full  px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Phone Number
                </label>
                <input
                  className="px-4 py-2.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-red-500 outline-none "
                  id="grid-last-name"
                  type="text"
                  placeholder="name"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  className="px-4 py-2.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-red-500 outline-none "
                  id="grid-password"
                  type={`${showPass ? "text" : "password"}`}
                  placeholder="******************"
                />
                <div className="flex gap-2 mt-3">
                  <input
                    type="checkbox"
                    id="showpass"
                    className="focus:bg-red-600"
                  />
                  <label
                    htmlFor="showpass"
                    className="cursor-pointer text-xs"
                    onClick={() => setShowPass(!showPass)}
                  >
                    Show Password
                  </label>
                </div>
              </div>
            </div>

            <div
              className="w-full flex flex-col justify-center 
    md:justify-start md:items-start md:w-1/3 md:mt-3 mb-4 md:mb-0 text-center"
            >
              <button className="bg-red-600  shadow-sm  shadow-gray-500 text-white px-3 py-2 rounded-lg">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAuth;
