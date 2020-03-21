import React from "react";
import { noop } from "lodash/fp";

export type Props = {
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
};

const Button = ({ onClick, disabled, children }: Props): JSX.Element => (
  <button disabled={disabled} onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = {
  onClick: noop,
  disabled: false,
};

export default Button;
