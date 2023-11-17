import { createContext, useState, useContext } from "react";
const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("");
  const [rangeSearch, setRange] = useState("");

  const handleSearch = (searchQuery) => {
    setSearch(searchQuery);
  };

  const handleCategory = (categorySearch) => {
    setCategorySearch(categorySearch);
  };

  const handleRange = (rangeSearch) => {
    setRange(rangeSearch);
  };
  return (
    <SearchContext.Provider
      value={{ search,categorySearch,rangeSearch, handleSearch, handleCategory, handleRange }}
    >
      {children}
    </SearchContext.Provider>
  );
};
