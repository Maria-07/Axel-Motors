import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import Loading from "../Shared/Loading";
import ManageAllOrder from "./ManageAllOrder";

const ManageAllOrders = () => {
  const navigate = useNavigate();

  const { data: orders, isLoading } = useQuery("orders", () =>
    fetch(`https://gentle-mesa-53568.herokuapp.com/allOrders`, {
      method: "Get",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      console.log(res);
      if (res.status === 401 || res.status === 403) {
        navigate("/");
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
      <h1 className=" text-lg font-medium">Total orders : {orders.length} </h1>
      {orders.map((order) => (
        <ManageAllOrder key={order._id} order={order}></ManageAllOrder>
      ))}
    </div>
  );
};

export default ManageAllOrders;
