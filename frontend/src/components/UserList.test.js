import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

// Mock axios before importing UserList
jest.mock("axios", () => ({
  get: jest.fn(),
}));

import axios from "axios";
import UserList from "./UserList";

test("renders users from API", async () => {
  axios.get.mockResolvedValue({
    data: [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ],
  });

  render(<UserList />);

  await waitFor(() => screen.getByText("Alice"));
  await waitFor(() => screen.getByText("Bob"));

  expect(screen.getByText("Alice")).toBeInTheDocument();
  expect(screen.getByText("Bob")).toBeInTheDocument();
});
