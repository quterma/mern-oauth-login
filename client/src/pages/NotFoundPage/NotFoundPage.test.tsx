import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

describe("NotFoundPage", () => {
  test("renders 404 message and link", () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );
    expect(screen.getByText(/404 - Page Not Found/i)).toBeInTheDocument();
    expect(
      screen.getByText(/The page you are looking for does not exist./i)
    ).toBeInTheDocument();
    const link = screen.getByText(/Go back to Home/i);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
