import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import SignUp from "./components/SignUp";
import "./App.css";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  // const getPosts = async () => {
  //   let result = await fetch("http://localhost:5000/posts");
  //   result = await result.json();
  //   setPosts(result);
  // };
  const getPosts = () => {
    Axios.get("http://localhost:5000/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error(err.response);
      });
  };

  const handleGetPosts = () => {
    getPosts();
  };
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
          {/* <Route path="/posts" element={<Posts />}></Route> */}
          {/* {posts.map((post) => (
            <Route
              key={post._id}
              path={`/${post._id}`}
              render={() => (
                <PostDetails {...post} posts={posts} setPosts={setPosts} />
              )}
            ></Route>
          ))} */}
          {posts.map((post) => (
            <Route
              key={post._id}
              path={`/${post._id}`}
              element={
                <PostDetails {...post} posts={posts} setPosts={setPosts} />
              }
            ></Route>
          ))}
          {/* <Route path="/:id" element={<PostDetails />}></Route> */}
          <Route path="/" element={<Posts />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/create-post"
            element={<CreatePost handleGetPosts={handleGetPosts} />}
          ></Route>
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
