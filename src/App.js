import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Purchase from "./Pages/Purchase/Purchase";
import Footer from "./Pages/Shared/Footer";
import Header from "./Pages/Shared/Header";
import Navbar from "./Pages/Shared/Navbar";
import Required from "./Pages/Shared/Required";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
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
    </div>
  );
}

export default App;
