import { render, screen } from "@testing-library/react";
import App from "./App";

test("make shapshot of the component", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});

test("renders application header", () => {
  render(<App />);
  const linkElement = screen.getByRole("heading", { name: /invest guinea/i });
  expect(linkElement).toBeInTheDocument();
});
