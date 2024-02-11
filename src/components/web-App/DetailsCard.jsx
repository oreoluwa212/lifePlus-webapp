import React from "react";

const DetailsCard = ({ loggedInUser }) => {
  return (
    <div className="lgss:w-[70%] hidden bg-opacity-90 bg-[#dda195] bg-gradient-to-br from-[#e7b6ad] via-[#c77261] to-[#D2897A] lgss:h-[100px] py-3 lgss:mt-6 rounded-[32px] lgss:flex lgss:items-center px-6">
      <div className="  lgss:flex lgss:justify-between w-full lgss:px-6">
        <div className="lgss:flex lgss:flex-col items-center">
          <p className="text-[20px]">Gender</p>
          <h1 className="lgss:text-[40px] font-semibold">
            {loggedInUser.gender}
          </h1>
        </div>
        <div className="lgss:flex lgss:flex-col items-center">
          <p className="text-[20px]">Weight</p>
          <h1 className="lgss:text-[40px] font-semibold">
            {loggedInUser.weight}kg
          </h1>
        </div>
        <div className="lgss:flex lgss:flex-col items-center">
          <p className="text-[20px]">Blood Group</p>
          <h1 className="lgss:text-[40px] font-semibold">
            {loggedInUser.bloodGroup}
          </h1>
        </div>
        <div className="lgss:flex lgss:flex-col items-center">
          <p className="text-[20px]">Genotype</p>
          <h1 className="lgss:text-[40px] font-semibold">
            {loggedInUser.genoType}
          </h1>
        </div>
        <div className="lgss:flex lgss:flex-col items-center">
          <p className="text-[20px]">Units Donated</p>
          <h1 className="lgss:text-[40px] font-bold">0</h1>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
