import React from "react";

const CartCard = ({
  product,
  amount,
  addToCart,
  removeFromCart,
  updateCartItemAmount,
  cartItems,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
        <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
          <div className="img-box">
            <img
              alt="perfume bottle image"
              className="xl:w-[140px]"
              src={product.image}
            />
          </div>
          <div className="pro-data w-full max-w-sm ">
            <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
              {product.name}
            </h5>
            <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
              {product.category}
            </p>
            <h6 className="font-medium text-lg leading-8 text-red-600  max-[550px]:text-center">
              ৳{product.price}
            </h6>
          </div>
        </div>
        <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
          <div className="flex items-center w-full mx-auto justify-center">
            <button
              onClick={() => removeFromCart(product._id)}
              className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
            >
              <svg
                className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                fill="none"
                height="22"
                viewBox="0 0 22 22"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 11H5.5"
                  stroke=""
                  strokeLinecap="round"
                  strokeWidth="1.6"
                />
                <path
                  d="M16.5 11H5.5"
                  stroke=""
                  strokeLinecap="round"
                  strokeOpacity="0.2"
                  strokeWidth="1.6"
                />
                <path
                  d="M16.5 11H5.5"
                  stroke=""
                  strokeLinecap="round"
                  strokeOpacity="0.2"
                  strokeWidth="1.6"
                />
              </svg>
            </button>
            <input
              className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
              placeholder={cartItems[product._id]}
              onChange={(e) => {
                updateCartItemAmount(product._id, Number(e.target.value));
              }}
            />
            <button
              onClick={() => addToCart(product._id)}
              className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
            >
              <svg
                className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                fill="none"
                height="22"
                viewBox="0 0 22 22"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 5.5V16.5M16.5 11H5.5"
                  stroke=""
                  strokeLinecap="round"
                  strokeWidth="1.6"
                />
                <path
                  d="M11 5.5V16.5M16.5 11H5.5"
                  stroke=""
                  strokeLinecap="round"
                  strokeOpacity="0.2"
                  strokeWidth="1.6"
                />
                <path
                  d="M11 5.5V16.5M16.5 11H5.5"
                  stroke=""
                  strokeLinecap="round"
                  strokeOpacity="0.2"
                  strokeWidth="1.6"
                />
              </svg>
            </button>
          </div>
          <h6 className="text-red-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
            ৳{amount * product.price}
          </h6>
        </div>
      </div>
    </>
  );
};

export default CartCard;
