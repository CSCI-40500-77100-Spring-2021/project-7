import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchBar from "./SearchBar";

test("loads and displays a search input", async () => {
  render(<SearchBar />);
  const inputElement = screen.getByPlaceholderText("Enter stock ticker here");
  expect(inputElement).toBeInTheDocument();
});

test("correct label is outputted", async () => {
  render(<SearchBar />);
  const inputElement = screen.getByLabelText("Enter Stock Ticker");
  expect(inputElement).toBeInTheDocument();
});

test("search input records the stock ticker we enter", async () => {
  render(<SearchBar />);
  const inputElement = screen.getByPlaceholderText("Enter stock ticker here");
  fireEvent.change(inputElement, { target: { value: "AAPL" } });
  expect(inputElement.value).toBe("AAPL");
});
test("submit button is rendered correctly", async () => {
  render(<SearchBar />);
  const submitButton = screen.getByLabelText("submit");
  expect(submitButton).toBeInTheDocument();
});

test("submit button runs ", async () => {
  const setTicker = jest.fn();
  render(<SearchBar setTicker={setTicker} />);
  const inputElement = screen.getByPlaceholderText("Enter stock ticker here");
  fireEvent.change(inputElement, { target: { value: "AAPL" } });

  const submitButton = screen.getByLabelText("submit");
  fireEvent.click(submitButton);
  expect(setTicker).toHaveBeenCalledTimes(1);
});
