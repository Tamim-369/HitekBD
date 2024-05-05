import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
const AdminPanel = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("adminToken")) {
      navigate("/adminAuth");
    }
  }, []);

  return (
    <div className="absolute top-0 bottom-0 right-0 left-0  bg-gray-200 min-h-screen w-screen">
      <nav className="w-10/12 fixed left-0 right-0 pr-1 top-4 border shadow-md  rounded-full bg-white  flex justify-between max-h-12 items-center mx-auto">
        <div className="flex justify-center items-center gap-1">
          <div className="logo border-white border-2 rounded-full">
            <img
              src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/412258930_367804015792224_1256144017821934788_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFLrOUGfiCBD4-ELL1oTEFks7h-xX0jN7uzuH7FfSM3u_rfdFPIoPeN_eUvJqaCdtiK-kVBGJlwnUr-EcXFZegC&_nc_ohc=j-y3WW4Im0QQ7kNvgH5Lboa&_nc_ht=scontent.fdac138-1.fna&oh=00_AfB_NEOusDTq1IRgSK0YBLheczQRttjWMyztrBRn_Qvw0A&oe=663D694C"
              alt=""
              className="h-16 rounded-full border-4 border-white"
            />
          </div>
          <div className="text-xl font-semibold">Tanvir</div>
        </div>
        <div className="path flex justify-center items-center gap-1">
          <div className="text-2xl">
            <FaHome />
          </div>
          <div className="flex justify-center items-center ">
            <div>Home</div>
            <div>
              <MdOutlineArrowForwardIos />
            </div>
          </div>
        </div>
        <div className="btn">
          <button
            className="bg-red-600 text-white  rounded-full p-[0.6rem] text-xl font-bold"
            onClick={() => {
              localStorage.removeItem("adminToken");
              localStorage.removeItem("adminName");
              navigate("/adminAuth");
            }}
          >
            <IoMdLogOut />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default AdminPanel;
