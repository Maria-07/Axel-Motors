import React from "react";
import img from "../../Assets/pageNotFound.png";

const NotFOundPage = () => {
  return (
    <div>
      <div className="container mx-auto text-center h-screen">
        <img src={img} className="img-fluid mx-auto mt-16" alt="" />
      </div>
    </div>
  );
};

export default NotFOundPage;
