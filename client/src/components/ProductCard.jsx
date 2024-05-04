import React from "react";
import { Link, useLocation } from "react-router-dom";

const ProductCard = ({ name, price, category, image }) => {
  // false should be replaced by the product id
  const location = useLocation().pathname;
  return (
    <div
      className={`lg:w-full max-h-full ${
        location === "/" || location === "/#latest" ? "my-auto " : "md:my-3"
      }  p-2  xs:p-2 mx-auto  w-full xs:w-full sm:w-full md:w-full  bg-white shadow-lg border rounded-xl`}
    >
      <Link
        to={"/product"}
        className={`block ${
          location == "/" || location == "/#latest"
            ? "transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:shadow-xl  hover:shadow-gray-400 hover:rounded-xl rounded-xl duration-300 "
            : ""
        } relative sm:w-auto w-full  rounded overflow-hidden`}
      >
        <img
          alt="ecommerce"
          className={` w-full h-48 object-cover 2xs:object-cover object-center block bg-gradient-to-tl from-gray-400 to-gray-200 rounded-xl`}
          src={`${image}`}
        />
      </Link>
      <div className="mt-4 flex flex-col  ">
        <h3 className="text-gray-500  text-xs xs:text-xs  tracking-widest title-font mb-1">
          {category}
        </h3>
        <h2 className="text-gray-900 font-bold  title-font text-sm  xs:text-lg xs:font-semibold  ">
          {name}
        </h2>
        <p className="text-sm xs:text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <div className="flex xs:mt-2 flex-col-reverse gap-2 md:flex-row xs:justify-between xs:items-start">
          <div>
            <Link to={"/product"} className="w-full">
              <button
                className={`bg-red-600 xs:w-auto w-full text-sm xs:text-sm ${
                  location == "/" || location == "/#latest"
                    ? "xs:text-sm"
                    : "text-sm"
                } xs:shadow-sm  shadow-gray-500 text-white px-3 py-2 rounded-lg`}
              >
                View Product
              </button>
            </Link>
          </div>
          <div className="mt-1 text-xs xs:text-sm">৳{price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
