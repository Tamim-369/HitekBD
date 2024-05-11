import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../components/Loader";
const Search = ({ getAllProducts }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q");
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const allProducts = await getAllProducts();
        setProducts(allProducts);
        const filtered = allProducts.filter((product) =>
          product.description.toLowerCase().includes(query.toLowerCase())
        );
        console.log(filtered);
        setFilteredProducts(filtered);
        setloading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData(); // Invoke the function
  }, [getAllProducts, query]);

  return (
    <div className="w-full min-h-[66dvh] bg-gray-100">
      {loading ? (
        <div className="w-[100dvw] absolute h-screen flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="w-full h-full flex flex-col justify-center items-center content-center grid-cols-1 py-10 px-5">
          {filteredProducts?.map((product) => (
            <div className="card mt-5 mx-auto lg:w-8/12 sm:w-10/12 xs:w-9/12  flex sm:flex-row flex-col justify-center items-center bg-white rounded-xl shadow-md">
              <div className="productimage sm:w-4/12 sm:h-48 w-full  bg-gradient-to-tl from-gray-500 to-gray-300 sm:rounded-l-xl sm:rounded-r-none rounded-t-xl">
                <img
                  src={product.image}
                  className="object-cover h-56 sm:h-full w-full sm:rounded-l-xl rounded-t-xl"
                  alt=""
                />
              </div>
              <div className="text sm:w-8/12 p-3 h-full flex flex-col ">
                <h1 className="text-lg font-semibold text-gray-700">
                  {product.name}
                </h1>
                <small className="text-base text-gray-600">
                  {product.description.slice(0, 110)}
                </small>
                <div className="btn mt-2">
                  <button
                    onClick={() => navigate(`/product?id=${product._id}`)}
                    className="bg-red-600 text-white px-2 py-2 text-sm rounded-md"
                  >
                    View Product
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
