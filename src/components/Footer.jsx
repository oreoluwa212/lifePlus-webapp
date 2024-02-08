import React from 'react'
import { PiFacebookLogoFill, PiTwitterLogoFill, PiYoutubeLogoFill } from 'react-icons/pi'

const Footer = () => {
    return (
        <div className="flex bg-red text-white justify-between h-[96px] w-full">
            <div className="flex justify-between items-center w-full px-[5%]">
                <div className="">
                    <h1 className='text-[36px] font-semibold'>LifePlus</h1>
                </div>
                <div className="justify-between flex w-[80%] items-center">
                    <nav>
                        <ul className='lgss:flex hidden justify-between w-[400px] text-[20px]'>
                            <li><button>Our benefits</button></li>
                            <li><button>Services</button></li>
                            <li><button>Contact Us</button></li>
                        </ul>
                    </nav>
                    <div className="flex gap-[30px] text-[26px] ">
                        <PiFacebookLogoFill/>
                        <PiYoutubeLogoFill/>
                        <PiTwitterLogoFill/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer