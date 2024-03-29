import React, { useState } from "react";
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
import { Link } from "react-router-dom";

const AppointmentsPage = () => {
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
                <Link to={"/donations-donor/track"}>
                  <DashboardCard
                    title="Schedule New Appointments"
                    icon={<PiUsersFill />}
                  />
                </Link>

                <DashboardCard
                  title="Appointments"
                  icon={<PiCalendarCheckFill />}
                />
                <Link to={"/donations-donor/track"}>
                  <DashboardCard
                    title="Blood drives & centres"
                    icon={<PiMapPinFill />}
                  />
                </Link>

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
