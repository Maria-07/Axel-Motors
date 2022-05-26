import axios from "axios";
import { useEffect, useState } from "react";

const UseTools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    axios("https://gentle-mesa-53568.herokuapp.com/tools").then((data) =>
      setTools(data.data)
    );
  }, []);

  return [tools, setTools];
};

export default UseTools;
