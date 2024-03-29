import React from 'react'
import { aboutUs } from '../assets'

const AboutUs = () => {
  return (
    <>
      <section className="flex flex-col  w-full lgss:items-center">
        <div className="flex justify-center items-center lgss:h-[166px] h-[70px] pt-8 lgss:pt-2">
          <h1 className="text-red mds:text-[36px] xs:text-[26px] font-bold">
            ABOUT US
          </h1>
        </div>
        <div className="flex flex-col lgss:flex-row justify-center items-center">
          <span className="mds:text-[20px] text-[14px] lgss:w-[45%] w-full lgss:h-[400px] h-[200px] text-red flex flex-col justify-center items-center font-bold">
            <h1 className=" lgss:w-[70%] w-[90%] text-center lgss:leading-10">
              LifePlus AOB± offers a unique value proposition that addresses the
              pain points of both donors and healthcare professionals, while
              fostering a vibrant community of blood donation advocates.
            </h1>
            <h1 className="lgss:w-[70%] w-[90%]   lgss:leading-10 text-center pt-4">
              LifePlus AOB± boasts a unique position in the blood donation
              landscape, offering potential for multiple revenue streams.
            </h1>
          </span>
          <img
            src={aboutUs}
            className="rounded-[32px] w-full px-5 mds:w-[90%] lgss:w-[45%] lgss:max-w-[600px] lgss:h-[450px]"
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default AboutUs