import createApiModule from "../../../create-api-module";
import { set as setState } from "./postsValue";

const zone = "deletePost";

const { reducer, actions } = createApiModule(zone, ({ id }) => `/posts/${id}`, {
  method: "DELETE"
});

export default reducer;

export const deletePost = (id: number) => (dispatch: *, getState: *) => {
  const { posts: state } = getState();

  return (
    dispatch(actions.load({ path: { id } }))
      /** normally we do refetch again to make sure that we have new data without deleted item */
      .then(() =>
        dispatch(setState({ data: state.data.filter(p => p.id !== id) }))
      )
      .catch((
        error // eslint-disable-next-line
      ) => console.dir(error))
  );
};
