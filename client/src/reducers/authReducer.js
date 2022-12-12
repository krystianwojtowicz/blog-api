const initialState = {
  token: localStorage.getItem("token"),
  username: null,
  _id: null,
  error: null,
  message: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      // const user = action.user.user;
      // const auth = action.auth.data;
      // console.log(action.user.data.auth);
      console.warn(action.user.data);
      return {
        ...initialState,
        token: action.user.data.auth,
        // username: action.user.data.user.username
        //   ? action.user.data.user.username
        //   : null,
        // _id: action.user.data.user._id ? action.user.data.user._id : null,
        username: action.user.data.user?.username,
        _id: action.user.data.user?._id,
        error: action.user.data.error ? action.user.data.error : null,
      };
    case "SIGN_UP":
      console.warn(action.user.data);
      // const { username } = action.payload;
      // console.log(action.user.user);
      return {
        ...initialState,
        // token: action.res.data.auth,
        // token: "s",
        username: action.user.data.user?.username,
        error: action.user.data.error ? action.user.data.error : null,
        message: action.user.data.message ? action.user.data.message : null,
        // username: action.user.data.user.username,
        // username: "s",
        // _id: user._id,
        // _id: "s",
      };
    case "SIGN_OUT":
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        token: null,
        username: null,
        _id: null,
      };
    default:
      return state;
  }
};

export default authReducer;
