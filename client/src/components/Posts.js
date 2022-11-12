import React, { useState, useEffect } from "react";
import Post from "./Post";
import Axios from "axios";

const Posts = () => {
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
    Axios.get("https://blog-api-krystian.herokuapp.com/posts")
      .then((res) => {
        // console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.error(err.response);
      });
    // console.log(result);
  };
  console.log(posts);
  return (
    <div className="post-list">
      <h1>Posts</h1>
      <div className="wrapper-grid">
        {posts.map((item) => (
          <Post
            key={item._id}
            id={item._id}
            title={item.title}
            content={item.content}
            author={item.author}
          ></Post>
        ))}
      </div>
    </div>
  );
};
export default Posts;
