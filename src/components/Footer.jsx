import React from 'react'
import { PiFacebookLogoFill, PiGithubLogoFill, PiTwitterLogoFill, PiYoutubeLogoFill } from 'react-icons/pi'


const Footer = () => {
    return (
        <section className="flex flex-col md:flex-row bg-red text-white justify-between items-center h-[100%] w-full px-[5%] py-2 md:py-5">
            <h1 className='text-[36px] font-semibold'>LifePlus</h1>
            <div className="justify-between flex flex-col md:flex-row  w-[80%] items-center gap-5">
                <ul className='flex justify-around w-[400px] text-[20px]'>
                    <li><button><a href="">Our benefits</a></button></li>
                    <li><button>Services</button></li>
                    <li><button>Contact Us</button></li>
                </ul>
                <div className="flex flex-col gap-4 justify-start items-center md:items-start text-[20px] ">
                    <div className="flex justify-center items-center">
                        <PiGithubLogoFill />
                        <a href="https://github.com/oreoluwa212/lifePlus-webapp" target='_blank' className='text-[16px]'>Link to Github Repo</a>
                    </div>
                    <div className="flex justify-center items-center">
                        <PiGithubLogoFill />
                        <a href="https://github.com/DCTP-GROUP-49-CAPSTONE-PROJECT" target='_blank' className='text-[16px]'>Link to Github Organisation(Backend)</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer