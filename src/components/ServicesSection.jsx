import React from "react";
import { PiGaugeFill, PiHardDrivesFill, PiTrophyFill } from "react-icons/pi";
import Card from "./Card";

const ServicesSection = () => {
  return (
    <div className="px-[10%]">
      <div className="flex justify-center items-center h-[166px] bg-transparent">
        <h1 className="text-red text-[36px] font-bold uppercase">
          Our Services
        </h1>
      </div>
      <div className=" h-[1000px] lgss:h-[350px]">
        <div className="flex flex-col gap-12 lgss:flex-row lgss:justify-around ">
          <Card
            title="Personalized donor dashboard"
            description="Manage your profile, track donation history, get personalized alerts"
            icon={<PiGaugeFill />}
          />

          <Card
            title="Streamlined donation management"
            description="Find nearby blood donation centers, flexible appointment booking, track the status of each blood donation"
            icon={<PiHardDrivesFill />}
          />
          <Card
            title="Gamification & rewards system"
            description=" Accumulate points, unlock different rewards get access to exclusive benefits and personalized rewards."
            icon={<PiTrophyFill />}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
