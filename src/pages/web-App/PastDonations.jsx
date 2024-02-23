import React from "react";
import SideBar from "../../components/web-App/SideBar";
import ForumHeader from "../../components/web-App/ForumHeader";
import { Link } from "react-router-dom";
import { PiArrowLeftBold, PiMagnifyingGlassFill } from "react-icons/pi";

const PastDonations = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex flex-row h-screen">
      <SideBar />
      <div className=" lgss:w-4/5 w-full h-full overflow-auto lgss:px-[4%] flex flex-col lgss:gap-1">
        <div className="flex justify-center items-center w-[100%]">
          <Link to={"/dashboard"}>
            <PiArrowLeftBold className="text-gold text-[32px] mt-6" />
          </Link>
          {loggedInUser && <ForumHeader currentUser={loggedInUser} />}
        </div>
        <div className="flex gap-9 mt-10 lgss:mt-4 px-[5%] mds:px-0 w-full">
          <div className="flex flex-col justify-between lgss:gap-5 ">
            <div className="bg-[#F3E4E4] w-[90%] lgss:w-[600px] h-[48px] flex items-center gap-4 px-4 rounded-[32px] lgss:mt-[5%] mt-5">
              <PiMagnifyingGlassFill className="text-gold text-[35px] mds:text-[24px] cursor-pointer" />
              <input
                type="text"
                placeholder="Search"
                className="w-[80%] h-[48px] px-2 outline-none placeholder:text-gold placeholder:font-semibold placeholder:text-[18px] bg-transparent"
              />
            </div>
            <div className="border-b-[1px] border-gold lgss:h-[45vh] h-[50vh] lgss:w-[90%] w-full mt-4 pl-[10px] lgss:pl-[10%] py-[5%] flex flex-col gap-5">
              <div className="flex flex-col">
                <h2 className="text-[18px] font-semibold">
                  Your last donation
                </h2>
                <p className="text-[14px]">Wednesday, 31 January, 22024</p>
              </div>

              <div className="flex justify-between">
                <h2 className="text-[18px] font-semibold uppercase">
                  PLATELETES
                </h2>
                <h2 className="text-[18px] font-semibold uppercase">
                  +2 units
                </h2>
              </div>

              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h2 className="text-[14px]">Pressure</h2>
                  <h2 className="text-[18px] font-semibold">128/65mmHg</h2>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-[14px]">Haemoglobin</h2>
                  <h2 className="text-[18px] font-semibold ">13.46gm/dL</h2>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-[14px]">Pulse</h2>
                  <h2 className="text-[18px] font-semibold">75bpm</h2>
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="text-[14px]">Address</h2>
                <h2 className="text-[18px] font-semibold ">
                  24 Kenneth Cole Close Ojodu Berger Lagos, Lagos State
                </h2>
              </div>
              <div className="flex  gap-10">
                <button
                  type="submit"
                  className="h-[48px] lgss:w-[40%] w-[50%] flex justify-center items-center bg-transparent font-semibold text-red border-[1px] border-red rounded-[32px] text-[0.9rem]"
                >
                  View past donations
                </button>
                <button
                  type="submit"
                  className="h-[48px] lgss:w-[40%] w-[70%]  flex justify-center items-center bg-red text-white rounded-[32px] text-[0.9rem]"
                >
                  Schedule next donations
                </button>
              </div>
            </div>
            <div className="border-b-[1px] border-gold lgss:h-[45vh] h-[50vh] lgss:w-[90%] w-full mt-4 pl-[10px] lgss:pl-[10%] py-[5%] flex flex-col gap-5">
              <div className="flex flex-col">
                <h2 className="text-[18px] font-semibold">
                  Your last donation
                </h2>
                <p className="text-[14px]">Wednesday, 31 January, 22024</p>
              </div>

              <div className="flex justify-between">
                <h2 className="text-[18px] font-semibold uppercase">
                  PLATELETES
                </h2>
                <h2 className="text-[18px] font-semibold uppercase">
                  +2 units
                </h2>
              </div>

              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h2 className="text-[14px]">Pressure</h2>
                  <h2 className="text-[18px] font-semibold">128/65mmHg</h2>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-[14px]">Haemoglobin</h2>
                  <h2 className="text-[18px] font-semibold ">13.46gm/dL</h2>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-[14px]">Pulse</h2>
                  <h2 className="text-[18px] font-semibold">75bpm</h2>
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="text-[14px]">Address</h2>
                <h2 className="text-[18px] font-semibold ">
                  24 Kenneth Cole Close Ojodu Berger Lagos, Lagos State
                </h2>
              </div>
              <div className="flex  gap-10">
                <button
                  type="submit"
                  className="h-[48px] lgss:w-[40%] w-[50%] flex justify-center items-center bg-transparent font-semibold text-red border-[1px] border-red rounded-[32px] text-[0.9rem]"
                >
                  View past donations
                </button>
                <button
                  type="submit"
                  className="h-[48px] lgss:w-[40%] w-[70%]  flex justify-center items-center bg-red text-white rounded-[32px] text-[0.9rem]"
                >
                  Schedule next donations
                </button>
              </div>
            </div>
            <div className="border-b-[1px] border-gold lgss:h-[45vh] h-[50vh] lgss:w-[90%] w-full mt-4 pl-[10px] lgss:pl-[10%] py-[5%] flex flex-col gap-5">
              <div className="flex flex-col">
                <h2 className="text-[18px] font-semibold">
                  Your last donation
                </h2>
                <p className="text-[14px]">Wednesday, 31 January, 22024</p>
              </div>

              <div className="flex justify-between">
                <h2 className="text-[18px] font-semibold uppercase">
                  PLATELETES
                </h2>
                <h2 className="text-[18px] font-semibold uppercase">
                  +2 units
                </h2>
              </div>

              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h2 className="text-[14px]">Pressure</h2>
                  <h2 className="text-[18px] font-semibold">128/65mmHg</h2>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-[14px]">Haemoglobin</h2>
                  <h2 className="text-[18px] font-semibold ">13.46gm/dL</h2>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-[14px]">Pulse</h2>
                  <h2 className="text-[18px] font-semibold">75bpm</h2>
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="text-[14px]">Address</h2>
                <h2 className="text-[18px] font-semibold ">
                  24 Kenneth Cole Close Ojodu Berger Lagos, Lagos State
                </h2>
              </div>
              <div className="flex  gap-10">
                <button
                  type="submit"
                  className="h-[48px] lgss:w-[40%] w-[50%] flex justify-center items-center bg-transparent font-semibold text-red border-[1px] border-red rounded-[32px] text-[0.9rem]"
                >
                  View past donations
                </button>
                <button
                  type="submit"
                  className="h-[48px] lgss:w-[40%] w-[70%]  flex justify-center items-center bg-red text-white rounded-[32px] text-[0.9rem]"
                >
                  Schedule next donations
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PastDonations;
