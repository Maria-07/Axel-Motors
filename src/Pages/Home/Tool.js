import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Tool = ({ tool }) => {
  const {
    _id,
    img,
    description,
    availableQuantity,
    minimumQuantity,
    name,
    price,
  } = tool;

  //   const rndInt = Math.floor(Math.random() * 6);
  //   //   console.log(rndInt);
  //   console.log(index % 2);
  return (
    <div className="tool mx-auto my-5">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-start mb-7">
            <div className="badge badge-outline">Popular</div>
            <div className="badge badge-outline bg-primary text-neutral">
              Best Seller
            </div>
          </div>
          <div className="mb-5">
            <p className="text-lg  font-medium">
              Price : <span className=" text-xl text-primary">{price}</span>
              <span className=" text-xs">/unit</span>
            </p>
            <p className=" text-lg font-medium">
              Available Quantity :{" "}
              <span className="text-primary text-xl">{availableQuantity} </span>
            </p>
            <p className=" text-lg font-medium">
              Minimum Order Quantity :{" "}
              <span className="text-primary text-xl">{minimumQuantity} </span>
            </p>
          </div>
          <div className="card-actions justify-start">
            <button className="Signup-button font-medium">
              <Link to={`purchase/${_id}`}>Purchase</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
