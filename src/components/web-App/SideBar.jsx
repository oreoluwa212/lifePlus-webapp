import React from "react";
import { Link } from "react-router-dom";
import Navlinks from "./NavLinks";

const SideBar = () => {
  return (
    <div className="lgss:w-1/5 bg-[#F0EDE7] lgss:h-screen lgss:overflow-hidden border-gold border-[1px] flex flex-col gap-5 px-6 pt-8">
      <div className="flex lgss:justify-center lgss:items-center ">
        <Link to={"/"}>
          <h1 className="text-black text-[36px] font-semibold ">
            Life<span className="text-red">Plus</span>
          </h1>
        </Link>
      </div>
      <div className=" lgss:w-full w-fit hidden lgss:flex lgss:justify-center lgss:flex-col lgss:items-start px-6">
        <div className="w-1/5 lgss:h-screen ">
          <div className="">
            <div className="lgss:mt-12">
              <Navlinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
