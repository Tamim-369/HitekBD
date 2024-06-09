import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Button from "./Button";
import { Link, useLocation } from "react-router-dom";
import Loader from "./Loader";
const LatestProducts = ({ getAllProducts }) => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchAllProducts = async () => {
      setLoading(true);
      try {
        // Assuming getAllProducts is a function that fetches all products
        const allProducts = await getAllProducts();
        const sortedProducts = [...allProducts].sort((a, b) => b.date - a.date);
        const latestProducts = sortedProducts.slice(0, 5);

        setProducts(latestProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // element.scrollIntoView();
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);
  if (loading) {
    return (
      <div className="w-full h-full mt-10 flex justify-center items-center">
        <Loader />
      </div>
    );
  }
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
              {products.map((product, index) => {
                if (index < 3) {
                  return <ProductCard product={product} />;
                }
              })}
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
