import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const CreatePost = (props) => {
  const author = JSON.parse(localStorage.getItem("user")).username;
  // console.log(localStorage.getItem("token"));
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  let headers = {
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token"),
    },
  };
  const handleCreate = (e) => {
    e.preventDefault();
    console.log(title, content);
    const payload = {
      title: title,
      content: content,
      author: author,
    };
    // let result = await fetch(
    //   "https://blog-api-krystian.herokuapp.com/posts/create-post",
    Axios.post("http://localhost:5000/posts/create-post", payload, headers)
      .then((res) => {
        console.log(res.data);
        props.getCreatedPost(res.data.post);

        // props.setPosts((prevState) => [...prevState, res.data]);
        // przekazac res.data wyzej
      })
      .catch((err) => {
        console.error(err);
      });
    // result = await result.json();
    // console.warn(result);
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
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;

// import { useNavigate } from "react-router-dom";
// import React, { useState, useEffect } from "react";

// const SignUp = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   // const [confirmPassword, setConfirmPassword] = useState("");
//   const navigate = useNavigate();
//   useEffect(() => {
//     const auth = localStorage.getItem("user");
//     if (auth) {
//       navigate("/");
//     }
//   }, []);
//   const collectData = async (e) => {
//     e.preventDefault();
//     console.log(
//       username,
//       password
//       //  confirmPassword
//     );
//     let result = await fetch("http://localhost:5000/users/signup", {
//       method: "post",
//       body: JSON.stringify({ username, password }),
//       headers: { "Content-Type": "application/json" },
//     });
//     result = await result.json();
//     console.warn(result);
//     if (result.error) {
//       alert(JSON.stringify(result.error));
//     }
//     navigate("/");
//     // localStorage.setItem("user", JSON.stringify(result));
//   };
//   return (
//     <div className="register">
//       <h1>Register</h1>
//       <form
//         onSubmit={(e) => {
//           collectData(e);
//         }}
//       >
//         <input
//           className="inputBox"
//           type="text"
//           placeholder="enter username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           className="inputBox"
//           type="password"
//           placeholder="enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {/* <input
//         className="inputBox"
//         type="password"
//         placeholder="confirm password"
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//       /> */}
//         <button className="appButton" type="submit">
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };
// export default SignUp;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Axios from "axios";

// const CreatePost = (props) => {
//   const author = JSON.parse(localStorage.getItem("user")).username;
//   // console.log(localStorage.getItem("token"));
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const navigate = useNavigate();
//   const handleCreate = async (e) => {
//     e.preventDefault();
//     console.log(title, content);

//     let result = await fetch(
//       "https://blog-api-krystian.herokuapp.com/posts/create-post",
//       // let result = Axios.post(
//       //   "https://blog-api-krystian.herokuapp.com/posts/create-post",
//       {
//         method: "post",
//         body: JSON.stringify({ title, content, author }),
//         headers: {
//           "Content-Type": "application/json",
//           authorization: localStorage.getItem("token"),
//         },
//       }
//     );
//     result = await result.json();
//     console.warn(result);
//     navigate("/");
//   };
//   return (
//     <div className="create-post">
//       <div>
//         <h1>Create Post</h1>
//         <form
//           onSubmit={(e) => {
//             handleCreate(e);
//             props.handleGetPosts();
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
