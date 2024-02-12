import React from "react";
import SideBar from "../../components/web-App/SideBar";
import ForumHeader from "../../components/web-App/ForumHeader";
import { PiMagnifyingGlassFill } from "react-icons/pi";
import { MdOutlineFilterList } from "react-icons/md";


const LearningCenterPage = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="flex flex-row h-screen">
      <SideBar />
      <div className=" lgss:w-4/5 w-full h-full overflow-auto lgss:px-[4%] flex flex-col lgss:gap-12">
        <ForumHeader currentUser={loggedInUser} />
        <div className="flex flex-col gap-9 mt-10 lgss:mt-4 px-[5%] mds:px-0">
          <div className="flex justify-between lgss:w-[80%] lgss:gap-7 lgss:items-center ">
            <div className="bg-[#F3E4E4] lgss:w-[90%] w-[70%] flex px-4 h-[50px] items-center rounded-[32px]">
              <PiMagnifyingGlassFill className="text-gold text-[28px] cursor-pointer" />
              <input
                type="text"
                placeholder="Search"
                className="lgss:w-full lgss:h-[50px] px-2 outline-none placeholder:text-gold placeholder:font-semibold placeholder:text-[18px] bg-transparent"
              />
            </div>
            <div className=" lgss:w-[10%] flex gap-4 items-center">
              <h1 className="text-[24px] text-gold font-semibold">Filters</h1>
              <MdOutlineFilterList className="text-gold text-[22px]" />
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningCenterPage;
