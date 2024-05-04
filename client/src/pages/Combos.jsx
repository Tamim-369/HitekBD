import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ComboCard from "../components/ComboCard";
const Combos = () => {
  const [toggleCategory, setToggleCategory] = useState(false);
  const [category, setCategory] = useState("All");
  const image = ["/watch.png", "/mini.jpeg", "/airpod.png"];

  return (
    <div>
      {" "}
      <div
        className="px-1 bg-white mt-0   text-center flex flex-row py-0  mx-auto  w-full   fixed 
      top-[3.5rem] z-20 border-b justify-between border rounded-none "
      >
        <div className="first">
          <div className="toggle-category absolute  left-0 sm:left-0">
            <button
              className={`p-[7.5px] text-sm my-[0.7px] px-[1.5rem] border-none  rounded-none bg-red-500 text-white ${
                toggleCategory && "bg-gray-100 "
              }`}
              type="button"
              onClick={() => setToggleCategory(!toggleCategory)}
            >
              {category + " Combos"}
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
          <Link to={"/products"}>
            <button className="text-sm  sm:rounded-none rounded-lg  p-2 px-3  ">
              View Products
            </button>
          </Link>
        </div>
      </div>
      <div className="flex  justify-center items-start mt-20 sm:mt-8 ">
        <div className="border-t  w-full mx-auto flex flex-col justify-center items-center">
          <section className="text-gray-600 body-font w-full flex flex-col justify-center items-center">
            <div className="container sm:py-10 w-10/12 xs:w-full  flex flex-col justify-center items-center">
              <div className=" flex flex-col xs:grid md:grid-cols-3 2xs:grid-cols-2  xs:w-full grid-cols-1  gap-2 xs:px-auto px-2 xs:gap-2 sm:gap-2 md:gap-2 lg:gap-3 -m-4  justify-center items-start ">
                <ComboCard
                  name="Airpod Pro"
                  price="16.00"
                  category="Airpods"
                  image={image[1]}
                />
                <ComboCard
                  name="Airpod Pro"
                  price="16.00"
                  category="Airpods"
                  image={image[0]}
                />
                <ComboCard
                  name="Airpod Pro"
                  price="16.00"
                  category="Airpods"
                  image={image[2]}
                />
                <ComboCard
                  name="Airpod Pro"
                  price="16.00"
                  category="Airpods"
                  image={image[1]}
                />
                <ComboCard
                  name="Airpod Pro"
                  price="16.00"
                  category="Airpods"
                  image={image[1]}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Combos;
