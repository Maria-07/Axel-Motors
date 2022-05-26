import { useEffect, useState } from "react";

const SetOrder = (id) => {
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    fetch(`https://gentle-mesa-53568.herokuapp.com/orders/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrderData(data);
      });
  }, [id]);
  return [orderData, setOrderData];
};

export default SetOrder;
