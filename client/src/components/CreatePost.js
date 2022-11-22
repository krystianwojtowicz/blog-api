import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../actions/postActions";

const CreatePost = (props) => {
  const dispatch = useDispatch();

  const author = JSON.parse(localStorage.getItem("user")).username;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    const payload = {
      title: title,
      content: content,
      author: author,
    };

    dispatch(createPost(payload));
    navigate("/");
  };
  return (
    <div className="create-post">
      <div>
        <h1>Create Post</h1>
        <form
          onSubmit={(e) => {
            handleCreate(e);
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
