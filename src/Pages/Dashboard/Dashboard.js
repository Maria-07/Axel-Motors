import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "../Shared/CustomeLink";

const Dashboard = () => {
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

        <div class="drawer-content p-10 ">
          <label for="my-drawer-2" class="btn  button drawer-button lg:hidden">
            Open drawer
          </label>

          {/* <!-- Page content here --> */}
          <h2 className="my-5 text-3xl font-medium text-primary  ">
            Welcome to Dashboard
          </h2>
          <Outlet></Outlet>
        </div>

        <div class="drawer-side sm:my-10">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-10 overflow-y-auto w-80 border-2  shadow-md bg-neutral text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <CustomLink className=" font-medium text-xl" to={"/dashboard"}>
                My Orders
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className=" font-medium text-xl"
                to={"/dashboard/reviews"}
              >
                Reviews
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className=" font-medium text-xl"
                to={"/dashboard/profile"}
              >
                My Profile
              </CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
