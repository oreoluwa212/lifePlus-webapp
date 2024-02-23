import React, { useState } from "react";
import SideBar from "../../components/web-App/SideBar";
import ForumHeader from "../../components/web-App/ForumHeader";
import { PiMagnifyingGlassFill, PiPlusBold } from "react-icons/pi";
import { TiArrowBack } from "react-icons/ti";
import { BiSolidBookmarkAltPlus } from "react-icons/bi";
import Header from "../../components/web-App/Header";
import { FaThumbsUp } from "react-icons/fa";


const CommunityForumPage = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row h-screen w-full">
      <SideBar isOpen={isOpen} />
      <div className="lgss:w-4/5 w-full lgss:overflow-auto">
        <div className="lgss:w-full lgss:h-full lgss:flex-1 lgss:overflow lgss:px-[4%] flex flex-col ">
          <div className="flex w-full">
            <div className="flex justify-between lgss:w-[20%] lgss:gap-7 lgss:items-center ">
              <div className=" text-[34px] text-gold font-semibold px-4 lgss:px-0 hidden lgss:flex">
                <h1>Forum</h1>
              </div>
            </div>
            <div className="w-[75%]">
              {loggedInUser && (
                <Header
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                  currentUser={loggedInUser}
                />
              )}{" "}
            </div>
          </div>

          <div className="flex flex-col gap-9 mt-4 lgss:mt-10 px-[5%] mds:px-0">
            <button className="bg-[#F3E4E4] w-[40%] lgss:w-[20%] h-[50px] border-red border-[2px] rounded-[16px] text-red font-semibold text-[18px] lgss:text-[24px] shadow-lg shadow-red/30 flex justify-between items-center px-4">
              <span>
                <PiPlusBold />{" "}
              </span>{" "}
              Make a Post
            </button>
            <div className="flex flex-col w-[90%] gap-5">
              <div className="bg-[#F3E4E4] lgss:mt-4 shadow-md shadow-red/30 lgss:w-[90%] w-full flex flex-col gap-4 rounded-[32px] p-6">
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
                      Share tips for effective promotion and coordination with
                      local blood banks.
                    </h2>
                  </li>
                </ul>
                <div className="lgss:w-[70%] flex px-2 justify-between items-center text-red">
                  <div className="flex justify-center items-center text-[16px] gap-2">
                    <FaThumbsUp />
                    <button className="text-[18px] font-semibold">Like</button>
                  </div>
                  <div className="flex justify-center items-center text-[26px] gap-2">
                    <TiArrowBack />
                    <button className="text-[18px] font-semibold">Reply</button>
                  </div>
                  <div className="flex justify-center items-center text-[20px] gap-2">
                    <BiSolidBookmarkAltPlus />
                    <button className="text-[18px] font-semibold">Save</button>
                  </div>
                </div>
              </div>
              <div className="bg-[#F3E4E4] shadow-md shadow-red/30 lgss:mt-4 lgss:w-[90%] w-full flex flex-col gap-6 rounded-[32px] p-6">
                <div className="flex justify-between w-full">
                  <h2 className="text-gold font-bold">
                    Post-Donation Self-Care
                  </h2>
                  <h2 className="text-red font-bold">Posted 1 week ago</h2>
                </div>
                <ul className="flex flex-col w-full px-10 justify-between gap-2 list-disc font-semibold">
                  <li>
                    <h2 className="text-black">
                      Discuss the importance of staying hydrated and having a
                      nutritious meal after donating blood.
                    </h2>
                  </li>
                  <li>
                    <h2 className="text-black">
                      Share tips for effective promotion and coordination with
                      local blood banks.
                    </h2>
                  </li>
                </ul>
                <div className="lgss:w-[70%] px-6 flex justify-between items-center text-red">
                  <div className="flex justify-center items-center text-[16px] gap-2">
                    <FaThumbsUp />
                    <button className="text-[18px] font-semibold">Like</button>
                  </div>
                  <div className="flex justify-center items-center text-[26px] gap-2">
                    <TiArrowBack />
                    <button className="text-[18px] font-semibold">Reply</button>
                  </div>
                  <div className="flex justify-center items-center text-[20px] gap-2">
                    <BiSolidBookmarkAltPlus />
                    <button className="text-[18px] font-semibold">Save</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <button className="bg-red px-2 h-[50px] lgss:w-[30%] w-[60%] rounded-[32px] text-white font-medium text-[16px] lgss:text-[18px]">
                Proceed to Donate Blood
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityForumPage;
