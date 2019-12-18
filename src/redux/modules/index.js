import { combineReducers } from "redux";

import { default as postsReducer } from "./actions/posts/postsApi";
import { default as postValueReducer } from "./actions/posts/postsValue";
import { default as addPostReducer } from "./actions/posts/addPost";
import { default as deletePost } from "./actions/posts/deletePost";
import { default as updatePost } from "./actions/posts/updatePost";

export default combineReducers({
  postsState: postsReducer,
  posts: postValueReducer,
  addPost: addPostReducer,
  deletePost,
  updatePost
});
