import createValueModule from "../../../create-value-module";

const zone = "posts";

const initialState = {};

const { reducer, actions } = createValueModule(zone, initialState);

export default reducer;

export const set = actions.set;
export const clear = actions.clear;
export const update = actions.update;
