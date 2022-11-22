const postReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_POSTS":
      return action.posts.data;
    case "CREATE_POST":
      //   console.log(action);
      return [action.payload.data, ...state];
    case "UPDATE_POST":
      return state.map((post) =>
        post._id === action.post.data._id ? action.post.data : post
      );
    default:
      return state;
  }
};

export default postReducer;
