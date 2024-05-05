import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="animate-spin text-5xl text-red-600">
      {/* <img src="logo-tr.png" className="h-32 animate-bounce" alt="" /> */}
      <FaSpinner />
    </div>
  );
};

export default Loader;
