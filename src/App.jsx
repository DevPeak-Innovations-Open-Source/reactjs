import React, { useState } from "react";
import { Sidebar, Table, tripleDot } from "./components";
import "./styles/App.css";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="app">
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? "shifted" : ""}`}>
        <header className="header">
          <img
            src={tripleDot}
            alt="Menu"
            className="menu-btn"
            onClick={toggleSidebar}
          />

          <input type="text" placeholder="Search" className="search-box" />
        </header>
        <Table />
      </div>
    </div>
  );
};

export default App;
