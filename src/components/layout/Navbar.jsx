import { useState, useEffect } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import projectLogo from "../../assets/images/projectLogo.png";

const Navbar = () => {
  const isLoggedIn = true;
  const handleLogout = () => {
    console.log("is logged in");
  };
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-darkest">
      <nav className="mx-auto flex w-[97%] items-center justify-between shadow-inner">
        <div>
          <img className="w-[5.25rem] " src={projectLogo} alt="project-logo" />
        </div>

        <div
          className={`nav-links bg-darkest absolute left-0 ${
            isMenuOpen ? "top-[4.8rem]" : "top-[-100%]"
          } flex min-h-[14rem] w-full items-center px-5 md:static md:min-h-[5.25rem] md:w-auto`}
        >
          <ul className="font-customFont text-lightest flex flex-col gap-8 text-[1.0rem] font-semibold md:flex-row md:items-center md:gap-[7vw] ">
            <li>
              <NavLink to="/home">HOME</NavLink>{" "}
            </li>
            <li>
              <NavLink to="/dogadoption">DOGS FOR ADOPTION</NavLink>{" "}
            </li>
            <li>
              <NavLink to="/dogwalking">DOG WALKING</NavLink>{" "}
            </li>
          </ul>
        </div>

        <div className="font-customFont text-lightest flex w-[18.0rem] justify-end text-[1.0rem] font-semibold lg:w-auto">
          {isLoggedIn ? (
            <div className="">
              <ul className="flex items-center gap-4">
                <li>
                  <NavLink to="/myprofile">My profile</NavLink>
                </li>
                <li>
                  <button
                    className="bg-medium hover:bg-lightest hover:text-darkest rounded-full px-5 py-2"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                </li>
                <li className="cursor-pointer text-2xl md:hidden">
                  <ion-icon
                    onClick={() => {
                      setMenuOpen((prev) => !prev);
                      console.log("Toggle menu clicked");
                    }}
                    name="menu-outline"
                  ></ion-icon>
                </li>
              </ul>
            </div>
          ) : (
            <div className=" ">
              <ul className="flex items-center gap-4">
                <li>
                  <button
                    className="bg-medium hover:bg-lightest hover:text-darkest text-lightest rounded-full px-5 py-2"
                    onClick={handleLogout}
                  >
                    Log In
                  </button>
                </li>
                <li className="cursor-pointer text-2xl md:hidden">
                  <ion-icon
                    onClick={() => {
                      setMenuOpen((prev) => !prev);
                      console.log("Toggle menu clicked");
                    }}
                    name="menu-outline"
                  ></ion-icon>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
