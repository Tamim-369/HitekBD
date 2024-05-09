import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { RxCross2, RxDashboard } from "react-icons/rx";
import {
  IoBagAdd,
  IoBagCheckOutline,
  IoBagHandle,
  IoBagHandleOutline,
} from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { RiCrossLine, RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { TbLogout } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiMenuLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import DashBoard from "../components/DashBoard";
import UploadProduct from "../components/UploadProduct";
import Delivered from "../components/Delivered";
import RecentOrders from "../components/RecentOrders";
import DashProducts from "../components/DashProducts";
import { FiShoppingBag } from "react-icons/fi";

const AdminPanel = () => {
  const [showMenu, setShowMenu] = useState(window.innerWidth >= 870);
  const [medium, setMedium] = useState(window.innerWidth >= 870);
  const [currentTab, setCurrentTab] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 870) {
        setShowMenu(true);
        setMedium(true);
      } else {
        setShowMenu(false);
        setMedium(false);
      }
    });
  });
  const getAllOrders = async () => {
    const allOrders = await fetch("api/products/getOrder", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await allOrders.json();
    return data;
  };
  useEffect(() => {
    if (!localStorage.getItem("adminToken")) {
      navigate("/adminAuth");
    }
    setCurrentTab(
      <DashBoard
        currentTab={currentTab}
        getAllOrders={getAllOrders}
        setCurrentTab={setCurrentTab}
      />
    );
  }, []);

  return (
    <div className="absolute top-0 bottom-0 right-0 left-0  bg-gray-200 min-h-screen w-screen">
      <nav className="w-full fixed left-0 right-0 pr-1 top-0 border    bg-white  flex justify-between px-5  items-center mx-auto">
        <div className="flex justify-center items-center gap-1">
          <div
            className={`toggle-btn smd:hidden block text-3xl ${
              showMenu && "bg-gray-200"
            } p-1 rounded-md`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <RiMenuLine />
          </div>
          <div className="logo border-white border-2 rounded-full">
            <img
              src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/412258930_367804015792224_1256144017821934788_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFLrOUGfiCBD4-ELL1oTEFks7h-xX0jN7uzuH7FfSM3u_rfdFPIoPeN_eUvJqaCdtiK-kVBGJlwnUr-EcXFZegC&_nc_ohc=j-y3WW4Im0QQ7kNvgH5Lboa&_nc_ht=scontent.fdac138-1.fna&oh=00_AfB_NEOusDTq1IRgSK0YBLheczQRttjWMyztrBRn_Qvw0A&oe=663D694C"
              alt=""
              className="h-14 rounded-full border-4 border-white"
            />
          </div>
          <div className="text-xl font-semibold">Tanvir</div>
        </div>

        {/* <div className="path flex justify-center items-center gap-1">
          <div className="text-2xl">
            <FaHome />
          </div>
          <div className="flex justify-center items-center ">
            <div>Home</div>
            <div>
              <MdOutlineArrowForwardIos />
            </div>
          </div>
        </div> */}
        <div className="btn">
          <button
            className=" text-black  rounded-full  text-3xl font-bold"
            onClick={() => {
              localStorage.removeItem("adminToken");
              localStorage.removeItem("adminName");
              navigate("/adminAuth");
            }}
          >
            <TbLogout />
          </button>
        </div>
      </nav>
      {showMenu && (
        <div className="bg-white fixed w-64 flex flex-col p-4 top-14   min-h-screen ">
          {/* <div className="profile flex justify-center items-center w-full flex-col mt-5 mb-8">
          <img
            src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/412258930_367804015792224_1256144017821934788_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFLrOUGfiCBD4-ELL1oTEFks7h-xX0jN7uzuH7FfSM3u_rfdFPIoPeN_eUvJqaCdtiK-kVBGJlwnUr-EcXFZegC&_nc_ohc=j-y3WW4Im0QQ7kNvgH5Lboa&_nc_ht=scontent.fdac138-1.fna&oh=00_AfB_NEOusDTq1IRgSK0YBLheczQRttjWMyztrBRn_Qvw0A&oe=663D694C"
            alt=""
            className="h-28 rounded-full border-[5px] border-gray-200 "
          />
        </div> */}
          <div className="flex flex-col">
            <div className="links flex flex-col justify-center items-center w-full gap-2">
              <button
                onClick={() => {
                  setCurrentTab(
                    <DashBoard
                      currentTab={currentTab}
                      getAllOrders={getAllOrders}
                      setCurrentTab={setCurrentTab}
                    />
                  );
                  if (!medium) setShowMenu(false);
                }}
                className="bg-gray-200 flex justify-start gap-2 items-center w-full text-black  rounded-md p-[0.6rem] font-medium"
              >
                <div className="icon text-2xl ">
                  <RxDashboard />
                </div>
                <div className="text">Dashboard</div>
              </button>
              <button
                onClick={() => {
                  setCurrentTab(<RecentOrders />);
                  if (!medium) setShowMenu(false);
                }}
                className="bg-gray-200 flex justify-start gap-2 items-center w-full text-black  rounded-md p-[0.6rem] font-medium"
              >
                <div className="icon text-2xl ">
                  <IoBagHandleOutline />
                </div>
                <div className="text">Orders</div>
              </button>
              <button
                onClick={() => {
                  setCurrentTab(<UploadProduct />);
                  if (!medium) setShowMenu(false);
                }}
                className="bg-gray-200 flex justify-start gap-2 items-center w-full text-black  rounded-md p-[0.6rem] font-medium"
              >
                <div className="icon text-2xl ">
                  <FiUpload />
                </div>
                <div className="text">Upload Products</div>
              </button>

              <button
                onClick={() => {
                  setCurrentTab(<DashProducts />);
                  if (!medium) setShowMenu(false);
                }}
                className="bg-gray-200 flex justify-start gap-2 items-center w-full text-black  rounded-md p-[0.6rem] font-medium"
              >
                <div className="icon text-2xl ">
                  <FiShoppingBag />
                </div>
                <div className="text">All Products</div>
              </button>
              <Link
                to="/adminPanel"
                className="bg-gray-200 flex justify-start gap-2 items-center w-full text-black  rounded-md p-[0.6rem] font-medium"
              >
                <div className="icon text-2xl ">
                  <VscFeedback />
                </div>
                <div className="text">Feedback</div>
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem("adminToken");
                  localStorage.removeItem("adminName");
                  navigate("/adminAuth");
                }}
                className="bg-gray-200 flex justify-start gap-2 items-center w-full text-black  rounded-md p-[0.6rem] font-medium"
              >
                <div className="icon text-2xl ">
                  <TbLogout />
                </div>
                <div className="text">Log Out</div>
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="bg-gray-200 smd:pl-64  w-full  mx-auto   border ">
        {currentTab}
      </div>
    </div>
  );
};

export default AdminPanel;
