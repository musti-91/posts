import { clear, load, refetch } from "./postsApi";
import { clear as clearValue, set, update } from "./postsValue";
import { type state, type Post, type Dispatch } from "./type.d";

import { addPost } from "./addPost";
import { updatePost } from "./updatePost";
import { deletePost } from "./deletePost";

export { default as reducer } from "./postsApi";
export {
  clear,
  clearValue,
  set,
  update,
  load,
  refetch,
  state,
  Post,
  Dispatch,
  addPost,
  updatePost,
  deletePost
};
