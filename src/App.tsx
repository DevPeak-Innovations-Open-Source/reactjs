import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import Sidebar from "./components/Sidebar/Sidebar";
import Table from "./components/Table/Table";
import UploadPage from "./components/UploadPage/UploadPage";
import Video from "./components/Video/Video";
import AddUser from "./components/AddUser/AddUser";
import Header from "./components/Header/Header";
import { SearchProvider } from "./context/SearchContext";

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <SearchProvider> 
      <div className="app">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <div className={`main-content ${isSidebarOpen ? "shifted" : ""}`}>
          <Header />
          
          <Routes>
            <Route path="/table" element={<Table />} />
            <Route path="/userinformation" element={<Table />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/video" element={<Video />} />
            <Route path="/adduser" element={<AddUser />} />
          </Routes>
        </div>
      </div>
    </SearchProvider>
  );
};

export default App;
