import React from "react";

const Fake = () => {
  return (
    <div
      className=" flex justify-center items-center text-5xl min-h-screen min-w-screen bg-no-repeat bg-cover text-white font-bold"
      style={{
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsY8R9YZKSeAafHMpKM-Y6lGlKBCILfH94MaeKCbfr3Q&s')",
      }}
    >
      <h1>
        Wait a minute.{" "}
        <span className="text-red-700 text-7xl">Who are you?</span>
      </h1>
    </div>
  );
};

export default Fake;
