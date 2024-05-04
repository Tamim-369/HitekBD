import React, { useState } from "react";
import ImageMagnifier from "../components/ImageMagnifier";
import { Link, useNavigate } from "react-router-dom";
const Product = () => {
  const [add, setAdd] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
            <div className="lg:w-1/2  w-full lg:h-auto   object-scale-down object-center rounded">
              <ImageMagnifier
                src="/watch.png"
                width="full"
                height="full"
                magnifierHeight={150}
                magnifierWidth={170}
                zoomLevel={2}
              />
            </div>
            {/* <img
              alt="ecommerce"
              className="lg:w-1/2  w-full lg:h-auto h-96  object-scale-down object-center rounded"
              src="/fan.png"
            /> */}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                The Catcher in the Rye
              </h1>
              <div className="flex mb-2"></div>
              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex mt-3 items-center pb-5 border-b-2 border-red-400 mb-5"></div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ৳58.00
                </span>
                <button
                  onClick={() => {
                    if (add == true) {
                      navigate("/checkout");
                    }
                    setAdd(!add);
                  }}
                  className="flex ml-auto text-white bg-red-500  shadow-lg border-0 py-2 px-6 focus:outline-none  rounded-lg"
                >
                  {add ? <Link to="/checkout">CheckOut</Link> : "Add To Cart"}
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
