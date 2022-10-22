import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import SignUp from "./components/SignUp";
import "./App.css";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    let result = await fetch("https://blog-api-krystian.herokuapp.com/posts");
    result = await result.json();
    setPosts(result);
  };

  const handleGetPosts = () => {
    getPosts();
  };
  return (
    <div>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          {posts.map((post) => (
            <Route
              key={post._id}
              path={`/${post._id}`}
              element={
                <PostDetails {...post} posts={posts} setPosts={setPosts} />
              }
            ></Route>
          ))}
          <Route path="/" element={<Posts />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/create-post"
            element={<CreatePost handleGetPosts={handleGetPosts} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
