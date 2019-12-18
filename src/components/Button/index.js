import React, { PureComponent } from "react";
import PropTypes from "prop-types";
//import { Test } from './Button.styles';

class Button extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  componentWillMount = () => {
    console.log("Button will mount");
  };

  componentDidMount = () => {
    console.log("Button mounted");
  };

  componentWillReceiveProps = nextProps => {
    console.log("Button will receive props", nextProps);
  };

  componentWillUpdate = (nextProps, nextState) => {
    console.log("Button will update", nextProps, nextState);
  };

  componentDidUpdate = () => {
    console.log("Button did update");
  };

  componentWillUnmount = () => {
    console.log("Button will unmount");
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return <div className="ButtonWrapper">Test content</div>;
  }
}

Button.propTypes = {
  // bla: PropTypes.string,
};

Button.defaultProps = {
  // bla: 'test',
};

export default Button;
