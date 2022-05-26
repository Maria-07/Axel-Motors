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
import AllUsers from "./Pages/Dashboard/AllUsers";
import NotFOundPage from "./Pages/Shared/NotFOundPage";
import MyPortfolio from "./Pages/Dashboard/MyPortfolio";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import AddNewProduct from "./Pages/Dashboard/AddNewProduct";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders";
import RequiredAdmin from "./Pages/Shared/RequiredAdmin";
import Payment from "./Pages/Dashboard/Payment";
import Blog from "./Pages/Blog/Blog";

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
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="order" element={<MyOrders></MyOrders>}></Route>
          <Route path="reviews" element={<AddReview></AddReview>}></Route>
          <Route path="portfolio" element={<MyPortfolio></MyPortfolio>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route
            path="manageProducts"
            element={
              <RequiredAdmin>
                <ManageProducts></ManageProducts>
              </RequiredAdmin>
            }
          ></Route>
          <Route
            path="addNewTool"
            element={
              <RequiredAdmin>
                <AddNewProduct></AddNewProduct>
              </RequiredAdmin>
            }
          ></Route>
          <Route
            path="allOrders"
            element={
              <RequiredAdmin>
                <ManageAllOrders></ManageAllOrders>
              </RequiredAdmin>
            }
          ></Route>

          <Route path="users" element={<AllUsers></AllUsers>}></Route>
        </Route>
        <Route
          path="/purchase/:toolID"
          element={
            <Required>
              <Purchase></Purchase>
            </Required>
          }
        ></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="/*" element={<NotFOundPage></NotFOundPage>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
