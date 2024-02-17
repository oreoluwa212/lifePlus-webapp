import React, { useState } from "react";
import SideBarProvider from "../../components/web-App/SideBarProvider";
import Header from "../../components/web-App/Header";
import DashboardCard from "../../components/web-App/DashboardCard";
import {
  PiBinocularsFill,
  PiLadderSimpleFill,
  PiMapPinFill,
} from "react-icons/pi";
import { Link } from "react-router-dom";
import DetailsProviderCard from "../../components/web-App/DetailsProviderCard";

const DonationsProviderPage = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row h-screen w-full">
      <SideBarProvider isOpen={isOpen} />
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
            <h1>Donations</h1>
          </div>
          {loggedInUser && <DetailsProviderCard loggedInUser={loggedInUser} />}
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
                <Link to={"/donations-provider/blood-drive"}>
                  <DashboardCard
                    title="Blood centres & drives"
                    icon={<PiMapPinFill />}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationsProviderPage;
