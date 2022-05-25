import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";

const Review = ({ reviews }) => {
  const { img, name, rating, review } = reviews;
  return (
    <div className="mx-auto tool">
      <div class="card h-72 w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <div className="flex">
            <div class="avatar">
              <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img} alt="" />
              </div>
            </div>
            <div class="divider  divider-horizontal"></div>

            <div>
              <p className="font-medium mb-2 text-lg">{name}</p>
              <div>
                <Rating
                  initialRating={rating}
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
            </div>
          </div>
          <p className="my-2 font-light">{review}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
