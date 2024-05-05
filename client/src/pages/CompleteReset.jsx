import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CompleteReset = () => {
  const [codeFormData, setCodeFormData] = useState({});
  const [formData, setFormData] = useState({});
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [codeChecking, setCodeChecking] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const code = query.get("id");
  const email = query.get("email");
  //   console.log(code, email);
  const checkCode = async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/users/checkCode?code=${code}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(codeFormData),
    });
    const data = await response.json();
    console.log(data.message);
    setCodeChecking(false);
    setFormData({});
  };
  const handleCodeChange = (event) => {
    event.preventDefault();
    setCodeFormData({
      ...codeFormData,
      [event.target.name]: event.target.value,
    });
    setFormData({});
  };
  const handleChange = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await fetch(`/api/users/resetPassword/${email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Password changed successfully");
      if (!localStorage.getItem("token")) {
        navigate("/signin");
      } else {
        navigate("/");
      }
    }
  };
  return (
    <div>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="   min-h-screen md:py-0 py-10 bg-gradient-to-t from-[#a8a8a883] to-transparent flex flex-col justify-center items-center w-full mx-auto lg:relative   md:w-full z-10 bg-transparent ">
          {codeChecking ? (
            <form
              onSubmit={checkCode}
              className="w-full  max-w-lg md:px-auto px-10 sm:border-white sm:bg-gray-100 py-10 rounded-xl"
            >
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full  px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Enter code
                  </label>
                  <input
                    className="px-4 py-2.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-red-500 outline-none "
                    id="grid-last-name"
                    type="number"
                    name="code"
                    onChange={handleCodeChange}
                    placeholder="000000"
                    required
                  />
                  <p className="text-gray-500 text-xs ml-1 mt-2">
                    We will send a verification code in your email address
                  </p>
                </div>
              </div>

              <div
                className="w-full flex flex-col justify-center 
         md:justify-start md:items-start md:w-1/3 mt-0 mb-4 md:mb-0 text-center"
              >
                <button
                  type="submit"
                  className="bg-red-600  shadow-sm  shadow-gray-500 text-white px-3 py-2 rounded-lg"
                >
                  Continue {loading && "..."}
                </button>
              </div>
            </form>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="w-full  max-w-lg md:px-auto px-10 sm:border-white sm:bg-gray-100 py-10 rounded-xl"
            >
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full  px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="password"
                  >
                    Enter new password
                  </label>
                  <input
                    className="px-4 py-2.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-red-500 outline-none "
                    id="password"
                    type={`${showPass ? "text" : "password"}`}
                    name="password"
                    onChange={handleChange}
                    value={formData.password || ""}
                    placeholder="password"
                  />
                  <div className="text-sm flex gap-1 mt-1">
                    <input
                      type="checkbox"
                      onChange={() => setShowPass(!showPass)}
                      name="showpass"
                      id="showPass"
                    />
                    <label htmlFor="showPass">Show Password</label>
                  </div>
                </div>
              </div>

              <div
                className="w-full flex flex-col justify-center 
        md:justify-start md:items-start md:w-1/3 mt-0 mb-4 md:mb-0 text-center"
              >
                <button className="bg-red-600  shadow-sm  shadow-gray-500 text-white px-3 py-2 rounded-lg">
                  Continue {loading && "..."}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompleteReset;
