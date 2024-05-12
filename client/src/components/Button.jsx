import React from "react";

const Button = ({ type, text, round, padding, animate }) => {
  return (
    <button
      type={type}
      className={`text-lg  bg-red-600 shadow-sm ${
        animate && animate + " hover:animate-none"
      } shadow-gray-500 p-${padding ? padding : "3"}  rounded-${
        round ? round : "md"
      } text-white`}
    >
      {text}
    </button>
  );
};

export default Button;
