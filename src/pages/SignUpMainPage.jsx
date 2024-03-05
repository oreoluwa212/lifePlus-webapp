import React from "react";
import NavBar from "../components/NavBar";
import Demo from "../components/Demo";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
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
      localStorage.setItem("user", JSON.stringify(response[1]));
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
      <div className="relative mds:absolute mds:flex mds:flex-row h-[100vh] mds:h-screen border-t-2 border-red w-full">
        <Demo />
        <div className="mds:w-3/5 w-full absolute mds:relative top-0 lgss:mt-[0%] mt-[20%] mds:mt-5 mds:h-full overflow-hidden flex flex-col justify-end mds:justify-center pb-[40px] items-center h-[70vh]">
          <div className="w-full flex flex-col justify-center items-center mds:gap-1 xs:gap-8">
            <div className="flex flex-col mds:gap-3 items-center">
              <h1 className="text-gold font-bold text-[30px]">
                Sign Up for LifePlus as a donor
              </h1>
              <h3 className="lgss:text-[18px] mds:text-black lgss:w-[55%] lgss:text-center text-gold">
                Enter your details to sign up or sign in to your account
              </h3>
            </div>
            <div className="mds:w-[100%] w-[90%] h-full justify-center items-center flex flex-col gap-4 lgss:gap-6">
              <form
                className="mds:w-[60%] w-[100%] justify-between lgss:mt-6 h-full flex flex-col gap-3"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="full name"
                  className="border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] h-[50px] px-4 mds:px-0 outline-none placeholder:text-[18px]"
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
                  className="border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] h-[50px] px-4 mds:px-0  outline-none placeholder:text-[18px]"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {emailError && (
                  <small className="text-red">email is required</small>
                )}
                <div className=" border-gold bg-white lgss:bg-transparent border-2 rounded-[32px] lgss:pl-8 lgss:pr-2 lgss:h-[48px] h-[50px] pl-4 mds:px-0  flex outline-none  text-[16px] w-full justify-between">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="password"
                    className=" lgss:h-[48px] outline-none bg-transparent text-[16px]"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />

                  {isPasswordVisible ? (
                    <IoMdEye
                      onClick={togglePasswordVisibility}
                      className="cursor-pointer text-xl relative top-4 text-gold right-4"
                    />
                  ) : (
                    <IoMdEyeOff
                      onClick={togglePasswordVisibility}
                      className="cursor-pointer text-xl relative top-4 text-gold right-4"
                    />
                  )}
                </div>
                {passwordError && (
                  <small className="text-red">password is required</small>
                )}
                <div className="flex px-4 gap-4 mt-2">
                  <input type="checkbox" name="aggree" id="aggree" required />
                  <p className="text-white mds:text-black">
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
              </form>
              <div className="flex w-full flex-col justify-center items-center">
                <h4 className="text-white mds:text-black">or</h4>
                <Link
                  to={
                    "https://lifeplus-api.onrender.com/auth/google/?usertype=donor"
                  }
                >
                  <div className="bg-white text-black text-[18px] flex justify-center items-center gap-4 border-black border-[1px] p-3 m-auto  rounded-[32px] lgss:px-8 h-[50px] lgss:h-[48px] w-full mt-3">
                    <img src={google} alt="" />
                    <button>Signup with Google</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpMainPage;
