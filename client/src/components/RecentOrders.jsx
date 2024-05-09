import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shop-context";

const RecentOrders = () => {
  const [orders, setOrders] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const changeStatus = async (id) => {
    const res = await fetch(`api/products/setOrderStatus/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userOrders = await fetch(`/api/products/getOrder/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await userOrders.json();
        // Sort orders from latest to oldest based on the date
        const sortedOrders = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setOrders(sortedOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, [orders]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userOrders = await fetch(`/api/products/getOrder/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await userOrders.json();
        // Sort orders from latest to oldest based on the date
        const sortedOrders = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setOrders(sortedOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <div className="w-full min-h-[64vh] sm:w-11/12 md:w-9/12 mx-auto px-2 py-8 sm:px-3 lg:px-8">
        <h1 className="text-2xl font-bold mb-6">Orders</h1>
        <div className="overflow-x-auto w-full shadow-md pb-3 rounded-lg">
          <div className="btn-group mb-2 flex gap-1">
            <button
              onClick={() => {
                setFilterStatus("all");
              }}
              className="py-1 px-2 text-sm bg-blue-600 rounded-md text-white"
            >
              All
            </button>
            <button
              onClick={() => {
                setFilterStatus("Shipped");
              }}
              className="py-1 px-2 text-sm bg-emerald-600 rounded-md text-white"
            >
              Shipped
            </button>
            <button
              onClick={() => {
                setFilterStatus("pending");
              }}
              className="py-1 px-2 text-sm bg-red-600 rounded-md text-white"
            >
              Pending
            </button>
          </div>
          <table className="w-full table-auto border-collapse bg-gray-100 ">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-4 py-1 text-sm text-left font-medium text-white">
                  Date
                </th>
                <th className="px-4 py-1 text-sm text-right xs:block hidden font-medium text-white">
                  Amount
                </th>
                <th className="px-4 py-1 text-sm text-center font-medium text-white">
                  Status
                </th>
                <th className="px-4 py-1 text-sm text-center font-medium text-white">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  className={`border-b ${
                    filterStatus == order.status ? "hidden" : ""
                  } border-gray-700`}
                  key={order._id}
                >
                  <td className="px-4 py-2 text-sm text-left">
                    {formatDate(order.date)}
                  </td>
                  <td className="px-4 py-2 text-sm text-right xs:block hidden">
                    ৳{order.price}
                  </td>
                  <td className="px-4 py-2 text-sm text-right  gap-1">
                    <button
                      className={` px-3 py-1 rounded-full  text-xs font-medium  text-white ${
                        order.status == "pending"
                          ? "bg-red-800"
                          : "bg-emerald-800"
                      } `}
                    >
                      {order.status}
                    </button>
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
    </div>
  );
};

export default RecentOrders;
