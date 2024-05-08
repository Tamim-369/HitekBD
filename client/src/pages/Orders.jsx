import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shop-context";

const Orders = () => {
  const { getUser } = useContext(ShopContext);
  const [userInfo, setUserInfo] = useState({});
  const [orders, setOrders] = useState([]);

  function formatDate(dateString) {
    const date = new Date(dateString);

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      // minute: "2-digit",
      // second: "2-digit",
      // timeZoneName: "short",
    };

    return date.toLocaleDateString("en-US", options);
  }

  const getSetUser = async () => {
    const newUserInfo = await getUser(localStorage.getItem("email"));
    setUserInfo(newUserInfo);
  };

  useEffect(() => {
    getSetUser();
    (async () => {
      const userOrders = await fetch(`/api/products/getOrder/${userInfo._id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await userOrders.json();
      // Sort orders by date in descending order
      data = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setOrders(data);
    })();
  }, [userInfo]);

  return (
    <>
      <div className="w-full min-h-[64vh] sm:w-11/12 md:w-9/12 mx-auto px-2 py-8 sm:px-3 lg:px-8">
        <h1 className="text-2xl font-bold mb-6">Orders</h1>
        <div className="overflow-x-auto w-full shadow-md pb-3 rounded-lg">
          <table className="w-full table-auto border-collapse bg-gray-100">
            <thead>
              <tr className="bg-red-600">
                <th className="px-4 py-3 text-left font-medium text-white">
                  Date
                </th>
                <th className="px-4 py-3 text-right font-medium text-white">
                  Amount
                </th>
                <th className="px-4 py-3 text-center font-medium text-white">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr className="border-b border-red-700" key={order._id}>
                  <td className="px-4 py-3 text-left">
                    {formatDate(order.date)}
                  </td>
                  <td className="px-4 py-3 text-right">৳{order.price}</td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium  text-white ${
                        order.status == "pending"
                          ? "bg-green-800"
                          : "bg-red-800"
                      } `}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Orders;
