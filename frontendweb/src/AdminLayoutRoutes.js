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
      <>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="user" element={<User />} />
            <Route path="users">
              <Route index element={<Users />} />
              <Route path=":userId" element={<Single />} />
            </Route>
            <Route exact path="books" element={<Booklist />}/>
            <Route exact path="books/:bookId" element={<BookSingle/>} />
            <Route exact path="books/:bookId/edit/:id" element={<Edit inputs={productInputs} title="EDIT BOOK" />}/>
            <Route exact path="books/new" element={<New inputs={productInputs} /> } />
            <Route path="orders">
              <Route index element={<Orders/>} />
              <Route path="summary" element={<OrderSummary />} />
            </Route>
          </Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
