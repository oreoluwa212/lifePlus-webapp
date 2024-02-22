import React, { useState } from "react";
import Header from "../../components/web-App/Header";
import SideBar from "../../components/web-App/SideBar";
import { donor1, donor2, map } from "../../assets";
import { Link } from "react-router-dom";


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
          <div className="px-6 lgss:px-0">
            <img src={map} alt="" />
          </div>
          <div className="px-6 mt-6 lgss:px-0 h-[200px] w-[80%] flex gap-4">
            <img src={donor1} alt="" className="hidden lgss:flex" />
            <div className="w-[90%] flex justify-between font-semibold py-2">
              <div className="flex flex-col gap-4">
                <h1 className="text-[22px] text-gold ">
                  Blood Bank Donor Center
                </h1>
                <p>4566 Station Road</p>
                <p>FCT, NG</p>
                <a href="#" className="text-red">
                  Locate
                </a>
              </div>
              <div className="flex flex-col w-[30%] gap-4 px-2">
                <h1>Points Reward</h1>
                <p>25 points</p>
                <p>Deadline</p>
                <p>25/03/2024</p>
                <Link to={"/appointments/schedule"}>
                  <button
                    type="submit"
                    className="bg-red text-white text-[16px] border-none rounded-[32px] lgss:px-8 h-[45px] w-[80%] font-medium"
                  >
                    Schedule
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="px-6 mt-6 lgss:px-0 h-[200px] w-[80%] flex gap-4">
            <img src={donor2} alt="" className="hidden lgss:flex" />
            <div className="w-[90%] flex justify-between font-semibold py-2">
              <div className="flex flex-col gap-4">
                <h1 className="text-[22px] text-gold ">
                  Blood Bank Donor Center
                </h1>
                <p>4566 Station Road</p>
                <p>FCT, NG</p>
                <a href="#" className="text-red">
                  Locate
                </a>
              </div>
              <div className="flex flex-col w-[30%] gap-4 px-2">
                <h1>Points Reward</h1>
                <p>25 points</p>
                <p>Deadline</p>
                <p>25/03/2024</p>
                <Link to={"/appointments/schedule"}>
                  <button
                    type="submit"
                    className="bg-red text-white text-[16px] border-none rounded-[32px] lgss:px-8 h-[45px] w-[80%] font-medium"
                  >
                    Schedule
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodDriveDonor;
