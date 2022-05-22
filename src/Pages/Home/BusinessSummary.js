import React from "react";
import customers from "../../Assets/business/customers.png";

const BusinessSummary = ({ tool }) => {
  const { img, name, value } = tool;
  return (
    <div class=" mx-auto ">
      <img className="h-24 ml-5" src={img} alt="" />
      <div className="text-center">
        <div class="stat-title text-xl mt-3">{name}</div>
        <div class="stat-value text-secondary">{value}</div>
        <div class="stat-desc">21% more than last month</div>
      </div>
    </div>
  );
};

export default BusinessSummary;
