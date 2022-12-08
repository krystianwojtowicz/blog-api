import axios from "axios";

let headers = {
  headers: {
    "Content-Type": "application/json",
  },
};
export const signUp = (username, password) => {
  return (dispatch) => {
    const payload = {
      username: username,
      password: password,
    };
    axios
      .post("http://localhost:5000/users/signup", payload)
      .then((user) => {
        console.warn(user);
        // localStorage.setItem("user", JSON.stringify(user.data));
        dispatch({
          type: "SIGN_UP",
          user,
        });
      })
      .catch((err) => {
        console.warn(err);
      });
  };
};

export const LogIn = (username, password) => {
  return (dispatch) => {
    const payload = {
      username: username,
      password: password,
    };
    axios
      .post("http://localhost:5000/users/login", payload)
      .then((user) => {
        localStorage.setItem("user", JSON.stringify(user.data.user));
        localStorage.setItem("token", user.data.auth);
        console.log(user);
        // console.log(localStorage.getItem("token"));
        dispatch({
          type: "LOGIN",
          auth: user,
          user: user,
        });
      })
      .catch((error) => {
        console.log(error.response);
        // console.log(error);
      });
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: "SIGN_OUT",
    });
  };
};
