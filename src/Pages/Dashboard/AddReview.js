import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
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
    // console.log(data);

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
          const addReview = {
            name: user.displayName,
            email: user.email,
            rating: data.rating,
            review: data.review,
            img: img,
          };
          console.log(addReview);
          fetch(`localhost:5000/review`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(addReview),
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
      <div className="">
        <div className="rating rating-md my-3">
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-yellow-300"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-yellow-300"
            checked
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-yellow-300"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-yellow-300"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-yellow-500"
          />
        </div>
        <div className=" my-5 w-1/4">
          <div className="w-1/4 bg-gray-200 h-2 mb-3">
            <div className="bg-green-500 h-2 rounded-md"></div>
          </div>
          <div className="w-1/2 bg-gray-200 h-2 mb-3">
            <div className="bg-blue-400 h-2 rounded-md"></div>
          </div>
          <div className="w-3/4 bg-gray-200 h-2 mb-3">
            <div className="bg-yellow-500 h-2 rounded-md"></div>
          </div>
          <div className="w-full bg-gray-200 h-2">
            <div className="bg-red-500 h-2 rounded-md"></div>
          </div>
        </div>
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-xl font-medium mt-10">ADD YOUR REVIEW</h1>
          {/* Ratings  */}
          <label className="label">
            <span className="label-text font-medium my-1">Rating</span>
          </label>

          <select
            {...register("rating")}
            className="select select-bordered w-full max-w-xs mb-4"
          >
            <option disabled selected>
              5
            </option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>

          {/* review comment  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium my-1">
                Add your review
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24 w-full max-w-xs"
              placeholder="Review"
              {...register("review", {
                required: {
                  value: true,
                  message: "review is required **",
                },
              })}
            ></textarea>
            <label className="label">
              <span className="label-text-alt">
                {" "}
                {errors.review?.type === "required" && (
                  <p className=" text-red-500">{errors.review.message}</p>
                )}
              </span>
            </label>
          </div>
          <br />

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
            value={"Add"}
          />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
