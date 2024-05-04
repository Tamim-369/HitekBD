import React from "react";
import { Link } from "react-router-dom";
const ComboCard = ({ name, price, category, image }) => {
  return (
    <div
      className={`lg:w-full max-h-full ${
        location === "/" ? "my-auto" : "md:my-3"
      }   mx-auto   w-full xs:w-full sm:w-full md:w-full  bg-white shadow-lg border rounded-xl`}
    >
      <a className="block relative  w-full  rounded-t overflow-hidden">
        <img
          alt="ecommerce"
          className=" w-full h-48 md:h-64 object-cover  bg-gradient-to-tl from-gray-400 to-gray-200 object-center block r rounded-t-xl"
          src={`${image}`}
        />
      </a>
      <div className="mt-4 flex flex-col  p-2  xs:p-2">
        <h3 className="text-gray-500  text-xs xs:text-xs  tracking-widest title-font mb-1">
          {category}
        </h3>
        <h2 className="text-gray-900 font-bold  title-font text-lg  xs:text-lg xs:font-semibold  ">
          {name}
        </h2>
        <p className="text-base xs:text-base sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <div className="flex xs:mt-2 flex-col-reverse gap-2 xs:flex-row xs:justify-between xs:items-center">
          <div>
            <Link to={"/combo"}>
              <button className="bg-red-600 text-[0.9rem] shadow-sm  shadow-gray-500 text-white px-3 py-2 rounded-lg">
                View Combo
              </button>
            </Link>
          </div>
          <div className="mt-1 text-xs xs:text-sm">৳{price}</div>
        </div>
      </div>
    </div>
  );
};

export default ComboCard;
