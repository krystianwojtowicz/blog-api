import React from "react";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePost, deletePost } from "../actions/postActions";
import moment from "moment";

// import { deletePost } from "../actions/postActions";

const PostDetails = (props) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user")) || "";
  // const user = JSON.parse(localStorage.getItem("user")).username;
  const navigate = useNavigate();
  const posts = useSelector((state) =>
    state.posts.filter((post) => post._id === props._id)
  );
  const post = posts[0];
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  let headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // useEffect(() => {
  //   dispatch(getPost(props._id));
  // }, [dispatch]);
  useEffect(() => {
    setTitle(post.title);
    setContent(post.content);
  }, []);
  // useEffect(() => {
  //   getProductDetails();
  // }, []);
  // const getProductDetails = () => {
  //   // const payload = {
  //   //   title: title,
  //   //   content: content,
  //   // };
  //   Axios.get(`http://localhost:5000/posts/${props._id}`)
  //     .then((res) => {
  //       setTitle(res.data.title);
  //       setContent(res.data.content);
  //     })
  //     .catch((err) => {
  //       console.error(err.response);
  //     });
  // };

  // const getProductDetails = async () => {
  //   let result = await fetch(`http://localhost:5000/posts/${props._id}`);
  //   result = await result.json();
  //   setTitle(result.title);
  //   setContent(result.content);
  // };
  const handleUpdate = (e) => {
    e.preventDefault();
    const payload = {
      title: title,
      content: content,
      author: user.username,
    };
    dispatch(updatePost(payload, props._id));
    // console.log(title, content);

    // Axios.put(`http://localhost:5000/posts/${props._id}`, payload, headers)
    //   .then((res) => {
    //     setTitle(res.data.title);
    //     setContent(res.data.content);
    //   })
    //   .catch((err) => {
    //     console.error(err.response);
    //   });
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

  const handleDeletePost = () => {
    dispatch(deletePost(props._id));
    alert("post deleted");
    navigate("/");
  };
  // const deletePost = () => {
  //   console.warn(props._id);
  //   let result = Axios.delete(`http://localhost:5000/posts/${props._id}`);
  //   if (result) {
  //     alert("post deleted");
  //     navigate("/");
  //   }
  // };
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
      {/* <h1>{JSON.stringify(params.id)}</h1> */}
      <h1>title: {props.title}</h1>
      {/* <p>content: {props.content}</p> */}
      <p>
        content: <p dangerouslySetInnerHTML={{ __html: props.content }}></p>
      </p>
      <p>author: {props.author}</p>
      <p>date: {moment(props.date).fromNow()}</p>
      {user.username === props.author ? (
        <div className="update-post">
          <button className="appButton" onClick={handleDeletePost}>
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
            <ReactQuill theme="snow" value={content} onChange={setContent} />
            {/* <textarea
              className="inputBox"
              maxLength="100"
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            /> */}
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
