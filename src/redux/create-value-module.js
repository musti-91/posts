// @flow

import merge from "lodash.merge";

import { createConstants } from "./utils";

const STAGES = ["reset", "set", "merge"];

/**
 * Create reducer
 */
const createReducer = (constants, initialState) => (
  state: * = initialState,
  { type, payload }: *
) => {
  if (type === constants.RESET) {
    return initialState;
  }

  if (type === constants.SET) {
    return payload;
  }

  if (type === constants.MERGE) {
    return merge({}, state, payload);
  }

  return state;
};

/**
 * Create value module
 */
export default (namespace: string, initialState: *) => {
  const constants = createConstants(STAGES, "value", namespace);

  return {
    constants,
    reducer: createReducer(constants, initialState),
    actions: {
      clear: () => ({
        type: constants.RESET
      }),
      set: (payload: *) => ({
        type: constants.SET,
        payload
      }),
      update: (payload: *) => ({
        type: constants.MERGE,
        payload
      })
    }
  };
};
