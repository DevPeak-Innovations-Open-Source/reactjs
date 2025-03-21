import React, { createContext, useState, useContext, ReactNode } from "react";


interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}


const SearchContext = createContext<SearchContextType | undefined>(undefined);


export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};


export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
