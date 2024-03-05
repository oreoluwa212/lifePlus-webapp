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
          MySwal.fire("welcome back");
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
    <>
      <NavBar />
      <section className="relative h-[86vh] w-full mds:flex mds:flex-row border-t-2 border-red">
        <Demo />
        <div className="mds:w-3/5 w-full absolute top-14 mds:relative mds:top-0 overflow-hidden flex flex-col justify-center items-center gap-10 text-center px-5">
          <span className="flex flex-col mds:gap-4 items-center">
            <h1 className="text-gold font-bold text-[30px]">
              Login to LifePlus as a donor
            </h1>
            <h3 className="lgss:text-[18px] mds:text-black text-gold">
              Enter your details to sign in to your account
            </h3>
          </span>
          <div className="md:w-[70%] w-[90%] justify-between flex flex-col">
            <form
              onSubmit={handleSubmit}
              className="w-[100%] justify-between flex flex-col gap-4"
            >
              <input
                type="email"
                placeholder="email"
                className="border-gold bg-white bg-transparent border-2 rounded-[32px] h-[48px] px-4 flex w-full justify-between outline-none text-[16px]"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <div className="border-gold bg-white bg-transparent border-2 rounded-[32px] h-[48px] px-4 flex outline-none  text-[16px] w-full justify-between">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="password"
                  className="h-[100%] outline-none bg-transparent text-[16px] w-full"
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
              <div className="flex justify-between items-center">
                <span className="flex gap-2 px-4">
                  <input type="checkbox" name="" id="" />
                  <p className="mds:text-black  text-white">Remember me</p>
                </span>
                <Link to={"/forgot-password"}>
                  <span className="lgss:px-4 mds:text-black text-white">Forgot password?</span>
                </Link>
              </div>
              <button
                type="submit"
                className="bg-red text-white text-[18px] border-none rounded-[32px] lgss:px-8 h-[48px] w-full"
              >
                Log in
              </button>
            </form>
            <div className="flex w-full flex-col justify-center items-center pt-4">
              <h4 className="text-white font-bold mds:text-black">or</h4>
              <Link
                to={
                  "https://lifeplus-api.onrender.com/auth/google/?usertype=donor"
                }
              >
                <div className="bg-white text-black text-[18px] flex justify-center items-center gap-4 border-black border-[1px] rounded-[32px] px-10 h-[48px] w-full mt-3">
                  <img src={google} alt="" />
                  <button>Login with Google</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
