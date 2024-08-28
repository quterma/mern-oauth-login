import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App Routing", () => {
  test("renders LoginPage at /login", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    expect(screen.getByText(/Login with Google/i)).toBeInTheDocument();
    expect(screen.getByText(/Login with GitHub/i)).toBeInTheDocument();
  });

  test("renders NotFoundPage for unknown routes", () => {
    render(
      <MemoryRouter initialEntries={["/unknown-route"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/404 - Page Not Found/i)).toBeInTheDocument();
    expect(
      screen.getByText(/The page you are looking for does not exist./i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Go back to Home/i)).toBeInTheDocument();
  });
});
