import React from "react";
import SideBar from "../../components/web-App/SideBar";

const DashboardPage = () => {
  return (
    <div className="flex flex-row bg-red h-screen">
      <SideBar />
      <div className=" w-4/5 h-full overflow-auto"></div>
    </div>
  );
};

export default DashboardPage;
