import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Testing", () => {
  test("Test", () => {
    render(<App />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
  });
});
