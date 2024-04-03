import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Navbar />
      <div className="flex justify-center  h-1/2">
        <div className="w-1/2 mr-4 hidden md:flex">
          <img
            src="assets/img_form2.png"
            alt="Your Image"
            className="w-full h-svh"
          />
        </div>
        <div className="w-full md:w-1/2 ml-0  bg-white  flex flex-col mx-auto p-6">
          <div className="md:mx-20">
            <div className="mb-10">
              <h1 className="text-36 md:text-50 font-bold mb-3">Login</h1>
              <p className="text-16 text-gray">
                Create your account in a seconds
              </p>
            </div>
            <form className="flex flex-col gap-6 ">
              <input
                type="email"
                placeholder="Email Address:"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                className="border border-gray-400 rounded-md px-4 py-2 mb-4 w-full lg:w-5/6 outline-none"
              />
              <input
                type="password"
                placeholder="Create Password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                className="border border-gray-400 rounded-md px-4 py-2 mb-4 w-full lg:w-5/6 outline-none"
              />

              {/* Forgotten password */}
              <div className="flex flex-col md:flex-row items-center justify-around">
                <div className="">
                  <input
                    type="checkbox"
                    placeholder="Create Password"
                    className="border border-gray-400 rounded-md px-4 py-2 mb-4 mr-3 outline-none focus:bg-brown"
                  />
                  <span>Keep me logged in </span>
                </div>
                <div>
                  <span>Forgotten Password?</span>
                </div>
              </div>

              <button
                type="submit"
                className="bg-brown text-black py-2 px-4 rounded-md hover:bg-brown transition-colors w-full lg:w-5/6"
              >
                Submit
              </button>
              <p>
                Already have an accout{" "}
                <span className="text-brown">
                  <Link to="/signup">Sign In </Link>
                </span>
              </p>

              {/* Signup with other option  */}

              <div className="flex items-center gap-6 my-4 md:my-10">
                <div className="w-14 md:w-60 h-[0.8px] bg-darkBlack"></div>
                <span className="text-lightergray text-12 md:text-16 ">
                  Or continue with
                </span>
                <div className="w-14 md:w-60 h-[0.8px] bg-darkBlack"></div>
              </div>

              <div className="flex justify-center items-center gap-5">
                <img
                  src="assets/Google.png"
                  className="w-10"
                  alt="Google Logo"
                />
                <img
                  src="assets/Facebook.png"
                  className="w-10"
                  alt="Google Logo"
                />
                <img
                  src="assets/Instagram.png"
                  className="w-10"
                  alt="Google Logo"
                />
                <img
                  src="assets/Twitter.png"
                  className="w-10"
                  alt="Google Logo"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
