import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../context/shop-context";
import { FaMinus, FaPlus } from "react-icons/fa";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const ProductCard = ({ product, hide }) => {
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);
  // false should be replaced by the product id
  const location = useLocation().pathname;
  console.log(product.discount);

  return (
    <div
      className={`lg:w-full max-h-full ${hide ? "hidden" : ""} ${
        location === "/" || location === "/#latest" ? "my-auto " : "md:my-3"
      }  p-2  xs:p-1 mx-auto  w-full xs:w-full sm:w-full md:w-full  bg-transparent  rounded-xl`}
    >
      <div
        onClick={() => {
          window.location.href = `/product?id=${product._id}`;
        }}
        className={`block ${
          location == "/" || location == "/#latest"
            ? "  rounded-xl duration-300 "
            : ""
        } relative  ${
          location === "/product" ? "h-56 " : "h-full sm:w-auto w-full"
        }  overflow-hidden rounded-xl cursor-pointer`}
      >
        <img
          alt="ecommerce"
          className={`h-full  w-full object-cover 2xs:object-cover  object-center block bg-gradient-to-tl from-gray-400 to-gray-200 `}
          src={`${product.images[0]}`}
        />
      </div>
      <div className="mt-4 flex flex-col justify-center sm:items-start items-center ">
        <h3 className="text-gray-500 sm:block hidden  text-xs xs:text-xs  tracking-widest title-font mb-1">
          {product.category}
        </h3>
        <h2 className="text-gray-900 font-bold  title-font text-base  xs:text-lg xs:font-semibold  ">
          {product.name}
        </h2>
        <p className="text-base xs:text-base sm:text-left text-center sm:text-base">
          {product.description.slice(0, 85)}...
        </p>
        <div className="text-xs xs:text-sm mt-2">
          {" "}
          {product.discount > 0 ? (
            <div className="text-xs text-center sm:text-left">
              <div className="flex gap-2 sm:justify-start justify-center items-center">
                <del className="text-gray-500 font-mono font-semibold">
                  ৳{product.price}
                </del>{" "}
                <div className="text-red-700 font-bold">
                  {" "}
                  <b>{product.discount}% </b> Off
                </div>
              </div>
              <b className="text-red-700 text-sm">
                ৳{product.price - (product.price * product.discount) / 100}
              </b>
            </div>
          ) : (
            <>৳{product.price}</>
          )}
        </div>
        <div className="flex xs:mt-2 flex-col justify-center w-11/12 mx-auto mt-2 sm:mx-0  gap-2 sm:flex-row xs:justify-between xs:items-center ">
          {cartItems[product._id] > 0 && (
            <div className={`flex justify-center items-center`}>
              <button
                onClick={() => {
                  removeFromCart(product._id);
                  if (cartItems[product._id] < 2) {
                    toast.warning(`${product.name} removed from cart`);
                  }
                }}
                className="group rounded-l-xl px-3 py-[9px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50 bg-white text-black"
              >
                <FaMinus />
              </button>
              <input
                className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-14   placeholder:text-gray-900 bg-white py-[3px] text-center bg-transparent"
                value={cartItems[product._id] || 0}
                type="text"
              />
              <button
                onClick={() => addToCart(product._id)}
                className="group rounded-r-xl px-3 py-[9px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 text-black"
              >
                <FaPlus />
              </button>
            </div>
          )}

          <div className="flex  items-center justify-center  ">
            {" "}
            <button
              onClick={() => {
                addToCart(product._id);
                if (cartItems[product._id] < 1) {
                  toast.success(`${product.name} added to cart`);
                }
              }}
              className={`bg-red-600 xs:w-auto  text-sm xs:text-sm w-full ${
                location == "/" || location == "/#latest"
                  ? "xs:text-sm"
                  : "text-sm"
              } xs:shadow-sm   shadow-gray-500 text-white px-[0.73rem] py-2 rounded-lg`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
