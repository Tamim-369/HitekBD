import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div className=" text-5xl text-red-600">
      {/* <img src="logo-tr.png" className="h-32 animate-bounce" alt="" /> */}
      <FaSpinner className="animate-spin" />
    </div>
  );
};

export default Loader;
