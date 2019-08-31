import React, { createContext } from 'react';
import { useLocalStore } from 'mobx-react-lite';

import { API, API_KEY } from '../helpers/constants'

function createSearchStore() {
  const searchStore = {
    selectedTag: null,
    searchQuery: '',
    changeSelectedTag(value) {
      this.selectedTag = value;
    },
    changeSearchQuery(value) {
      this.searchQuery = value;
    },
    get searchUrl() {
      if (this.selectedTag) {
        return `${API}discover/movie?with_genres=${this.selectedTag}&page=1&api_key=${API_KEY}`;
      } else if (this.searchQuery) {
        return `${API}search/movie?api_key=${API_KEY}&language=pt-BR&query=${this.searchQuery}`
      } else return null;
    }
  }

  return searchStore;
}

export const searchStoreContext = createContext(null);

export const SearchStoreProvider = ({ children }) => {
  const searchStore = useLocalStore(createSearchStore);
  return (
    <searchStoreContext.Provider value={searchStore}>
      {children}
    </searchStoreContext.Provider>
  );
}
