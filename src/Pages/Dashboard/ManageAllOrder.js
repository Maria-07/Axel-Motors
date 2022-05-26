import React from "react";
import { useQuery } from "react-query";
import SetTool from "../../Hooks/SetTool";
import { Navigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const ManageAllOrder = ({ order }) => {
  const { tools_id, email, company, address, phone, quantity } = order;
  const [toolData] = SetTool(tools_id);
  const { name, img, price, availableQuantity } = toolData;

  const { data: transaction, isLoading } = useQuery("transaction", () =>
    fetch(`https://gentle-mesa-53568.herokuapp.com/payment/${tools_id}`, {
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
      <div className="my-5">
        <div className="card flex flex-wrap justify-center items-center p-3 card-side bg-base-100 shadow-xl">
          <figure>
            <img src={img} className=" h-72" alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className="text-sm  font-medium">
              Price : <span className=" text-xl text-primary">{price}</span>
              <span className=" text-xs">/unit</span>
              <br />
              Available Quantity :{" "}
              <span className="text-primary text-xl">{availableQuantity} </span>
              <br />
              Ordered Quantity :{" "}
              <span className="text-primary text-xl">{quantity} </span>
              <br />
              Customer name :{" "}
              <span className=" text-accent text-normal">{order.name} </span>
              <br />
              Customer Email :{" "}
              <span className=" text-accent text-normal">{email} </span>
              <br />
              Company Name :{" "}
              <span className=" text-accent text-normal">{company} </span>
              <br />
              Address :{" "}
              <span className=" text-accent text-normal">{address} </span>
              <br />
              Contact :{" "}
              <span className=" text-accent text-normal">{phone} </span>
              <br />
              {order.paid && (
                <p className="text-green-500">
                  Transaction ID : {transaction.transactionId}
                </p>
              )}
            </p>

            <div className="card-actions justify-end">
              {order.paid && (
                <>
                  <span className=" bg-secondary text-neutral button">
                    Paid
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrder;
