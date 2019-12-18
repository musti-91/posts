// @flow

import isEqual from "lodash.isequal";
import merge from "lodash.merge";

import { createConstants } from "./utils";

const STAGES = ["reset", "pending", "failure", "success"];

const DEFAULT_OPTIONS = {
  reducer: null,
  initialState: {},
  method: "GET",
  clearOnFetch: false,
  clearOnError: false,
  debounce: false // TODO: To implement
};

/**
 * Create the module reducer
 */
const createReducer = (constants, options) => {
  const initialState = {
    ...options.initialState,
    loading: false,
    error: null,
    data: null,
    params: null
  };

  return (state: * = { ...initialState }, action: *) => {
    const { type, payload } = action;

    if (options.reducer) {
      const [reducedState, proceed] = options.reducer(state, action);

      if (!proceed) {
        return reducedState;
      }

      state = reducedState;
    }

    if (type === constants.RESET) {
      return { ...initialState };
    }

    if (type === constants.PENDING) {
      return {
        ...state,
        params: payload,
        loading: true,
        error: null,
        data: options.clearOnFetch ? null : state.data
      };
    }

    if (type === constants.SUCCESS) {
      return {
        ...state,
        loading: false,
        error: null,
        data: payload
      };
    }

    if (type === constants.FAILURE) {
      return {
        ...state,
        loading: false,
        error: payload,
        data: options.clearOnError ? null : state.data
      };
    }

    return state;
  };
};

/**
 * Create the load action
 *
 * DISCLAIMER: Omitting per method caching since backend is inconsistent
 * TODO: Add support for cancellation when forcing a reload
 * TODO: Convert getPath to string OR function
 */
const createLoadAction = (namespace, getPath, constants, options) => (
  params: * = {},
  force: boolean = false
) => (dispatch: *, getState: *, client: *) => {
  const state = getState()[namespace];

  // Merge with current params
  params = merge({}, state.params, params);

  // Skip if loading still
  if (state.loading) {
    return Promise.resolve("LOADING");
  }

  // Skip if same
  if (!force && isEqual(state.params, params)) {
    if (state.error) {
      return Promise.reject(state.error);
    }

    return Promise.resolve("SUCCESS");
  }

  // Dispatch loading action
  dispatch({
    type: constants.PENDING,
    payload: params
  });

  const request = {
    url: getPath(params.path),
    method: options.method,
    headers: params.headers,
    data: params.data
  };

  return client
    .request(request)
    .then(response =>
      dispatch({
        type: constants.SUCCESS,
        payload: response.data
      })
    )
    .catch(error =>
      dispatch({
        type: constants.FAILURE,
        payload: error
      })
    );
};

/**
 * Create an api module
 */
export default (
  namespace: string,
  getPath: (pathParams: *) => string,
  options: * = {}
) => {
  options = {
    ...DEFAULT_OPTIONS,
    ...options
  };

  const constants = createConstants(STAGES, "api", namespace);

  const load = createLoadAction(namespace, getPath, constants, options);

  // Should be called actionCreators but called actions for simplicity
  const actions = {
    clear: () => ({
      type: constants.RESET
    }),
    load,
    refetch: () => load(undefined, true)
  };

  return {
    constants,
    reducer: createReducer(constants, options),
    actions
  };
};
