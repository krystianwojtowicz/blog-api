import React from "react";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePost, deletePost } from "../actions/postActions";
import moment from "moment";

const PostDetails = (props) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user")) || "";
  const navigate = useNavigate();
  const posts = useSelector((state) =>
    state.posts.filter((post) => post._id === props._id)
  );
  const post = posts[0];
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    setTitle(post.title);
    setContent(post.content);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const payload = {
      title: title,
      content: content,
      author: user.username,
    };
    dispatch(updatePost(payload, props._id));
    navigate("/");
  };

  const handleDeletePost = () => {
    dispatch(deletePost(props._id));
    alert("post deleted");
    navigate("/");
  };
  return (
    <div className="post-details">
      <h1>title: {props.title}</h1>
      <div>
        content: <p dangerouslySetInnerHTML={{ __html: props.content }}></p>
      </div>
      <p>author: {props.author}</p>
      <p>date: {moment(props.date).fromNow()}</p>
      <hr />
      {user.username === props.author ? (
        <div className="update-post">
          <button className="appButton" onClick={handleDeletePost}>
            Delete Post
          </button>
          <div className="create-post">
            <form onSubmit={(e) => handleUpdate(e)}>
              <input
                className="inputBox"
                type="text"
                placeholder="enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <ReactQuill theme="snow" value={content} onChange={setContent} />
              <button className="appButton" type="submit">
                Update Post
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default PostDetails;
