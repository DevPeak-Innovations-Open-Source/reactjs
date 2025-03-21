import React from "react";
import { Search } from "lucide-react";
import "./Header.css";
import { useSearch } from "../../context/SearchContext"; 

const Header: React.FC = () => {
  const { searchQuery, setSearchQuery } = useSearch(); 

  return (
    <header className="header">
      <div className="search-container">
        <Search className="search-icon" size={18} />
        <input
          type="text"
          placeholder="Search"
          className="search-box"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Header;
