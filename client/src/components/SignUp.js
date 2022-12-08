import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { signUp } from "../actions/authActions";

const SignUp = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (state.auth.message && isSubmit) navigate("/");
  }, [state.auth.message]);
  const collectData = async (e) => {
    e.preventDefault();
    dispatch(signUp(username, password));
    setIsSubmit(true);
    const payload = {
      username: username,
      password: password,
    };
  };
  return (
    <div className="register">
      <h1>Register</h1>
      <form
        onSubmit={(e) => {
          collectData(e);
        }}
      >
        <input
          className="inputBox"
          type="text"
          placeholder="enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <p>{state.auth.error}</p>
        {/* <p>{state.auth.message}</p> */}
        <input
          className="inputBox"
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="appButton" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default SignUp;
