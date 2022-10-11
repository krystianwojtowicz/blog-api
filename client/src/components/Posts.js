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
      {posts.map((item, index) => (
        <ul key={item._id}>
          <li>{item.title}</li>
          <li>{item.content}</li>
        </ul>
      ))}
    </div>
  );
};
export default Posts;
