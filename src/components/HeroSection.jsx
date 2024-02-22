import React from 'react';
import { homepage, overlap } from '../assets';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[80vh]">
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
      <div className="absolute text-white text-left w-[100%] h-[96%] flex flex-col justify-center xs:px-[5%] pt-[5%] mds:pt-[2%] lgss:pl-[5%] px-[10%] gap-5">
        <h1 className="lgss:text-[78px] font-extrabold text-[40px] mds:text-[46px] w-[100%] mds:w-[50%] transition-all duration-850 lgss:leading-[5rem]">
          Blood donation Revolutionized
        </h1>
        <h3 className="lgss:text-[38px] w-[80%] text-[24px] mds:w-[50%] lgss:leading-[3rem]">
          Modern, efficient, tech powered blood donation system
        </h3>
        <h4 className="lgss:text-[24px] mds:w-[50%] w-[320px] text-[16px] lgss:leading-[2rem]">
          Blood donation is not just an act of altruism, but a journey of
          personal growth and community impact.
        </h4>
        <Link to={"/signup"}>
          <button className="h-[55px] w-[200px] mt-[30px] flex justify-center items-center bg-white text-red mds:text-[24px] rounded-[16px] py-2 font-extrabold shadow-sm shadow-black">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
