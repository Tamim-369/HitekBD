import React from "react";
import { FaUsers } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { IoBagCheckOutline, IoCartOutline } from "react-icons/io5";
import RecentOrders from "./RecentOrders";
import Delivered from "./Delivered";
const DashBoard = ({ currentTab, setCurrentTab }) => {
  return (
    <>
      <div className="  grid grid-cols-2 w-11/12 mx-auto  h-7/12 mt-28">
        <div
          onClick={() => {
            setCurrentTab(<RecentOrders />);
          }}
          className=" p-5 sm:p-10  bg-white m-2 rounded-md flex flex-col justify-center items-center"
        >
          <div className="text-5xl">
            <IoCartOutline />
          </div>
          <div className="text-lg sm:text-xl font-semibold">12 Pending</div>
        </div>
        <div
          onClick={() => {
            setCurrentTab(<Delivered />);
          }}
          className=" p-5 sm:p-10  bg-white m-2 rounded-md flex flex-col justify-center items-center"
        >
          <div className="text-5xl">
            <IoBagCheckOutline />
          </div>
          <div className="text-lg sm:text-xl font-semibold">12 Delivered</div>
        </div>
        <div
          onClick={() => {
            setCurrentTab();
          }}
          className=" p-5 sm:p-10  bg-white m-2 rounded-md flex flex-col justify-center items-center"
        >
          <div className="text-5xl">
            <FaUsers />
          </div>
          <div className="text-lg sm:text-xl font-semibold">4 Users</div>
        </div>
        <div
          onClick={() => {
            setCurrentTab();
          }}
          className=" p-5 sm:p-10  bg-white m-2 rounded-md flex flex-col justify-center items-center"
        >
          <div className="text-5xl">
            <GiProgression />
          </div>
          <div className="text-lg sm:text-xl font-semibold">৳1200 Revenue</div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
