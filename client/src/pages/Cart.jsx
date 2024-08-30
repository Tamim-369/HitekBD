import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/shop-context";
import CartCard from "../components/CartCard";
import { loadStripe } from "@stripe/stripe-js";

const Cart = ({ getOneProduct, getAllProducts }) => {
  const navigate = useNavigate();
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getAllProducts();
      setAllItems(data);
    })();
  }, []);

  const {
    addToCart,
    cartItems,
    removeFromCart,
    updateCartItemAmount,
    getTotalCartAmount,
  } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51PtJXn2MxCzWAMPurkk8aPzb9QMWR8gYNWkbuaz7ZJ4FkdgeYARIMpkigoNabaXixOYvO9M5DSmNc2GcvEsZKIIx00Lc9XK6gj"
    );
    const body = {
      products: Object.keys(cartItems).map((productId) => ({
        name: allItems.find((item) => item._id === productId).name,
        price: allItems.find((item) => item._id === productId).price,
        quantity: cartItems[productId],
      })),
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer sk_test_51PtJXn2MxCzWAMPulz63fAFcjdW9Rd7uLdlV0duKePnkZmqumegX9GpgFc7T8jVuizyXLqFfoZfvwPI3qmdTDTcP004mcIm0qJ",
    };
    const response = await fetch("/api/pay/createCheckOutSession", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    const session = await response.json();
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <>
      <div>
        <h2 className="title font-manrope font-bold text-3xl leading-10 mt-8 text-center text-black">
          Shopping Cart
        </h2>
        <section className="py-10 w-11/12 mx-auto relative flex smd:flex-row flex-col">
          <div className=" w-full  px-4 md:px-5 lg-6 mx-auto">
            {allItems.map((item) => {
              if (cartItems[item._id] > 0) {
                return (
                  <CartCard
                    key={item._id}
                    product={item}
                    amount={cartItems[item._id]}
                    addToCart={addToCart}
                    cartItems={cartItems}
                    removeFromCart={removeFromCart}
                    updateCartItemAmount={updateCartItemAmount}
                  />
                );
              }
            })}
          </div>
          <div className="md:w-4/12 w-full  ">
            <div className="bg-gray-50 border shadow-md  rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
              <div className="flex items-center justify-between w-full mb-6">
                <p className="font-normal text-xl leading-8 text-gray-900">
                  Sub Total
                </p>
                <h6 className="font-semibold text-xl leading-8 text-gray-700">
                  ৳{totalAmount}
                </h6>
              </div>
              <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                <p className="font-normal text-xl leading-8 text-gray-900">
                  Delivery Charge
                </p>
                <h6 className="font-semibold text-xl leading-8 text-gray-700">
                  ৳120
                </h6>
              </div>
              <div className="flex items-center justify-between w-full py-6">
                <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">
                  Total
                </p>
                <h6 className="font-manrope font-medium text-2xl leading-9 text-black">
                  ৳{totalAmount + 120}
                </h6>
              </div>
            </div>
            {totalAmount > 0 ? (
              <div className="flex items-center w-full flex-col sm:flex-row justify-center gap-3 mt-8">
                <button
                  onClick={() => navigate(-1)}
                  className="rounded-lg  p-3 text-center justify-center items-center bg-gray-200 font-semibold text-sm text-black border border-gray-300 flex transition-all duration-500 "
                >
                  Continue Shopping
                </button>
                <button
                  onClick={makePayment}
                  className="rounded-lg p-3 text-center justify-center items-center bg-red-600 font-semibold text-sm text-white flex transition-all duration-500 hover:bg-red-700"
                >
                  Checkout
                </button>
              </div>
            ) : (
              <h1>Your Cart is empty</h1>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
