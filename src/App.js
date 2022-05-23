import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddReview from "./Pages/Dashboard/AddReview";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Purchase from "./Pages/Purchase/Purchase";
import Footer from "./Pages/Shared/Footer";
import Header from "./Pages/Shared/Header";
import Navbar from "./Pages/Shared/Navbar";
import Required from "./Pages/Shared/Required";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="dashboard"
          element={
            <Required>
              <Dashboard></Dashboard>
            </Required>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="reviews" element={<AddReview></AddReview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route
          path="/purchase/:toolID"
          element={
            <Required>
              <Purchase></Purchase>
            </Required>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
