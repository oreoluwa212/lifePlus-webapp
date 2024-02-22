import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Demo from "../components/Demo";
import { useState, useEffect } from "react";
import axios from "axios";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FaGoogle } from "react-icons/fa";
import { google } from "../assets";

const LoginPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      MySwal.fire("Ensure all fields are filled");
    } else {
      try {
        const data = {
          email: email,
          password: password,
        };
        setLoading(true);
        let response = await axios.post(
          "https://lifeplus-api.onrender.com/login",
          data
        );
        response = JSON.parse(response.data);
        setLoading(false);
        if (response[0]) {
          localStorage.setItem("user", JSON.stringify(response[1]));
          navigate("/dashboard");
        }
      } catch (error) {
        MySwal.fire({
          icon: "error",
          title: "Oops...",
        }).then(() => {
          return MySwal.fire(
            <p className="text-red">{JSON.parse(error.response.data).error}</p>
          );
        });
      }
    }
  };

  if (loading) {
    MySwal.fire({
      didOpen: () => {
        MySwal.showLoading();
      },
    });
    setLoading(false);
  }
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <div className="">
      <NavBar />
      <div className="relative mds:absolute mds:flex mds:flex-row h-[100vh] border-t-2 border-red w-full">
        <Demo />
        <div className="mds:w-3/5 w-full absolute mds:relative top-0 mt-[5%] mds:mt-0 mds:h-full overflow-auto flex flex-col justify-end mds:justify-center pb-[40px] items-center h-[70vh]">
          <div className="w-full flex flex-col justify-center items-center mds:gap-8 xs:gap-8">
            <div className="flex flex-col mds:gap-6 items-center">
              <h1 className="text-gold font-bold text-[30px]">
                Login to LifePlus
              </h1>
              <h3 className="lgss:text-[18px] mds:text-black text-gold">
                Enter your details to sign in to your account
              </h3>
            </div>
            <div className="mds:w-[70%] w-[90%] justify-between mds:flex mds:flex-col mds:gap-6">
              <form
                onSubmit={handleSubmit}
                className="mds:w-full mds:px-[5%] w-[100%] h-[70%] mds:h-[50%] justify-between flex flex-col gap-4 lgss:gap-4"
              >
                <div className=" border-gold bg-white lgss:bg-transparent border-2 rounded-[32px] lgss:pl-4 lgss:pr-2 lgss:h-[48px] h-[50px] pl-4 mds:px-0  flex outline-none  text-[16px] w-full justify-between">
                  <input
                    type="email"
                    placeholder="email"
                    className="lgss:h-[48px] outline-none bg-transparent text-[16px]"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div className=" border-gold bg-white lgss:bg-transparent border-2 rounded-[32px] lgss:pl-4 lgss:pr-2 lgss:h-[48px] h-[50px] pl-4 mds:px-0  flex outline-none  text-[16px] w-full justify-between">
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
                <div className="flex justify-between w-full lgss:items-center">
                  <div className="flex gap-2 px-4 lgss:gap-3">
                    <input type="checkbox" name="" id="" />
                    <p className="mds:text-black  text-white">Remember me</p>
                  </div>
                  <div className=" lgss:px-4 mds:text-black text-white">
                    <Link to={"/forgot-password"}>
                      <button>Forgot password?</button>
                    </Link>
                  </div>
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="bg-red text-white text-[18px] lgss:w-[100%] border-none rounded-[32px] lgss:px-8 lgss:h-[48px] h-[50px] w-full"
                  >
                    Log in
                  </button>
                </div>
              </form>
              <div className="flex w-full flex-col justify-center items-center pt-4">
                <h4 className="text-white font-bold mds:text-black">or</h4>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
