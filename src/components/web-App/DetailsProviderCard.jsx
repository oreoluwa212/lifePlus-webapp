import React from "react";

const DetailsProviderCard = () => {
  return (
    <div className="lgss:w-[70%] hidden bg-opacity-90 bg-[#dda195] bg-gradient-to-br from-[#e7b6ad] via-[#c77261] to-[#D2897A] lgss:h-[100px] py-3 lgss:mt-6 rounded-[32px] lgss:flex lgss:items-center px-6">
      <div className="  lgss:flex lgss:justify-between w-full lgss:px-6">
        <div className="lgss:flex lgss:flex-col items-center">
          <p className="text-[20px]">Donors</p>
          <h1 className="lgss:text-[40px] font-semibold">
            523
          </h1>
        </div>
        <div className="lgss:flex lgss:flex-col items-center">
          <p className="text-[20px]">Blood units donated</p>
          <h1 className="lgss:text-[40px] font-semibold">
            156
          </h1>
        </div>
        <div className="lgss:flex lgss:flex-col items-center">
          <p className="text-[20px]">Points Reward</p>
          <h1 className="lgss:text-[40px] font-semibold">
            120
          </h1>
        </div>
        <div className="lgss:flex lgss:flex-col items-center">
          <p className="text-[20px]">Blood Units Available</p>
          <h1 className="lgss:text-[40px] font-semibold">
            36
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DetailsProviderCard;
