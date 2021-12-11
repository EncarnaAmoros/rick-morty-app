import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { ListPagination } from "./ListPagination";

describe("ListPagination", () => {
  const setup = (
    curr: number,
    lastPage: number,
    onFirstPage: () => void,
    onLastPage: () => void,
    onNext?: () => void,
    onPrev?: () => void
  ) =>
    render(
      <ListPagination
        curr={curr}
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

    expect(screen.getByText(/previous/i).parentElement).not.toHaveAttribute(
      "disabled"
    );
    expect(screen.getByText(/next/i).parentElement).not.toHaveAttribute(
      "disabled"
    );
    expect(screen.getByText(/first/i).parentElement).not.toHaveAttribute(
      "disabled"
    );
    expect(screen.getByText(/last/i).parentElement).not.toHaveAttribute(
      "disabled"
    );
  });

  it("should render the pagination prev icon disabled in the first page", async () => {
    setup(
      3,
      4,
      () => {},
      () => {},
      () => {}
    );

    expect(screen.getByText(/previous/i).parentElement).toHaveAttribute(
      "disabled"
    );
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

    expect(screen.getByText(/next/i).parentElement).toHaveAttribute("disabled");
  });

  it("should not call none event when no click in no icon", async () => {
    const onNext = jest.fn();
    const onFirst = jest.fn();
    const onPrev = jest.fn();
    const onLast = jest.fn();

    setup(3, 4, onFirst, onLast, onNext, onPrev);

    expect(onNext).not.toHaveBeenCalled();
    expect(onFirst).not.toHaveBeenCalled();
    expect(onLast).not.toHaveBeenCalled();
    expect(onPrev).not.toHaveBeenCalled();
  });

  it("should call next event when click on next icon", async () => {
    const onNext = jest.fn();
    const onFirst = jest.fn();
    const onPrev = jest.fn();
    const onLast = jest.fn();

    setup(3, 4, onFirst, onLast, onNext, onPrev);

    fireEvent.click(screen.getByText(/next/i));

    expect(onNext).toHaveBeenCalledTimes(1);
    expect(onFirst).not.toHaveBeenCalled();
    expect(onLast).not.toHaveBeenCalled();
    expect(onPrev).not.toHaveBeenCalled();
  });

  it("should call prev event when click on prev icon", async () => {
    const onNext = jest.fn();
    const onFirst = jest.fn();
    const onPrev = jest.fn();
    const onLast = jest.fn();

    setup(3, 4, onFirst, onLast, onNext, onPrev);

    fireEvent.click(screen.getByText(/previous/i));

    expect(onPrev).toHaveBeenCalledTimes(1);
    expect(onNext).not.toHaveBeenCalled();
    expect(onFirst).not.toHaveBeenCalled();
    expect(onLast).not.toHaveBeenCalled();
  });

  it("should call first event when click on first icon", async () => {
    const onNext = jest.fn();
    const onFirst = jest.fn();
    const onPrev = jest.fn();
    const onLast = jest.fn();

    setup(3, 4, onFirst, onLast, onNext, onPrev);

    fireEvent.click(screen.getByText(/first/i));

    expect(onFirst).toHaveBeenCalledTimes(1);
    expect(onNext).not.toHaveBeenCalled();
    expect(onLast).not.toHaveBeenCalled();
    expect(onPrev).not.toHaveBeenCalled();
  });

  it("should call last event when click on last icon", async () => {
    const onNext = jest.fn();
    const onFirst = jest.fn();
    const onPrev = jest.fn();
    const onLast = jest.fn();

    setup(3, 4, onFirst, onLast, onNext, onPrev);

    fireEvent.click(screen.getByText(/last/i));

    expect(onLast).toHaveBeenCalledTimes(1);
    expect(onNext).not.toHaveBeenCalled();
    expect(onFirst).not.toHaveBeenCalled();
    expect(onPrev).not.toHaveBeenCalled();
  });
});
