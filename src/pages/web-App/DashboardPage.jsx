import React, { useState } from "react";
import SideBar from "../../components/web-App/SideBar";
import Header from "../../components/web-App/Header";
import DetailsCard from "../../components/web-App/DetailsCard";
import DashboardCard from "../../components/web-App/DashboardCard";
import {
  PiArticleFill,
  PiShieldCheckFill,
  PiUserCircleFill,
  PiCrownSimpleBold,
} from "react-icons/pi";
import { FaStethoscope } from "react-icons/fa";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useEffect } from "react";
import axios from "axios";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const MySwal = withReactContent(Swal);
  let newUser = {};
  let location = useLocation();
  if (location.state) {
    newUser = location.state.user;
  }

  let loggedInUser = JSON.parse(localStorage.getItem("user"));
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
    // check for googleOauth loggedin User
    let userId = "";
    if (location.search) {
      userId = location.search.slice(1);
      useEffect(() => {
        const fetchgoogleUser = async () => {
          try {
            let response = await axios.get(
              `https://lifeplus-api.onrender.com/user?userid=${userId}`
            );

            // location.search
            loggedInUser = response.data;
            localStorage.setItem("user", JSON.stringify(response.data));
            if (!loggedInUser.accountUpdated) {
              MySwal.fire({
                icon: "info",
                title: "Profile Update Required",
                text: "hi, in other for us to know you better and personalize your experience, you are expected to update your profile",
                footer: '<a href="/update-profile">Update Now</a>',
              });
              navigate("/update-profile", { state: { user: response.data } });
            }
          } catch (error) {
            console.log(error);
          }
        };
        fetchgoogleUser();
      }, []);
    } else if (!loggedInUser) {
      useEffect(() => {
        MySwal.fire("you dont have access to view this page");
        navigate("/login");
      }, []);
    }
  }
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
            <h1>Dashboard</h1>
          </div>
          {loggedInUser && <DetailsCard loggedInUser={loggedInUser} />}
          <div className="">
            <div className="flex flex-col justify-center lgss:items-start lgss:pt-14 pt-4">
              <div className=" flex flex-col lgss:grid lgss:grid-cols-3 gap-8">
                <Link to={"/dashboard/profile"}>
                  <DashboardCard
                    title="Manage Profile"
                    icon={<PiUserCircleFill />}
                  />
                </Link>
                <Link to={"/dashboard/points"}>
                  <DashboardCard
                    title="Points & Badges"
                    icon={<PiShieldCheckFill />}
                  />
                </Link>
                <DashboardCard
                  title="News & Updates"
                  icon={<PiArticleFill />}
                />
                <Link to={"/dashboard/health-summary"}>
                  <DashboardCard
                    title="Health Summary"
                    icon={<PiCrownSimpleBold />}
                  />
                </Link>
                <Link to={"/dashboard/leader-board"}>
                  <DashboardCard title="Leaderboard" icon={<FaStethoscope />} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
