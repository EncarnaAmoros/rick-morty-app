import React from "react";

import { Spinner } from "src/components/Spinner/Spinner";
import { CharacterCard } from "src/components/CharacterCard/CharacterCard";
import { ListPagination } from "src/components/Pagination/ListPagination";
import { Character } from "src/app/types/CharacterDetail";
import { Search } from "src/components/Search/Search";
import { GeneralInfo } from "src/components/GeneralInfo/GeneralInfo";
import { useCharactersList } from "./CharactersList.hook";

import styles from "./CharactersList.module.scss";

export const CharactersList = () => {
  const {
    charactersList,
    fetching,
    currentPage,
    searchText,
    setSearchText,
    goToPrevPage,
    goToNextPage,
    goToFirstPage,
    goToLastPage,
    goToCharacterDetail,
  } = useCharactersList();

  const noListData = "There is no characters data";

  const prev = charactersList?.info?.prev ? goToPrevPage : undefined;

  const next = charactersList?.info?.next ? goToNextPage : undefined;

  const moreThanOnePage =
    charactersList?.info?.prev || charactersList?.info?.next;

  return (
    <div className={styles.charactersList}>
      <Search
        text={searchText}
        onChangeSearch={setSearchText}
        results={charactersList?.info?.count ? charactersList.info.count : 0}
      />
      {charactersList?.results ? (
        <div className={styles["charactersList__results"]}>
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
            <div className={styles["charactersList__pagination"]}>
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
        <>{fetching ? <Spinner /> : <GeneralInfo info={noListData} />}</>
      )}
    </div>
  );
};
