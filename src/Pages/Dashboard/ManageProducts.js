import React, { useState } from "react";
import UseTools from "../../Hooks/UseTools";
import ManageProduct from "./ManageProduct";

const ManageProducts = () => {
  const [dltOrder, setDltOrder] = useState(null);
  const [tools] = UseTools();
  return (
    <div>
      <div id="tools" className="container my-20 mx-auto">
        <h1 className="text-4xl font-medium text-center text-accent">
          Popular Tools
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16 ">
          {tools?.map((tool, index) => (
            <ManageProduct
              key={index}
              setDltOrder={setDltOrder}
              tool={tool}
            ></ManageProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
