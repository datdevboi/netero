import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
import { Button } from "../components/Button/Button";

describe("Button", () => {
  const myMockOnClick = jest.fn();
  const { container, getByText } = render(
    <Button onClick={myMockOnClick}>Login</Button>
  );

  test("it renders", () => {
    expect(container).toMatchSnapshot();
  });

  test("test onClick", () => {
    fireEvent(
      getByText("Login"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );

    expect(myMockOnClick).toHaveBeenCalledTimes(1);
  });
});
