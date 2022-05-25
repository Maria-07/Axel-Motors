import React from "react";
import { Link } from "react-router-dom";
import SetTool from "../../Hooks/SetTool";

const MyOrder = ({ order, setDltOrder }) => {
  const { tools_id, email, company, address, phone, quantity } = order;
  const [toolData] = SetTool(tools_id);

  const { name, img, price, availableQuantity } = toolData;
  return (
    <div className="my-5">
      <div class="card flex flex-wrap justify-center items-center p-3 card-side bg-base-100 shadow-xl">
        <figure>
          <img src={img} className=" h-72" alt="Movie" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
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
            Contact : <span className=" text-accent text-normal">{phone} </span>
          </p>

          <div class="card-actions justify-end">
            {!toolData.paid ? (
              <>
                <label
                  onClick={() => setDltOrder(order)}
                  for="delete-confirm-modal"
                  class="btn btn-outline btn-danger"
                >
                  DELETE
                </label>
                <Link to={`/dashboard/payment/${tools_id}`}>
                  <button class="btn btn-primary">PAY NOW</button>
                </Link>
              </>
            ) : (
              <span class=" bg-secondary text-neutral button">Paid</span>
            )}

            {/* {toolData.paid && (
              <span class=" bg-secondary text-neutral button">Paid</span>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
