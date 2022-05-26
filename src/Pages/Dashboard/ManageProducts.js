import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Navigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import DeleteToolConfirm from "./DeleteToolConfirm";
import ManageProduct from "./ManageProduct";

const ManageProducts = () => {
  const [dltTool, setDltTool] = useState(null);
  // const [tools] = UseTools();

  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("https://gentle-mesa-53568.herokuapp.com/tools", {
      method: "Get",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      console.log(res);
      if (res.status === 401 || res.status === 403) {
        Navigate("/");
        signOut(auth);
        localStorage.removeItem("accessToken");
      }
      return res.json();
    })
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

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
              setDltTool={setDltTool}
              tool={tool}
            ></ManageProduct>
          ))}
        </div>
        {dltTool && (
          <DeleteToolConfirm
            dltTool={dltTool}
            setDltTool={setDltTool}
            refetch={refetch}
          ></DeleteToolConfirm>
        )}
      </div>
    </div>
  );
};

export default ManageProducts;
