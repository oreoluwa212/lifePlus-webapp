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
        className="absolute text-white text-left w-[100%] h-[96%] flex flex-col gap-[20px] xs:px-[5%] pt-[20%] mds:pt-[5%] px-[5%] transition-all duration-850"
      >
        <h1 className="lgss:text-[70px] font-extrabold text-[40px] mds:text-[46px] w-[100%] mds:w-[60%] transition-all duration-850">
          Blood donation Revolutionized
        </h1>
        <h3 className="lgss:text-[36px] w-[100%] text-[24px] mds:w-[68%]">
          Modern, efficient, tech powered blood donation system
        </h3>
        <h4 className="lgss:text-[24px] mds:w-[55%] w-[320px] text-[16px]">
          Blood donation is not just an act of altruism, but a journey of
          personal growth and community impact.
        </h4>
        <button className="h-[55px] w-[250px] mt-[40px] border-[2px] border-white flex justify-center items-center bg-red text-white mds:text-[18px] rounded-[32px] py-2">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
