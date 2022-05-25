import { signOut } from "firebase/auth";
import React from "react";
import { useQuery } from "react-query";
import { Navigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import User from "./User";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`http://localhost:5000/users`, {
      method: "Get",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      console.log(res);
      if (res.status === 401 || res.status === 403) {
        Navigate("/");
        signOut(auth);
        localStorage.removeItem("accessToken");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div>
        <h1 className=" text-lg my-5">Users : {users.length}</h1>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Admin</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <User
                  key={user._id}
                  user={user}
                  index={index}
                  refetch={refetch}
                ></User>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
