import { React, useState, useEffect } from "react";
import "./Slider.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar ">
      <div className="sidebar-header"></div>

      <ul className="sidebar-menu">
        <li>
          <img src={assets.folderimg} alt="File Icon" className="icon" />

          <span>Films</span>
          <img src={assets.arrowicon} alt="Arrow" className="arrow" />
        </li>

        <li>
          <Link to="/login">
            <img src={assets.folderimg} alt="File Icon" className="icon" />

            <span>Login</span>
            <img src={assets.arrowicon} alt="Arrow" className="arrow" />
          </Link>
        </li>

       
          <Link to="/welcome">
            <img src={assets.folderimg} alt="File Icon" className="icon" />

            <span>Welcome page</span>
            <img src={assets.arrowicon} alt="Arrow" className="arrow" />
          </Link>
       
      </ul>
    </div>
  );
};

export default Sidebar;
