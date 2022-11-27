const initialState = {
  token: localStorage.getItem("token"),
  username: null,
  _id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      // const user = action.user.user;
      // const auth = action.auth.data;
      // console.log(action.user.data.auth);
      console.log(action.user.data.user);
      return {
        ...initialState,
        token: action.user.data.auth,
        username: action.user.data.user.username,
        _id: action.user.data.user._id,
      };
    case "SIGN_UP":
      console.log(action.user.data.user);
      // const { username } = action.payload;
      // console.log(action.user.user);
      return {
        ...initialState,
        // token: action.res.data.auth,
        // token: "s",
        username: action.user.data.user.username,
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
