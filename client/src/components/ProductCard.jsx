import React from "react";
import { Link, useLocation } from "react-router-dom";

const ProductCard = ({ product }) => {
  // false should be replaced by the product id
  const location = useLocation().pathname;
  console.log(product.discount);
  return (
    <div
      className={`lg:w-full max-h-full ${
        location === "/" || location === "/#latest" ? "my-auto " : "md:my-3"
      }  p-2  xs:p-1 mx-auto  w-full xs:w-full sm:w-full md:w-full  bg-transparent  rounded-xl`}
    >
      <Link
        to={`/product?id=${product._id}`}
        className={`block ${
          location == "/" || location == "/#latest"
            ? "  rounded-xl duration-300 "
            : ""
        } relative sm:w-auto w-full   overflow-hidden`}
      >
        <img
          alt="ecommerce"
          className={` w-full h-48 object-cover 2xs:object-cover object-center block bg-gradient-to-tl from-gray-400 to-gray-200 `}
          src={`${product.image}`}
        />
      </Link>
      <div className="mt-4 flex flex-col  ">
        <h3 className="text-gray-500  text-xs xs:text-xs  tracking-widest title-font mb-1">
          {product.category}
        </h3>
        <h2 className="text-gray-900 font-bold  title-font text-sm  xs:text-lg xs:font-semibold  ">
          {product.name}
        </h2>
        <p className="text-sm xs:text-sm sm:text-base">
          {product.description.slice(0, 70)}
        </p>
        <div className="flex xs:mt-2 flex-col-reverse gap-2 md:flex-row xs:justify-between xs:items-start ">
          <div className="flex justify-center items-center flex-col">
            <Link
              to={`/product?id=${product._id}`}
              className="w-full flex justify-center items-center flex-col "
            >
              <button
                className={`bg-red-600 xs:w-auto  text-sm xs:text-sm w-full ${
                  location == "/" || location == "/#latest"
                    ? "xs:text-sm"
                    : "text-sm"
                } xs:shadow-sm  shadow-gray-500 text-white px-3 py-2 rounded-lg`}
              >
                Buy Now
              </button>
            </Link>
          </div>
          <div className="mt-1 text-xs xs:text-sm">
            {" "}
            {product.discount > 0 ? (
              <div className="text-xs">
                <div className="flex gap-2 justify-start items-center">
                  <del className="text-gray-500 font-mono font-semibold">
                    ৳{product.price}
                  </del>{" "}
                  <div className="text-red-700 font-bold">
                    {" "}
                    <b>{product.discount}% </b> Off
                  </div>
                </div>
                <b className="text-red-700 text-sm">
                  ৳{(product.price * 100 - product.discount) / 100}
                </b>
              </div>
            ) : (
              <>৳{product.price}</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
