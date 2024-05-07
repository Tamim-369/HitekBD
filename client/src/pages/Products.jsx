import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import Loader from "../components/Loader";
const Products = ({ getAllProducts }) => {
  const [toggleCategory, setToggleCategory] = useState(false);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const allProducts = await getAllProducts();
      setProducts(allProducts);
      setLoading(false);
    })();
  }, []);

  return (
    <div>
      <div
        className="px-1 bg-white mt-0   text-center flex flex-row py-0  mx-auto  w-full   fixed 
      top-[3.4rem] z-20 border-b justify-between border rounded-none "
      >
        <div className="first">
          <div className="toggle-category absolute  left-0 sm:left-0">
            <button
              className={`p-[7.5px] text-sm my-[2px] px-[1.5rem] border-none  rounded-none bg-red-500 text-white ${
                toggleCategory && "bg-gray-100 "
              }`}
              type="button"
              onClick={() => setToggleCategory(!toggleCategory)}
            >
              {category + " Products"}
            </button>
          </div>
          {toggleCategory && (
            <div className="category absolute top-[2.3rem] left-0 bg-white rounded-b-lg z-30 sm:top-[2.3rem] sm:left-0  flex flex-col justify-center items-center">
              <button
                onClick={() => {
                  setCategory("All");
                  setToggleCategory(!toggleCategory);
                }}
                className=" text-sm sm:rounded-none hover:bg-red-500 hover:text-white w-full border-t  text-black p-2 px-[1.3rem]"
              >
                All
              </button>
              <button
                onClick={() => {
                  setCategory("Fans");
                  setToggleCategory(!toggleCategory);
                }}
                className=" text-sm sm:rounded-none hover:bg-red-500 hover:text-white w-full border-t  text-black p-2 px-[1.3rem] "
              >
                Fans
              </button>
              <button
                onClick={() => {
                  setCategory("Watches");
                  setToggleCategory(!toggleCategory);
                }}
                className=" text-sm sm:rounded-none hover:bg-red-500 hover:text-white w-full  border-t text-black p-2 px-[1.3rem] "
              >
                Watches
              </button>
              <button
                onClick={() => {
                  setCategory("Headphones");
                  setToggleCategory(!toggleCategory);
                }}
                className=" text-sm sm:rounded-none hover:bg-red-500 hover:text-white w-full  border-t text-black p-2  px-[1.3rem]"
              >
                Headphones
              </button>
            </div>
          )}
        </div>
        <div className="second">
          <Link to={"/allCombo"}>
            <button className="text-sm sm:rounded-none rounded-lg  p-2 px-3 ">
              View Combos
            </button>
          </Link>
        </div>
      </div>
      <div className="flex  justify-center items-start mt-12 sm:mt-10 md:mt-8 ">
        <div className="border-t  w-full md:w-full mx-auto flex flex-col justify-center items-center">
          <section className="text-gray-600 body-font w-full flex flex-col justify-center items-center">
            <div className="xs:px-2 md:px-3 py-10 w-full mx-auto flex flex-col justify-center items-center">
              {loading ? (
                <Loader />
              ) : (
                <div className="grid md:w-11/12 sm:grid-cols-3  w-full grid-cols-1 xs:grid-cols-2 gap-2 xs:px-auto px-2 xs:gap-3 sm:gap-3 md:gap-3 lg:gap-3 -m-4  justify-center items-start ">
                  {products.map((product) => (
                    <ProductCard
                      name={product.name}
                      price={product.price}
                      category={product.category}
                      image={product.image}
                      id={product._id}
                    />
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
