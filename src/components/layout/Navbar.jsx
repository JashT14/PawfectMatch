import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import projectLogo from "../../assets/images/projectLogo.png";

const Navbar = () => {
  const isLoggedIn = false;
  const handleLogout = () => {
    console.log("is logged out");
    //TO DO!!!!
  };

  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-darkest">
      <nav className="mx-auto flex w-[97%] items-center justify-between shadow-inner">
        <div>
          <img className="w-[4.5rem] " src={projectLogo} alt="project-logo" />
        </div>

        <div
          className={`nav-links bg-darkest absolute left-0 ${
            isMenuOpen ? "top-[5.0rem]" : "top-[-100%]"
          } z-10 flex min-h-[14rem] w-full items-center px-5 md:static md:min-h-[4.5rem] md:w-auto`}
        >
          <ul className="font-customFont flex flex-col gap-8 text-[1.0rem] font-semibold text-white md:flex-row md:items-center md:gap-[7vw] ">
            <li>
              <NavLink to="/home">HOME</NavLink>{" "}
            </li>
            <li>
              <NavLink to="/dogsadoption">DOGS FOR ADOPTION</NavLink>{" "}
            </li>
            <li>
              <NavLink to="/dogwalking">DOG WALKING</NavLink>{" "}
            </li>
          </ul>
        </div>

        <div className="font-customFont flex w-[18.0rem] justify-end text-[1.0rem] font-semibold text-white lg:w-auto">
          {isLoggedIn ? (
            <div className="">
              <ul className="flex items-center gap-4">
                <li>
                  <NavLink to="/myprofile">My profile</NavLink>
                </li>
                <li>
                  <button
                    className="bg-medium hover:text-darkest rounded-full px-5 py-2 hover:bg-white"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                  {/* WHEN CLICKING LOGOUT THEN DO ....*/}
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
                    className="bg-medium hover:text-darkest rounded-full px-5 py-2 text-white hover:bg-white"
                    onClick={() => navigate("/login")}
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
