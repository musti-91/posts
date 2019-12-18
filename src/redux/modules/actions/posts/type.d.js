// @flow
import { type Dispach as iDispatch } from "redux";

export type Post = {
  title: string,
  body: string,
  id?: number,
  userId: number
};

export type state = {
  loading: boolean,
  data: Post[],
  error: *,
  params: *
};
export type Dispatch = iDispatch;
