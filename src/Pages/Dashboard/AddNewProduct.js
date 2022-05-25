import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddNewProduct = () => {
  let errorMessage;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imgStorageKey = "2b51a15c9d1ec1cecc091e49f7c253e1";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    console.log(data);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("imagebb", result);

        if (result.success) {
          const img = result.data.url;
          console.log(img);
          const addTool = {
            name: data.name,
            description: data.description,
            price: data.price,
            availableQuantity: data.availableQuantity,
            minimumQuantity: data.minimumQuantity,
            img: img,
          };
          console.log(addTool);
          fetch(`http://localhost:5000/tools`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(addTool),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.insertedId) {
                toast.dark(`Hey 👋, Thanks for your Review`);
              }
              console.log("Success:", data);
            });
        }
      });

    reset();
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name  */}

          <h1 className="text-2xl font-medium">Add a new tool :</h1>

          <label className="label">
            <span className="label-text font-medium my-1">Name</span>
          </label>
          <input
            name="name"
            placeholder="Tool Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Tool name is required",
              },
            })}
          />
          <label className="label">
            <span className="label-text-alt">
              {" "}
              {errors.name?.type === "required" && (
                <p className=" text-red-500">{errors.name.message}</p>
              )}
            </span>
          </label>

          {/* Add description  */}
          <div class="form-control">
            <label className="label">
              <span className="label-text font-medium my-1">
                Add Description
              </span>
            </label>
            <textarea
              class="textarea textarea-bordered h-24 w-full max-w-xs"
              placeholder="Description"
              {...register("description", {
                required: {
                  value: true,
                  message: "description is required **",
                },
              })}
            ></textarea>
            <label className="label">
              <span className="label-text-alt">
                {" "}
                {errors.description?.type === "required" && (
                  <p className=" text-red-500">{errors.description.message}</p>
                )}
              </span>
            </label>
          </div>

          {/* availableQuantity  */}
          <label className="label">
            <span className="label-text font-medium my-1">
              Available Quantity
            </span>
          </label>
          <input
            type="text"
            placeholder="Available Quantity"
            name="availableQuantity"
            className="input input-bordered w-full max-w-xs"
            {...register("availableQuantity", {
              required: {
                value: true,
                message: "availableQuantity is required",
              },
            })}
          />
          <label className="label">
            <span className="label-text-alt">
              {" "}
              {errors.availableQuantity?.type === "required" && (
                <p className=" text-red-500">
                  {errors.availableQuantity.message}
                </p>
              )}
            </span>
          </label>

          {/* minimumQuantity  */}
          <label className="label">
            <span className="label-text font-medium my-1">
              Minimum Quantity
            </span>
          </label>
          <input
            type="text"
            placeholder="Minimum Quantity"
            name="minimumQuantity"
            className="input input-bordered w-full max-w-xs"
            {...register("minimumQuantity", {
              required: {
                value: true,
                message: "minimumQuantity is required",
              },
            })}
          />
          <label className="label">
            <span className="label-text-alt">
              {" "}
              {errors.minimumQuantity?.type === "required" && (
                <p className=" text-red-500">
                  {errors.minimumQuantity.message}
                </p>
              )}
            </span>
          </label>

          {/* Price  */}
          <label className="label">
            <span className="label-text font-medium my-1">Price</span>
          </label>
          <input
            type="text"
            placeholder="Price"
            name="price"
            className="input input-bordered w-full max-w-xs"
            {...register("price", {
              required: {
                value: true,
                message: "price name is required",
              },
            })}
          />
          <label className="label">
            <span className="label-text-alt">
              {" "}
              {errors.price?.type === "required" && (
                <p className=" text-red-500">{errors.price.message}</p>
              )}
            </span>
          </label>

          {/* //photo  */}
          <input
            type="file"
            className="input w-full max-w-xs input-bordered pt-2"
            {...register("image", {
              required: {
                value: true,
                message: "image is required",
              },
            })}
          />

          <label className="label">
            <span className="label-text-alt">
              {" "}
              {errors.image?.type === "required" && (
                <p className=" text-red-500">{errors.image.message}</p>
              )}
            </span>
          </label>

          {errorMessage}

          {/* submit  */}
          <input
            className={`btn btn-primary my-5 text-white max-w-xs  w-full`}
            type="submit"
            value={"Add TO CART"}
          />
        </form>
      </div>
    </div>
  );
};

export default AddNewProduct;
