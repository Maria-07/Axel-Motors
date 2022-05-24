import React from "react";

const AddReview = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-xl font-medium">REVIEWS</h1>
        <div class="rating rating-md my-3">
          <input
            type="radio"
            name="rating-7"
            class="mask mask-star-2 bg-yellow-300"
          />
          <input
            type="radio"
            name="rating-7"
            class="mask mask-star-2 bg-yellow-300"
            checked
          />
          <input
            type="radio"
            name="rating-7"
            class="mask mask-star-2 bg-yellow-300"
          />
          <input
            type="radio"
            name="rating-7"
            class="mask mask-star-2 bg-yellow-300"
          />
          <input
            type="radio"
            name="rating-7"
            class="mask mask-star-2 bg-yellow-500"
          />
        </div>
        <div className=" my-5 w-3/4">
          <div class="w-1/4 bg-gray-200 h-2 mb-3">
            <div class="bg-green-500 h-2 rounded-md"></div>
          </div>
          <div class="w-1/2 bg-gray-200 h-2 mb-3">
            <div class="bg-blue-400 h-2 rounded-md"></div>
          </div>
          <div class="w-3/4 bg-gray-200 h-2 mb-3">
            <div class="bg-yellow-500 h-2 rounded-md"></div>
          </div>
          <div class="w-full bg-gray-200 h-2">
            <div class="bg-red-500 h-2 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
