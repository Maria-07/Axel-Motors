import React from "react";
import img1 from "../../Assets/motor-oilimg.png";
import img2 from "../../Assets/motor-oilimg2.png";

const Shop = () => {
  return (
    <div className="flex container mx-auto gap-3 flex-wrap">
      <div class="card lg:card-side bg-base-100 shadow-xl mx-auto">
        <figure>
          <img src={img1} className="h-72" alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title"> Motor Oil</h2>
          <p className="w-72">
            {" "}
            New Arrival is released! engine oil is to lubricate the engine
            parts, which are in constant friction.
          </p>
          <div class="card-actions justify-start">
            <button class="btn button">Order Now</button>
          </div>
        </div>
      </div>
      <div class="card lg:card-side bg-base-100 shadow-xl mx-auto">
        <div class="card-body">
          <h2 class="card-title bg-primary w-40 text-neutral p-2">
            Save Up to 20%{" "}
          </h2>
          <p className="w-72">
            Full Synthetic motor Oil. Full synthetic oil is ideal for vehicles
            that demand peak level performance and high levels of lubrication
          </p>
          <div class="card-actions justify-start">
            <button class="btn button">Order Now</button>
          </div>
        </div>
        <figure>
          <img src={img2} className="h-72" alt="Album" />
        </figure>
      </div>
    </div>
  );
};

export default Shop;
