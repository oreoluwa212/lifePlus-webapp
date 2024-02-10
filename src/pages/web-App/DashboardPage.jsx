import React from "react";
import SideBar from "../../components/web-App/SideBar";
import Header from "../../components/web-App/Header";
import DetailsCard from "../../components/web-App/DetailsCard";
import DashboardCard from "../../components/web-App/DashboardCard";
import { PiBinocularsBold, PiGaugeFill, PiListBold, PiUserCircleFill } from "react-icons/pi";

const DashboardPage = () => {
  return (
    <div className="flex flex-row ">
      <SideBar />
      <div className="lgss:w-4/5 overflow-auto lgss:px-[4%]">
        <Header />
        <div className="mt-[50px] text-[34px] text-gold font-semibold">
          Dashboard
        </div>
        <DetailsCard/>
        <>
            <div className=' h-[900px] lgss:h-[350px] mt-[6rem]'>
                <div className=" lgss:grid lgss:grid-cols-3 gap-8">
                <DashboardCard
                    title="Manage Profile"
                    icon={<PiUserCircleFill/>}
                />

                <DashboardCard
                    title="Leadership board & Challenges"
                    icon={<PiListBold/>}
                />
                <DashboardCard
                    title="News & Updates"
                    icon={<PiBinocularsBold />}
                />
                <DashboardCard
                    title="Points & Badges"
                    icon={<PiBinocularsBold />}
                />
                </div>
            </div>
        </>
      </div>
    </div>
  );
};

export default DashboardPage;
