import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import Button from "./Button";
import { Link, useLocation } from "react-router-dom";

const LatestProducts = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // element.scrollIntoView();
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);
  return (
    <div>
      <div className=" bg-white w-full mx-auto flex flex-col justify-center items-center">
        <h1 className="text-center text-2xl pt-4 font-sans font-medium   ">
          <span className=" text-gray-900 font-bold">Latest Products</span>
        </h1>
        <section
          id="latest"
          className="text-gray-600 body-font w-full md:w-10/12 flex flex-col justify-center items-center"
        >
          <div className="container px-5 py-8 w-full mx-auto flex flex-col justify-center items-center">
            <div className="grid lg:grid-cols-3 w-full sm:grid-cols-2 grid-cols-1 gap-4 -m-4  justify-center items-start">
              <ProductCard
                name="Airpod Pro"
                price="16.00"
                category="Airpods"
                image="/airpod.png"
              />
              <ProductCard
                name="Cooler Fan"
                price="16.00"
                category="Fan"
                image="/fan.png"
              />
              <ProductCard
                name="Cooler Fan"
                price="16.00"
                category="Fan"
                image="/mini.jpeg"
              />
              <ProductCard
                name="watch "
                price="16.00"
                category="Fan"
                image="/watch.png"
              />
              <ProductCard
                name="watch "
                price="16.00"
                category="Fan"
                image="/fan.png"
              />
              <ProductCard
                name="watch "
                price="16.00"
                category="Fan"
                image="/airpod.png"
              />
            </div>
            <div className="text-center mt-10">
              <Link to="/products">
                <Button
                  type={"button"}
                  text={"View All"}
                  round={"lg"}
                  padding={2}
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LatestProducts;
