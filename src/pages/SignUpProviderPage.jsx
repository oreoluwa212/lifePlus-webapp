import React from "react";
import NavBar from "../components/NavBar";
import Demo from "../components/Demo";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function togglePasswordVisibility() {
  setIsPasswordVisible((prevState) => !prevState);
}
const SignUpProviderPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullNameError, setfullNameError] = useState(false);
  const [emailError, setemailError] = useState(false);
  const [addressError, setaddressError] = useState(false);
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
      <div className="mds:flex relative mds:absolute flex flex-row h-[83vh] mds:overflow-y-hidden border-t-2 border-red w-full">
        <Demo />
        <div className=" mds:w-3/5 bg-white rounded-[32px] mds:bg-transparent  mt-[10%] mds:mt-0 mds:relative h-[80%] mds:h-full overflow-auto flex flex-col justify-center items-center absolute top-0 left-0 ">
          <div className="lgss:w-full px-[5%] mds:px-0 lgss:flex flex-col lgss:justify-center lgss:items-center lgss:gap-16 ">
            <div className="lgss:flex lgss:flex-col lgss:gap-6 lgss:items-center">
              <h1 className="text-gold font-bold text-[30px]">
                Sign Up for LifePlus
              </h1>
              <h3 className="lgss:text-[18px] mds:text-black lgss:w-[55%] lgss:text-center text-gold">
                Enter your details to sign up or sign in to your account
              </h3>
            </div>
            <form
              className="mds:w-[60%] w-[100%] justify-between flex flex-col gap-6"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Name of HealthCare Facility"
                className="bg-transparent border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] h-[50px] px-4 mds:px-0 outline-none placeholder:text-[18px]"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
              {fullNameError && (
                <small className="text-red">Name is required</small>
              )}
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Address"
                className="bg-transparent border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] h-[50px] px-4 mds:px-0  outline-none placeholder:text-[18px]"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
              {addressError && (
                <small className="text-red">address is required</small>
              )}
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Institution Email Address"
                className="bg-transparent border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] h-[50px] px-4 mds:px-0  outline-none placeholder:text-[18px]"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {emailError && (
                <small className="text-red">email is required</small>
              )}
              <div className="bg-transparent border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] h-[50px] px-4 mds:px-0  flex outline-none placeholder:text-[18px]">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  id="password"
                  className=" lgss:h-[48px] w-full  outline-none placeholder:text-[18px] bg-transparent"
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
                <input type="checkbox" name="aggree" id="aggree" />
                <p className="text-black">
                  I agree to LifePlus Terms, conditions and the privacy
                  policy
                </p>
              </div>
              <button
                type="submit"
                className="bg-red text-white text-[18px] border-none rounded-[32px] lgss:px-8 lgss:h-[48px] h-[50px] w-[100%]"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpProviderPage;
