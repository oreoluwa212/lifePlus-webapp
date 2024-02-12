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
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useEffect } from "react";

const DashboardPage = () => {
  const navigate = useNavigate();
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
        text: "hi, in other for us to know you better and personalize your experience, you are expected to update your profile",
        footer: '<a href="/update-profile">Update Now</a>',
      });
      navigate("/update-profile", { state: { user: newUser } });
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
    <div className="flex flex-row h-screen">
      <SideBar />
      <div className="lgss:w-4/5 lgss:overflow-auto">
        <div className="lgss:w-full lgss:h-full lgss:flex-1 lgss:overflow lgss:px-[4%] flex flex-col ">
          {loggedInUser && <Header currentUser={loggedInUser} />}{" "}
          <div className="mt-[50px] text-[34px] text-gold font-semibold px-[5%] mds:px-0">
            <h1>Dashboard</h1>
          </div>
          {loggedInUser && <DetailsCard loggedInUser={loggedInUser} />}
          <div className="">
            <div className="flex flex-col justify-center lgss:items-start lgss:pt-14 pt-4">
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
