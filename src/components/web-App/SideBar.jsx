import React from "react";
import { Link } from "react-router-dom";
import Navlinks from "./NavLinks";

const SideBar = () => {
  return (
    <div className="lgss:w-1/5 lgss:h-screen border-[1px] h-screen lgss:overflow-hidden border-gold bg-[#F0EDE7] lgss:flex hidden">
      <div className=" flex-col gap-5">
        <div className="flex justify-center items-center mt-[15%] ">
          <Link to={"/"}>
            <h1 className="text-black text-[36px] font-semibold">
              Life<span className="text-red">Plus</span>
            </h1>
          </Link>
        </div>
        <div className=" lgss:w-full lgss:flex lgss:justify-center lgss:flex-col lgss:items-start px-6">
          <div className="w-1/5 lgss:h-screen ">
            <div className="">
              <div className="lgss:mt-12">
                <Navlinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
