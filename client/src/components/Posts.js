import React, { useState, useEffect } from "react";

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
        {posts.map((item, index) => (
          <div key={item._id}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Posts;
