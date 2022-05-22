import axios from "axios";
import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    axios("tools.json").then((data) => setTools(data.data));
  }, []);

  console.log(tools);
  const sixTools = tools.slice(0, 6);
  return (
    <div className="container my-20 mx-auto">
      <h1 className="text-4xl font-medium text-center text-primary">
        Popular Tools {tools.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16 ">
        {sixTools?.map((tool, index) => (
          <Tool key={index} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
