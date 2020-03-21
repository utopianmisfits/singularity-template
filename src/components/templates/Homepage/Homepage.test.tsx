import React from "react";
import { render } from "@testing-library/react";
import { Homepage } from "./";

type HomepageMock = {
  homepage: HTMLElement;
};

const createHomepage = (): HomepageMock => {
  const utils = render(<Homepage />);
  const homepage = utils.getByText("Homepage");

  return { homepage, ...utils };
};

test("it should call callback function", () => {
  const { homepage: homePage } = createHomepage();

  expect(homePage).toHaveTextContent("Homepage");
});
