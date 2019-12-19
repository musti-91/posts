import React, { Fragment } from "react";

import { action } from "@storybook/addon-actions";
import { Button as ButtonField } from "@storybook/react/demo";
import { addDecorator } from "@storybook/react";

export default {
  title: "Button"
};

export const Button = () => (
  <ButtonField onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </ButtonField>
);

Button.story = {
  name: "with emoji"
};
