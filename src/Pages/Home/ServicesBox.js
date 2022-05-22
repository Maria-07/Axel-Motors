import React from "react";
import car from "../../Assets/services/car.png";
import support from "../../Assets/services/support.png";
import locker from "../../Assets/services/locker.png";
import hotDeal from "../../Assets/services/hotDeal.png";

const ServicesBox = () => {
  return (
    <div className="container mx-auto sm:mt-[-118px] px-3">
      <div className="bg-primary ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-16 py-6">
          <div className="service flex mx-auto  justify-center items-center">
            <img src={car} className="h-16" alt="" />
            <div className="mx-4 text-neutral">
              <h4 className=" font-medium">Free Shipping</h4>
              <p className=" text-sm">For orders from $50</p>
            </div>
          </div>
          <div className="service flex mx-auto justify-center items-center">
            <img src={support} className="h-16" alt="" />
            <div className="mx-4 text-neutral">
              <h4 className=" font-medium">Free Shipping</h4>
              <p className=" text-sm">For orders from $50</p>
            </div>
          </div>
          <div className="service flex mx-auto  justify-center items-center">
            <img src={locker} className="h-16" alt="" />
            <div className="mx-4 text-neutral">
              <h4 className=" font-medium">Free Shipping</h4>
              <p className=" text-sm">For orders from $50</p>
            </div>
          </div>
          <div className="service flex mx-auto  justify-center items-center">
            <img src={hotDeal} className="h-16" alt="" />
            <div className="mx-4 text-neutral">
              <h4 className=" font-medium">Free Shipping</h4>
              <p className=" text-sm">For orders from $50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBox;
