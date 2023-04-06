import  "./App.css";
import  { Routes, Route } from "react-router-dom";
import  { atom, useAtom } from "jotai";
import  { useEffect } from "react";
import axios from  "axios";
import  AdminPrivateRoute from "./layout/pages/validate/AdminPrivateRoute";
import  MainLayoutRoutes from "./MainLayuotRoutes";
import  AdminLayoutRoutes from "./AdminLayoutRoutes";
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


      <Routes> 
        <Route path="/admin/*" element={<AdminPrivateRoute> <AdminLayoutRoutes /></AdminPrivateRoute>} />
        <Route path="*" element={<MainLayoutRoutes />} />
        
      </Routes>
    </div>
  );
}

export default App;
