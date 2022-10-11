import React, { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleCreate = async () => {
    console.log(title, content);
    let result = await fetch("http://localhost:5000/create-post", {
      method: "post",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
        authorization: JSON.parse(localStorage.getItem("token")),
      },
    });
    result = await result.json();
    console.warn(result);
  };
  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="inputBox"
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="appButton" type="button" onClick={handleCreate}>
        Post
      </button>
    </div>
  );
};

export default CreatePost;
