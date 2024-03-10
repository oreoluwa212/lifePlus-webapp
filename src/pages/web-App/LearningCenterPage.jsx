import React, { useState } from "react";
import SideBar from "../../components/web-App/SideBar";
import ForumHeader from "../../components/web-App/ForumHeader";
import { PiMagnifyingGlassFill } from "react-icons/pi";
import { MdOutlineFilterList } from "react-icons/md";
import LearningCard from "../../components/web-App/LearningCard";
import { Link } from "react-router-dom";
import Header from "../../components/web-App/Header";


const LearningCenterPage = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row h-screen w-full">
      <SideBar isOpen={isOpen} />
      <div className="lgss:w-4/5 flex flex-col w-full lgss:overflow-auto">
        <div className="lgss:w-full lgss:h-full lgss:flex-1 lgss:overflow lgss:px-[4%] flex flex-col ">
          <div className="flex w-full">
            <div className="flex justify-between lgss:w-[20%] lgss:gap-7 lgss:items-center ">
              <div className=" text-[34px] text-gold font-semibold px-4 lgss:px-0 hidden lgss:flex">
                <h1>Learning Center</h1>
              </div>
            </div>
            <div className="w-[90%]">
              {loggedInUser && (
                <Header
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                  currentUser={loggedInUser}
                />
              )}
            </div>
          </div>
        </div>

        <div className="w-[100%] lgss:w-[90%] px-[40px]">
          <h1 className="text-[34px] text-gold font-semibold pb-5 flex lgss:hidden">Learning Center</h1>
            <div className=" flex flex-wrap gap-10 justify-between">
              <LearningCard title="How to maintain good health" />
              <LearningCard title="Grapefruit Wonders" />
              <LearningCard title="A sound mental health is vital" />
              <LearningCard title="Blood Donation" />
              <LearningCard title="The dangers of High Blood Pressure" />
              <LearningCard title="Managing your health and stress" />
          </div>
        </div>
      </div>
    </div>


  );
};

export default LearningCenterPage;
