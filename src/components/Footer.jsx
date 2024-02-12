import React from 'react'
import { PiFacebookLogoFill, PiGithubLogoFill, PiTwitterLogoFill, PiYoutubeLogoFill } from 'react-icons/pi'


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
                            <li><button><a href="">Our benefits</a></button></li>
                            <li><button>Services</button></li>
                            <li><button>Contact Us</button></li>
                        </ul>
                    </nav>
                    <div className="flex flex-col gap-4 justify-start items-start text-[20px] ">
                        <div className="flex justify-center items-center">
                            <PiGithubLogoFill/>
                        <a href="https://github.com/oreoluwa212/lifePlus-webapp" target='_blank' className='text-[16px]'>Link to Github Repo</a>
                        </div>
                        <div className="flex justify-center items-center">
                            <PiGithubLogoFill/>
                        <a href="https://github.com/DCTP-GROUP-49-CAPSTONE-PROJECT" target='_blank' className='text-[16px]'>Link to Github Organisation(Backend)</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer