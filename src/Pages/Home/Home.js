import React from "react";
import Bannner from "./Bannner";
import BusinessSummarys from "./BusinessSummarys";
import NewTool from "./NewTool";
import Reviews from "./Reviews";
import ServicesBox from "./ServicesBox";
import Shop from "./Shop";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Bannner></Bannner>
      <ServicesBox></ServicesBox>
      <Shop></Shop>
      <Tools></Tools>
      <Reviews></Reviews>
      <NewTool></NewTool>
      <BusinessSummarys></BusinessSummarys>
    </div>
  );
};

export default Home;
