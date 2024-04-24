import React from "react";
import { Pagination } from "react-bootstrap";

type PaginationProps = {
  currentPage: number;
  onPrev?: () => void;
  onNext?: () => void;
  onFirstPage: () => void;
  onLastPage: (lastPage: number) => void;
  lastPage: number;
};

export const ListPagination = ({
  currentPage,
  onPrev,
  onNext,
  onFirstPage,
  onLastPage,
  lastPage,
}: PaginationProps) => {
  return (
    <Pagination>
      <Pagination.First onClick={onFirstPage} />
      {onPrev ? (
        <Pagination.Prev onClick={onPrev} />
      ) : (
        <Pagination.Prev disabled />
      )}
      <Pagination.Item active>{currentPage}</Pagination.Item>
      {onNext ? (
        <Pagination.Next onClick={onNext} />
      ) : (
        <Pagination.Next disabled />
      )}
      <Pagination.Last onClick={() => onLastPage(lastPage)} />
    </Pagination>
  );
};
