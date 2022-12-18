import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../actions/postActions";

const CreatePost = (props) => {
  const dispatch = useDispatch();

  const author = JSON.parse(localStorage.getItem("user")).username;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  console.warn(content);
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleCreate = (e) => {
    console.log(content);
    e.preventDefault();
    const payload = {
      title,
      content,
      author,
      date,
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
            onChange={(e) => {
              setTitle(e.target.value);
              setDate(new Date());
            }}
            required
          />
          <ReactQuill
            className="quill"
            theme="snow"
            value={content}
            onChange={setContent}
            required
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
