import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import UseAdmin from "../../Hooks/UseAdmin";
import CustomLink from "../Shared/CustomeLink";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = UseAdmin(user);
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content p-10 ">
          <label
            htmlFor="my-drawer-2"
            className="btn  button drawer-button lg:hidden"
          >
            Open drawer
          </label>

          {/* <!-- Page content here --> */}
          <h2 className="my-5 text-3xl font-medium text-primary  ">
            Welcome to Dashboard
          </h2>
          <Outlet></Outlet>
        </div>

        <div className="drawer-side sm:my-10">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-10 overflow-y-auto w-80 border-2  shadow-md bg-neutral text-base-content">
            {/* <!-- Sidebar content here --> */}
            {!admin && (
              <>
                <li>
                  <CustomLink
                    className=" font-medium text-xl"
                    to={"/dashboard/order"}
                  >
                    My Orders
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    className=" font-medium text-xl"
                    to={"/dashboard/reviews"}
                  >
                    Add a Review
                  </CustomLink>
                </li>
              </>
            )}
            <li>
              <CustomLink className=" font-medium text-xl" to={"/dashboard"}>
                My Profile
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className=" font-medium text-xl"
                to={"/dashboard/portfolio"}
              >
                My Portfolio
              </CustomLink>
            </li>
            {admin && (
              <>
                <li>
                  <CustomLink
                    className=" font-medium text-xl"
                    to={"/dashboard/users"}
                  >
                    Make Admins
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    className=" font-medium text-xl"
                    to={"/dashboard/allOrders"}
                  >
                    Manage All Orders
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    className=" font-medium text-xl"
                    to={"/dashboard/addNewTool"}
                  >
                    Add A New Tool
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    className=" font-medium text-xl"
                    to={"/dashboard/manageProducts"}
                  >
                    Manage All Products
                  </CustomLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
