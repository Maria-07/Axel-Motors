import { useEffect, useState } from "react";

const UseToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    console.log("user inside ", user);
    const email = user?.user?.email;
    const currentUser = { email: email };
    // console.log("cureent", currentUser);
    if (email) {
      fetch(`https://gentle-mesa-53568.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};

export default UseToken;
