import createApiModule from "../../../create-api-module";

const zone = "updatePost";
const { reducer, actions } = createApiModule(zone, ({ id }) => `/posts/${id}`, {
  method: "PUT"
});

export default reducer;
export const updatePost = (id: number, updatedPost: *) => (dispatch: *) => {
  return dispatch(actions.load({ path: { id }, data: updatedPost }));
};
