import "./App.css";
import ProductsAll from "./layout/pages/productsall/ProductsAll";
import Footer from "./layout/components/footer/Footer";
import HomeMain from "./layout/pages/home/HomeMain";
import Navbar from "./layout/components/navbar/Navbar";
import Signup from "./layout/pages/signup/Signup";
import Login from "./layout/pages/login/Login";
import ContactUs from "./layout/pages/contact us/ContactUs";
import AboutUs from "./layout/pages/about us/AboutUs";
import InventoryHome from "./layout/pages/adminside/admincrud/InventoryHome";
import AddBook from "./layout/pages/adminside/admincrud/AddBook";
import EditBook from "./layout/pages/adminside/admincrud/EditBook";
import { Routes, Route } from "react-router-dom";
import { atom, useAtom } from "jotai";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import axios from "axios";
import Logout from "./layout/pages/logout/Logout";
import PrivateRoute from "./layout/pages/validate/PrivateRoute";
import AdminPrivateRoute from "./layout/pages/validate/AdminPrivateRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./components/commons/Navigation";
import Books from "./components/books/Books";
import Home from "./components/books/Home";
import AddCustomers from "./components/customers/AddCustomer";
import Customers from "./components/customers/Customers";
import HeaderComponent from "./components/HeaderComponent";
import { Shop } from "./pages/shopfront/shop";
import MyImagesComponent from "./components/MyImagesComponent";
import UploadImageComponent from "./components/UploadImageComponent";
import { Basket } from "./components/basket/basket";
import { ShopContextProvider } from "./context/shop-context";
import CategoryBar from "./components/commons/CategoryBar";
import ViewBooks from "./components/books/ViewBooks";
import FileService from "./services/FileService";

import { Horrorshop } from "./Horrorshop";
import { Fictionshop } from "./Fictionshop";
import { Romanceshop } from "./Romanceshop";
import { Cart } from "./Cart";
import CartI from "./CartI";
import Payment from "./Payment";
import { ProductDetail } from "./pages/shopfront/ProductDetail";

export const LoggedAtom = atom(false);

function App() {
  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   const pass = localStorage.getItem("pass");
  //   if (user && pass) {
  //     const userValue = localStorage.getItem("user");
  //     const passValue = localStorage.getItem("pass");
  //     axios
  //       .post("/user/login", { email:userValue, password:passValue })
  //       .then((res) => {
  //         if (res.status === 200) {
  //           setLogged(true);
  //         } else {
  //           setLogged(false);
  //         }
  //       })
  //       .catch((err) => {
  //         setLogged(false);
  //       });
  //   } else {
  //     localStorage.setItem("user", "");
  //     localStorage.setItem("pass", "");
  //   }
  // });

  // const [logged, setLogged] = useAtom(LoggedAtom);

  return (
    <div className="App container">
      <React.Fragment />
      <ShopContextProvider>
        {/* START haseena navbars */}
        {/* <Navigation />
        <CategoryBar /> */}
         {/* END haseena navbars */}
        <Navbar />
        <Routes>
          <Route exact path="/products" element={<ProductsAll />} />
          <Route exact path="/" element={<HomeMain />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/book/updateBook/:bookID" element={<EditBook />} />
          <Route exact path="/book/addBook" element={<AddBook />} />

          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/logout" element={<Logout />} />



          {/* hassena paths */}
          <Route path="/hassena" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="Shop/:id" element={<ProductDetail />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/my-images" element={<MyImagesComponent />}></Route>
          <Route path="/upload" element={<UploadImageComponent />}></Route>
          <Route path="/basket" element={<PrivateRoute> <Cart /></PrivateRoute>} />
          <Route exact path="/viewbook/:id" element={<ViewBooks />} />
          <Route path="/horror" element={<Horrorshop />} />
          <Route path="/romance" element={<Romanceshop />} />
          <Route path="/fiction" element={<Fictionshop />} />
          <Route path="/basket/:id" element={<Cart />} />
          <Route path="/basket/:id/Payment" element={<Payment />} />
          <Route path="/addToCart/:id" element={<Home />} />
          <Route path="chatcart/:userId" element={<CartI />} />
        </Routes>

        
        <React.Fragment />

   
      </ShopContextProvider>
    </div>
  );
}

export default App;
