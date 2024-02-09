import React from "react";
import SideBar from "../../components/web-App/SideBar";
import Header from "../../components/web-App/Header";

const DashboardPage = () => {
  return (
    <div className="flex flex-row ">
      <SideBar />
      <div className="lgss:w-4/5 overflow-auto lgss:px-[4%]">
        <Header />
        <div className="mt-[50px] text-[34px] text-gold font-semibold">
          Dashboard
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
