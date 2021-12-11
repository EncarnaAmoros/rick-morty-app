import React from "react";
import { Form } from "react-bootstrap";

import styles from "./Search.module.scss";

export type SearchProps = {
  text: string;
  results: number;
  onChangeSearch: (text: string) => void;
};

export const Search = ({ text, results, onChangeSearch }: SearchProps) => {
  const searchText = "Search";
  const resultsTest = `${results} results have been found`;

  return (
    <div className={styles.search}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            className={styles.search__input}
            placeholder={searchText}
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeSearch(e.currentTarget.value.trimStart())
            }
          />
          <Form.Text className="text-muted">{resultsTest}</Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
};
