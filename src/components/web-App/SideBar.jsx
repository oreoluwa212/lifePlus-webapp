import React from "react";
import { Link } from "react-router-dom";
import Navlinks from "./NavLinks";

const SideBar = ({isOpen}) => {
  const handleLogout = () => {
    localStorage.clear();
  };
  return (
    <>
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
                  <Link
                    to={"/login"}
                    className="text-gold text-[14px] lgss:hidden flex"
                    onClick={handleLogout}
                  >
                    <p>Log Out</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className={`absolute  top-0 left-0  h-screen bg-[#F0EDE7] w-1/2 lgss:hidden flex  py-4 px-4 pt-10   transform transition-transform duration-300 ${
            isOpen ? "translate-x-0 " : "-translate-x-full"
          }`}
        >
          <div className="lgss:mt-12 flex lgss:hidden">
            <Navlinks />
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
