import React from 'react'
import { aboutUs } from '../assets'

const AboutUs = () => {
  return (
    <>

      <div className="flex flex-col  w-full lgss:items-center">
      <div className="flex justify-center items-center lgss:h-[166px] h-[50px]">
        <h1 className="text-red mds:text-[36px] xs:text-[26px] font-bold">
          ABOUT US
        </h1>
      </div>
      <div className="flex flex-col lgss:flex-row">
      <div className="text-[20px] lgss:w-[45%] w-full lgss:h-[500px] h-[320px] text-red flex flex-col justify-center items-center font-bold">
          <h1 className=" lgss:w-[70%] w-[90%] text-center lgss:leading-10">
            LifePlus AOB± offers a unique value proposition that addresses the
            pain points of both donors and healthcare professionals, while
            fostering a vibrant community of blood donation advocates.
          </h1>
          <h1 className="lgss:w-[70%] w-[90%]   lgss:leading-10 text-center pt-4">
            LifePlus AOB± boasts a unique position in the blood donation
            landscape, offering potential for multiple revenue streams while
            remaining dedicated to its core mission: increasing and incentivize
            blood donations.
          </h1>
        </div>
        <div className="w-full lgss:w-[45%]">
          <div className="lgss:w-[740px] lgss:h-[500px] ">
            <img src={aboutUs} className="w-full h-full" alt="" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default AboutUs