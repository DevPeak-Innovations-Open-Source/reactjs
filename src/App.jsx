import React, { useState } from "react";
import Slider from "./components/Slider/Slider";
import Card from "./components/Card/Card";
import "./App.css";
import { assets } from "../src/assets/assets";
import Productcard from "./components/Gridcard/Gridcard";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`main-content ${isSidebarOpen ? "shifted" : ""}`}>
      <div className="navbar">
        <div className="navbar-logo-container">
          <img src={assets.star} alt="img not found" className="navbar-logo" />
          <img
            src={assets.slidelogo}
            className="slideimg"
            onClick={toggleSidebar}
          />
        </div>
        <div className="search-container">
          <img src={assets.search} className="search-img" />
          <input
            placeholder="Search"
            className="search-box"
            name="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

<div className="slide-card-container">
<Slider isOpen={isSidebarOpen} />
<Card searchQuery={searchQuery} />

</div>
     
    </div>
  );
};

export default App;
