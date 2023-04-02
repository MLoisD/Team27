import axios, { HttpStatusCode } from "axios";
import { useAtom } from "jotai";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedAtom } from "../../../App";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const [logged, setLogged] = useAtom(LoggedAtom);
  const ref = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: ref.current.email.value,
      password: ref.current.password.value,
    };
    setErrorMsg(null);
    await axios
      .post("/user/login", data)
      .then((res) => {
        if (res.status === 200) {
          setLogged(true);
          localStorage.setItem("user", ref.current.email.value);
          localStorage.setItem("pass", ref.current.password.value);
          setTimeout(()=>{navigate("/")},250)
      
        } 
      })
      .catch((err) => {
        setErrorMsg(JSON.stringify(err.response.data).slice(1, -1));
        localStorage.setItem("user", "");
        localStorage.setItem("pass", "");
      })
  };

  return (
    <div>
      <form ref={ref} onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="text" name="email" placeholder="Email" required />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          minLength={8}
        />
        <div>
        <button type="submit">Submit</button>
        </div>
        
      </form>
      {errorMsg ? <h1 style={{ color: "red" }}>{errorMsg}</h1> : null}
    </div>
  );
};

export default Login;
