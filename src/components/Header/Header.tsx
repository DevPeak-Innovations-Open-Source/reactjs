import React from "react";
import { triple } from "../../assets";
import { Search } from "lucide-react"; 
import "./Header.css";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
 
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
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
