import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaRegEdit, FaTrashAlt } from "react-icons/fa";

const DashProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const deleteProduct = async (id) => {
    const response = await fetch(`/api/products/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    getAllProducts();
  };
  const getAllProducts = async () => {
    const response = await fetch("/api/products/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setAllProducts(data);
    setFilteredProducts(data); // Set filteredProducts initially to all products
    setData(data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const filterProducts = () => {
    if (searchFilter === "") {
      setFilteredProducts(allProducts); // Reset filteredProducts to all products
    } else {
      const filtered = allProducts.filter((item) =>
        item.name.toLowerCase().includes(searchFilter.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  useEffect(() => {
    filterProducts();
  }, [searchFilter, allProducts]);

  return (
    <div>
      <div className="w-full min-h-[64vh] sm:w-11/12 md:w-11/12 mx-auto px-2 py-8 sm:px-3 lg:px-8">
        <h1 className="text-2xl font-bold mb-6">Orders</h1>
        <div className="overflow-x-auto w-full shadow-md  bg-gray-100 p-5">
          <div className="search">
            <input
              type="text"
              onChange={(e) => {
                e.preventDefault();
                setSearchFilter(e.target.value);
              }}
              name="searchText"
              placeholder="Search..."
              className="w-full px-2 py-2 text-sm focus:outline-none border border-gray-200 mb-3"
            />
          </div>
          <table className="w-full table-auto border-collapse bg-gray-100 ">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-4 py-2 text-left font-medium text-white">
                  Name
                </th>
                <th className="px-4 py-2 text-right font-medium text-white">
                  Price
                </th>

                <th className="px-4 py-2 text-center font-medium text-white">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => {
                console.log(product);
                return (
                  <tr className="border-b  border-gray-700" key={product._id}>
                    <td className="px-4 py-3 text-left">{product.name}</td>
                    <td className="px-4 py-3 text-right ">৳{product.price}</td>

                    <td className="">
                      <div className="flex justify-center items-center gap-2">
                        <div className="">
                          <Link
                            to={`/order?id=${product._id}`}
                            className="text-sm flex justify-center items-center  text-white rounded-full"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="22"
                              height="22"
                              viewBox="0 0 48 48"
                            >
                              <path d="M 40.960938 4.9804688 A 2.0002 2.0002 0 0 0 40.740234 5 L 28 5 A 2.0002 2.0002 0 1 0 28 9 L 36.171875 9 L 22.585938 22.585938 A 2.0002 2.0002 0 1 0 25.414062 25.414062 L 39 11.828125 L 39 20 A 2.0002 2.0002 0 1 0 43 20 L 43 7.2460938 A 2.0002 2.0002 0 0 0 40.960938 4.9804688 z M 12.5 8 C 8.3826878 8 5 11.382688 5 15.5 L 5 35.5 C 5 39.617312 8.3826878 43 12.5 43 L 32.5 43 C 36.617312 43 40 39.617312 40 35.5 L 40 26 A 2.0002 2.0002 0 1 0 36 26 L 36 35.5 C 36 37.446688 34.446688 39 32.5 39 L 12.5 39 C 10.553312 39 9 37.446688 9 35.5 L 9 15.5 C 9 13.553312 10.553312 12 12.5 12 L 22 12 A 2.0002 2.0002 0 1 0 22 8 L 12.5 8 z"></path>
                            </svg>
                          </Link>
                        </div>
                        <div
                          onClick={() => {
                            navigate(`/editProduct?id=${product._id}`);
                          }}
                          className="text-xl cursor-pointer text-emerald-700"
                        >
                          <FaRegEdit />
                        </div>
                        <div
                          onClick={() => deleteProduct(product._id)}
                          className="text-lg cursor-pointer text-red-700"
                        >
                          <FaTrashAlt />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashProducts;
