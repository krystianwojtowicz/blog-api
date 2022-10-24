import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PostDetails = (props) => {
  const user = JSON.parse(localStorage.getItem("user")).username;
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    let result = await fetch(
      `https://blog-api-krystian.herokuapp.com/posts/${props._id}`
    );
    result = await result.json();
    setTitle(result.title);
    setContent(result.content);
  };

  const handleUpdate = async () => {
    console.log(title, content);
    let result = await fetch(
      `https://blog-api-krystian.herokuapp.com/posts/${props._id}`,
      {
        method: "Put",
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
      }
    );
    result = await result.json();
    console.log(result);
    navigate("/");
    // if (result) {
    //   navigate("/");
    // }
  };

  const deletePost = async (e) => {
    e.preventDefault();
    console.warn(props._id);
    let result = await fetch(
      `https://blog-api-krystian.herokuapp.com/posts/${props._id}`,
      {
        method: "Delete",
      }
    );
    result = await result.json();
    if (result) {
      alert("post deleted");
      navigate("/");
    }
  };
  return (
    <div className="post-details">
      <h1>title: {props.title}</h1>
      <p>content: {props.content}</p>
      <p>author: {props.author}</p>
      {user === props.author ? (
        <div className="update-post">
          <button className="appButton" onClick={deletePost}>
            Delete Post
          </button>
          <form onSubmit={(e) => deletePost(e)}>
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
              Update Post
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
};
export default PostDetails;
