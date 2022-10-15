import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = (props) => {
  // useEffect(() => {
  //   document.title = `${props.title} | Blogify` || "Blogify";
  // }, [props.title]);
  // const params = useParams();
  // const [postx, setPost] = useState("");
  // useEffect(() => {
  //   getPost();
  // }, []);
  // const getPost = async () => {
  //   let result = await fetch(`http://localhost:5000/posts/${params.id}`);
  //   result = await result.json();
  //   setPost(result);
  //   console.log(result);
  // };
  return (
    <div className="post-details">
      {/* <h1>{JSON.stringify(params.id)}</h1> */}
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
};
export default PostDetails;
