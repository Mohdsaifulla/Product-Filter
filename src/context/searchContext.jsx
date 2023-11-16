import { createContext, useState, useContext } from "react";
const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (searchQuery) => {
    setSearch(searchQuery);
  };

return (
  <SearchContext.Provider value={{ search, handleSearch }}>
    {children}
  </SearchContext.Provider>
);
}
