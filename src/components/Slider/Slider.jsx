import { React, useState, useEffect } from "react";
import "./Slider.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar ">
      <div className="sidebar-header"></div>

      <ul className="sidebar-menu">
      
        <li >
          <img src={assets.folderimg} alt="File Icon" className="icon" />

          <span>Films</span>
          <img src={assets.arrowicon} alt="Arrow" className="arrow" />
        </li>
        

        <li className="welcome-list">
          <img src={assets.productimg} alt="File Icon" className="icon" />

          <span>Welcome</span>
          <img src={assets.arrowicon} alt="Arrow" className="arrow" />
        </li>

        <li>
          <img src={assets.productimg} alt="File Icon" className="icon" />

          <span>Movie Name</span>
          <img src={assets.arrowicon} alt="Arrow" className="arrow" />
        </li>



        {/* <li>
          <Link to="/login">
            <img src={assets.folderimg} alt="File Icon" className="icon" />

            <span>Login</span>
            <img src={assets.arrowicon} alt="Arrow" className="arrow" />
          </Link>
        </li> */}

        {/* <Link to="/welcome">
          <img src={assets.folderimg} alt="File Icon" className="icon" />

          <span>Welcome</span>
          <img src={assets.arrowicon} alt="Arrow" className="arrow" />
        </Link> */}
       
       <Link to="./uploadpage" className="custom-link"> <li className="upload-list">
          <img src={assets.folderimg} alt="File Icon" className="icon" />

          <span>Upload</span>
          <img src={assets.arrowicon} alt="Arrow" className="arrow" />
        </li>
        </Link>

        <Link to="./videopage" className="custom-link"> <li className="upload-list">
          <img src={assets.folderimg} alt="File Icon" className="icon" />

          <span>Video</span>
          <img src={assets.arrowicon} alt="Arrow" className="arrow" />
        </li>
        </Link>
          


        <li>
          <img src={assets.folderimg} alt="File Icon" className="icon" />

          <span>Planets</span>
          <img src={assets.arrowicon} alt="Arrow" className="arrow" />
        </li>

        <li>
          <img src={assets.folderimg} alt="File Icon" className="icon" />

          <span>Species</span>
          <img src={assets.arrowicon} alt="Arrow" className="arrow" />
        </li>

        <li>
          <img src={assets.folderimg} alt="File Icon" className="icon" />

          <span>Starships</span>
          <img src={assets.arrowicon} alt="Arrow" className="arrow" />
        </li>

        <li>
          <img src={assets.folderimg} alt="File Icon" className="icon" />

          <span>Vehicles</span>
          <img src={assets.arrowicon} alt="Arrow" className="arrow" />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
