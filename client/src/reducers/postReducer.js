const postReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_POSTS":
      return action.posts.data;
    case "CREATE_POST":
      return [action.post.post.data, ...state];
    case "UPDATE_POST":
      return state.map((post) =>
        post._id === action.post.data._id ? action.post.data : post
      );
    case "DELETE_POST":
      return state.filter((post) => post._id !== action.id);
    default:
      return state;
  }
};

export default postReducer;
