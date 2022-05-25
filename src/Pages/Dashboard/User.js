import React from "react";
import { toast } from "react-toastify";

const User = ({ user, index, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/users/admin/${email}`, {
      method: "Put",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make a admin");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.modifiedCount);
        if (data.modifiedCount > 0) {
          toast.success("Successfully made an admin");
          refetch();
        }
      });
  };
  // const removeAdmin = () => {
  //   fetch(`http://localhost:5000/users/adminRemove/${email}`, {
  //     method: "Put",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   })
  //     .then((res) => {
  //       if (res.status === 403) {
  //         toast.error("Failed to make a admin");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       console.log(data.modifiedCount);
  //       if (data.modifiedCount > 0) {
  //         toast.success("Successfully remove an admin");
  //         refetch();
  //       }
  //     });
  // };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button class="btn button btn-sm" onClick={makeAdmin}>
            Make Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default User;
