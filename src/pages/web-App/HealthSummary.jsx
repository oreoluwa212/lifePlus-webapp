import React from "react";
import SideBar from "../../components/web-App/SideBar";
import ForumHeader from "../../components/web-App/ForumHeader";
import { Link } from "react-router-dom";
import {
    PiUserCircleFill,
    PiPencilSimpleFill,
    PiArrowLeftBold,
} from "react-icons/pi";

const HealthSummary = () => {
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
                <div className="flex flex-col justify-center items-center lgss:mt-9 mt-6">
                    <h1>There are no records available.</h1>
                    <h2>To view your health results you must first donate. Your results will automatically update after your donation has been processed.</h2>
                    <h3>Having issues? Please contact customer support.</h3>
                </div>
                <button
                    type="submit"
                    className="bg-red text-white text-[18px] lgss:w-[130%] border-none rounded-[32px] lgss:px-8 lgss:h-[48px] h-[50px] w-full"
                  >
                    Donate Blood
                  </button>
            </div>
        </div>
    );
};

export default HealthSummary
