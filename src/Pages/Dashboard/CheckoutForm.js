import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const CheckoutForm = ({ orderData }) => {
  const [user] = useAuthState(auth);
  const { price, _id } = orderData;
  console.log(price);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  //   const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    if (price) {
      fetch("https://gentle-mesa-53568.herokuapp.com/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ price: price }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data?.clientSecret) {
            setClientSecret(data.clientSecret);
          }
        });
    }
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    // Use card Element
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    // console.log(error);
    // console.log(paymentMethod);
    setCardError(error?.message || "");

    setSuccess("");
    // setProcessing(true);
    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      //   setProcessing(false);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      console.log(paymentIntent);
      setSuccess("Yooooooo ! your payment is success");
      //send data
      const payment = {
        tool: _id,
        transactionId: paymentIntent.id,
      };
      fetch(`https://gentle-mesa-53568.herokuapp.com/tools/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          //   setProcessing(false);
          console.log(data);
        });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="text-secondary text-xl font-bold my-3"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>

      {{ cardError } && <p className=" text-sm text-red-600">{cardError}</p>}
      {success && (
        <div className=" text-sm text-green-600">
          <p>{success}</p>{" "}
          <p className="my-3 text-lg">
            Your Transaction ID :{" "}
            <span className="text-orange-500 font-medium">{transactionId}</span>{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
