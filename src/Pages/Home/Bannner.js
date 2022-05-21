import React from "react";
import bg from "../../Assets/Banner.png";

const Bannner = () => {
  return (
    <div>
      <div
        style={{
          background: `url(${bg})`,
        }}
        className="py-1 mb-10"
      >
        <div className="hero container mx-auto sm:my-52">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className=" sm:px-10 ">
              <h1 className="text-5xl text-neutral tracking-wide font-semibold">
                Find Parts For Your Vehicle
              </h1>
              <p className="py-6 text-neutral">
                Over hundreds of brands and tens of thousands of parts Select
                Year Select Brand Select Model Select Engine.
              </p>
              <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary  hover:from-accent hover:to-accent uppercase text-white text-xl font-bold">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannner;
