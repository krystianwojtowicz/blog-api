import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const PostDetails = (props) => {
  const user = JSON.parse(localStorage.getItem("user")) || "";
  // const user = JSON.parse(localStorage.getItem("user")).username;
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  let headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = () => {
    // const payload = {
    //   title: title,
    //   content: content,
    // };
    Axios.get(`https://blog-api-krystian.herokuapp.com/posts/${props._id}`)
      .then((res) => {
        setTitle(res.data.title);
        setContent(res.data.content);
      })
      .catch((err) => {
        console.error(err.response);
      });
  };
  // const getProductDetails = async () => {
  //   let result = await fetch(`http://localhost:5000/posts/${props._id}`);
  //   result = await result.json();
  //   setTitle(result.title);
  //   setContent(result.content);
  // };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(title, content);
    const payload = {
      title: title,
      content: content,
    };
    Axios.put(
      `https://blog-api-krystian.herokuapp.com/posts/${props._id}`,
      payload,
      headers
    )
      .then((res) => {
        setTitle(res.data.title);
        setContent(res.data.content);
      })
      .catch((err) => {
        console.error(err.response);
      });
    navigate("/");
    // if (result) {
    //   navigate("/");
    // }
  };
  // const handleUpdate = async (e) => {
  //   e.preventDefault();
  //   console.log(title, content);
  //   let result = await fetch(`http://localhost:5000/posts/${props._id}`, {
  //     method: "Put",
  //     body: JSON.stringify({ title, content }),
  //     headers: { "Content-Type": "application/json" },
  //   });
  //   result = await result.json();
  //   console.log(result);
  //   navigate("/");
  //   // if (result) {
  //   //   navigate("/");
  //   // }
  // };

  const deletePost = () => {
    console.warn(props._id);
    let result = Axios.delete(
      `https://blog-api-krystian.herokuapp.com/posts/${props._id}`
    );
    if (result) {
      alert("post deleted");
      navigate("/");
    }
  };
  // const deletePost = async () => {
  //   console.warn(props._id);
  //   let result = await fetch(`http://localhost:5000/posts/${props._id}`, {
  //     method: "Delete",
  //   });
  //   result = await result.json();
  //   if (result) {
  //     alert("post deleted");
  //     navigate("/");
  //   }
  // };
  return (
    <div className="post-details">
      <h1>title: {props.title}</h1>
      <p>content: {props.content}</p>
      <p>author: {props.author}</p>
      {user.username === props.author ? (
        <div className="update-post">
          <button className="appButton" onClick={deletePost}>
            Delete Post
          </button>
          <form onSubmit={(e) => handleUpdate(e)}>
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
