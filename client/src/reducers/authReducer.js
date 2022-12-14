const initialState = {
  token: localStorage.getItem("token"),
  username: JSON.parse(localStorage.getItem("user"))?.username || null,
  _id: JSON.parse(localStorage.getItem("user"))?._id || null,
  errorLogin: null,
  errorSignup: null,
  message: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...initialState,
        token: action.user.data.auth,
        username: action.user.data.user?.username,
        _id: action.user.data.user?._id,
        errorLogin: action.user.data.error ? action.user.data.error : null,
      };
    // case "SIGN_UP":
    //   return {
    //     ...initialState,
    //     username: action.user.data.user.username,
    //   };
    case "SIGN_UP":
      return {
        ...initialState,
        username: action.user.data.user?.username,
        errorSignup: action.user.data.error ? action.user.data.error : null,
        message: action.user.data.message ? action.user.data.message : null,
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
