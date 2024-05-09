import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";

const Order = () => {
  const [orderData, setOrderData] = useState({});
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("Make Shipped");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get("id");

  const getProductData = async (id) => {
    try {
      const response = await fetch(`/api/products/single/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch product data");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching product data:", error);
      return null;
    }
  };
  const changeStatus = async (id) => {
    const res = await fetch(`api/products/setOrderStatus/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data) {
      alert("Order status is now shipped");
    }
    console.log(data);
  };
  useEffect(() => {
    const fetchData = async () => {
      if (!orderId) {
        alert("Order id is missing");
        return;
      }
      setLoading(true);
      try {
        const response = await fetch(`/api/products/getOneOrder/${orderId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch order data");
        }
        const data = await response.json();
        setOrderData(data);
        const productIds = data.products.map((product) => product.productId);
        const productInfoPromises = productIds.map(getProductData);
        const productInfos = await Promise.all(productInfoPromises);
        setProductData(productInfos.filter(Boolean));
      } catch (error) {
        console.error("Error fetching order data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [orderId]);

  return (
    <>
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="min-h-[70dvh] bg-gray-100 ">
          <h1 className="mb-10 text-center text-2xl font-bold">
            Order Details
          </h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {productData.map((product, index) => {
                const info = orderData.products.filter(
                  (p) => p.productId === product._id
                );
                console.log();
                return (
                  <div
                    key={index}
                    className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                  >
                    <img
                      src={product.image}
                      alt="product-image"
                      className="w-full rounded-lg sm:w-40"
                    />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">
                          {product.name}
                        </h2>
                        <p className="mt-1 text-sm ">
                          <b className="font-bold">Description: </b>{" "}
                          {product.description.slice(0, 100)}...
                        </p>
                        <p className="flex text-sm  items-center border-gray-100">
                          <b className="mr-1">Amount:</b>
                          {info[0].amount}
                        </p>
                        <p className="flex text-sm  items-center border-gray-100">
                          <b className="mr-1">Price:</b>
                          {product.price}
                        </p>
                        <p className="flex text-sm  items-center border-gray-100">
                          <b className="mr-1">Total:</b>
                          {product.price * info[0].amount}
                        </p>
                      </div>
                      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"></div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Sub total */}
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="flex justify-between">
                <p className="text-gray-700">Username</p>
                <p className="text-gray-700">{orderData.name}</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between">
                <p className="text-gray-700">Phone</p>
                <p className="text-gray-700">{orderData.phoneNumber}</p>
              </div>
              <hr className="my-2" />

              <div className="flex justify-between">
                <p className="text-gray-700">Payment</p>
                <p className="text-gray-700">{orderData.paymentMethod}</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between">
                <p className="text-gray-700">City</p>
                <p className="text-gray-700">{orderData.city}</p>
              </div>
              <hr className="my-2" />

              <div className="flex justify-between">
                <p className="text-gray-700">State</p>
                <p className="text-gray-700">{orderData.state}</p>
              </div>
              <hr className="my-2" />

              <div className="flex justify-between">
                <p className="text-gray-700">Address</p>
                <p className="text-gray-700">{orderData.street}</p>
              </div>
              <hr className="my-4" />

              <div className="flex justify-between">
                <p className="text-gray-700">Price</p>
                <p className="text-gray-700">{orderData.price}</p>
              </div>
              <hr className="my-4" />

              <button
                onClick={() => {
                  changeStatus(orderId);
                  setText("Order Shipped");
                }}
                className="mt-6 w-full rounded-md bg-red-500 py-1.5 font-medium text-red-50 hover:bg-red-600"
              >
                {text}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Order;
