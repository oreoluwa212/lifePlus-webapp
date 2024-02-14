import React, { useState } from 'react'
import Card from './Card';
import Benefits from './Benefits';
import { PiCalendarPlusFill, PiGaugeFill, PiHardDrivesFill, PiLifebuoyFill, PiMedalFill, PiTrophyFill, PiUserFill, PiUsersFourFill } from 'react-icons/pi';

const BenefitsSection = () => {
    const [activeScreen, setActiveScreen] = useState(1);
    return (
      <div className="">
        <div className="flex justify-center items-center h-[166px]">
          <h1 className="text-gold mds:text-[36px] xs:text-[26px] font-semibold">
            Our Benefits
          </h1>
        </div>
        <div className="w-full h-[550px] lgss:h-[520px] bg-[#EFD9D8]">
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
              <div className="flex justify-center">
                <div className="flex items-center ">
                  <div className="flex flex-col">
                    <Benefits
                      title="Convenience & empowerment"
                      description="Schedule appointment seamlessly, track all your blood donations, gain health insights all in one place."
                      icon={<PiCalendarPlusFill />}
                    />

                    <Benefits
                      title="Recognition & rewards"
                      description="Find nearby blood donation centers, flexible appointment booking, track the status of each blood donation"
                      icon={<PiMedalFill />}
                    />
                  </div>
                  <div className="h-[270px] xs:hidden md:block bg-gold w-[2px]"></div>
                </div>
                <div className="lgss:flex lgss:items-center hidden ">
                  <div className="flex flex-col">
                    <Benefits
                      title="Transparency & impact"
                      description="Schedule appointment seamlessly, track all your blood donations, gain health insights all in one place."
                      icon={<PiLifebuoyFill />}
                    />

                    <Benefits
                      title="Personalized experience"
                      description="We create tailored content, recommendations, and rewards based on your uniqueness."
                      icon={<PiUserFill />}
                    />
                  </div>
                  <div className="h-[270px] xs:hidden md:block bg-gold w-[2px]"></div>
                </div>
                <div className="lgss:flex lgss:items-center hidden  gap-[80px] ml-[40px]">
                  <div className="flex flex-col">
                    <Benefits
                      title="Engage with other donors"
                      description="Participate in challenges, earn badges, and climb leader boards, fostering friendly competition."
                      icon={<PiUsersFourFill />}
                    />

                    <Benefits
                      title="Recognition & rewards"
                      description="For every blood donation, you earn points that are redeemable."
                      icon={<PiMedalFill />}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : activeScreen === 2 ? (
            <div className="">
              <div className="flex justify-center">
                <div className="flex items-center ">
                  <div className="flex flex-col">
                    <Benefits
                      title="Streamlined operations"
                      description="Efficiency in appointment scheduling, and inventory tracking"
                      icon={<PiCalendarPlusFill />}
                    />

                    <Benefits
                      title="Emergency response"
                      description="Send urgent notifications to donors in case of critical shortages, mobilizing the community to save lives"
                      icon={<PiMedalFill />}
                    />
                  </div>
                  <div className="h-[270px] xs:hidden md:block bg-gold w-[2px]"></div>
                </div>
                <div className="lgss:flex lgss:items-center hidden ">
                  <div className="flex flex-col">
                    <Benefits
                      title="Real-time data insights"
                      description="Monitor blood supply levels, donor behavior and trends, for decision making and resource allocation."
                      icon={<PiLifebuoyFill />}
                    />

                    <Benefits
                      title="Partnership opportunities"
                      description="Collaborate with institutions and organizations to offer diverse rewards and incentives."
                      icon={<PiUserFill />}
                    />
                  </div>
                  <div className="h-[270px] xs:hidden md:block bg-gold w-[2px]"></div>
                </div>
                <div className="lgss:flex lgss:items-center hidden  gap-[80px] ml-[40px]">
                  <div className="flex flex-col">
                    <Benefits
                      title="Targeted outreach"
                      description="Target donors based on eligibility, location, and blood type, at the right time"
                      icon={<PiUsersFourFill />}
                    />

                    <Benefits
                      title="Recognition & rewards"
                      description="For every blood donation, you earn points that are redeemable."
                      icon={<PiMedalFill />}
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