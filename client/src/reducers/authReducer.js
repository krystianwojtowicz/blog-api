const initialState = {
  token: localStorage.getItem("token"),
  username: null,
  _id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...initialState,
        token: action.user.data.auth,
        username: action.user.data.user.username,
        _id: action.user.data.user._id,
      };
    // case "SIGN_UP":
    //   return {
    //     ...initialState,
    //     username: action.user.data.user.username,
    //   };
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
