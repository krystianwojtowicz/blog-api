import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogIn } from "../actions/authActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
  };

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
