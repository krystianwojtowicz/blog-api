import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);
  const collectData = async () => {
    console.log(
      username,
      password
      //  confirmPassword
    );
    let result = await fetch("http://localhost:5000/signup", {
      method: "post",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    console.warn(result);
    if (result.error) {
      alert(JSON.stringify(result.error));
    }
    // localStorage.setItem("user", JSON.stringify(result));
  };
  return (
    <div className="register">
      <h1>Register</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <input
        className="inputBox"
        type="password"
        placeholder="confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      /> */}
      <button onClick={collectData} className="appButton" type="button">
        Sign Up
      </button>
    </div>
  );
};
export default SignUp;
