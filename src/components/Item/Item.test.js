/**
 * @jest-environment jsdom
 */
/* eslint-disable react/display-name */
import React from "react";
import { shallow } from "enzyme";
/**
 *import  Component
 */
import Item from "./index";
/**
 * props
 */
const props = {};
/**
 * Tests: Item Component
 */
describe("Item Component", () => {
  /**
   * Snapshot:[default]
   */
  test("should match default snapshot", () => {
    expect.assertions(1);

    const wrapper = shallow(<Item {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
