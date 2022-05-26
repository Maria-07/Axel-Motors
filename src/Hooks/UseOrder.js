import { signOut } from "firebase/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const UseOrder = () => {
  // const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`https://gentle-mesa-53568.herokuapp.com/allOrders`, {
      method: "Get",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      console.log(res);
      if (res.status === 401 || res.status === 403) {
        navigate("/");
        signOut(auth);
        localStorage.removeItem("accessToken");
      }
      return res.json();
    })
  );

  return [isLoading, orders, refetch];
};

export default UseOrder;
