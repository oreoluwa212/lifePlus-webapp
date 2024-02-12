import React from "react";
import SideBar from "../../components/web-App/SideBar";
import Header from "../../components/web-App/Header";
import DetailsCard from "../../components/web-App/DetailsCard";
import {
  PiCalendarCheckFill,
  PiLadderSimpleFill,
  PiMapPinFill,
  PiUsersFill,
} from "react-icons/pi";
import DashboardCard from "../../components/web-App/DashboardCard";
import SideBarProvider from "../../components/web-App/SideBarProvider";
import DetailsProviderCard from "../../components/web-App/DetailsProviderCard";

const AppointmentsProviderPage = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="flex flex-row h-screen">
      <SideBarProvider />
      <div className="lgss:w-4/5 lgss:overflow-auto">
        <div className="lgss:w-full lgss:h-full lgss:flex-1 lgss:overflow lgss:px-[4%] flex flex-col">
          <Header currentUser={loggedInUser} />
          <div className="mt-[50px] text-[34px] text-gold font-semibold px-[5%] mds:px-0">
            <h1>Appointments</h1>
          </div>
          <DetailsProviderCard loggedInUser={loggedInUser} />
          <div className="">
            
          <div className="flex flex-col justify-center lgss:items-start lgss:pt-14 pt-4">
              <div className=" flex flex-col lgss:grid lgss:grid-cols-3 gap-8">
                <DashboardCard
                  title="Schedule New Appointments"
                  icon={<PiUsersFill />}
                />

                <DashboardCard
                  title="Appointments"
                  icon={<PiCalendarCheckFill />}
                />
                <DashboardCard
                  title="Blood drives & centres"
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

export default AppointmentsProviderPage;