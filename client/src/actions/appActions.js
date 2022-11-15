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

export const createPost = (title, author, content) => {
  return (dispatch, getState) => {
    const payload = {
      title: title,
      content: content,
      author: author,
    };
    axios
      .post("http://localhost:5000/posts/create-post", payload)
      .then((payload) => {
        dispatch({
          type: "CREATE_POST",
          payload,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const updatePost = (
  title,
  author,
  // requires id - how to add it?
  content,
  _id
) => {
  return (dispatch) => {
    const payload = {
      title: title,
      content: content,
      author: author,
    };
    axios
      .put(
        `http://localhost:5000/posts`,
        // /id behind post should be
        payload
      )
      .then((payload) => {
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
