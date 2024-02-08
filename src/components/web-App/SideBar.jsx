import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-1/5 bg-[#F0EDE7] h-screen border-gold border-[1px] flex flex-col gap-5 px-6 pt-8">
      <div className="flex lgss:justify-center lgss:items-center ">
        <Link to={"/"}>
          <h1 className="text-black text-[36px] font-semibold ">
            Life<span className="text-red">Plus</span>
          </h1>
        </Link>
      </div>
      <div className=" lgss:w-full w-fit hidden lgss:flex lgss:justify-center lgss:flex-col lgss:items-start">
        <div className="">
          <h1 className="italic">Sidebar goes here</h1>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
