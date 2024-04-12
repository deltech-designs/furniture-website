import Navbar from "../components/navbar/Navbar";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { PiClockFill } from "react-icons/pi";
import ChooseUS from "../components/chooseUs";
import Footer from "../components/footer/footer";

export default function About() {
  return (
    <div>
      <Navbar />
      {/* Landing page for About */}
      <div
        className="h-[316px] w-full p-4 flex justify-center items-center flex-col gap-3"
        style={{ backgroundImage: 'url("./assets/Shop.png")' }}
      >
        <img src="./assets/logo_icon.png" alt="funiro logo icon" />
        <h1 className="text-48 font-semibold">About</h1>
        <p>
          <span className="font-bold">Home</span> &#10095; <span>About</span>
        </p>
      </div>

      <div className="md:container mx-auto p-4 mt-16 md:mt-24">
        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <h1 className="text-36  font-bold">Get In Touch With Us</h1>
          <p className="text-16 w-full md:w-[55%] leading-normal">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-around items-start w-full mt-24">
          <div className="w-full md:w-[30%]">
            <div>
              <div className="flex items-start gap-8 mb-4">
                <FaLocationDot size={30} />
                <div>
                  <h2 className="text-20 font-semibold">Address</h2>
                  <p>236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>
              <div className="flex items-start gap-8 mb-4">
                <FaPhone size={20} />
                <div>
                  <h2 className="text-20 font-semibold">Phone</h2>
                  <p>Mobile: +(84) 546-6789 </p>
                  <p>Hotline: +(84) 456-6789</p>
                </div>
              </div>
              <div className="flex items-start gap-8">
                <PiClockFill size={25} />
                <div>
                  <h2 className="text-20 font-semibold">Working Time</h2>
                  <p>Monday-Friday: 9:00 - 22:00</p>
                  <p>Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form className="w-full  flex flex-col">
              <div className="mb-6 flex flex-col gap-3">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  className="border-2 w-full py-2 px-4 rounded-md border-darkBlack outline-none"
                  id="name"
                  placeholder="Abc"
                />
              </div>
              <div className="mb-6 flex flex-col gap-3">
                <label htmlFor="name">Email Address</label>
                <input
                  type="email"
                  className="border-2 w-full py-2 px-4 rounded-md border-darkBlack outline-none"
                  placeholder="Abc@def.com"
                  id="name"
                />
              </div>
              <div className="mb-6 flex flex-col gap-3">
                <label htmlFor="name">Message</label>
                <input
                  type="text"
                  className="border-2 w-full md:w-96 py-2 px-4 rounded-md border-darkBlack outline-none"
                  placeholder="This is an optional"
                  id="name"
                />
              </div>
              <div className="mb-6 flex flex-col gap-3">
                <label htmlFor="name">Your name</label>
                <textarea
                  cols="10"
                  rows="3"
                  className="border-2  w-full p-3 rounded-md border-darkBlack outline-none"
                  id="name"
                ></textarea>
              </div>

              <div className="my-8">
                <button
                  type="submit"
                  className="text-white  text-16 bg-gold border-2 py-4 px-16 rounded-lg border-none transition-all duration-500 ease-in-out"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ChooseUS />

      <div>
        <Footer />
      </div>
    </div>
  );
}
