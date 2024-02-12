import React from "react";
import SideBar from "../../components/web-App/SideBar";
import ForumHeader from "../../components/web-App/ForumHeader";
import { PiMagnifyingGlassFill } from "react-icons/pi";
import { MdOutlineFilterList } from "react-icons/md";


const CommunityForumPage = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="flex flex-row h-screen">
      <SideBar />
      <div className=" w-4/5 h-full overflow-auto lgss:px-[4%] flex flex-col lgss:gap-12">
        <ForumHeader currentUser={loggedInUser} />
        <div className="flex flex-col gap-9 mt-4">
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
          </div>
          <div className="bg-[#F3E4E4] lgss:h-[150px] lgss:mt-4 lgss:w-[80%] lgss:flex flex-col lgss:justify-center gap-2 lgss:items-center rounded-[32px] px-6">
            <div className="flex justify-between w-full">
              <h2 className="text-gold font-bold">Donors Team Bonding</h2>
              <h2 className="text-red font-bold">Posted 3 days ago</h2>
            </div>
            <ul className="flex flex-col w-full px-10 justify-between gap-2 list-disc font-semibold">
              <li>
                <h2 className="text-black">
                  Guide members on how to organize successful blood donation
                  drives in their local communities.
                </h2>
              </li>
              <li>
                <h2 className="text-black">
                  Share tips for effective promotion and coordination with local
                  blood banks.
                </h2>
              </li>
            </ul>
          </div>
          <div className="bg-[#F3E4E4] lgss:h-[150px] lgss:w-[80%] lgss:flex flex-col lgss:justify-center gap-2 lgss:items-center rounded-[32px] px-6">
            <div className="flex justify-between w-full">
              <h2 className="text-gold font-bold">Post-Donation Self-Care</h2>
              <h2 className="text-red font-bold">Posted 1 week ago</h2>
            </div>
            <ul className="flex flex-col w-full px-10 justify-between gap-2 list-disc font-semibold">
              <li>
                <h2 className="text-black">
                  Share tips on post-donation self-care to help donors recover
                  quickly.
                </h2>
              </li>
              <li>
                <h2 className="text-black">
                  Discuss the importance of staying hydrated and having a
                  nutritious meal after donating blood.
                </h2>
              </li>
            </ul>
          </div>
          <div className="">
            <button className="bg-red px-2 h-[50px] lgss:w-[30%] w-[60%] rounded-[32px] text-white font-medium text-[16px] lgss:text-[18px]">
              Proceed to Donate Blood
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityForumPage;
