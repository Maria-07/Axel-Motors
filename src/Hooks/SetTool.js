import { useEffect, useState } from "react";

const SetTool = (id) => {
  const [toolData, setToolData] = useState([]);
  useEffect(() => {
    fetch(`localhost:5000/tools/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToolData(data);
      });
  }, [id]);
  return [toolData, setToolData];
};

export default SetTool;
