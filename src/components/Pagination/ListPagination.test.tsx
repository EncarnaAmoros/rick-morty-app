import React from "react";
import { vi, describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import { ListPagination } from "./ListPagination";

describe("ListPagination", () => {
  const setup = (
    currentPage: number,
    lastPage: number,
    onFirstPage: () => void,
    onLastPage: () => void,
    onNext?: () => void,
    onPrev?: () => void
  ) =>
    render(
      <ListPagination
        currentPage={currentPage}
        lastPage={lastPage}
        onFirstPage={onFirstPage}
        onLastPage={onLastPage}
        onNext={onNext}
        onPrev={onPrev}
      />
    );

  it("should render the pagination", async () => {
    setup(
      1,
      27,
      () => {},
      () => {}
    );

    expect(screen.getByText(1)).toBeVisible();
  });

  it("should render the pagination starting in the 3 page", async () => {
    setup(
      3,
      4,
      () => {},
      () => {}
    );

    expect(screen.getByText(3)).toBeVisible();
  });

  it("should render all the links enabled", async () => {
    setup(
      3,
      4,
      () => {},
      () => {},
      () => {},
      () => {}
    );

    expect(
      screen.getByRole("button", {
        name: /previous/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /next/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /first/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /last/i,
      })
    ).toBeInTheDocument();
  });

  it("should render the pagination prev icon disabled in the first page", async () => {
    setup(
      3,
      4,
      () => {},
      () => {},
      () => {}
    );

    expect(
      screen.queryByRole("button", {
        name: /previous/i,
      })
    ).not.toBeInTheDocument();
  });

  it("should render the pagination next icon disabled in the first page", async () => {
    setup(
      3,
      4,
      () => {},
      () => {},
      undefined,
      () => {}
    );

    expect(
      screen.queryByRole("button", {
        name: /next/i,
      })
    ).not.toBeInTheDocument();
  });

  it("should not call none event when no click in no icon", async () => {
    const onNext = vi.fn();
    const onFirst = vi.fn();
    const onPrev = vi.fn();
    const onLast = vi.fn();

    setup(3, 4, onFirst, onLast, onNext, onPrev);

    expect(onNext).not.toHaveBeenCalled();
    expect(onFirst).not.toHaveBeenCalled();
    expect(onLast).not.toHaveBeenCalled();
    expect(onPrev).not.toHaveBeenCalled();
  });

  it("should call next event when click on next icon", async () => {
    const onNext = vi.fn();
    const onFirst = vi.fn();
    const onPrev = vi.fn();
    const onLast = vi.fn();

    setup(3, 4, onFirst, onLast, onNext, onPrev);

    fireEvent.click(screen.getByText(/next/i));

    expect(onNext).toHaveBeenCalledTimes(1);
    expect(onFirst).not.toHaveBeenCalled();
    expect(onLast).not.toHaveBeenCalled();
    expect(onPrev).not.toHaveBeenCalled();
  });

  it("should call prev event when click on prev icon", async () => {
    const onNext = vi.fn();
    const onFirst = vi.fn();
    const onPrev = vi.fn();
    const onLast = vi.fn();

    setup(3, 4, onFirst, onLast, onNext, onPrev);

    fireEvent.click(screen.getByText(/previous/i));

    expect(onPrev).toHaveBeenCalledTimes(1);
    expect(onNext).not.toHaveBeenCalled();
    expect(onFirst).not.toHaveBeenCalled();
    expect(onLast).not.toHaveBeenCalled();
  });

  it("should call first event when click on first icon", async () => {
    const onNext = vi.fn();
    const onFirst = vi.fn();
    const onPrev = vi.fn();
    const onLast = vi.fn();

    setup(3, 4, onFirst, onLast, onNext, onPrev);

    fireEvent.click(screen.getByText(/first/i));

    expect(onFirst).toHaveBeenCalledTimes(1);
    expect(onNext).not.toHaveBeenCalled();
    expect(onLast).not.toHaveBeenCalled();
    expect(onPrev).not.toHaveBeenCalled();
  });

  it("should call last event when click on last icon", async () => {
    const onNext = vi.fn();
    const onFirst = vi.fn();
    const onPrev = vi.fn();
    const onLast = vi.fn();

    setup(3, 4, onFirst, onLast, onNext, onPrev);

    fireEvent.click(screen.getByText(/last/i));

    expect(onLast).toHaveBeenCalledTimes(1);
    expect(onNext).not.toHaveBeenCalled();
    expect(onFirst).not.toHaveBeenCalled();
    expect(onPrev).not.toHaveBeenCalled();
  });
});
