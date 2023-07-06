/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByTestId } = render(<App />);

  expect(getByTestId("heading")).toBeDefined();
  expect(getByTestId("heading")).toHaveTextContent("App");
});
