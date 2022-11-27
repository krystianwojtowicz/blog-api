import axios from "axios";

export const signUp = (username, password) => {
  return (dispatch) => {
    const payload = {
      username: username,
      password: password,
    };
    axios
      .post("https://blog-api-nwqo.onrender.com/users/signup", payload)
      .then((user) => {
        // dispatch({
        //   type: "SIGN_UP",
        //   user,
        // });
        console.log(user);
      })
      .catch((error) => {
        console.log(error.response);
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
      .post("https://blog-api-nwqo.onrender.com/users/login", payload)
      .then((user) => {
        localStorage.setItem("user", JSON.stringify(user.data.user));
        localStorage.setItem("token", user.data.auth);
        dispatch({
          type: "LOGIN",
          auth: user,
          user: user,
        });
      })
      .catch((error) => {
        console.log(error);
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
