import React from "react";
import SideBar from "../../components/web-App/SideBar";

const DashboardPage = () => {
  return (
    <div className="flex flex-row ">
      <SideBar />
      <div className="lgss:w-4/5 overflow-auto"></div>
    </div>
  );
};

export default DashboardPage;
