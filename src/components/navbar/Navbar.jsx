import { useState } from "react";
import { Link } from "react-router-dom";
import { TbUserExclamation } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Navigation bar  */}
      <nav className="bg-white shadow-sm">
        <div className=" lg:container mx-auto px-3 py-4 md:p-2">
          <div className="p-2 md:p-2 lg:p-4 flex justify-between items-center">
            {/* Logo on Large Screen  */}
            <div className="flex items-center gap-2">
              <div className="block md:hidden">
                <MdOutlineMenu size={25} onClick={toggleNavbar} />
              </div>

              <div className="flex-shrink-0 cursor-pointer">
                <img
                  className="w-28 md:w-3/4 lg:w-full"
                  src="assets/logo.png"
                  alt="Furniro Logo"
                />
              </div>
            </div>

            {/* Navbar Links  */}
            <div className="hidden md:block">
              <ul className="flex justify-between items-center gap-20 md:gap-10 lg:gap-20 font-sans font-medium">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-3 md:gap-3 lg:gap-8">
              <Link to="/signup">
                <TbUserExclamation
                  size={22}
                  className="cursor-pointer text-2xl md:text-lg lg:text-xl"
                />
              </Link>

              <IoSearch
                size={22}
                className="hidden md:flex cursor-pointer text-2xl md:text-lg lg:text-9xl"
              />

              <FaRegHeart
                size={22}
                className="hidden md:hidden lg:flex cursor-pointer text-2xl md:text-lg lg:text-xl"
              />

              <div className="relative">
                <Link to="/cart">
                  <BsCart3
                    size={22}
                    className="cursor-pointer text-2xl md:text-lg lg:text-xl"
                  />
                  <span className="absolute bottom-3 left-3 w-6 h-6 bg-brown text-center rounded-full p-1 text-12">
                    1
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {isOpen && (
            <div>
              <div className="md:hidden w-full fixed top-0 left-0 p-3 transition-all bg-white shadow-lg h-full z-50">
                {/* Tog */}
                <div className="flex  items-center gap-3">
                  <RxCross2
                    className="text-xl text-black font-extrabold"
                    size={25}
                    onClick={toggleNavbar}
                  />
                  <img
                    className="w-28 md:w-3/4 lg:w-full"
                    src="assets/logo.png"
                    alt="Furniro Logo"
                  />
                </div>

                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col gap-8">
                  <ul className="flex flex-col items-start gap-4 md:gap-8 mt-8">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>

                  {/* <div>
                    <IoSearch
                      size={22}
                      className=" cursor-pointer text-2xl md:text-lg lg:text-9xl"
                    />

                    <FaRegHeart
                      size={22}
                      className=" cursor-pointer text-2xl md:text-lg lg:text-xl"
                    />
                  </div> */}
                </div>
              </div>
              <div className="bg-black opacity-25 w-full h-full"></div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
