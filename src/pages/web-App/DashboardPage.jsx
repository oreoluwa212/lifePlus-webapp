import React from "react";
import SideBar from "../../components/web-App/SideBar";
import Header from "../../components/web-App/Header";
import DetailsCard from "../../components/web-App/DetailsCard";
import DashboardCard from "../../components/web-App/DashboardCard";
import {
  PiArticleFill,
  PiLadderSimpleFill,
  PiShieldCheckFill,
  PiUserCircleFill,
} from "react-icons/pi";

const DashboardPage = () => {
  return (
    <div className="flex flex-row h-screen">
      <SideBar />
      <div className="lgss:w-4/5 lgss:overflow-auto">
        <div className="lgss:w-full lgss:h-full lgss:flex-1 lgss:overflow lgss:px-[4%] flex flex-col ">
          <Header />
          <div className="mt-[50px] text-[34px] text-gold font-semibold">
            <h1>Dashboard</h1>
          </div>
          <DetailsCard />
          <div className="">
            <div className="flex flex-col justify-center items-start lgss:pt-14 pt-4">
              <div className=" flex flex-col lgss:grid lgss:grid-cols-3 gap-8">
                <DashboardCard
                  title="Manage Profile"
                  icon={<PiUserCircleFill />}
                />

                <DashboardCard
                  title="Leadership board & Challenges"
                  icon={<PiLadderSimpleFill />}
                />
                <DashboardCard
                  title="News & Updates"
                  icon={<PiArticleFill />}
                />
                <DashboardCard
                  title="Points & Badges"
                  icon={<PiShieldCheckFill />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
