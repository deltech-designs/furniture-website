import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useState } from "react";

export default function SignUp() {
  const [firstname, setFristName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Navbar />
      <div className="flex justify-center h-1/2">
        <div className="w-1/2 mr-4 hidden md:flex">
          <img
            src="assets/img_form2.png"
            alt="Your Image"
            className="w-full h-svh"
          />
        </div>

        {/* Form input */}
        <div className="w-full md:w-1/2 ml-0  bg-white flex flex-col mx-auto p-6">
          <div className="md:mx-20">
            {/* Form Header  */}
            <div className="mb-10">
              <h1 className="text-36 md:text-50 font-bold mb-3">Sign in</h1>
              <p className="text-16 text-gray">
                Create your account in a seconds
              </p>
            </div>

            {/*  */}
            <form className="flex flex-col gap-6 ">
              <input
                type="text"
                placeholder="First Name:"
                value={firstname}
                onChange={(ev) => setFristName(ev.target.value)}
                className="border border-gray-400 rounded-md px-4 py-2 mb-4 w-full lg:w-5/6 outline-none"
              />
              <input
                type="text"
                placeholder="Last Name:"
                value={lastname}
                onChange={(ev) => setLastName(ev.target.value)}
                className="border border-gray-400 rounded-md px-4 py-2 mb-4 w-full lg:w-5/6 outline-none"
              />
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
              <span>
                <input
                  type="checkbox"
                  placeholder=""
                  className="border border-gray-400 rounded-md px-4 py-2 mb-4 mr-3  outline-none focus:bg-brown"
                />
                <span>I agree to the terms and privacy policy</span>
              </span>

              <button
                type="submit"
                className="bg-brown text-black py-3 px-4 rounded-md hover:bg-brown transition-colors w-full lg:w-5/6"
              >
                Create an account
              </button>
              <p>
                Already a member?
                <span className="text-brown">
                  <Link to="/login"> Login </Link>
                </span>
              </p>
            </form>

            <div className="flex items-center gap-6 my-4 md:my-10">
              <div className="w-14 md:w-60 h-[0.8px] bg-darkBlack"></div>
              <span className="text-lightergray text-12 md:text-16 ">
                Or continue with
              </span>
              <div className="w-14 md:w-60 h-[0.8px] bg-darkBlack"></div>
            </div>

            <div className="flex justify-center items-center gap-5">
              <img src="assets/Google.png" className="w-10" alt="Google Logo" />
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
          </div>
        </div>
      </div>
    </div>
  );
}
