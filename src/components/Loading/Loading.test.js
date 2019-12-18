/**
 * @jest-environment jsdom
 */
/* eslint-disable react/display-name */
import React from "react";
import { shallow } from "enzyme";
/**
 *import  Component
 */
import Loading from "./index";
/**
 * props
 */
const props = {};
/**
 * Tests: Loading Component
 */
describe("Loading Component", () => {
  /**
   * Snapshot:[default]
   */
  test("should match default snapshot", () => {
    expect.assertions(1);

    const wrapper = shallow(<Loading {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
