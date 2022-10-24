import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = (props) => {
  const author = JSON.parse(localStorage.getItem("user")).username;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  // const [author, setAuthor] = useState("");
  // schowane nowe
  const handleCreate = async (e) => {
    e.preventDefault();
    console.log(title, content);
    let result = await fetch("http://localhost:5000/posts/create-post", {
      method: "post",
      body: JSON.stringify({ title, content, author }),
      headers: {
        "Content-Type": "application/json",
        authorization: JSON.parse(localStorage.getItem("token")),
      },
    });
    result = await result.json();
    console.warn(result);
    navigate("/");
  };
  return (
    <div className="create-post">
      <div>
        <h1>Create Post</h1>
        {/* <input
        className="inputBox"
        type="text"
        placeholder="enter title"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      /> */}
        <form
          onSubmit={(e) => {
            handleCreate(e);
            props.handleGetPosts();
          }}
        >
          <input
            className="inputBox"
            type="text"
            placeholder="enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="inputBox"
            maxLength="100"
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button className="appButton" type="submit">
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
