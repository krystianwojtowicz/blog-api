import axios from "axios";

// export const CREATE_POST = "CREATE-POST";
// export const DELETE_POST = "DELETE_POST";
// export const UPDATE_POST = "UPDATE_POST";
// export const GET_POSTS = "GET_POST";

export const getPosts = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/posts")
      .then((posts) => {
        dispatch({
          type: "GET_POSTS",
          posts,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

// export const getPost = (id) => {
//   return (dispatch) => {
//     axios
//       .get(`http://localhost:5000/posts/${id}`)
//       .then((post) => {
//         dispatch({
//           type: "GET_POST",
//           post,
//         });
//       })
//       .catch((error) => {
//         console.log(error.response);
//       });
//   };
// };
// export const createComment = (payload, _id) => {
//   return (dispatch) => {
//     axios.put(`http://localhost:5000/posts/${_id}`, payload).then((payload) => {
//       dispatch({
//         type: "ADD_COMMENT",
//         payload,
//       });
//     });
//   };
// };

export const createPost = (payload) => {
  let headers = {
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token"),
    },
  };
  return (
    dispatch
    // , getState
  ) => {
    // const payload = {
    //   title: title,
    //   content: content,
    //   // author: getState().auth.username,
    //   author: author,
    // };
    axios
      .post("http://localhost:5000/posts/create-post", { ...payload }, headers)
      .then((post) => {
        dispatch({
          type: "CREATE_POST",
          post,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const updatePost = (payload, _id) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:5000/posts/${_id}`, payload)
      .then((payload) => {
        console.warn("2");
        dispatch({
          type: "UPDATE_POST",
          payload,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const deletePost = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:5000/posts/${id}`)
      .then(() => {
        dispatch({
          type: "DELETE_POST",
          id,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

// const add = ({ title, author, content }) => ({
//   type: CREATE_POST,
//   payload: {
//     title: "title",
//     content: "content",
//     author: "author",
//   },
// });

// const edit = ({ title, author, content, _id }) => ({
//   type: CREATE_POST,
//   payload: {
//     title: "title",
//     content: "content",
//     author: "author",
//     _id,
//   },
// });

// const deletePost = (_id) => ({
//   type: DELETE_POST,
//   payload: {
//     _id,
//   },
// });
