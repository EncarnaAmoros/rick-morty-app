export const API_URL = "https://rickandmortyapi.com/api/character";

export const getCharactersListUrl = (searchText?: string, page?: number) => {
  if (searchText && page !== undefined)
    return `${API_URL}/?name=${searchText}&page=${page}`;
  else if (searchText && page === undefined)
    return `${API_URL}/?name=${searchText}`;
  else if (!searchText && page !== undefined) return `${API_URL}/?page=${page}`;
  else return API_URL;
};
