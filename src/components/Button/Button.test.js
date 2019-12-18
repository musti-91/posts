import React from "react";
import { shallow } from "enzyme";

import Button from "./index";

describe("Button Component", () => {
  test("should match snapshot", () => {
    expect.assertions(1);

    const wrapper = shallow(<Button />);

    expect(wrapper).toMatchSnapshot();
  });
});
