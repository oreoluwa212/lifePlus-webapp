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
        <div className="px-[5%] mds:w-3/5 w-full mds:relative  mds:h-full overflow-auto mds:flex mds:flex-col mds:justify-center mds:items-center absolute top-0 left-0 ">
          <div className="lgss:w-full lgss:flex flex-col lgss:justify-center lgss:items-center lgss:gap-16 ">
            <div className="lgss:flex lgss:flex-col mds:gap-6 lgss:items-center">
              <h1 className="text-gold font-bold text-[30px]">Sign Up for LifePlus</h1>
              <h3 className="lgss:text-[18px] mds:text-black text-gold font-semibold">Enter your details to sign up or sign in to your account</h3>
            </div>
            <form action='' className="mds:w-[60%] w-[100%] h-[50%] mds:h-full justify-between flex flex-col gap-4 lgss:gap-6 mt-4">
              <input
                type="text"
                placeholder="full name"
                className="mdss:bg-transparent px-12 h-[50px] bg-white border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] outline-none placeholder:text-[18px]"
              />
              <input
                type="text"
                placeholder="email"
                className="mdss:bg-transparent px-12 h-[50px] bg-white border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] outline-none placeholder:text-[18px]"
              />
              <input
                type="text"
                placeholder="password"
                className="mdss:bg-transparent px-12 h-[50px] bg-white border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] outline-none placeholder:text-[18px]"
              />
              <div className="flex lgss:justify-between lgss:items-center">
                <div className="flex gap-2 px-4 lgss:gap-4 lgss:mt-2">
                  <input type="checkbox" name="" id="" />
                  <p className='mds:text-black text-white'>Remember me</p>
                </div>
                <div className=" lgss:px-4 mds:text-black text-white">
                  <Link to={'/forgot-password'}>
                    <button>Forgot password?</button>
                  </Link>
                </div>
              </div>
              <Link to={"/dashboard"}>
                <button
                  type="text"
                  placeholder="password"
                  className='bg-red text-white text-[18px] border-none rounded-[32px] lgss:px-8 lgss:h-[48px] h-[50px] w-[100%] lgss:w-[100%]'
                >
                  Sign Up
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpMainPage