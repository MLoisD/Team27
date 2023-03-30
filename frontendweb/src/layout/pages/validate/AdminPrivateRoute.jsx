import axios from "axios";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {  LoggedAtom } from "../../../App.js";

const AdminPrivateRoute = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isValid, setIsValid] = useState("");
  const { children } = props;
  const [isLogged, setIsLogged] = useAtom(LoggedAtom);
  
  const navigate = useNavigate();

  if (isLogged) {
    const userValue = localStorage.getItem("user");
    const passValue = localStorage.getItem("pass");

    axios.post("/user/login",{email:userValue,password:passValue})
    .then((res) => {
      
        if (res.status === 200 && res.data === "ADMIN") {
            setIsLogged(true);
            setIsValid(true);
            setIsLoading(false);
        
        }
        else{
            navigate("/login")
        } 
    })
    .catch((err) => {
        setIsLogged(false);
        setIsValid(false);
        navigate("/login")
    })
  } else {
    return <Navigate to="/login" />;
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : isValid === true ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};

export default AdminPrivateRoute;
