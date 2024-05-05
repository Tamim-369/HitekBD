import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
const Details = ({ getUser }) => {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [getting, setGetting] = useState(false);
  const [formData, setFormData] = useState({});
  useEffect(() => {
    const findUser = async () => {
      setGetting(true);
      const user = await getUser(localStorage.getItem("email"));
      setFormData(user);
      setGetting(false);
    };
    findUser();
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`/api/users/update/${formData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.message);
      }
      setLoading(false);

      navigate("/#hero");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="mt-2 min-h-screen w-full ">
      <div className="flex flex-col  w-full lg:flex-row">
        <div className="   min-h-screen md:py-0 py-10 bg-gradient-to-t from-[#a8a8a883] to-transparent flex flex-col justify-center items-center w-full mx-auto lg:relative   md:w-full z-10 bg-transparent ">
          {getting ? (
            <Loader />
          ) : (
            <form
              onSubmit={handleSubmit}
              className="w-full  max-w-lg md:px-auto px-10 sm:border-white sm:bg-gray-100 py-10 rounded-xl"
            >
              {error && <p className="text-red-500 mx-auto my-2">{error}</p>}
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
                    value={formData.name}
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
                    value={formData.phoneNumber}
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
                    value={formData.email}
                    placeholder="Enter email"
                    name="email"
                    onChange={handleChange}
                    required
                  />
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
                    value={formData.city}
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
                      value={formData.state}
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
                    value={formData.street}
                    name="street"
                    required
                  />
                </div>
              </div>

              <div
                className="w-full mt-1 flex gap-2 justify-between 
                md:mb-0 text-center items-center"
              >
                <div>
                  <Link
                    to={"/"}
                    className="bg-gray-300  shadow-sm  text-black px-3 py-2 rounded-lg"
                  >
                    Back
                  </Link>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-red-600  shadow-sm   text-white px-3 py-2 rounded-lg"
                  >
                    Update {loading && "..."}
                  </button>
                </div>
              </div>
              <div>
                <p className="text-gray-600 text-xs mt-2">
                  Don't remember your password click ?{" "}
                  <Link className="text-red-600" to={"/reset"}>
                    Forget Password
                  </Link>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
