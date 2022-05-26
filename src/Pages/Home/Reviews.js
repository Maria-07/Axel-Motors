import axios from "axios";
import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios("https://gentle-mesa-53568.herokuapp.com/review").then((data) =>
      setReviews(data.data)
    );
  }, []);
  return (
    <div className=" bg-gray-800 py-16">
      <div className="container mx-auto ">
        <h1 className="text-3xl font-medium text-center text-neutral">
          Our reviews from customers {reviews.length}
        </h1>
        {/* <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 my-16 "> */}
        <div className="flex flex-wrap gap-5 my-16 ">
          {reviews.map((review) => (
            <Review key={review._id} reviews={review}></Review>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
