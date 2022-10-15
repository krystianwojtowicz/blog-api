import React, { useState, useEffect } from "react";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = async () => {
    let result = await fetch("https://blog-api-krystian.herokuapp.com/posts");
    result = await result.json();
    setPosts(result);
  };
  // console.log(posts);
  return (
    <div className="post-list">
      <h1>Posts</h1>
      <div className="wrapper-grid">
        {posts.map((item) => (
          <Post
            key={item._id}
            id={item._id}
            title={item.title}
            content={item.content}
          >
            {/* <Link to={`/${item._id}`}>
              <h4>title={item.title}</h4>
            </Link>
            <p>{item.content}</p> */}
          </Post>
        ))}
      </div>
    </div>
  );
};
export default Posts;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Posts = () => {
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     getPosts();
//   }, []);
//   const getPosts = async () => {
//     let result = await fetch("http://localhost:5000/posts");
//     result = await result.json();
//     setPosts(result);
//   };
//   // console.log(posts);
//   return (
//     <div className="post-list">
//       <h1>Posts</h1>
//       <div className="wrapper-grid">
//         {posts.map((item) => (
//           <div key={item._id}>
//             <Link to={`/${item._id}`}>
//               <h4>{item.title}</h4>
//             </Link>
//             <p>{item.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Posts;
