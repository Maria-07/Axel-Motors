import React from "react";
import Bannner from "./Bannner";
import BusinessSummarys from "./BusinessSummarys";
import ServicesBox from "./ServicesBox";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Bannner></Bannner>
      <ServicesBox></ServicesBox>
      <Tools></Tools>
      <BusinessSummarys></BusinessSummarys>
    </div>
  );
};

export default Home;
