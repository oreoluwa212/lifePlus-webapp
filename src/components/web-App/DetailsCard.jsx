import React from 'react'

const DetailsCard = () => {
  return (
    <div className="lgss:w-[70%] bg-opacity-90 bg-[#dda195] bg-gradient-to-br from-[#e7b6ad] via-[#c77261] to-[#D2897A] h-[20%] lgss:mt-6 rounded-[32px] lgss:flex lgss:items-center px-6">
      <div className="lgss:flex lgss:justify-between w-full lgss:px-6">
        <div className="lgss:flex lgss:flex-col items-center">
          <p className="text-[20px]">Gender</p>
          <h1 className="text-[40px] font-semibold">M</h1>
        </div>
        <div className="lgss:flex lgss:flex-col items-center">
          <p className="text-[20px]">Weight</p>
          <h1 className="text-[40px] font-semibold">68kg</h1>
        </div>
        <div className="lgss:flex lgss:flex-col items-center">
          <p className="text-[20px]">Blood Type</p>
          <h1 className="text-[40px] font-semibold">O-</h1>
        </div>
        <div className="lgss:flex lgss:flex-col items-center">
          <p className="text-[20px]">Units Donated</p>
          <h1 className="text-[40px] font-bold">5</h1>
        </div>
      </div>
    </div>
  );
}

export default DetailsCard