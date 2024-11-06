import { createContext, useState } from "react";

const INITIAL_STATE = {
  searchTerm: null,
  country: null,
};

export const SearchContext = createContext(INITIAL_STATE);

export const SearchContextProvider = ({ children }) => {
  const [searchFilters, setSearchFilters] = useState(INITIAL_STATE);

  return (
    <SearchContext.Provider value={{ searchFilters, setSearchFilters }}>
      {children}
    </SearchContext.Provider>
  );
};
