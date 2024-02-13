import React, { useState } from "react";
import Header from "../../components/web-App/Header";
import DashboardCard from "../../components/web-App/DashboardCard";
import {
    PiArticleFill,
    PiLadderSimpleFill,
    PiUserCircleFill,
} from "react-icons/pi";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useEffect } from "react";
import DetailsProviderCard from "../../components/web-App/DetailsProviderCard";
import SideBarProvider from "../../components/web-App/SideBarProvider";

const DashboardProviderPage = () => {
    const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
    const MySwal = withReactContent(Swal);
    let newUser = {};
    let location = useLocation();
    if (location.state) {
        newUser = location.state.user;
    }

    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (newUser && newUser.new) {
        useEffect(() => {
            MySwal.fire({
                icon: "info",
                title: "Profile Update Required",
                text: "Welcome to LifePlus",
                footer: '<a href="/update-profile">Proceed to Dashboard</a>',
            });
            navigate("/dashboard-provider", { state: { user: newUser } });
        }, []);
    } else {
        if (!loggedInUser) {
            useEffect(() => {
                MySwal.fire("you dont have access to view this page");
                navigate("/login");
            }, []);
        }
    }
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
              <h1>Dashboard</h1>
            </div>
            {loggedInUser && <DetailsProviderCard />}
            <div className="">
              <div className="flex flex-col justify-center lgss:items-start lgss:pt-14 pt-4">
                <div className=" flex flex-col lgss:grid lgss:grid-cols-3 gap-8">
                  <Link to={"/dashboard"}>
                    <DashboardCard
                      title="Manage Profile"
                      icon={<PiUserCircleFill />}
                    />
                  </Link>
                  <DashboardCard
                    title="Record System"
                    icon={<PiLadderSimpleFill />}
                  />
                  <DashboardCard
                    title="News & Updates"
                    icon={<PiArticleFill />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DashboardProviderPage;
