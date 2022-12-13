import React from "react";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
// import PostDetails from "./PostDetails";

const Post = (props) => {
  return (
    <div>
      {/* <PostDetails></PostDetails> */}
      <Link to={`/${props.id}`}>
        <h4>{props.title}</h4>
      </Link>
      {/* <p>{props.content}</p> */}
      <p dangerouslySetInnerHTML={{ __html: props.content }}></p>
      <p>{props.author}</p>
      <p>{moment(props.date).fromNow()}</p>
    </div>
  );
};
export default Post;
