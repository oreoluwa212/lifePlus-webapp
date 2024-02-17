import React, { useState } from "react";
import Header from "../../components/web-App/Header";
import SideBar from "../../components/web-App/SideBar";
import DetailsCard from "../../components/web-App/DetailsCard";
import { map } from "../../assets";

const BloodDriveDonor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
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
            <h1>Donations | Track Donatiions</h1>
          </div>
          <div className="">
            <img src={map} alt="" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default BloodDriveDonor;
