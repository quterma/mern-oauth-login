import { render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";

test("renders LoginPage with buttons", () => {
  render(<LoginPage />);
  expect(screen.getByText(/Login with Google/i)).toBeInTheDocument();
});
