import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Post = (props) => {
  return (
    <div>
      <Link to={`/${props.id}`}>
        <h4>{props.title}</h4>
      </Link>
      <p dangerouslySetInnerHTML={{ __html: props.content }}></p>
      <p>{props.author}</p>
      <p>{moment(props.date).fromNow()}</p>
    </div>
  );
};
export default Post;
