import React from "react";
import { Link } from "react-router-dom";

const CheckOut = () => {
  return (
    <div>
      <div className="font-[sans-serif] bg-gray-50 ">
        <div className="flex flex-col sm:grid lg:grid-cols-1 xl:grid-cols-1 w-full sm:w-11/12 md:w-9/12 mx-auto  gap-4 h-full">
          {/* <div className="bg-red-600 lg:h-9/12 lg:sticky lg:top-0 ">
            <div className="relative h-full">
              <div className="p-8 pt-5  lg:overflow-auto lg:h-[calc(100vh-60px)]">
                <h2 className="text-2xl font-bold text-white">Order Summary</h2>
                <div className="space-y-0 mt-3 grid sm:grid-cols-1 xs:grid-cols-2 grid-col-1">
                  <div className="grid sm:grid-cols-2 items-start gap-6 sm:mx-0 mx-2 sm:my-0 my-4 border-b-2 border-gray-100 p-2">
                    <div className="px-4 py-2  shrink-0 bg-gray-50 rounded-xl">
                      <img
                        src="fan.png"
                        className="w-full h-40 object-scale-down"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        Naruto: Split Sneakers
                      </h3>
                      <ul className="text-sm  font-semibold text-white space-y-3 mt-4">
                        <li className="flex flex-wrap gap-4">
                          Size <span className="ml-auto">37</span>
                        </li>
                        <li className="flex flex-wrap gap-4">
                          Quantity <span className="ml-auto">2</span>
                        </li>
                        <li className="flex flex-wrap gap-4">
                          Total Price <span className="ml-auto">$40</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 items-start gap-6 sm:mx-0 mx-2 sm:my-0 my-4 border-b-2 border-gray-100 p-2">
                    <div className="px-4 py-2  shrink-0 bg-gray-50 rounded-xl">
                      <img
                        src="/airpod.png"
                        className="w-full h-40 object-scale-down"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        VelvetGlide Boots
                      </h3>
                      <ul className="text-sm  font-semibold text-white space-y-3 mt-4">
                        <li>
                          Size <span className="float-right">37</span>
                        </li>
                        <li>
                          Quantity <span className="float-right">2</span>
                        </li>
                        <li>
                          Total Price <span className="float-right">$40</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 items-start gap-6 sm:mx-0 mx-2 sm:my-0 my-4 border-b-2 border-gray-100 p-2">
                    <div className="px-4 py-2  shrink-0 bg-gray-50 rounded-xl">
                      <img
                        src="watch.png"
                        className="w-full h-40 object-scale-down"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        Echo Elegance
                      </h3>
                      <ul className="text-sm  font-semibold text-white space-y-3 mt-4">
                        <li>
                          Size <span className="float-right">37</span>
                        </li>
                        <li>
                          Quantity <span className="float-right">2</span>
                        </li>
                        <li>
                          Total Price <span className="float-right">$40</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 items-start gap-6 sm:mx-0 mx-2 sm:my-0 my-4 border-b-2 border-gray-100 p-2">
                    <div className="px-4 py-2  shrink-0 bg-gray-50 rounded-xl">
                      <img
                        src="watch.png"
                        className="w-full h-40 object-scale-down"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        Echo Elegance
                      </h3>
                      <ul className="text-sm  font-semibold text-white space-y-3 mt-4">
                        <li>
                          Size <span className="float-right">37</span>
                        </li>
                        <li>
                          Quantity <span className="float-right">2</span>
                        </li>
                        <li>
                          Total Price <span className="float-right">$40</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <br />
              </div>
              <div className="absolute left-0 bottom-0 bg-red-600 w-full p-4">
                <h4 className="flex flex-wrap gap-4 text-base text-white">
                  Total <span className="ml-auto">$84.00</span>
                </h4>
              </div>
            </div>
          </div> */}
          <div className="xl:col-span-2 h-max w-full rounded-md p-8 sticky top-0">
            <h2 className="text-2xl font-bold text-[#333]">
              Complete your order
            </h2>
            <form className="mt-10">
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-[#333] ">
                    Personal Details
                  </h3>
                  <p className="text-sm text-[#333]">
                    <Link className="text-red-600" to={"/signup"}>
                      {" "}
                      Sign up
                    </Link>{" "}
                    to save your information
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-6 mt-6">
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#ff6565] outline-none"
                      required
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-4"
                      viewBox="0 0 24 24"
                    >
                      <circle cx={10} cy={7} r={6} data-original="#000000" />
                      <path
                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>

                  <input
                    type="text"
                    placeholder="City"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#ff6565] outline-none"
                    required
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#ff6565] outline-none"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Street address"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#ff6565] outline-none"
                    required
                  />
                </div>
                <div className="flex mt-6 justify-between items-center">
                  <div className="flex gap-2 flex-col sm:flex-row  sm:justify-between  w-full lg:w-10/12  ">
                    <div className="relative w-full  sm:w-7/12 flex items-center">
                      <input
                        type="number"
                        placeholder="Phone No."
                        className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#ff6565] outline-none"
                        required
                      />
                      <svg
                        fill="#bbb"
                        className="w-[18px] h-[18px] absolute right-4"
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.ff2020-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                    <div className="flex gap-2 sm:gap-0 sm:flex-col">
                      <div className="relative py-1 ">
                        <div class="relative flex items-center mx-1 ">
                          <input
                            class="w-4 h-4 transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer peer border-slate-500 checked:border-red-500 checked:bg-red-500 checked:hover:border-red-600 checked:hover:bg-red-600 focus:outline-none checked:focus:border-red-700 checked:focus:bg-red-700 focus-visible:outline-none disabled:cursor-not-allowed  disabled:border-slate-100 disabled:bg-slate-50"
                            type="radio"
                            value="huey"
                            id="huey"
                            name="drone"
                            required
                          />
                          <label
                            class="pl-2 cursor-pointer text-black  peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 flex justify-center items-center"
                            for="huey"
                          >
                            <div className="btn flex  justify-center items-center ">
                              <img src="/Nagad.png" className="h-6" alt="" />
                              <span className="font-semibold">Nagad</span>
                            </div>
                          </label>
                          <svg
                            class="absolute left-0 w-4 h-4 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-white peer-checked:scale-100 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-labelledby="title-1 description-1"
                            role="graphics-symbol"
                          >
                            <circle cx="8" cy="8" r="4" />
                          </svg>
                        </div>
                      </div>
                      <div className="relative py-1">
                        <div class="relative flex  mx-1   items-center">
                          <input
                            class="w-4 h-4 transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer peer border-slate-500 checked:border-red-500 checked:bg-red-500 checked:hover:border-red-600 checked:hover:bg-red-600 focus:outline-none checked:focus:border-red-700 checked:focus:bg-red-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                            type="radio"
                            value="huey"
                            id="huey"
                            name="drone"
                            required
                          />
                          <label
                            class="pl-2 cursor-pointer text-black  peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 flex justify-center items-center"
                            for="huey"
                          >
                            <div className="btn flex justify-center items-center ">
                              <img src="/bkash.png" className="h-6" alt="" />
                              <span className="font-semibold ml-1">bKash</span>
                            </div>
                          </label>
                          <svg
                            class="absolute left-0 w-4 h-4 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-white peer-checked:scale-100 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-labelledby="title-1 description-1"
                            role="graphics-symbol"
                          >
                            <circle cx="8" cy="8" r="4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 max-sm:flex-col mt-5">
                  <button
                    type="button"
                    className="rounded-md px-6 py-3 w-full text-sm font-semibold  bg-gray-800/10   text-[#2c2c2c]"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="rounded-md px-6 py-3 w-full text-sm font-semibold bg-[#ff2020] text-white hover:bg-[#ff2020]"
                  >
                    Complete Purchase
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
