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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { atom, useAtom } from "jotai";
import Cookies from "js-cookie";
import { useEffect } from "react";
import axios from "axios";
import Logout from "./layout/pages/logout/Logout";
import PrivateRoute from "./layout/pages/validate/PrivateRoute";
import AdminPrivateRoute from "./layout/pages/validate/AdminPrivateRoute";

export const LoggedAtom = atom(false);

function App() {
 
  useEffect(() => {
    const user = localStorage.getItem("user");
    const pass = localStorage.getItem("pass");
    if (user && pass) {
      const userValue = localStorage.getItem("user");
      const passValue = localStorage.getItem("pass");
      axios
        .post("/user/login", { email:userValue, password:passValue })
        .then((res) => {
          if (res.status === 200) {
            setLogged(true);
          } else {
            setLogged(false);
          }
        })
        .catch((err) => {
          setLogged(false);
        });
    } else {
      localStorage.setItem("user", "");
      localStorage.setItem("pass", "");
    }
  });

  const [logged, setLogged] = useAtom(LoggedAtom);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/products" element={<AdminPrivateRoute><ProductsAll /></AdminPrivateRoute>} />
          <Route exact path="/" element={<HomeMain />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/book/updateBook/:bookID" element={<EditBook />} />
          <Route exact path="/book/addBook" element={<AddBook />} />
          <Route exact path="/admin" element={<InventoryHome />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
