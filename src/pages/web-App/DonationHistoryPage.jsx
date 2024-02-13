import React, { useState } from "react";
import SideBar from "../../components/web-App/SideBar";
import Header from "../../components/web-App/Header";
import DetailsCard from "../../components/web-App/DetailsCard";
import DashboardCard from "../../components/web-App/DashboardCard";
import {
  PiBinocularsFill,
  PiLadderSimpleFill,
  PiMapPinFill,
} from "react-icons/pi";
import { Link } from "react-router-dom";

const DonationHistoryPage = () => {
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
            <h1>Appointments</h1>
          </div>
          {loggedInUser && <DetailsCard loggedInUser={loggedInUser} />}
          <div className="">
            <div className="flex flex-col justify-center lgss:items-start lgss:pt-14 pt-4">
              <div className=" flex flex-col lgss:grid lgss:grid-cols-3 gap-8">
                <Link to={"/donations/history"}>
                  <DashboardCard
                    title="Donation History"
                    icon={<PiLadderSimpleFill />}
                  />
                </Link>
                <DashboardCard
                  title="Track Donations"
                  icon={<PiBinocularsFill />}
                />

                <DashboardCard
                  title="Blood centres & drives"
                  icon={<PiMapPinFill />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationHistoryPage;
