// @flow
import createApiModule from "../../../create-api-module";
import { set as setPosts } from "./postsValue";

const zone = "posts";

const { reducer, actions } = createApiModule(
  zone,
  ({ filter }) => (filter ? `/posts?userId=${filter}` : `/posts`),
  {
    method: "GET"
  }
);

export default reducer;

export const clear = actions.clear;
export const refetch = actions.refetch;

export const load = (filter?: string) => (dispatch: *) => {
  return dispatch(actions.load({ path: { filter } }))
    .then(res => dispatch(setPosts({ data: res.payload, filter })))
    .catch(error =>
      // eslint-disable-next-line
      console.dir(error)
    );
};
