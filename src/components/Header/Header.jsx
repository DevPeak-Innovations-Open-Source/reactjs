import React from "react";
import { useState } from "react";

import "./Header.css";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="navbar">
      <img src="./star.png" alt="img not found" height={"100px"} />
      <img
        src="./slide.png"
        className="slideimg"
        height={"45px"}
        width={"40px"}
      />
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
