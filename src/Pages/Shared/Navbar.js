import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "./CustomeLink";
import "./Shared.css";

const Navbar = () => {
  const navManuItems = (
    <>
      <li>
        <CustomLink className="text-lg" to={"/"}>
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
    <div className="bg-accent py-1">
      <div className="sm:mx-10">
        <div className="navbar text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabindex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabindex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52"
              >
                {navManuItems}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal p-0">{navManuItems}</ul>
          </div>
          <div className="navbar-end">
            <Link to={"login"}>
              <button class="button mr-2 font-medium">Login</button>
            </Link>
            <Link to={"signUp"}>
              <button class="Signup-button font-medium">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
