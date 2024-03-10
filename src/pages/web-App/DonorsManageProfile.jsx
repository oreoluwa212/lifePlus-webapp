import React from "react";
import SideBar from "../../components/web-App/SideBar";
import ForumHeader from "../../components/web-App/ForumHeader";
import { Link } from "react-router-dom";
import {
  PiUserCircleFill,
  PiPencilSimpleFill,
  PiArrowLeftBold,
} from "react-icons/pi";

const DonorsManageProfile = ({}) => {
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="flex flex-row h-screen">
      <SideBar />
      <div className="  lgss:w-4/5 w-full h-full overflow-auto lgss:px-[4%] flex flex-col lgss:gap-1">
        <div className="flex justify-center items-center w-[100%]">
          <Link to={"/dashboard"}>
            <PiArrowLeftBold className="text-gold text-[32px] mt-6" />
          </Link>
          {loggedInUser && <ForumHeader currentUser={loggedInUser} />}
        </div>
        <div className="flex justify-center items-center lgss:mt-9 mt-6">
          <div className="bg-[#FEF3F3] w-[90%] mt-[15%] lgss:mt-6 lgss:w-[60%] h-[95%] shadow-lg shadow-gold/40 rounded-[32px] flex flex-col justify-center items-center gap-10">
            <div className="flex justify-center items-center gap-6">
              <PiUserCircleFill className="text-blue-800 text-[26px]" />
              <h1 className="text-[26px]"> Manage Profile</h1>
            </div>
            <div className="flex items-start  flex-col w-[80%] gap-4">
              <h1 className="font-semibold text-[18px] uppercase">
                Personal Information
              </h1>
              <div className="flex justify-between w-full items-center ">
                <p className="font-semibold">
                  {" "}
                  <span className="font-medium">Name: </span>{" "}
                  {loggedInUser.fullName}
                </p>
                <PiPencilSimpleFill className="text-gold text-[20px]" />
              </div>
              <div className="flex justify-between w-full items-center ">
                <p>
                  Gender:{" "}
                  <span className="font-semibold">{loggedInUser.gender}</span>{" "}
                </p>
                <PiPencilSimpleFill className="text-gold text-[20px]" />
              </div>
              <div className="flex justify-between w-full items-center ">
                <p>
                  Address:{" "}
                  <span className="font-semibold"> {loggedInUser.address}</span>{" "}
                </p>
                <PiPencilSimpleFill className="text-gold text-[20px]" />
              </div>
              <div className="flex justify-between w-full items-center ">
                <p>
                  Email:{" "}
                  <span className="font-semibold">{loggedInUser.email}</span>{" "}
                </p>
                <PiPencilSimpleFill className="text-gold text-[20px]" />
              </div>
              <div className="flex justify-between w-full items-center ">
                <p>
                  Phone:{" "}
                  <span className="font-semibold">
                    {loggedInUser.phoneNumber}
                  </span>{" "}
                </p>
                <PiPencilSimpleFill className="text-gold text-[20px]" />
              </div>
            </div>
            <div className="flex justify-between w-[75%] gap-4 pb-4">
              <button className="bg-gold text-white w-[250px] h-[48px] rounded-[32px]">
                Save Changes
              </button>
              <button className="bg-transparent text-gold border-gold border-2 w-[250px] h-[48px] rounded-[32px]">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorsManageProfile;
