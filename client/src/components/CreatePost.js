import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { createPost } from "../actions/postActions";
// import { Editor } from "@tinymce/tinymce-react";

const CreatePost = (props) => {
  const dispatch = useDispatch();

  const author = JSON.parse(localStorage.getItem("user")).username;
  // console.log(localStorage.getItem("token"));
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  console.warn(content);
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  // const editor = useRef();
  let headers = {
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    console.warn(content);
  }, [content]);

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

    // console.log(title, content);
    // // let result = await fetch(
    // //   "https://blog-api-krystian.herokuapp.com/posts/create-post",
    // Axios.post("http://localhost:5000/posts/create-post", payload, headers)
    //   .then((res) => {
    //     console.log(res.data);
    //     props.getCreatedPost(res.data.post);
    //     // props.setPosts((prevState) => [...prevState, res.data]);
    //     // przekazac res.data wyzej
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
    // // result = await result.json();
    // // console.warn(result);
    navigate("/");
  };
  return (
    <div className="create-post">
      <div>
        <h1>Create Post</h1>
        <form
          onSubmit={(e) => {
            handleCreate(e);
            // props.handleGetPosts();
          }}
        >
          {/* <Editor
            // ref={editor}
            apiKey="8uglg0y5jfna6nbn7oxzydohttmjwf977sbmyulmgt4od4j8"
            //  apiKey={process.env.REACT_APP_API_KEY}
            // value={content}
            // onChange={(e) => setContent(e.target.value)}
            // onChange={(e) => setContent(e.target.value)}
            // onInit={(e,editor) => editorRef.current = editor}
          /> */}

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
          {/* <textarea
            className="inputBox"
            maxLength="100"
            type="text"
            // value={content}
            // onChange={(e) => setContent(e.target.value)}
            required
          /> */}
          <ReactQuill
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

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Axios from "axios";
// import { createPost } from "../actions/postActions";

// const CreatePost = (props) => {
//   const dispatch = useDispatch();

//   const author = JSON.parse(localStorage.getItem("user")).username;
//   // console.log(localStorage.getItem("token"));
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const navigate = useNavigate();
//   let headers = {
//     headers: {
//       "Content-Type": "application/json",
//       authorization: localStorage.getItem("token"),
//     },
//   };
//   const handleCreate = (e) => {
//     e.preventDefault();
//     const payload = {
//       title: title,
//       content: content,
//       author: author,
//     };

//     dispatch(createPost(payload));

//     // console.log(title, content);
//     // // let result = await fetch(
//     // //   "https://blog-api-krystian.herokuapp.com/posts/create-post",
//     // Axios.post("http://localhost:5000/posts/create-post", payload, headers)
//     //   .then((res) => {
//     //     console.log(res.data);
//     //     props.getCreatedPost(res.data.post);
//     //     // props.setPosts((prevState) => [...prevState, res.data]);
//     //     // przekazac res.data wyzej
//     //   })
//     //   .catch((err) => {
//     //     console.error(err);
//     //   });
//     // // result = await result.json();
//     // // console.warn(result);
//     navigate("/");
//   };
//   return (
//     <div className="create-post">
//       <div>
//         <h1>Create Post</h1>
//         <form
//           onSubmit={(e) => {
//             handleCreate(e);
//             // props.handleGetPosts();
//           }}
//         >
//           <input
//             className="inputBox"
//             type="text"
//             placeholder="enter title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//           <textarea
//             className="inputBox"
//             maxLength="100"
//             type="text"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//           />
//           <button className="appButton" type="submit">
//             Create Post
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreatePost;
