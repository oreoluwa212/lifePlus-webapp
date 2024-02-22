import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [activeButton, setActiveButton] = useState("signup");
  const location = useLocation();
  const pathname = location.pathname;
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="flex bg-[#fafafa] text-white justify-between h-[100px] w-[90%] lgss:w-full">
      <div className="flex justify-between items-center w-[90%] px-[5%]">
        <div className="">
          <Link to={"/"}>
            <h1 className="text-black text-[36px] font-semibold">
              Life<span className="text-red">Plus</span>
            </h1>
          </Link>
        </div>
        <div className="mds:w-[10%] gap-6 w-[50%] justify-between flex ">
          <Link to={"/login-as"}>
            <div className="bg-red rounded-[16px] shadow-sm border-white border-[1px] shadow-black ">
              <button
                onClick={() => handleButtonClick("login")}
                className={`h-[48px] w-[100px] lgss:w-[130px] flex justify-center items-center  text-white ${
                  pathname.includes("/login")
                    ? "bg-red text-white"
                    : "bg-transparent text-black"
                } rounded-[32px]`}
              >
                Log In
              </button>
            </div>
          </Link>
          <Link to={"/signup"}>
            <div className="bg-red rounded-[16px] shadow-sm border-white border-[1px] shadow-black">
              <button
                onClick={() => handleButtonClick("signup")}
                className={`h-[48px]  w-[100px] lgss:w-[130px] flex justify-center items-center text-white  ${
                  pathname.includes("/signup")
                    ? "bg-red text-white"
                    : "bg-transparent text-black"
                } rounded-[32px]`}
              >
                Sign Up
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
