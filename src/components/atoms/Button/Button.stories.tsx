import React from "react";
import { Button } from "@atoms/Button";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Components/Atoms/Button",
  component: Button,
};

export const main = () => <Button>Hello World</Button>;

export const withText = () => (
  <Button disabled={boolean("disabled", false)} onClick={action("onClick")}>
    {text("children", "With text")}
  </Button>
);

export const disabledState = () => (
  <Button disabled={boolean("disabled", true)} onClick={action("onClick")}>
    {text("children", "Disabled state")}
  </Button>
);

/**
 * From comment
 */
export const withEmoji = () => (
  <Button disabled={boolean("disabled", false)} onClick={action("onClick")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
