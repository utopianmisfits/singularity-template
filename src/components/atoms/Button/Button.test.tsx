import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button, ButtonProps } from "./";

type ButtonMock = {
  button: HTMLElement;
  onClickMock: jest.Mock;
};

const createButton = (
  attrs: ButtonProps = {},
  children = "Hello World",
): ButtonMock => {
  const onClickMock = jest.fn();
  const attributes = {
    onClick: onClickMock,
    disabled: false,
    ...attrs,
  };

  const utils = render(<Button {...attributes}>{children}</Button>);
  const button = utils.getByText(children);

  return { button, onClickMock, ...utils };
};

test("it should call callback function", () => {
  const { button, onClickMock } = createButton();
  fireEvent.click(button);

  expect(onClickMock).toHaveBeenCalled();
});

test("it should no call callback function if disabled", () => {
  const { button, onClickMock } = createButton({ disabled: true });
  fireEvent.click(button);

  expect(onClickMock).not.toHaveBeenCalled();
});
