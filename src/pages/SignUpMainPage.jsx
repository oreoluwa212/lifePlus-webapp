import React from "react";
import NavBar from "../components/NavBar";
import Demo from "../components/Demo";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const SignUpMainPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullNameError, setfullNameError] = useState(false);
  const [emailError, setemailError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

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
    setLoading(true);
    let response = await axios.post(
      "https://lifeplus-api.onrender.com/signup",
      data
    );
    response = JSON.parse(response.data);
    setLoading(false);
    if (response[0]) {
      setLoggedIn(true);
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
    navigate("/dashboard", { state: { user: user } });
    localStorage.setItem("user", loggedIn);
  }

  if (loading) {
    MySwal.fire({
      didOpen: () => {
        MySwal.showLoading();
      },
    });
    setLoading(false);
  }
  return (
    <div className="">
      <NavBar />
      <div className="mds:flex relative mds:absolute flex mds:flex-row h-[83vh] mds:overflow-y-hidden border-t-2 border-red w-full">
        <Demo />

        <div className=" mds:w-3/5 mds:relative  mds:h-full overflow-auto mds:flex mds:flex-col mds:justify-center mds:items-center absolute top-0 left-0 ">
          <div className="lgss:w-full lgss:flex flex-col lgss:justify-center lgss:items-center lgss:gap-16 ">
            <div className="lgss:flex lgss:flex-col lgss:gap-6 lgss:items-center">
              <h1 className="text-gold font-bold text-[30px]">
                Sign Up for LifePlus
              </h1>
              <h3 className="lgss:text-[18px] mds:text-black lgss:w-[55%] lgss:text-center text-gold">
                Enter your details to sign up or sign in to your account
              </h3>
            </div>
            <div className="mds:w-[60%] w-[100%] justify-between lgss:flex lgss:flex-col lgss:gap-6">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="full name"
                  className="bg-transparent border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] outline-none placeholder:text-[18px]"
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
                  className="bg-transparent border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] outline-none placeholder:text-[18px]"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {emailError && (
                  <small className="text-red">email is required</small>
                )}
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  id="password"
                  className="bg-transparent border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] outline-none placeholder:text-[18px]"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                {passwordError && (
                  <small className="text-red">password is required</small>
                )}
                <div className="lgss:flex px-4 lgss:gap-4 lgss:mt-2">
                  <input type="checkbox" name="aggree" id="aggree" />
                  <p className="text-white mds:text-black">
                    I agree to LifePlus Terms and conditions and the privacy
                    policy
                  </p>
                </div>
                <button
                  type="submit"
                  className="bg-red text-white text-[18px] border-none rounded-[32px] lgss:px-8 lgss:h-[48px] w-[100%]"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpMainPage;
