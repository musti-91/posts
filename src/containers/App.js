// @flow
import "./app.css";
import React, { Component } from "react";
import { connect } from "react-redux";

import {
  load,
  clear,
  type state as State,
  type Post,
  addPost,
  deletePost,
  updatePost
} from "../redux/modules/actions/posts";

// components
import List from "../components/List";
import Loading from "../components/Loading";
import InputField from "../components/InputField";
// import Progress from "../components/Progress";
import Title from "../components/Title";
import ScrollProgress from "@codereview/progress-bar";

type ID = number | string;

type Props = {
  // actions
  clearState: () => void,
  loadPosts: (filter?: string) => void,
  postsState: State,
  addPost?: (newPost: Post) => void,
  deletePost: (id: number) => void,
  updatePost: (id: ID, post: Post) => void
};
type iState = {
  update: Post,
  editMode: boolean
};
/**
 * render
 * componentDidMount
 */
class App extends Component<Props, iState> {
  state = {
    update: null,
    editMode: false
  };

  componentDidMount() {
    const { loadPosts, clearState } = this.props;

    clearState();

    loadPosts("3");
  }

  onClick = (id: ID) => {
    const { addPost } = this.props;
    if (id) {
      addPost({
        title: "Created by redux",
        body: "Some description not provided!",
        userId: "2"
      });
    }
  };

  onAdd = (title: string, description: string) => {
    const { addPost, updatePost } = this.props;
    const { editMode, update } = this.state;
    if (!editMode) {
      addPost({
        title,
        body: description,
        userId: "2"
      });
    } else {
      // update Mode
      updatePost(update.id, {
        id: update.id,
        title,
        userId: update.userId,
        body: description
      });
    }
    this.setState(() => ({
      update: null,
      editMode: false
    }));
  };

  onUpdatePost = (id: ID) => {
    const { postsState } = this.props;
    const el = postsState.data.find(el => el.id === id);
    if (el) {
      this.setState(() => ({
        update: el,
        editMode: true
      }));
    }
  };
  /**
   * render
   */
  render() {
    const { postsState, deletePost } = this.props;
    const { update, editMode } = this.state;

    return (
      <div style={{ height: "8000px" }}>
        <ScrollProgress color="orange" />
        <div className="app">
          <Title>
            {editMode ? `Update Post ${update.id}` : `Add new Post`}
          </Title>
          {update ? (
            <InputField
              onSubmit={this.onAdd}
              defaultDescription={update && update.description}
              defaultTitle={update && update.title}
            />
          ) : (
            <InputField onSubmit={this.onAdd} />
          )}
          <div>
            {postsState.loading && <Loading />}
            {!postsState.loading && postsState.data && (
              <List
                data={postsState.data}
                onChecked={id => this.onUpdatePost(id)}
                onDelete={id => {
                  deletePost(id);
                }}
                onClick={id => this.onClick(id)}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return { postsState: posts };
};
const mapDispatchToProps = (dispatch: *) => ({
  loadPosts: (filter?: string) => dispatch(load(filter)),
  clearState: () => dispatch(clear()),
  addPost: (post: Post) => dispatch(addPost(post)),
  deletePost: (id: ID) => dispatch(deletePost(id)),
  updatePost: (id: ID, post: Post) => dispatch(updatePost(id, post))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
