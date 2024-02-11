import React from "react";
import SideBar from "../../components/web-App/SideBar";
import Header from "../../components/web-App/Header";
import DetailsCard from "../../components/web-App/DetailsCard";

const CommunityForumPage = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="flex flex-row h-screen">
      <SideBar />
      <div className=" w-4/5 h-full overflow-auto lgss:px-[4%]">
        <Header currentUser={loggedInUser} />
        <div className="mt-[50px] text-[34px] text-gold font-semibold">
          Community Forum
        </div>
      </div>
    </div>
  );
};

export default CommunityForumPage;
