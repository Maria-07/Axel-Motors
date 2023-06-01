import axios from "axios";
import { useEffect, useState } from "react";

const UseTools = (order = 1) => {
  const [tools, setTools] = useState([]);
  // console.log(order);
  useEffect(() => {
    console.log(order);
    axios("data/axel-motors.tools.json").then((data) => {
      console.log(data);
      setTools(data.data);
    });
  }, [order]);

  return [tools, setTools];
};

export default UseTools;
