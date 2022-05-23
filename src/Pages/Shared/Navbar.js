import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo-01.png";
import auth from "../../firebase.init";
import CustomLink from "./CustomeLink";
import "./Shared.css";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
    // localStorage.removeItem("accessToken");
  };

  console.log(user);

  const navManuItems = (
    <>
      <li>
        <CustomLink className="text-lg " to={"/"}>
          Home
        </CustomLink>
      </li>
      <li>
        <CustomLink className="text-lg" to={"dashboard"}>
          Dashboard
        </CustomLink>
      </li>
    </>
  );
  return (
    <div className="bg-neutral ">
      <div className="sm:mx-10">
        <div className="navbar text-accent">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 bg-neutral p-2 shadow  w-52"
              >
                {navManuItems}
              </ul>
            </div>
            <Link to={"/"}>
              <img src={logo} className="lg:h-10" alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex text-accent ">
            <ul className="menu menu-horizontal p-0">{navManuItems}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                <div className="mx-2 sm:text-lg sm:font-medium sm:border-2 sm:px-2">
                  {user.displayName}
                </div>
                <Link to={"login"} onClick={handleSignOut}>
                  <button className="Signup-button mr-2 font-medium">
                    LOGOUT
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to={"login"}>
                  <button className="button mr-2 font-medium">Login</button>
                </Link>
                <Link to={"signUp"}>
                  <button className="Signup-button font-medium">Sign Up</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
