import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Booklist from "./pages/booklist/Booklist";
import Single from "./pages/single/Single";
import { BookSingle } from "./pages/booksingle/Booksingle";
import Edit from "./pages/edit/Edit";
import Orders from "./pages/orders/Orders";
import { Routes, Route } from "react-router-dom";
import { productInputs } from "./formSource";
import "./style/dark.scss";
import React, { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import User from "./pages/user/User";
import OrderSummary from "./pages/ordersSummary/OrderSummary";
import New from "./pages/new/New";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <React.Fragment>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="user" element={<User />} />
          <Route path="summary" element={<OrderSummary />} />
          <Route path="users">
            <Route index element={<Users />} />
            <Route path=":userId" element={<Single />} />
          </Route>
          <Route path="books" element={<Booklist />} />
          <Route path="books/:bookId" element={<BookSingle />} />
          <Route
            path="books/:bookId/edit/:id"
            element={<Edit inputs={productInputs} title="EDIT BOOK" />}
          />
          <Route path="orders">
            <Route index element={<Orders />} />
          </Route>
          <Route path="new">
            <Route index element={<New inputs={productInputs} />} />
          </Route>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
