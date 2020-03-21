import "@storybook/addon-console";
import { addDecorator, addParameters } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(withA11y);

addParameters({
  backgrounds: [
    { name: "default", value: "#fff", default: true },
    { name: "twitter", value: "#00aced", default: false },
    { name: "facebook", value: "#3b5998" },
  ],
});
