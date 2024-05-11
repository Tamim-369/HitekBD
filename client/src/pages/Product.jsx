import React, { useContext, useEffect, useState } from "react";
import ImageMagnifier from "../components/ImageMagnifier";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { FaPlus, FaMinus } from "react-icons/fa";
import { ShopContext } from "../context/shop-context";
import RecomendProduct from "../components/RecomendProduct";
const Product = ({ getOneProduct }) => {
  const [product, setProduct] = useState({});
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("id");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showCheckout, setShowCheckout] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const foundProduct = await getOneProduct(productId);
      setProduct(foundProduct);
      setLoading(false);
    })();
  }, []);
  const { addToCart, cartItems, removeFromCart, setAddedProducts } =
    useContext(ShopContext);
  return (
    <>
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-screen">
          <section className="text-gray-600 body-font overflow-hidden ">
            <div className="container px-5 pt-5 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
                <div className="lg:w-1/2  w-full lg:h-auto   object-scale-down object-center rounded">
                  <ImageMagnifier
                    src={`${product?.image}`}
                    width="full"
                    height="full"
                    magnifierHeight={150}
                    magnifierWidth={170}
                    zoomLevel={2}
                  />
                </div>
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    {product.category}
                  </h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    {product.name}
                  </h1>
                  <p className="leading-relaxed whitespace-pre-wrap">
                    {product.description}
                  </p>
                  <div className="title-font font-medium text-2xl pt-5 text-gray-900">
                    ৳{product.price - (product.price * product.discount) / 100}
                  </div>
                  <div className="flex mt-3 items-center border-b-2 border-red-400 mb-5"></div>

                  <div className="flex pb-10 lg:pb-0">
                    <div className="flex flex-1 items-center w-full mx-auto justify-center ">
                      <button
                        onClick={() => removeFromCart(product._id)}
                        className="group rounded-l-full px-3 py-[9px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50 bg-white text-black"
                      >
                        <FaMinus />
                      </button>
                      <input
                        className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-4/12 placeholder:text-gray-900 bg-white py-[3px] text-center bg-transparent"
                        value={cartItems[product._id] || 0}
                        type="number"
                      />
                      <button
                        onClick={() => addToCart(product._id)}
                        className="group rounded-r-full px-3 py-[9px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 text-black"
                      >
                        <FaPlus />
                      </button>
                    </div>

                    <div className="flex-1">
                      <button
                        onClick={() => {
                          setAddedProducts(false);
                          addToCart(product._id);
                        }}
                        className="flex ml-auto text-white bg-red-600  shadow-lg border-0 py-2 px-6 focus:outline-none  rounded-lg"
                      >
                        Add to Cart
                      </button>
                      {product.review ? (
                        <a
                          href={product.review}
                          className="flex ml-auto text-white bg-red-600  shadow-lg border-0 py-2 px-6 focus:outline-none  rounded-lg"
                        >
                          Review
                        </a>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="recomended flex flex-col justify-center items-center bg-white mt-5">
            <h1 className="text-2xl font-bold text-gray-900 mt-4 mb-2 ">
              Suggested
            </h1>
            <RecomendProduct
              id={product._id}
              category={product.category}
              discount={product.discount}
            />
          </section>
        </div>
      )}
    </>
  );
};

export default Product;
