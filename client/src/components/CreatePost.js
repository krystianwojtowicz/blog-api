import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = (props) => {
  const author = JSON.parse(localStorage.getItem("user")).username;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  // const [author, setAuthor] = useState("");
  // schowane nowe
  const handleCreate = async () => {
    console.log(title, content);
    let result = await fetch(
      "https://blog-api-krystian.herokuapp.com/posts/create-post",
      {
        method: "post",
        body: JSON.stringify({ title, content, author }),
        headers: {
          "Content-Type": "application/json",
          authorization: JSON.parse(localStorage.getItem("token")),
        },
      }
    );
    result = await result.json();
    console.warn(result);
    navigate("/");
  };
  return (
    <div className="create-post">
      <div>
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
          maxLength="100"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="appButton"
          type="button"
          onClick={() => {
            handleCreate();
            props.handleGetPosts();
          }}
        >
          Create Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
