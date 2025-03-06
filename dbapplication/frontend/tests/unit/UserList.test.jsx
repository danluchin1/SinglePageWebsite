import { test, expect } from "vitest"; // ✅ Import expect
import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import "@testing-library/jest-dom";

test("renders user list", () => {
  const users = [{ id: 1, name: "John", email: "john@example.com" }];
  render(<UserList users={users} onDelete={() => {}} />);
  expect(screen.getByText("John")).toBeInTheDocument();
});
