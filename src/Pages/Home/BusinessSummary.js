import React from "react";
import customers from "../../Assets/business/customers.png";

const BusinessSummary = ({ tool }) => {
  const { img, name, value } = tool;
  return (
    <div className=" mx-auto ">
      <img className="h-24 ml-5" src={img} alt="" />
      <div className="text-center">
        <div className="stat-title text-xl mt-3">{name}</div>
        <div className="stat-value text-secondary">{value}</div>
        <div className="stat-desc">21% more than last month</div>
      </div>
    </div>
  );
};

export default BusinessSummary;
