import React, { useState } from "react";

const SigUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const collectData = () => {
    console.log(username, password, confirmPassword);
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
      <input
        className="inputBox"
        type="password"
        placeholder="confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={collectData} className="appButton" type="button">
        Sign Up
      </button>
    </div>
  );
};
export default SigUp;
