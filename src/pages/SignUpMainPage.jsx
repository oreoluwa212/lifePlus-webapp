import React from "react";
import NavBar from "../components/NavBar";
import Demo from "../components/Demo";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FaGoogle } from "react-icons/fa";
import { data } from "autoprefixer";
import { google } from "../assets";

const SignUpMainPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullNameError, setfullNameError] = useState(false);
  const [emailError, setemailError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName) {
      setfullNameError(true);
    } else if (!email) {
      setemailError(true);
    } else if (!password) {
      setpasswordError(true);
    }

    const data = {
      fullName: fullName,
      email: email,
      password: password,
    };
    let response = await axios.post(
      "https://lifeplus-api.onrender.com/signup",
      data
    );
    response = JSON.parse(response.data);
    if (response[0]) {
      setLoggedIn(true);
      localStorage.setItem("user", response[1]);
      setUser(response[1]);
    } else {
      MySwal.fire({
        icon: "error",
        title: "Oops...",
      }).then(() => {
        return MySwal.fire(<p className="text-red">{response[1]}</p>);
      });
    }
  };

  if (loggedIn) {
    user.new = true;
    navigate("/update-profile", { state: { user: user } });
    // localStorage.setItem("user", JSON.stringify(user));
  }

  return (
    <div className="">
      <NavBar />
      <div className="mds:flex relative mds:absolute flex mds:flex-row h-[83vh] mds:overflow-y-hidden border-t-2 border-red w-full">
        <Demo />
        <div className=" mds:w-3/5 mx-[5%] mds:mx-0 bg-white rounded-[32px] mds:bg-transparent mt-[10%] mds:mt-[5%] mds:relative h-[75%] mds:h-screen overflow-auto flex flex-col items-center absolute top-0 left-0 ">
          <div className="lgss:w-full px-[5%] mds:px-0 lgss:flex flex-col lgss:justify-between lgss:items-center lgss:gap-3 lgss:h-[70vh] ">
            <div className="lgss:flex lgss:flex-col lgss:items-center ">
              <h1 className="text-gold font-bold text-[30px]">
                Sign Up for LifePlus
              </h1>
              <h3 className="lgss:text-[18px] mds:text-black lgss:w-[55%] lgss:text-center text-gold">
                Enter your details to sign up or sign in to your account
              </h3>
            </div>
            <form
              className="mds:w-[60%] w-[100%] justify-between lgss:mt-6 h-full flex flex-col"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="full name"
                className="bg-transparent border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] h-[50px] px-4 mds:px-0 outline-none placeholder:text-[18px]"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
              {fullNameError && (
                <small className="text-red">full name is required</small>
              )}
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                className="bg-transparent border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] h-[50px] px-4 mds:px-0  outline-none placeholder:text-[18px]"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {emailError && (
                <small className="text-red">email is required</small>
              )}
              <div className="bg-transparent border-gold border-2 rounded-[32px] lgss:pl-8 lgss:pr-2 lgss:h-[48px] h-[50px] pl-4 mds:px-0  flex outline-none  text-[16px] w-full justify-between">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="password"
                  className=" lgss:h-[48px] outline-none  text-[16px] bg-transparent"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <button
                  className=" px-4 text-gold"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {passwordError && (
                <small className="text-red">password is required</small>
              )}

              <div className="flex px-4 gap-4 mt-2">
                <input type="checkbox" name="aggree" id="aggree" required />
                <p className="text-black">
                  I agree to LifePlus Terms and conditions and the privacy
                  policy
                </p>
              </div>
              <button
                type="submit"
                className="bg-red text-white text-[18px] border-none rounded-[32px] lgss:px-8 h-[50px] lgss:h-[48px] w-[100%]"
              >
                Next
              </button>
              <div className='flex w-full flex-col justify-center items-center'>
                <h4>or</h4>
                <Link
                  to={
                    "https://lifeplus-api.onrender.com/auth/google/?usertype=donor"
                  }
                >
                  <div className="bg-white text-black text-[18px] flex justify-center items-center gap-4 border-black border-[1px] p-3 m-auto  rounded-[32px] lgss:px-8 h-[50px] lgss:h-[48px] w-full mt-3">
                    <img src={google} alt="" />
                    <button>Login with Google</button>
                  </div>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpMainPage;
