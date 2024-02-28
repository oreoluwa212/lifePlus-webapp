import React from "react";
import SideBar from "../../components/web-App/SideBar";
import ForumHeader from "../../components/web-App/ForumHeader";
import { Link } from "react-router-dom";
import {
  PiUserCircleFill,
  PiPencilSimpleFill,
  PiArrowLeftBold,
} from "react-icons/pi";
import { leaderboardImg } from "../../assets";

const LeaderBoardPage = ({ }) => {
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="flex flex-row h-screen">
      <SideBar />
      <div className="  lgss:w-4/5 w-full h-full overflow-auto lgss:px-[4%] flex flex-col lgss:gap-1">
        <div className="flex justify-center items-center w-[100%]">
          <Link to={"/dashboard"}>
            <PiArrowLeftBold className="text-gold text-[32px] mt-6" />
          </Link>
          {loggedInUser && <ForumHeader currentUser={loggedInUser} />}
        </div>
        <div className="flex flex-col justify-center items-center gap-8 px-6 mds:px-0 lgss:mt-9 my-6">
          <img src={leaderboardImg} alt="leaderboardimg"/>
          <span className="flex flex-col gap-5 mds:px-10">
            <h2 className="text-left md:text-[24px] text-xl">
              Donors are scheduled for quizes and games, winners will be chosen every month and called donors of the week.
            </h2>
            <h2 className="text-left md:text-[24px] text-xl">
              Winners get <b>1000 coins</b> which can be used for health and educational materials
            </h2>
            <h2 className="text-left md:text-[24px] text-xl">
              Winning this twice in a row will give you access to the next donor level.
            </h2>
          </span>
          <button
            type="submit"
            className="bg-red text-white text-[18px] border-none rounded-[32px] h-[50px] w-40 lgss:px-8 lgss:h-[48px] lgss:w-[30%] mt-4 lgss:mt-12 "
          >
            Donate Blood
          </button>
        </div>
      </div>
    </div >
  );
};

export default LeaderBoardPage;
