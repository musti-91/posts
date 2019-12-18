/**
 * @jest-environment jsdom
 */
/* eslint-disable react/display-name */
import React from "react";
import { shallow } from "enzyme";
import MockDate from "mockdate";
/**
 *import  Component
 */
import List from "./index";
/**
 * props
 */
const props = {
  data: [
    {
      title: "something",
      id: 1,
      completed: true
    }
  ],
  onClick: jest.fn(),
  onChecked: jest.fn(),
  onDelete: jest.fn()
};
/**
 * Tests: List Component
 */
describe("List Component", () => {
  beforeAll(() => {
    MockDate.set("2019-01-01T00:00:00Z");
  });
  /**
   * Snapshot:[default]
   */
  test("should match default snapshot", () => {
    expect.assertions(1);

    const wrapper = shallow(<List {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
