import React from "react";
import BusinessSummary from "./BusinessSummary";
import customers from "../../Assets/business/customers.png";
import revenue from "../../Assets/business/revenue.png";
import review from "../../Assets/business/review.png";
import tool from "../../Assets/business/tools.png";

const BusinessSummarys = () => {
  const tools = [
    {
      name: "Customers",
      img: customers,
      value: "50k+",
    },
    {
      name: "Revenue",
      img: revenue,
      value: "2.6M",
    },
    {
      name: "Review",
      img: review,
      value: "100+",
    },
    {
      name: "Tools",
      img: tool,
      value: "5k+",
    },
  ];

  return (
    <div className="container mx-auto ">
      <div class="divider"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-16">
        {tools.map((tool, index) => (
          <BusinessSummary key={index} tool={tool}></BusinessSummary>
        ))}
      </div>

      <div class="divider"></div>
    </div>
  );
};

export default BusinessSummarys;
