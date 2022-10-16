import React, { useState } from "react";

const CreatePost = () => {
  const auth = JSON.parse(localStorage.getItem("user")).username;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [author, setAuthor] = useState("");
  // schowane nowe
  const handleCreate = async () => {
    console.log(title, content);
    let result = await fetch(
      "https://blog-api-krystian.herokuapp.com/create-post",
      {
        method: "post",
        body: JSON.stringify({ title, content }),
        headers: {
          "Content-Type": "application/json",
          authorization: JSON.parse(localStorage.getItem("token")),
        },
      }
    );
    result = await result.json();
    console.warn(result);
  };
  return (
    <div className="create-post">
      <h1>Create Post</h1>
      {/* <input
        className="inputBox"
        type="text"
        placeholder="enter title"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      /> */}
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
      <button className="appButton" type="button" onClick={handleCreate}>
        Post
      </button>
    </div>
  );
};

export default CreatePost;
// import React, { useState } from "react";

// const CreatePost = (props) => {
//   // const auth = localStorage.getItem("user");
//   const [formData, setFormData] = useState({
//     title: props.title || "",
//     content: props.content || "",
//   });
//   // const [title, setTitle] = useState("");
//   // const [content, setContent] = useState("");
//   // const [author, setAuthor] = useState("");
//   const handleCreate = async () => {
//     console.log(formData.title, formData.content);
//     let result = await fetch("http://localhost:5000/create-post", {
//       method: "post",
//       body: JSON.stringify({ formData }),
//       headers: {
//         "Content-Type": "application/json",
//         authorization: JSON.parse(localStorage.getItem("token")),
//       },
//     });
//     result = await result.json();
//     console.warn(result);
//   };
//   return (
//     <div className="create-post">
//       <h1>Create Post</h1>
//       <input
//         className="inputBox"
//         type="text"
//         placeholder="enter title"
//         defaultValue={formData.title || ""}
//         onChange={handleChange}
//         // value={title}
//         // onChange={(e) => setTitle(e.target.value)}
//       />
//       <textarea
//         className="inputBox"
//         maxLength="100"
//         type="text"
//         defaultValue={formData.content || ""}
//         onChange={handleChange}
//         // value={content}
//         // onChange={(e) => setContent(e.target.value)}
//       />
//       <button className="appButton" type="button" onClick={handleCreate}>
//         Post
//       </button>
//     </div>
//   );
// };

// export default CreatePost;
