import React from 'react';
import { PiGaugeFill, PiHardDrivesFill, PiTrophyFill } from "react-icons/pi";
import Card from './Card';

const ServicesSection = () => {
    return (
        <>
            <div className="flex justify-center items-center h-[166px]">
                <h1 className='text-gold text-[36px] font-semibold'>Our Services</h1>
            </div>
            <div className=' h-[900px] lgss:h-[350px]'>
                <div className="flex flex-col gap-8 lgss:gap-0 lgss:flex-row lgss:justify-around">
                <Card
                    title="Personalized donor dashboard"
                    description="Manage your profile, track donation history, get personalized alerts"
                    icon={<PiGaugeFill/>}
                />

                <Card
                    title="Streamlined donation management"
                    description="Find nearby blood donation centers, flexible appointment booking, track the status of each blood donation"
                    icon={<PiHardDrivesFill/>}
                />
                <Card
                    title="Gamification & rewards system"
                    description=" Accumulate points, unlock different rewards get access to exclusive benefits and personalized rewards."
                    icon={<PiTrophyFill />}
                />
                </div>
                
            </div>
        </>
    );
};

export default ServicesSection;
