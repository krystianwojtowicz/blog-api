import React, { useState, useEffect } from "react";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = async () => {
    let result = await fetch("http://localhost:5000/posts");
    result = await result.json();
    setPosts(result);
  };
  // console.log(posts);
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
          >
            {/* <Link to={`/${item._id}`}>
              <h4>title={item.title}</h4>
            </Link>
            <p>{item.content}</p> */}
          </Post>
        ))}
      </div>
    </div>
  );
};
export default Posts;
