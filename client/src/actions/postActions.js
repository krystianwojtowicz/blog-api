import axios from "axios";

export const getPosts = () => {
  return (dispatch) => {
    axios
      .get("https://blog-api-krystian.herokuapp.com/posts")
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

export const createPost = (payload) => {
  let headers = {
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token"),
    },
  };
  return (dispatch) => {
    axios
      .post(
        "https://blog-api-krystian.herokuapp.com/posts/create-post",
        { ...payload },
        headers
      )
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
      .put(`https://blog-api-krystian.herokuapp.com/posts/${_id}`, payload)
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

export const deletePost = (id) => {
  return (dispatch) => {
    axios
      .delete(`https://blog-api-krystian.herokuapp.com/posts/${id}`)
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
