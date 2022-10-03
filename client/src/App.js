// import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import SignUp from "./components/SignUp";
import "./App.css";
import Login from "./components/Login";

function App() {
  // const [backendData, setBackendData] = useState({});
  // useEffect(() => {
  //   fetch("/api")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBackendData(data);
  //     });
  // }, []);
  return (
    <div>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<h1>Comments</h1>}></Route>
          <Route path="/posts" element={<h1>Posts</h1>}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      {/* {typeof backendData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )} */}
    </div>
  );
}

export default App;
