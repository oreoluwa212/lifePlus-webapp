import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [activeButton, setActiveButton] = useState('signup');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="flex bg-[#fafafa] text-white justify-between h-[100px] w-full">
      <div className="flex justify-between items-center w-[90%] px-[5%]">
        <div className="">
          <Link to={"/"}>
            <h1 className="text-black text-[36px] font-semibold">
              Life<span className="text-red">Plus</span>
            </h1>
          </Link>
        </div>
        <div className="mds:w-[15%] w-[55%] justify-between flex">
          <Link to={"/login"}>
            <button
              onClick={() => handleButtonClick("login")}
              className={`h-[48px] w-[130px] flex justify-center items-center ${
                activeButton === "login"
                  ? "bg-red text-white"
                  : "bg-transparent text-black"
              } rounded-[32px]`}
            >
              Log In
            </button>
          </Link>
          <Link to={"/sign-up"}>
            <button
              onClick={() => handleButtonClick("signup")}
              className={`h-[48px] w-[130px] flex justify-center items-center ${
                activeButton === "signup"
                  ? "bg-red text-white"
                  : "bg-transparent text-black"
              } rounded-[32px]`}
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
