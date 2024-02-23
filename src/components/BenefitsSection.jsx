import React, { useState } from 'react'
import Card from './Card';
import Benefits from './Benefits';
import { PiCalendarPlusFill, PiGaugeFill, PiHardDrivesFill, PiLifebuoyFill, PiMedalFill, PiTrophyFill, PiUserFill, PiUsersFourFill } from 'react-icons/pi';
import { benefit1, benefit2, benefit3, benefit4, benefit5 } from '../assets';

const BenefitsSection = () => {
  const [activeScreen, setActiveScreen] = useState(1);
  return (
    <div className="">
      <div className="flex justify-center items-center h-[166px]">
        <h1 className="text-red mds:text-[36px] xs:text-[26px] font-bold uppercase">
          Our Benefits
        </h1>
      </div>
      <div className="w-full pb-6 lgss:h-[490px] bg-[#EFD9D8]">
        <div className="flex flex-row px-8 gap-14 xs:text-[16px] text-[22px] h-[100px] justify-center items-center text-black font-medium">
          <button
            onClick={() => setActiveScreen(1)}
            className={
              activeScreen === 1
                ? "text-primary border-gold border-b-4 pb-[4px] font-bold px-[12px]"
                : "px-[12px]"
            }
          >
            FOR DONORS
          </button>
          <button
            onClick={() => setActiveScreen(2)}
            className={
              activeScreen === 2
                ? "text-primary border-gold border-b-4 pb-[4px] font-bold px-[12px]"
                : "px-[12px]"
            }
          >
            FOR HEALTHCARE PROVIDERS
          </button>
        </div>
        {activeScreen === 1 ? (
          <div className="">
            <div className="flex flex-col lgss:flex-row justify-center">
              <div className="flex items-center ">
                <div className="flex flex-col gap-5">
                  <Benefits
                    title="Convenience & empowerment"
                    description="Efficiency in appointment scheduling, and inventory tracking"
                    icon={benefit1}
                  />

                  <Benefits
                    title="Recognition & rewards"
                    description="Send urgent notifications to donors in case of critical shortages, mobilizing the community to save lives"
                    icon={benefit4}
                  />
                </div>
                <div className="h-[300px] hidden mds:block bg-gold w-[2px]"></div>
              </div>
              <div className="lgss:flex lgss:items-center ">
                <div className="flex flex-col gap-5">
                  <Benefits
                    title="Transparency & impact"
                    description="Monitor blood supply levels, donor behavior and trends, for decision making and resource allocation."
                    icon={benefit2}
                  />

                  <Benefits
                    title="Personalized experience"
                    description="Collaborate with institutions and organizations to offer diverse rewards and incentives."
                    icon={benefit5}
                  />
                </div>
                <div className="h-[300px] hidden mds:block bg-gold w-[3px]"></div>
              </div>
              <div className="lgss:flex lgss:items-center hidden w-[60%]">
                <div className="flex flex-col gap-5">
                  <Benefits
                    title="Engage with other donors"
                    description="Target donors based on eligibility, location, and blood type, at the right time"
                    icon={benefit3}
                  />

                  <Benefits
                    title="Recognition & rewards"
                    description="For every blood donation, you earn points that are redeemable."
                    icon={benefit4}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : activeScreen === 2 ? (
          <div className="">
            <div className="flex flex-col lgss:flex-row justify-center">
              <div className="flex items-center">
                <div className="flex flex-col gap-5">
                  <Benefits
                    title="Convenience & empowerment"
                    description="Efficiency in appointment scheduling, and inventory tracking"
                    icon={benefit1}
                  />

                  <Benefits
                    title="Recognition & rewards"
                    description="Send urgent notifications to donors in case of critical shortages, mobilizing the community to save lives"
                    icon={benefit4}
                  />
                </div>
                <div className="h-[300px] hidden mds:block bg-gold w-[2px]"></div>
              </div>
              <div className="lgss:flex lgss:items-center ">
                <div className="flex flex-col gap-5">
                  <Benefits
                    title="Transparency & impact"
                    description="Monitor blood supply levels, donor behavior and trends, for decision making and resource allocation."
                    icon={benefit2}
                  />

                  <Benefits
                    title="Personalized experience"
                    description="Collaborate with institutions and organizations to offer diverse rewards and incentives."
                    icon={benefit5}
                  />
                </div>
                <div className="h-[300px] hidden mds:block bg-gold w-[3px]"></div>
              </div>
              <div className="lgss:flex lgss:items-center hidden w-[60%]">
                <div className="flex flex-col gap-5">
                  <Benefits
                    title="Engage with other donors"
                    description="Target donors based on eligibility, location, and blood type, at the right time"
                    icon={benefit3}
                  />

                  <Benefits
                    title="Recognition & rewards"
                    description="For every blood donation, you earn points that are redeemable."
                    icon={benefit4}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};


export default BenefitsSection