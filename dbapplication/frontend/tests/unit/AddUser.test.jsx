import { test, expect } from "vitest"; // ✅ Explicitly import expect
import { render, fireEvent, screen } from "@testing-library/react";
import AddUser from "../../src/components/AddUser";
import { vi } from "vitest";
import "@testing-library/jest-dom";

test("renders AddUser component", () => {
  render(<AddUser onUserAdded={() => {}} />);
  expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
});

test("submits form when both fields are filled", () => {
  const mockOnUserAdded = vi.fn();
  render(<AddUser onUserAdded={mockOnUserAdded} />);

  fireEvent.change(screen.getByPlaceholderText("Name"), { target: { value: "John Doe" } });
  fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "john@example.com" } });
  fireEvent.click(screen.getByText("Add User"));

  expect(mockOnUserAdded).toHaveBeenCalled();
});
