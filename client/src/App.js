import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import SignUp from "./components/SignUp";
import "./App.css";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./actions/postActions";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          {posts &&
            posts.map((post) => (
              <Route
                key={post._id}
                path={`/${post._id}`}
                element={<PostDetails {...post} posts={posts} />}
              ></Route>
            ))}
          <Route path="/" element={<Posts />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/create-post" element={<CreatePost />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
