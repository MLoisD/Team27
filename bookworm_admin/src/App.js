import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Booklist from "./pages/booklist/Booklist";
import Single from "./pages/single/Single";
import Booksingle from "./pages/booksingle/Booksingle";
import New from "./pages/new/New";
import Orders from "./pages/orders/Orders";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import User from "./pages/user/User";
import OrderSummary from "./pages/ordersSummary/OrderSummary";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
      <div className={darkMode ? "app dark" : "app"}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="user" element={<User />} />
              <Route path="summary" element={<OrderSummary />} />
              <Route path="users">
                <Route index element={<Users />} />
                <Route path=":userId" element={<Single />} />
                <Route
                    path="new" element={<New inputs={userInputs} title="Add New User" />}/>
              </Route>
              <Route path="books">
                <Route index element={<Booklist />} />
                <Route path=":bookId" element={<Booksingle/>} />
                <Route path="new" element={<New inputs={productInputs} title="Add New Book" />}/>
              </Route>
              <Route path="orders">
                <Route index element={<Orders/>} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
