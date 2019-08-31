import React, { createContext } from 'react';
import { useLocalStore } from 'mobx-react-lite';

function createSearchStore() {
  const searchStore = {
    selectedTag: null,
    changeSelectedTag(value) {
      this.selectedTag = value;
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
