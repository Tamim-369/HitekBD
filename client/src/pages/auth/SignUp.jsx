import React, { useState } from "react";
import Carousel from "../../components/Carousel";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const images = ["/watch.png", "/fan.png", "/airpod.png"];
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    city: "",
    address: "",
    state: "Dhaka",
  });
  const handleChange = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(JSON.stringify(formData));
    try {
      const response = await fetch("/api/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(await response.json());
      navigate("/signin");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="box-border z-20 w-full ">
      <div className=" my-auto mx-auto  min-w-screen flex justify-center items-center py-28 fixed flex-col">
        <div className="w-[100vw] my-28  opacity-[0.13] ">
          <Carousel images={images} />
        </div>
      </div>
      <div className="flex flex-col absolute w-full lg:flex-row">
        <div className=" lg:max-h-[92.2vh]  min-h-screen md:py-0 py-10 bg-gradient-to-t from-[#a8a8a883] to-transparent flex flex-col justify-center items-center w-full mx-auto lg:relative   md:w-full z-10 bg-transparent ">
          <form
            onSubmit={handleSubmit}
            className="w-full  max-w-lg md:px-auto px-10 sm:border-white sm:bg-gray-100 py-10 rounded-xl"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Username
                </label>
                <input
                  className="px-4 py-2.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-red-500 outline-none "
                  id="grid-first-name"
                  type="text"
                  placeholder="your name"
                  name="name"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="phoneNumber"
                >
                  Phone Number
                </label>
                <input
                  className="px-4 py-2.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-red-500 outline-none "
                  id="phoneNumber"
                  type="number"
                  placeholder="phone number"
                  name="phoneNumber"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-full mb-6 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="px-4 py-2.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-red-500 outline-none "
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>
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
                  type={`${showPass == true ? "text" : "password"}`}
                  placeholder="**************"
                  name="password"
                  onChange={handleChange}
                  required
                />
                <div className="flex gap-2 mt-2">
                  <input
                    type="checkbox"
                    id="showpass"
                    className="focus:bg-red-600"
                    onChange={() => setShowPass(!showPass)}
                  />
                  <label htmlFor="showpass" className="cursor-pointer text-xs">
                    Show Password
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  City
                </label>
                <input
                  className="px-4 py-2.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-red-500 outline-none "
                  id="grid-city"
                  type="text"
                  placeholder="Dhaka"
                  onChange={handleChange}
                  name="city"
                  required
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  State
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full px-4 py-2.5 bg-white text-[#333] text-sm border-b-2  focus:border-[#f88a8a] outline-none "
                    id="grid-state"
                    onChange={handleChange}
                    name="state"
                  >
                    <option>Dhaka</option>
                    <option>Barishal</option>
                    <option>Chattogram</option>
                    <option>Khulna</option>
                    <option>Rajshahi</option>
                    <option>Rangpur</option>
                    <option>Mymensingh</option>
                    <option>Sylhet</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-zip"
                >
                  Street Address
                </label>
                <input
                  className="px-4 py-2.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-red-500 outline-none "
                  id="grid-zip"
                  type="text"
                  placeholder={"address"}
                  onChange={handleChange}
                  name="street"
                  required
                />
              </div>
            </div>
            <div>
              <p className="text-gray-600 text-xs mt-2">
                Have an account ?{" "}
                <Link className="text-red-600" to={"/signin"}>
                  Sign In
                </Link>
              </p>
            </div>
            <div
              className="w-full flex flex-col justify-center 
            md:justify-start md:items-start md:w-1/3 md:mt-3 mb-4 md:mb-0 text-center"
            >
              <button
                type="submit"
                className="bg-red-600  shadow-sm  shadow-gray-500 text-white px-3 py-2 rounded-lg"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
