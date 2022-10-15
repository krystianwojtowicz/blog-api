import React from "react";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import PostDetails from "./PostDetails";

const Post = (props) => {
  return (
    <div>
      {/* <PostDetails></PostDetails> */}
      <Link to={`/${props.id}`}>
        <h4>{props.title}</h4>
      </Link>
      <p>{props.content}</p>
    </div>
  );
};
export default Post;
