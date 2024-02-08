import React from 'react';
import { homepage, overlap } from '../assets';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen transition-all duration-850">
      <img
        src={homepage}
        alt=""
        className="absolute w-full h-full object-cover"
      />
      <img
        src={overlap}
        alt=""
        className="absolute w-full h-full object-cover bg-center"
      />

      <div
        className="absolute text-white text-left w-[65%] h-[76%] flex flex-col gap-[20px] xs:gap-2 xs:pt-12 xs:px-[4%] pt-[100px] px-[5%] transition-all duration-850"
      >
        <h1 className="lgss:text-[70px] font-extrabold xs:text-[46px] mds:w-[500px] xs:w-[600px] transition-all duration-850">
          Blood donation Revolutionized
        </h1>
        <h3 className="lgss:text-[36px] xs:w-[410px] xs:text-[30px] mds:w-[68%]">
          Modern, efficient, tech powered blood donation system
        </h3>
        <h4 className="lgss:text-[24px] mds:mt-6 mds:w-[65%] xs:w-[420px] xs:text-[20px]">
          Blood donation is not just an act of altruism, but a journey of
          personal growth and community impact.
        </h4>
        <button className="mds:h-[85px] mds:w-[325px] mds:mt-[60px] border-[2px] border-white flex justify-center items-center bg-red text-white mds:text-[18px] rounded-[32px] py-2">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
