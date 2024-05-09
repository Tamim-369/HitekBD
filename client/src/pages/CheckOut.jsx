import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/shop-context";
import Loader from "../components/Loader";

const CheckOut = () => {
  const { cartItems, getUser, finalProducts, clearCart } =
    useContext(ShopContext);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    products: finalProducts,
    name: "",
    userId: "",
    street: "",
    city: "",
    state: "",
    phoneNumber: "",
    paymentMethod: "",
  });

  const getSetUserData = (email) => {
    getUser(email).then((data) => {
      setUserData(data);
      const usersData = {
        name: data.name,
        userId: data._id,
        street: data.street,
        city: data.city,
        state: data.state,
        phoneNumber: data.phoneNumber,
      };
      setFormData((prevData) => ({ ...prevData, ...usersData }));
      setLoading(false);
    });
  };

  useEffect(() => {
    if (localStorage.getItem("email")) {
      setLoading(true);
      getSetUserData(localStorage.getItem("email"));
    } else {
      setUserData({});
      setLoading(false);
    }
  }, [cartItems]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/products/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      alert(response.json().message);
    }
    if (response.ok) {
      alert("Order placed successfully");
      if (localStorage.getItem("email")) {
        navigate("/orders");
      } else {
        navigate("/signin");
      }
      clearCart();
    }
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <div className="font-[sans-serif] bg-gray-50 ">
        <div className="flex flex-col sm:grid lg:grid-cols-1 xl:grid-cols-1 w-full sm:w-11/12 md:w-9/12 mx-auto  gap-4 h-full">
          {loading ? (
            <div className="flex justify-center items-center min-h-screen w-full">
              <Loader />
            </div>
          ) : (
            <div className="xl:col-span-2 h-max w-full rounded-md p-8 sticky top-0">
              <h2 className="text-2xl font-bold text-[#333]">
                Complete your order
              </h2>
              <form className="mt-10" onSubmit={handleSubmit}>
                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-[#333] ">
                      Personal Details
                    </h3>
                    {!localStorage.getItem("email") && (
                      <p className="text-sm text-[#333]">
                        <Link className="text-red-600" to={"/signup"}>
                          {" "}
                          Sign up
                        </Link>{" "}
                        to save your information
                      </p>
                    )}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6 mt-6">
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#ff6565] outline-none"
                        value={formData?.name}
                        onChange={handleChange}
                        name="name"
                        required
                      />
                      {/* SVG icon */}
                    </div>

                    <input
                      type="text"
                      placeholder="City"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#ff6565] outline-none"
                      value={formData?.city}
                      onChange={handleChange}
                      name="city"
                      required
                    />
                    <input
                      type="text"
                      placeholder="State"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#ff6565] outline-none"
                      value={formData?.state}
                      onChange={handleChange}
                      name="state"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Street address"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#ff6565] outline-none"
                      value={formData?.street}
                      onChange={handleChange}
                      name="street"
                      required
                    />
                    <input
                      type="number"
                      placeholder="Phone No."
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#ff6565] outline-none"
                      value={formData?.phoneNumber}
                      onChange={handleChange}
                      name="phoneNumber"
                      required
                    />
                    <div className="flex gap-2 flex-row sm:flex-col    sm:justify-between  w-full lg:w-10/12  ">
                      <div className="relative w-full  sm:w-7/12 flex items-center">
                        <input
                          type="radio"
                          value="nagad"
                          id="nagad"
                          name="paymentMethod"
                          onChange={handleChange}
                          checked={formData?.paymentMethod === "nagad"}
                          required
                        />
                        <label
                          htmlFor="nagad"
                          className="pl-2 cursor-pointer text-black  peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 flex justify-center items-center"
                        >
                          <div className="btn flex  justify-center items-center ">
                            <img src="/Nagad.png" className="h-6" alt="" />
                            <span className="font-semibold">Nagad</span>
                          </div>
                        </label>
                      </div>
                      <div className="relative w-full  sm:w-7/12 flex items-center">
                        <input
                          type="radio"
                          id="bkash"
                          value="bkash"
                          name="paymentMethod"
                          onChange={handleChange}
                          checked={formData?.paymentMethod === "bkash"}
                          required
                        />
                        <label
                          htmlFor="bkash"
                          className="pl-2 cursor-pointer text-black  peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 flex justify-center items-center"
                        >
                          <div className="btn flex justify-center items-center ">
                            <img src="/bkash.png" className="h-6" alt="" />
                            <span className="font-semibold ml-1">bKash</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-6 justify-between items-center"></div>
                  <div className="flex gap-6 max-sm:flex-col mt-5">
                    <button
                      type="button"
                      className="rounded-md px-6 py-3 w-full text-sm font-semibold  bg-gray-800/10   text-[#2c2c2c]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-md px-6 py-3 w-full text-sm font-semibold bg-[#ff2020] text-white hover:bg-[#ff2020]"
                    >
                      Submit Order
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
