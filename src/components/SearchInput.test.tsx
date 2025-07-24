import { test, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchInput from "./SearchInput";

describe("SearchInput ", () => {
  test("text input and button in search input", () => {
    render(
      <SearchInput username="" setUsername={() => {}} onSearch={() => {}} />
    );

    expect(
      screen.getByPlaceholderText(/enter github username/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  test("setUsername is called on input change", async () => {
    const user = userEvent.setup();
    const setUsernameMock = vi.fn();

    render(
      <SearchInput
        username=""
        setUsername={setUsernameMock}
        onSearch={() => {}}
      />
    );

    const input = screen.getByPlaceholderText(/Enter github username/i);
    await user.type(input, "learnerdilip");

    expect(setUsernameMock).toHaveBeenCalledTimes(12);
    expect(setUsernameMock).toHaveBeenLastCalledWith("p");
  });

  test("onSearch is called on form submit button click", async () => {
    const user = userEvent.setup();
    const onSearchMock = vi.fn();

    render(
      <SearchInput
        username="learnerdilip"
        setUsername={() => {}}
        onSearch={onSearchMock}
      />
    );

    const button = screen.getByRole("button", { name: /search/i });
    await user.click(button);

    expect(onSearchMock).toHaveBeenCalledWith("learnerdilip");
  });

  test("does not call onSearch when username is empty", async () => {
    const user = userEvent.setup();
    const onSearchMock = vi.fn();

    render(
      <SearchInput username="" setUsername={() => {}} onSearch={onSearchMock} />
    );

    const button = screen.getByRole("button", { name: /search/i });
    await user.click(button);

    expect(onSearchMock).not.toHaveBeenCalled();
  });
});
