import React from "react";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import { ListPagination } from "../../components/Pagination/ListPagination";
import { Character } from "../types/CharacterDetail";
import { useCharacterList } from "./CharactersList.hook";

import styles from "./CharactersList.module.scss";

export const CharactersList = () => {
  const {
    charactersList,
    currentPage,
    goToPrevPage,
    goToNextPage,
    goToFirstPage,
    goToLastPage,
  } = useCharacterList();

  const noListData = "There is no data about the characters of the serie";

  const prev = charactersList?.info?.prev
    ? async () => await goToPrevPage()
    : undefined;

  const next = charactersList?.info?.next
    ? async () => await goToNextPage()
    : undefined;

  const moreThanOnePage =
    charactersList?.info.prev || charactersList?.info.next;

  return (
    <>
      {charactersList ? (
        <div>
          <section>
            {charactersList.results.map((character: Character) => {
              return (
                <CharacterCard
                  key={character.id}
                  name={character.name}
                  image={character.image}
                  specie={character.species}
                />
              );
            })}
          </section>
          {moreThanOnePage && (
            <div className={styles.pagination}>
              <ListPagination
                onPrev={prev}
                onNext={next}
                onFirstPage={goToFirstPage}
                onLastPage={goToLastPage}
                curr={currentPage}
                lastPage={charactersList.info.pages}
              />
            </div>
          )}
        </div>
      ) : (
        <h3>{noListData}</h3>
      )}
    </>
  );
};
