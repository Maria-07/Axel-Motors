import axios from "axios";
import { useEffect, useState } from "react";

const UseTools = (order = 1) => {
  const [tools, setTools] = useState([]);
  // console.log(order);
  useEffect(() => {
    console.log(order);
    axios(`https://gentle-mesa-53568.herokuapp.com/tools?order=${order}`).then(
      (data) => setTools(data.data)
    );
  }, [order]);

  return [tools, setTools];
};

export default UseTools;
