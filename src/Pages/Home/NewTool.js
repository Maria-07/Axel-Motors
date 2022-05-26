import React from "react";
import UseTools from "../../Hooks/UseTools";
import Tool from "./Tool";

const NewTool = () => {
  const order = -1;
  const [tools] = UseTools(order);

  console.log(tools);
  const sixTools = tools.slice(0, 3);
  return (
    <div id="tools" className="container my-20 mx-auto">
      <h1 className="text-4xl font-medium text-center text-accent">
        New Tools
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16 ">
        {sixTools?.map((tool, index) => (
          <Tool key={index} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default NewTool;
