import React from "react";
import { useState } from "react";

import "./Header.css";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="navbar">
      <div className="navbar-logo-container">
        <img src="./star.png" alt="img not found" className="navbar-logo" />
        <img
          src="./slide.png"
          className="slideimg"
        />
      </div>
      <div className="search-container">
        <img src="./search.png" className="search-img" />
        <input
          placeholder="Search"
          className="search-box"
          name="Search"
        />
      </div>
    </div>
  );
};

export default Header;
