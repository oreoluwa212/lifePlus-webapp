import React from "react";
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
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="flex flex-row h-screen">
      <SideBar />
      <div className="lgss:w-4/5 lgss:overflow-auto">
        <div className="lgss:w-full lgss:h-full lgss:flex-1 lgss:overflow lgss:px-[4%] flex flex-col ">
          <Header currentUser={loggedInUser} />
          <div className="mt-[50px] text-[34px] text-gold font-semibold px-4 lgss:px-0">
            <h1>Donations</h1>
          </div>
          <DetailsCard loggedInUser={loggedInUser} />
          <div>
            
          <div className="flex flex-col justify-center lgss:items-start lgss:pt-14 pt-4">
              <div className=" flex flex-col lgss:grid lgss:grid-cols-3 gap-8">
                <Link to={""}>
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
