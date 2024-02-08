import React from 'react'
import NavBar from '../components/NavBar'
import Demo from '../components/Demo'
import { Link } from 'react-router-dom'

const SignUpMainPage = () => {
  return (
    <div className="">
      <NavBar />
      <div className="mds:flex relative mds:absolute flex mds:flex-row h-[83vh] mds:overflow-y-hidden border-t-2 border-red w-full">

        <Demo />

        <div className=" mds:w-3/5 mds:relative  mds:h-full overflow-auto mds:flex mds:flex-col mds:justify-center mds:items-center absolute top-0 left-0 ">
          <div className="lgss:w-full lgss:flex flex-col lgss:justify-center lgss:items-center lgss:gap-16 ">
            <div className="lgss:flex lgss:flex-col lgss:gap-6 lgss:items-center">
            <h1 className="text-gold font-bold text-[30px]">Sign Up for LifePlus</h1>
            <h3 className="lgss:text-[18px] mds:text-black lgss:w-[55%] lgss:text-center text-gold">Enter your details to sign up or sign in to your account</h3>
            </div>
            <div className="mds:w-[60%] w-[100%] justify-between lgss:flex lgss:flex-col lgss:gap-6">
                <input type="text" placeholder='full name' className='bg-transparent border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] outline-none placeholder:text-[18px]'/>
                <input type="text" placeholder='email' className='bg-transparent border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] outline-none placeholder:text-[18px]'/>
                <input type="text" placeholder='password' className='bg-transparent border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] outline-none placeholder:text-[18px]'/>
                <div className="lgss:flex px-4 lgss:gap-4 lgss:mt-2">
                    <input type="checkbox" name="" id="" />
                    <p className='text-white mds:text-black'>I agree to LifePlus Terms and conditions and the privacy policy</p>
                </div>
                <button type="text" placeholder='password' className='bg-red text-white text-[18px] border-none rounded-[32px] lgss:px-8 lgss:h-[48px] w-[100%]'>
                    Sign Up
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpMainPage