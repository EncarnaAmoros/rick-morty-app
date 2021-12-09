import React from "react";
import { useNavigate } from "react-router-dom";

import { Spinner } from "src/components/Spinner/Spinner";
import { CharacterCard } from "src/components/CharacterCard/CharacterCard";
import { ListPagination } from "src/components/Pagination/ListPagination";
import { Character } from "src/app/types/CharacterDetail";
import { useCharacterList } from "./CharactersList.hook";

import styles from "./CharactersList.module.scss";

export const CharactersList = () => {
  const {
    charactersList,
    fetching,
    currentPage,
    goToPrevPage,
    goToNextPage,
    goToFirstPage,
    goToLastPage,
  } = useCharacterList();
  const navigate = useNavigate();

  const noListData = "There is no data about the characters of the serie";

  const prev = charactersList?.info?.prev
    ? async () => await goToPrevPage()
    : undefined;

  const next = charactersList?.info?.next
    ? async () => await goToNextPage()
    : undefined;

  const moreThanOnePage =
    charactersList?.info.prev || charactersList?.info.next;

  const goToCharacterDetail = (id: number) => {
    navigate(`/character/${id}`);
  };

  return (
    <>
      {charactersList ? (
        <div className={styles.charactersList}>
          <section>
            {charactersList.results.map((character: Character) => {
              return (
                <CharacterCard
                  key={character.id}
                  name={character.name}
                  image={character.image}
                  specie={character.species}
                  onClick={() => goToCharacterDetail(character.id)}
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
        <>{fetching ? <Spinner /> : <h3>{noListData}</h3>}</>
      )}
    </>
  );
};
