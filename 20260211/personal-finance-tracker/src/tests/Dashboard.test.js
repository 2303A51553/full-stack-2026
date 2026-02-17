import { render, screen } from "@testing-library/react";
import Dashboard from "../components/Dashboard";

test("shows balance", () => {
  render(<Dashboard income={1000} expenses={400} />);
  expect(screen.getByText("Balance: ₹600")).toBeInTheDocument();
});
