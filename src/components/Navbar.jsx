import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { IoIosArrowDown } from "react-icons/io";
import Cookies from 'js-cookie';
const Navbar = () => {
  const [toogle, setToggle] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isLoggedIn'));

console.log(  Cookies.get('isLoggedIn'))



  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    setIsLoggedIn(false); // Example: reset isLoggedIn state
  };

  const handleProfile = () => {
    console.log("Navigating to profile...");
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="Logo" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          // Conditionally render the link only if not loggedInOnly or if not logged in
          !nav.loggedInOnly || !isLoggedIn ? (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? "mr-0" : "mr-5"
              } text-white`}
            >
              <a href={isLoggedIn ? nav.linkLoggedIn : nav.link}>
                {isLoggedIn ? nav.titleLoggedIn : nav.title}
              </a>
            </li>
          ) : null
        ))}
        <li className="ml-5 flex items-center justify-center gap-x-3">
          {isLoggedIn && ( <div className="ml-4 rounded-full w-[40px] h-[40px] bg-secondarycolor flex items-center justify-center">
            <p className="text-xl font-bold heading-text">JD</p>
          </div>  ) 
     }


{/* //Added if isLoggedIn display div */}
{isLoggedIn && (   <div className="relative">
            <button
              onClick={toggleDropDown}
              className="flex items-center justify-center w-8 h-8"
            >
              <IoIosArrowDown className="w-4 h-4" />
            </button>
            {isLoggedIn && dropDown && (
              <div className="absolute z-10 right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                <button
                  onClick={handleProfile}
                  className="font-poppins font-normal text-[16px] block w-full px-4 py-2 text-left text-black hover:bg-gray-100"
                >
                  <a href="">Profile</a>
                </button>
                <button
                  onClick={handleLogout}
                  className="font-poppins font-normal text-[16px] block w-full px-4 py-2 text-left text-black hover:bg-gray-100"
                >
                  <a href="">Logout</a>
                </button>
              </div>
            )}
          </div>
         ) }

       
      
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toogle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain text-white"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${toogle ? "flex" : "hidden"
            } p-6 bg-purple absolute top-20 right-0 my-2 w-full rounded-xl sidebar z-[5]`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              !nav.loggedInOnly || !isLoggedIn ? (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } text-white`}
                >
                  <a href={isLoggedIn ? nav.linkLoggedIn : nav.link}>
                    {isLoggedIn ? nav.titleLoggedIn : nav.title}
                  </a>
                </li>
              ) : null
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
