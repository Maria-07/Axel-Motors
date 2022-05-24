import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import MyOrder from "./MyOrder";
import Loading from "../Shared/Loading";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [dltOrder, setDltOrder] = useState(null);

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch(`http://localhost:5000/orders?email=${user.email}`, {
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

  console.log(orders);
  return (
    <div className=" ">
      <h1>My Orders {orders.length}</h1>
      <div className="divider text-lg font-medium"></div>
      {orders.map((order) => (
        <MyOrder
          key={order._id}
          order={order}
          setDltOrder={setDltOrder}
        ></MyOrder>
      ))}
      {dltOrder && (
        <DeleteConfirmationModal
          dltOrder={dltOrder}
          setDltOrder={setDltOrder}
          refetch={refetch}
        ></DeleteConfirmationModal>
      )}
    </div>
  );
};

export default MyOrders;
