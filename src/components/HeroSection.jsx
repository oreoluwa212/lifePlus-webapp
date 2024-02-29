import React from 'react';
import { homepage, overlap } from '../assets';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative w-[100%] h-[85vh]">
      <img
        src={homepage}
        alt=""
        className="absolute w-full h-full object-cover rounded-b-[26px]"
      />
      <img
        src={overlap}
        alt=""
        className="absolute w-full h-full object-cover bg-center rounded-b-[26px]"
      />
      <div className="absolute text-white text-left w-[100%] h-[100%] px-[5%] flex flex-col justify-center gap-2 lgss:gap-7">
        <h1 className="transition-all duration-850 font-extrabold text-[24px] xs:text-[28px] mds:text-[40px] md:text-[50px] lgss:text-[60px] ">
          Blood donation Revolutionized
        </h1>
        <h3 className="lgss:text-[28px] text-[16px] lgss:leading-[2rem]">
          Modern, efficient, tech powered blood donation system
        </h3>
        <h3 className="lgss:text-[28px] text-[16px] lgss:leading-[2rem] w-[80%]">
          Blood donation is not just an act of altruism, but a journey of
          personal growth and community impact.
        </h3>
        <Link to={"/signup"}>
          <button className="h-[55px] w-[150px] mt-[30px] flex justify-center items-center bg-white text-red mds:text-[24px] rounded-[16px] py-2 font-extrabold shadow-sm shadow-black mds:w-[200px]">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
