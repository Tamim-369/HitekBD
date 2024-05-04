import React, { useEffect } from "react";
import Carousel from "../Carousel";
import Button from "../Button";
import { Link, useLocation } from "react-router-dom";
const Hero = () => {
  const images = ["/watch.png", "/fan.png", "/airpod.png"];
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
    <>
      <div
        id="hero"
        className="relative z-0 p-2 bg-transparent  my-auto bottom-12"
      ></div>
      <div className="sm:h-[60vh] h-[100vh] my-auto md:bg-inherit ">
        <div className="bg-transparent flex  sm:mt-20 md:mt-20  md:w-10/12 mx-auto md:flex-row flex-col justify-center flex-wrap md:flex-nowrap items-center">
          <div className="hero w-full flex flex-col justify-center items-center   box-border p-10 md:flex-1 ">
            <div className="hero-content mx-auto md:w-full sm:pt-0 pt-96 text-center sm:w-10/12 md:text-left md:justify-start items-center justify-center  md:mt-0 mt-10 absolute md:relative z-10 md:z-auto flex-col lg:flex-row-reverse">
              <div className="w-[94%] mx-auto mt-10 sm:h-auto h-full  md:w-[100%] sm:mt-0">
                <h1 className="lg:text-4xl text-3xl font-semibold text-red-600  gap-3 ">
                  Welcome to <b className="text-red-600">Hitekbd</b>
                </h1>
                <p className="py-6 sm:px-0 px-2 md:px-0 lg:text-2xl text-xl text-black md:text-black">
                  Get the gadgets exclusive features in affordable price. We
                  provide best quality products.
                </p>
                <Link to="/products">
                  <Button type="button" round={"lg"} text="Shop Now" />
                </Link>
              </div>
            </div>
          </div>
          <div className="product-img  md:flex-1 w-full flex justify-center items-center mt-28  mx-auto md:mt-0">
            <Carousel images={images} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
