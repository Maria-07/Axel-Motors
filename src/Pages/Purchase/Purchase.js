import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
// import Rating from "react-rating";

import { Link, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import SetTool from "../../Hooks/SetTool";

const Purchase = () => {
  const { toolID } = useParams();
  const [toolData] = SetTool(toolID);
  const [user] = useAuthState(auth);

  const {
    name,
    img,
    ratings,
    price,
    tags,
    description,
    availableQuantity,
    minimumQuantity,
  } = toolData;
  // console.log(tags);
  let errorMessage;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (toolData) {
      setQuantity(toolData.minimumQuantity);
    }
  }, [toolData]);

  const decreaseQuantity = () => {
    setQuantity(quantity - 1);
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // console.log(quantity);

  const onSubmit = async (data) => {
    // console.log(data);

    const order = {
      tools_id: toolID,
      name: user.displayName,
      email: user.email,
      phone: data.phone,
      company: data.company,
      address: data.address,
      quantity: quantity,
    };
    // console.log(order);

    // axios({
    //   method: "post",
    //   url: "http://localhost:5000/orders",
    //   data: order,
    // }).then((res) => console.log(res));

    axios
      .post("http://localhost:5000/orders", order)
      .then((res) => console.log(res));

    // console.log(data.image[0]);
    reset();
  };

  return (
    <div className="container mx-auto">
      <div className="mx-10 text-sm breadcrumbs">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>Purchase</Link>
          </li>
          <li>{name}</li>
        </ul>
      </div>

      <div className="my-24 ">
        <div className="tool-info flex flex-wrap">
          <img src={img} className=" m-10 shadow-lg h-96" alt="" />
          <div className="tool-body w-96 m-10">
            <h3 className="text-3xl font-medium">{name} </h3>
            <h1 className=" font-medium my-2">ToolsID : {toolID}</h1>
            <div>
              <Rating
                initialRating={ratings}
                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                fullSymbol={
                  <FontAwesomeIcon
                    style={{ color: "goldenrod" }}
                    icon={faStar}
                  />
                }
                readonly
              ></Rating>
            </div>

            <p className=" text-sm mt-4 mb-5">{description}</p>
            <div>
              <h5 className=" text-lg font-medium">Key Features:</h5>
              <ul>
                {tags &&
                  tags.map((tag, index) => (
                    <li key={index} className=" text-sm text-accent">
                      {tag}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="card mx-10 sm:ml-16 w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-4xl font-medium text-primary">
                {price}
              </h2>
              <div className=" ">
                Available Quantity :
                <span className="text-primary text-xl">
                  {availableQuantity}
                </span>
                <br />
                Minimum Order Quantity :
                <span className="text-primary text-xl">{minimumQuantity} </span>
              </div>
              <div>
                <h1 className="text-lg font-medium mt-5 mb-3">
                  Add to the cart :{" "}
                </h1>
                <div className="mb-7">
                  <button
                    onClick={() => decreaseQuantity()}
                    className="py-1 px-5 border-2 hover:bg-black hover:text-neutral text-xl font-bold"
                  >
                    -
                  </button>
                  <span className="py-1 px-5 font-bold text-xl">
                    {quantity}
                  </span>
                  <button
                    onClick={() => increaseQuantity()}
                    className="py-1 px-5 border-2 hover:bg-black hover:text-neutral text-xl font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {(quantity > availableQuantity || quantity < minimumQuantity) && (
                <p className=" text-xs text-red-600">
                  *** Pleaser make sure your purchasing quantity is not more
                  than Available or less than minimum order Quantity
                </p>
              )}

              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Name  */}

                  <h1 className="text-2xl font-medium">Purchase Now :</h1>

                  <label className="label">
                    <span className="label-text font-medium my-1">Name</span>
                  </label>
                  <input
                    name="name"
                    value={user?.displayName}
                    readOnly
                    className="input input-bordered w-full max-w-xs"
                  />

                  {/* email  */}
                  <label className="label">
                    <span className="label-text font-medium my-1">Email</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={user?.email}
                    readOnly
                    className="input input-bordered w-full max-w-xs"
                  />

                  {/* phone  */}
                  <label className="label">
                    <span className="label-text font-medium my-1">
                      Phone Number
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Phone Number"
                    name="phone"
                    className="input input-bordered w-full max-w-xs"
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "Phone number is required",
                      },
                    })}
                  />
                  <label className="label">
                    <span className="label-text-alt">
                      {" "}
                      {errors.phone?.type === "required" && (
                        <p className=" text-red-500">{errors.phone.message}</p>
                      )}
                    </span>
                  </label>
                  {/* Company Name  */}
                  <label className="label">
                    <span className="label-text font-medium my-1">
                      Company Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Company Name"
                    name="company"
                    className="input input-bordered w-full max-w-xs"
                    {...register("company", {
                      required: {
                        value: true,
                        message: "Company name is required",
                      },
                    })}
                  />
                  <label className="label">
                    <span className="label-text-alt">
                      {" "}
                      {errors.company?.type === "required" && (
                        <p className=" text-red-500">
                          {errors.company.message}
                        </p>
                      )}
                    </span>
                  </label>

                  {/* Address  */}

                  <label className="label">
                    <span className="label-text font-medium my-1">Address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Address"
                    name="address"
                    className="input input-bordered w-full max-w-xs"
                    {...register("address", {
                      required: {
                        value: true,
                        message: "Address is required",
                      },
                    })}
                  />
                  <label className="label">
                    <span className="label-text-alt">
                      {" "}
                      {errors.address?.type === "required" && (
                        <p className=" text-red-500">
                          {errors.address.message}
                        </p>
                      )}
                    </span>
                  </label>
                  {errorMessage}

                  {/* submit  */}
                  <input
                    disabled={
                      quantity > availableQuantity || quantity < minimumQuantity
                    }
                    // className={`btn btn-primary my-5
                    //  ${
                    //   disabled ? " border-2 text-neutral" : " "
                    // }
                    //  text-white max-w-xs  w-full`}
                    className={`btn btn-primary my-5 text-white max-w-xs  w-full`}
                    type="submit"
                    value={"Add TO CART"}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
