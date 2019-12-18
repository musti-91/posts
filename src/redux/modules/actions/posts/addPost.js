import createApiModule from "../../../create-api-module";

import { update as updatePosts } from "./postsValue";

import { type Post } from "./type.d";

const zone = "posts";
const { reducer, actions } = createApiModule(zone, () => `/posts`, {
  method: "POST"
});

export default reducer;
export const clear = actions.clear;
export const refetch = actions.refetch;

export const addPost = (post: Post) => (dispatch: *, getState: *) => {
  const { postsState: state } = getState();
  // eslint-disable-next-line
  return dispatch(actions.load({ data: post }))
    .then(res => {
      return dispatch(updatePosts({ data: [res.payload, ...state.data] }));
    })
    .catch(error =>
      // eslint-disable-next-line
      console.dir(error)
    );
};
