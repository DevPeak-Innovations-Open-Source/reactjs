import React, { useState } from "react";
import { Sidebar, Table, tripleDot  } from "./components";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/welcome"; 
import ProtectedRoute from "./components/ProtectedRoute";
import UploadPage from "./components/UploadPage";
import Video from "./components/Video";


const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
          <input
            type="text"
            placeholder="Search"
            className="search-box"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </header>
        
        <Routes>
          <Route path="/" element={<Table searchQuery={searchQuery} />} />
          
        <Route
            path="userinformation"
            element={<Table searchQuery={searchQuery} />}
          />
          <Route path="welcome" element={<Welcome />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/video" element={<Video />} />
          <Route path="protectedroute" element={<ProtectedRoute isAuthenticated><div>This is protected route</div></ProtectedRoute> } />
        </Routes>
        
      </div>
    </div>
  );
};

export default App;