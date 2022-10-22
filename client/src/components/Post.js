import React from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <div>
      <Link to={`/${props.id}`}>
        <h4>{props.title}</h4>
      </Link>
      <p>{props.content}</p>
      <p>{props.author}</p>
    </div>
  );
};
export default Post;
