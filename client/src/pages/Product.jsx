import React, { useContext, useEffect, useState } from "react";
import ImageMagnifier from "../components/ImageMagnifier";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { FaPlus, FaMinus } from "react-icons/fa";
import { ShopContext } from "../context/shop-context";
import RecomendProduct from "../components/RecomendProduct";
import "../image-scroll.css";
import "react-toastify/dist/ReactToastify.css";

import { toast } from "react-toastify";
const Product = ({ getOneProduct }) => {
  const [product, setProduct] = useState({});
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [mainImg, setMainImg] = useState("/airpod.png");
  const productId = queryParams.get("id");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showCheckout, setShowCheckout] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const foundProduct = await getOneProduct(productId);
      setProduct(foundProduct);
      console.log(foundProduct);
      setMainImg(foundProduct.images[0]);
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
            <div className=" sm:container  px-4 md:px-20  pt-5 mx-auto">
              <div className="w-full mx-auto flex  flex-wrap items-center">
                <div className="lg:w-1/2 my-5 w-full  sm:h-full  flex flex-col-reverse sm:flex-row object-scale-down object-center rounded">
                  <div className="w-full sm:ml-4 flex sm:flex-row flex-col-reverse">
                    <div className="flex sm:flex-col sm:mr-4 md:mr-2 sm:h-96  sm:w-32  my-auto image-scroll overflow-x-auto sm:overflow-y-auto sm:border-r-2 border-r-2 border-l-2 sm:border-l-0  border-gray-300  h-32 w-full bg-gray-200 py-4 sm:py-2 sm:px-1  px-2">
                      {product.images &&
                        product.images.map((image, index) => (
                          <img
                            key={index}
                            className="w-full  sm:my-1 h-full rounded-md  bg-white mx-2 sm:mx-0 object-contain object-center cursor-pointer"
                            src={image}
                            onClick={() => setMainImg(image)}
                          />
                        ))}
                    </div>
                    <div className="my-auto h-96">
                      <ImageMagnifier
                        src={`${mainImg}`}
                        width="full"
                        height="full"
                        magnifierHeight={150}
                        magnifierWidth={170}
                        zoomLevel={2.5}
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full sm:mt-0 mt-3  lg:pl-10 lg:py-6  ">
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
                        onClick={() => {
                          removeFromCart(product._id);
                          if (cartItems[product._id] < 2) {
                            toast.warning(`Removed ${product.name} from cart`);
                          }
                        }}
                        className="group rounded-l-full px-3 py-[9px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50 bg-white text-black"
                        disabled={cartItems[product._id] < 1}
                      >
                        <FaMinus />
                      </button>
                      <input
                        className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-4/12 placeholder:text-gray-900 bg-white py-[3px] text-center bg-transparent"
                        value={cartItems[product._id] || 0}
                        type="number"
                      />
                      <button
                        onClick={() => {
                          addToCart(product._id);
                          if (cartItems[product._id] < 1) {
                            toast.success(`Added ${product.name} to cart`);
                          }
                        }}
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
                          if (cartItems[product._id] < 1) {
                            toast.success(`Added ${product.name} to cart`);
                          }
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
