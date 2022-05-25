import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import Loading from "../Shared/Loading";

const ManageAllOrders = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`http://localhost:5000/allOrders`, {
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
      <h1>orders : {orders.length}</h1>
    </div>
  );
};

export default ManageAllOrders;
