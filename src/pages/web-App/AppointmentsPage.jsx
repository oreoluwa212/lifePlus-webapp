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

const AppointmentsPage = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="flex flex-row h-screen">
      <SideBar />
      <div className="lgss:w-4/5 lgss:overflow-auto">
        <div className="lgss:w-full lgss:h-full lgss:flex-1 lgss:overflow lgss:px-[4%] flex flex-col">
          <Header currentUser={loggedInUser} />
          <div className="mt-[50px] text-[34px] text-gold font-semibold">
            <h1>Appointments</h1>
          </div>
          <DetailsCard loggedInUser={loggedInUser} />
          <div className="">
            <div className="flex flex-col justify-center items-start lgss:pt-8 pt-4">
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
                <DashboardCard title="Records" icon={<PiLadderSimpleFill />} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsPage;
