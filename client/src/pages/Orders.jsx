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
                <th className="px-4 py-3 text-center font-medium text-white">
                  Preview
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

                  <td className="">
                    <div className="flex justify-center items-center gap-1">
                      <div>
                        <Link
                          to={`/order?id=${order._id}`}
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
                    </div>
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
