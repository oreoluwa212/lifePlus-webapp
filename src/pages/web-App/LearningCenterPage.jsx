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
      <div className="lgss:w-4/5 w-full lgss:overflow-auto">
        <div className="lgss:w-full lgss:h-full lgss:flex-1 lgss:overflow lgss:px-[4%] flex flex-col ">
          {loggedInUser && (
            <Header
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              currentUser={loggedInUser}
            />
          )}{" "}
          <div className="mt-[50px] lgss:mt-0 text-[34px] text-gold font-semibold px-[5%] mds:px-0">
            <h1>Learning Center</h1>
          </div>
          <div className="flex gap-9 mt-10 lgss:mt-0  px-[5%] mds:px-0 w-full">
            <div className="flex flex-col justify-between lgss:gap-5 lgss:items-center ">
              <div className="w-full">
                <div className="flex flex-col justify-center lgss:items-start lgss:pt-4 pt-0 w-full">
                  <div className=" flex flex-col lgss:grid lgss:grid-cols-3 gap-8 w-full">
                    <LearningCard title="How to maintain good health" />
                    <Link to={""}>
                      <LearningCard title="Grapefruit Wonders" />
                    </Link>

                    <LearningCard title="A sound mental health is vital" />
                    <LearningCard title="Blood Donation" />
                    <LearningCard title="The dangers of High Blood Pressure" />
                    <LearningCard title="Managing your health and stress" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningCenterPage;
