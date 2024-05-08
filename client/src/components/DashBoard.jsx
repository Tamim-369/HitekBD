import React, { useContext, useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { IoBagCheckOutline, IoCartOutline } from "react-icons/io5";
import RecentOrders from "./RecentOrders";
import Delivered from "./Delivered";
import { ShopContext } from "../context/shop-context";
const DashBoard = ({ currentTab, setCurrentTab, getAllOrders }) => {
  const [recentOrders, setRecentOrders] = useState([]);
  const [pending, setPending] = useState(0);
  const [delivered, setDelivered] = useState(0);
  const { getUsers } = useContext(ShopContext);
  const [totalUsers, setTotalUsers] = useState(0);
  const [revenue, setRevenue] = useState(0);
  useEffect(() => {
    (async () => {
      const data = await getAllOrders();
      setRecentOrders(data);
      const pend = data.filter((order) => order.status === "pending").length;
      console.log(pend);
      setPending(pend);
      const deli = data.filter((order) => order.status === "Shipped").length;
      console.log(deli);
      setDelivered(deli);
      const tot = await getUsers();
      setTotalUsers(tot.length);
      setRevenue(data.reduce((price, order) => price + order.price, 0));
    })();
  }, []);
  return (
    <>
      <div className="  grid grid-cols-2 w-11/12 mx-auto  h-7/12 mt-28">
        <div className=" p-5 sm:p-10  bg-white m-2 rounded-md flex flex-col justify-center items-center">
          <div className="text-5xl">
            <IoCartOutline />
          </div>
          <div className="text-lg sm:text-xl font-semibold">
            {pending} Pending
          </div>
        </div>
        <div className=" p-5 sm:p-10  bg-white m-2 rounded-md flex flex-col justify-center items-center">
          <div className="text-5xl">
            <IoBagCheckOutline />
          </div>
          <div className="text-lg sm:text-xl font-semibold">
            {delivered} Delivered
          </div>
        </div>
        <div className=" p-5 sm:p-10  bg-white m-2 rounded-md flex flex-col justify-center items-center">
          <div className="text-5xl">
            <FaUsers />
          </div>
          <div className="text-lg sm:text-xl font-semibold">
            {totalUsers} Users
          </div>
        </div>
        <div className=" p-5 sm:p-10  bg-white m-2 rounded-md flex flex-col justify-center items-center">
          <div className="text-5xl">
            <GiProgression />
          </div>
          <div className="text-lg sm:text-xl font-semibold">
            ৳{revenue} Revenue
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
