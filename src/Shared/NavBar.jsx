import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { CgProfile } from "react-icons/cg";
import toast from "react-hot-toast";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isHovering, setIsHovering] = useState(false);
  const profile = user?.photoURL;
  const displayName = user?.displayName;

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged Out Successfully");
      })
      .catch((error) => {
        console.error("Logout Error:", error.message);
        toast.error("An error occurred while logging out. Please try again.");
      });
  };
  const tabs = (
    <>
      <NavLink to="/" className="btn btn-outline hover:bg-sky-900">
        Home
      </NavLink>
      <NavLink
        to="/availableFoods"
        className="btn btn-outline hover:bg-sky-900"
      >
        Available Foods
      </NavLink>
      <NavLink to="/manageMyFood" className="btn btn-outline hover:bg-sky-900">
        Manage My Foods
      </NavLink>
      <NavLink to="/myFoodRequest" className="btn btn-outline hover:bg-sky-900">
        My Food Request
      </NavLink>
      <NavLink to="/addFood" className="btn btn-outline hover:bg-sky-900">
        Add Food
      </NavLink>
      <NavLink to="/contactUs" className="btn btn-outline hover:bg-sky-900">
        Contact Us
      </NavLink>
    </>
  );

  return (
    <div className="navbar">
      {/* Navbar Start */}
      <div className="navbar-start">
        <h3 className="text-sm lg:text-xl flex text-center items-center font-bold">
          FoodBuddy
        </h3>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{tabs}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-2">
        {/* User Profile and Logout */}
        {user && user?.email ? (
          <div
            className="flex items-center gap-2 relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Hover Effects */}
            {isHovering && (
              <div className="absolute  p-2 w-36 rounded-md shadow-md top-10 left-0 z-10">
                <p className="text-sm mb-1">
                  {displayName || "Anonymous User"}
                </p>
                <button
                  onClick={handleLogout}
                  className="btn btn-sm bg-[#0f9ccf] text-white hover:bg-sky-900 rounded-xl"
                >
                  Log-Out
                </button>
              </div>
            )}

            {/* Profile Image */}
            <img
              className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white"
              src={profile || "https://via.placeholder.com/150"}
              alt="User Profile"
            />
          </div>
        ) : (
          // Login/Register Links
          <div className="flex items-center gap-2">
            <NavLink
              to="/login"
              className="btn btn-sm lg:btn-md bg-[#0f9ccf] text-white"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn btn-sm lg:btn-md bg-[#0f9ccf] text-white"
            >
              Register
            </NavLink>
          </div>
        )}

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 right-0 bg-gray-400 "
          >
            {tabs}
            <div className="mt-2">
              {user && user?.email ? (
                <NavLink
                  onClick={() => {
                    logOut()
                      .then(() => {
                        toast.success("log out!");
                      })
                      .catch((error) => {
                        toast.error(
                          "An error occurred while logging out. Please try again."
                        );
                      });
                  }}
                  className="btn btn-sm lg:btn-md bg-[#0f9ccf] text-white hover:bg-sky-900 rounded-xl"
                >
                  Log-Out
                </NavLink>
              ) : (
                <div>
                  <NavLink
                    to="/login"
                    className="btn btn-sm lg:btn-md bg-[#0f9ccf] text-white"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="btn btn-sm lg:btn-md bg-[#0f9ccf] text-white ml-1"
                  >
                    Register
                  </NavLink>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
