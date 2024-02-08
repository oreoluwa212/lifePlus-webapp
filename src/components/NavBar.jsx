import React, { useState } from 'react';

const NavBar = () => {
  const [activeButton, setActiveButton] = useState('signup');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="flex bg-[#fafafa] text-white justify-between h-[144px] w-full transition-all duration-850">
      <div className="flex justify-between items-center w-full px-[5%]">
        <div className="">
          <h1 className="text-black text-[36px] font-semibold">
            Life<span className="text-red">Plus</span>
          </h1>
        </div>
        <div className="mds:w-[15%] xs:w-[45%] justify-between flex">
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
        </div>
      </div>
    </div>
  );
};

export default NavBar;
