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
        <div className="w-full h-[1300px] lgss:h-[520px] bg-[#EFD9D8]">
          <div className="flex flex-row px-8 gap-16 xs:text-[16px] text-[22px] h-[100px] justify-center items-center text-black font-medium">
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
              <div className="flex bg-rd mds:flex-row flex-col mds:gap-0 gap-[200px] justify-center">
                <div className="flex mds:flex-row flex-col  items-center">
                  <div className="flex mds:flex-col">
                    <Benefits
                      title="Convenience & empowerment"
                      description="Schedule appointment seamlessly, track all your blood donations, gain health insights all in one place."
                      icon={<PiCalendarPlusFill />}
                    />

                    <Benefits
                      title="Streamlined donation management"
                      description="Find nearby blood donation centers, flexible appointment booking, track the status of each blood donation"
                      icon={<PiMedalFill />}
                    />
                  </div>
                  <div className="h-[270px] xs:hidden md:block border-gold border-l-[2px]"></div>
                </div>
                <div className="flex items-center gap-[80px] ml-[40px]">
                  <div className="flex mds:flex-col">
                    <Benefits
                      title="Transparency & impact"
                      description="Your blood donations directly help patients in critical need of blood."
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
                <div className="flex items-center">
                  <div className="flex mds:flex-col">
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
                <div className="flex items-center">
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
                <div className="flex items-center">
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
                <div className="flex items-center gap-[80px] ml-[40px]">
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
          ) : null}
        </div>
      </div>
    );
};


export default BenefitsSection