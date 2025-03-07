import React, { useState } from "react";
import { triple } from "../src/assets"; // Unified imports
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import Sidebar from "./components/Sidebar/Sidebar";
import Table from "./components/Table/Table";

import UploadPage from "./components/UploadPage/UploadPage";
import Video from "./components/Video/Video";

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="app">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className={`main-content ${isSidebarOpen ? "shifted" : ""}`}>
        <header className="header">
          <img
            src={triple}
            alt="Menu"
            className="menu-btn"
            onClick={toggleSidebar}
          />
          <input
            type="text"
            placeholder="Search"
            className="search-box"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </header>

        <Routes>
          <Route path="/table" element={<Table searchQuery={searchQuery} />} />

          <Route
            path="/userinformation"
            element={<Table searchQuery={searchQuery} />}
          />

          <Route path="/welcome" element={<Welcome />} />

          <Route path="/upload" element={<UploadPage />} />

          <Route path="/video" element={<Video />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
