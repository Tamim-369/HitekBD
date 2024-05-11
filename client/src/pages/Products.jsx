import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import Loader from "../components/Loader";
const Products = ({ getAllProducts }) => {
  const [toggleCategory, setToggleCategory] = useState(false);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [sortedProducts, setSortedProducts] = useState(products);
  const [discount, setDiscount] = useState(false);
  const [loading, setLoading] = useState(false);

  const showOldest = async () => {
    const sorted = [...products].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setSortedProducts(sorted);
  };

  const showLatest = async () => {
    const sorted = [...products].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setSortedProducts(sorted);
  };
  useEffect(() => {
    (async () => {
      setLoading(true);
      const allProducts = await getAllProducts();
      setProducts(allProducts);
      setLoading(false);
    })();
  }, []);
  useEffect(() => {
    setProducts(sortedProducts);
  }, [sortedProducts]);

  return (
    <div className="w-full flex smd:flex-row flex-col min-h-[66dvh] bg-gray-50">
      <div className="w-full smd:w-3/12  flex bg-gray-50 justify-start items-start  smd:min-h-screen ">
        <div className="main mx-2 smd:ml-4 py-3 px-2 rounded-xl mt-2 smd:mt-4 flex flex-col justify-center items-center w-full">
          <div className="filters w-full flex smd:flex-col justify-center items-start ">
            <div className="category w-full">
              <h3 className="text-lg font-bold p-1">Categories</h3>
              <div className="btn-group flex flex-wrap w-full">
                <button
                  onClick={() => {
                    setCategory("All");
                  }}
                  className="p-[0.34rem]  m-1 w-auto text-sm bg-gray-800 text-white rounded-md"
                >
                  All Products
                </button>
                <button
                  onClick={() => {
                    setCategory("Fan");
                  }}
                  className="p-[0.34rem]  m-1 w-auto text-sm bg-emerald-600 text-white rounded-md"
                >
                  Fans
                </button>
                <button
                  onClick={() => {
                    setCategory("Watch");
                  }}
                  className="p-[0.34rem]  m-1 w-auto text-sm bg-yellow-500 text-white rounded-md"
                >
                  Watch
                </button>
                <button
                  onClick={() => {
                    setCategory("Humidifier");
                  }}
                  className="p-[0.34rem]  m-1 w-auto text-sm bg-red-500 text-white rounded-md"
                >
                  Humidifier
                </button>
              </div>
            </div>
            <div className="checks smd:w-auto w-[100%]">
              <h3 className="text-lg font-bold p-1">Filters</h3>
              <div className="btn-group flex flex-wrap  p-1">
                <div className="smd:flex grid grid-cols-1 sm:grid-cols-2 gap-2 smd:flex-col justify-center items-center pl-1">
                  <div className="flex items-center mb-1">
                    <input
                      id="country-option-1"
                      type="checkbox"
                      name="countries"
                      onClick={() => setDiscount((prev) => !prev)}
                      defaultValue="USA"
                      className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                      aria-labelledby="country-option-1"
                      aria-describedby="country-option-1"
                      defaultChecked=""
                    />
                    <label
                      htmlFor="country-option-1"
                      className="text-sm font-medium text-gray-900 ml-2 block"
                    >
                      Show discounts
                    </label>
                  </div>
                  <div className="flex items-center mb-1">
                    <input
                      id="country-option-2"
                      type="radio"
                      name="countries"
                      onClick={() => showOldest()}
                      defaultValue="USA"
                      className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                      aria-labelledby="country-option-1"
                      aria-describedby="country-option-1"
                      defaultChecked=""
                    />
                    <label
                      htmlFor="country-option-2"
                      className="text-sm font-medium text-gray-900 ml-2 block"
                    >
                      Oldest to latest
                    </label>
                  </div>
                  <div className="flex items-center mb-1">
                    <input
                      id="country-option-3"
                      type="radio"
                      name="countries"
                      onClick={() => showLatest()}
                      defaultValue="USA"
                      className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                      aria-labelledby="country-option-1"
                      aria-describedby="country-option-1"
                      defaultChecked=""
                    />
                    <label
                      htmlFor="country-option-3"
                      className="text-sm font-medium text-gray-900 ml-2 block"
                    >
                      Latest to oldest
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full mx-auto smd:w-11/12  border-b-2  bg-gray-100 overflow-auto  justify-center items-start smd:p-2 ">
        <div className="border-t  w-full smd:w-full mx-auto flex flex-col justify-center items-center">
          <section className="text-gray-600 body-font w-full flex flex-col justify-center items-center">
            <div className=" py-5 w-full mx-auto flex flex-col justify-center items-center">
              {loading ? (
                <div className="w-full h-96 animate-pulse  flex justify-center items-center">
                  <Loader />
                </div>
              ) : (
                <div className="grid md:w-full sm:grid-cols-3 lg:grid-cols-3 smd:grid-col-3  w-full grid-cols-1 xs:grid-cols-2 gap-2 xs:px-auto px-2 xs:gap-3 sm:gap-1 md:gap-1 lg:gap-2 -m-4  justify-center items-start ">
                  {products.map((product) => (
                    <div
                      className={`${
                        category === "All" || category == product.category
                          ? ""
                          : "hidden"
                      } ${
                        discount ? (product.discount > 0 ? "" : "hidden") : ""
                      }`}
                    >
                      <ProductCard
                        name={product.name}
                        price={product.price}
                        category={product.category}
                        image={product.image}
                        id={product._id}
                        discount={product.discount}
                        product={product}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Products;
