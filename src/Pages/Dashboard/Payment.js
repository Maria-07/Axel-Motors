import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import SetTool from "../../Hooks/SetTool";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51L1mirGgJu6WrRXy6i6PnlHUHSDM2UXVDROmpvICytExaoJzR1tnsozr4ivdZUORHh3nf00ttjeDHsmXnsmTGezZ00c4cFlvtM"
);

const Payment = () => {
  const { id } = useParams();
  const [toolData] = SetTool(id);
  const [user] = useAuthState(auth);

  const { name, price } = toolData;
  return (
    <div>
      <div className="card max-w-md  bg-base-100 shadow-xl my-10">
        <div className="card-body">
          <p className="text-2xl font-medium text-secondary">
            Hello {user.displayName},
          </p>
          <span className="card-title font-medium">Please Pay for {name}</span>{" "}
          <p className=" text-3xl font-medium my-3">Price : ${price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm toolData={toolData}></CheckoutForm>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
