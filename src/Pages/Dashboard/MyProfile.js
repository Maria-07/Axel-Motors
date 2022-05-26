import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  let errorMessage;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    const users = {
      name: user.displayName,
      email: user.email,
      phone: data.phone,
      education: data.education,
      link: data.link,
      district: data.district,
    };
    console.log(users);

    fetch(
      `https://gentle-mesa-53568.herokuapp.com/users/myProfile?email=${user.email}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(users),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0 || data.upsertedCount > 0) {
          toast.dark(`Hey 👋, Your profile is updated`);
        }
        console.log("Success:", data);
      });
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name  */}

        <h1 className="text-2xl font-medium">Update Your Profile :</h1>

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
          <span className="label-text font-medium my-1">Phone Number</span>
        </label>
        <input
          type="text"
          placeholder="Your Phone Number"
          name="phone"
          className="input input-bordered w-full max-w-xs"
          {...register("phone")}
        />

        {/* Education Status  */}
        <label className="label">
          <span className="label-text font-medium my-1">
            Educational Status
          </span>
        </label>

        <select
          {...register("education")}
          class="select select-bordered w-full max-w-xs mb-4"
        >
          <option disabled selected>
            BSC
          </option>
          <option>BBA</option>
          <option>MBA</option>
          <option>CSE</option>
          <option>Primary level</option>
          <option>secondary level</option>
          <option>HIgher level</option>
        </select>

        {/* link  */}

        <label className="label">
          <span className="label-text font-medium my-1">add link</span>
        </label>
        <input
          type="text"
          placeholder="Your link"
          name="link"
          className="input input-bordered w-full max-w-xs"
          {...register("link")}
        />

        {/* City Status  */}
        <label className="label">
          <span className="label-text font-medium my-1">District</span>
        </label>

        <select
          {...register("district")}
          class="select select-bordered w-full max-w-xs mb-4"
        >
          <option disabled selected>
            Dhaka
          </option>
          <option>Comilla</option>
          <option>Rajhsahi</option>
          <option>Barisal</option>
          <option>Shylet</option>
          <option>Dinajpur</option>
          <option>Rangpur</option>
        </select>
        <br />
        {errorMessage}

        {/* submit  */}
        <input
          className={`btn btn-primary my-5 text-white max-w-xs  w-full`}
          type="submit"
          value={"Add"}
        />
      </form>
    </div>
  );
};

export default MyProfile;
