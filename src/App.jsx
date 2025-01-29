import React, { Component, useState } from "react";
import Slider from "./components/Slider/Slider";
import Card from "./components/Card/Card";
import "./App.css";
import { assets } from "../src/assets/assets";
import Productcard from "./components/Gridcard/Gridcard";
import Welcomepage from "./components/Welcomepage/Welcomepage";
// import { createBrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gridcard from "./components/Gridcard/Gridcard";
import Login from "./components/Login/Login";
import Protected from "./components/Protected";
import Uploadpage from "./components/Uploadpage/Uploadpage";
import Videopage from "./components/Videopage/Videopage";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  // const router = createBrowserRouter(
  //   [
  //     {
  //       path:"/welcomepage",
  //       element: <Welcomepage/>

  //     },
  //   ]
  // );

  return (
    <Router>
      <div className={`main-content ${isSidebarOpen ? "shifted" : ""}`}>
        <div className="navbar">
          <div className="navbar-logo-container">
            <img
              src={assets.star}
              alt="img not found"
              className="navbar-logo"
            />
            <img
              src={assets.slidelogo}
              className="slideimg"
              // onClick={toggleSidebar}
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

          <Routes>
            <Route path="/" element={<Card searchQuery={searchQuery} />} />
            <Route
              path="/welcome"
              element={<Protected Component={Welcomepage} />}
            />
            <Route path="/login" element=<Login /> />
            <Route path="/uploadpage" element=<Uploadpage /> />
            <Route path="/videopage" element=<Videopage /> />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
