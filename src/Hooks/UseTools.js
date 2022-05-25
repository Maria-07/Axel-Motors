import axios from "axios";
import { useEffect, useState } from "react";

const UseTools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    axios("http://localhost:5000/tools").then((data) => setTools(data.data));
  }, []);

  return [tools, setTools];
};

export default UseTools;
