import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Data from "./Data";

test("Does not render a table if a ticker is not passed in", async () => {
  render(<Data />);
  await waitFor(() => {
    const table = screen.queryByLabelText("table");
    expect(table).not.toBeInTheDocument();
  });
});

test("Renders a table with the company name if a ticker is passed in", async () => {
  render(<Data ticker="AAPL" />);
  await waitFor(() => {
    const td = screen.getByLabelText("table");
    expect(td).toBeInTheDocument();
  });
});

test("Table displays the correct company name", async () => {
  render(<Data ticker="AAPL" />);
  await waitFor(() => {
    const td = screen.getByLabelText("name");
    expect(td).toHaveTextContent("Apple Inc.");
  });
});

test("Table displays the correct industry", async () => {
  render(<Data ticker="AAPL" />);
  await waitFor(() => {
    const td = screen.getByLabelText("industry");
    expect(td).toHaveTextContent("Computer Hardware");
  });
});
test("Table displays the correct website url", async () => {
  render(<Data ticker="AAPL" />);
  await waitFor(() => {
    const td = screen.getByLabelText("url");
    expect(td).toHaveTextContent("http://www.apple.com");
  });
});
