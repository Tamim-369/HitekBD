import React, { useEffect } from "react";
import { FaUser, FaUserAstronaut, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdPendingActions } from "react-icons/md";
import { IoBagCheckSharp } from "react-icons/io5";
import { BiSolidUserDetail } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex  flex-col justify-center items-center min-h-full pt-5 pb-10 sm:w-10/12 w-full md:w-8/12 mx-auto">
      <div className="grid grid-col-1 sm:grid-cols-2 w-full h-full px-5">
        <div className="p-5 w-auto min-h-32  bg-gray-200 border  m-2 rounded-xl flex flex-col justify-center items-center gap-1">
          <div className="text-6xl">
            <FaShoppingCart />
          </div>
          <div className="text-xl font-semibold">2 items in cart </div>
        </div>
        <div className="p-5 w-auto min-h-32  bg-gray-200 border flex justify-center items-center text-xl font-semibold  m-2 rounded-xl flex-col">
          <div className=" text-6xl">
            {/* <img src="/orders-icon.svg" className="w-14" alt="" srcset="" /> */}
            <IoBagCheckSharp />
          </div>
          <div className="">12 orders delivered</div>
        </div>
        <div className="p-5 w-auto min-h-32  bg-gray-200 border  m-2 rounded-xl flex flex-col justify-center items-center gap-1">
          <div className="text-6xl">
            <MdPendingActions />
          </div>
          <div className="text-xl font-semibold">2 orders pending </div>
        </div>

        <div className="p-5 w-auto min-h-32  bg-gray-200 border  m-2 rounded-xl">
          4
        </div>
        <div className="p-5 w-auto min-h-32  bg-gray-200 border  m-2 rounded-xl">
          4
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
