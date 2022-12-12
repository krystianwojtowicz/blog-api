import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogIn } from "../actions/authActions";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Login = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, [state]);

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(LogIn(username, password));
    const payload = {
      username: username,
      password: password,
    };
    // console.log(state);
    // Axios.post("http://localhost:5000/users/login", payload, headers)
    //   .then((res) => {
    //     if (res.data.auth) {
    //       localStorage.setItem("user", JSON.stringify(res.data.user));
    //       console.log(JSON.stringify(res.data.user));
    //       localStorage.setItem("token", res.data.auth);
    //       // localStorage.setItem("user", JSON.stringify(res.data.user));
    //       // // console.log(JSON.stringify(res.data.user));
    //       // localStorage.setItem("token", res.data.auth);
    //       // console.log(localStorage.getItem("user"));
    //       // console.log(localStorage.getItem("token"));
    //       navigate("/");
    //     } else {
    //       alert("Please enter correct details");
    //     }
    //   })
    //   .catch((err) => {
    //     console.error(err.response);
    //   });
    // navigate("/");
  };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   let result = await fetch("http://localhost:5000/users/login", {
  //     method: "post",
  //     body: JSON.stringify({ username, password }),
  //     headers: { "Content-Type": "application/json" },
  //   });
  //   result = await result.json();
  //   console.warn(result);
  //   if (result.auth) {
  //     localStorage.setItem("user", JSON.stringify(result.user));
  //     localStorage.setItem("token", JSON.stringify(result.auth));
  //     navigate("/");
  //   } else {
  //     alert("Please enter correct details");
  //   }
  // };
  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={(e) => handleLogin(e)}>
        <input
          className="inputBox"
          type="text"
          placeholder="enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="inputBox"
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p>{state.auth.errorLogin}</p>
        <button className="appButton" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
