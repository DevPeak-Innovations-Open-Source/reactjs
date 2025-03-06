import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Sidebar.css";
import { logo, fileIcon, arrowIcon, filmsImage } from "../../assets";


interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen,toggleSidebar }) => {
  const [sections, setSections] = useState<Record<string, boolean>>({
    films: false,
    people: false,
    planets: false,
    species: false,
    starships: false,
    vehicles: false,
  });

  useEffect(() => {
    console.log("Sidebar state:", sections);
  }, [sections]);

  const toggleSection = (section: keyof typeof sections) => {
    setSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
     
      <div className="sidebar-header">
        <img
          src={logo}
          alt="Logo"
          className={`sidebar-logo ${isOpen ? "" : "closed"}`}
        />
      </div>

      <ul className="sidebar-menu">
        {/* User Information */}
        <li
          onClick={() => toggleSection("films")}
          className={`menu-item ${sections.films ? "open" : ""}`}
        >
          <img src={fileIcon} alt="File Icon" className={`icon ${isOpen ? "" : "closed"}`} />
          <Link to="/userinformation" className={`title ${sections.films ? "open-title" : ""} ${!isOpen ? "closed" : ""}`}>
            User Information
          </Link>
          <img src={arrowIcon} alt="Arrow" className={`arrow ${sections.films ? "open" : ""}`} />
        </li>

        {sections.films && (
          <ul className="submenu">
            <li className="subtitle">
              <img src={filmsImage} alt="Movie Logo" className="movie-logo" />
              <Link to="/welcome">Welcome</Link>
              <img src={arrowIcon} alt="Arrow" className="arrow" />
            </li>
            <li className="subtitle">
              <img src={filmsImage} alt="Movie Logo" className="movie-logo" />
              Movie 2
              <img src={arrowIcon} alt="Arrow" className="arrow" />
            </li>
          </ul>
        )}

        {/* Upload Section */}
        <li
          onClick={() => toggleSection("people")}
          className={`menu-item ${sections.people ? "open" : ""}`}
        >
          <img src={fileIcon} alt="File Icon" className={`icon ${isOpen ? "" : "closed"}`} />
          <Link to="/upload" className={`title ${sections.people ? "open-title" : ""} ${!isOpen ? "closed" : ""}`}>
            Upload
          </Link>
          <img src={arrowIcon} alt="Arrow" className={`arrow ${sections.people ? "open" : ""}`} />
        </li>

        {sections.people && (
          <ul className="submenu">
            <li className="subtitle">Person 1</li>
            <li className="subtitle">Person 2</li>
          </ul>
        )}

        {/* Video Section */}
        <li
          onClick={() => toggleSection("planets")}
          className={`menu-item ${sections.planets ? "open" : ""}`}
        >
          <img src={fileIcon} alt="File Icon" className={`icon ${isOpen ? "" : "closed"}`} />
          <Link to="/video" className={`title ${sections.planets ? "open-title" : ""} ${!isOpen ? "closed" : ""}`}>
            Video
          </Link>
          <img src={arrowIcon} alt="Arrow" className={`arrow ${sections.planets ? "open" : ""}`} />
        </li>

        {sections.planets && (
          <ul className="submenu">
            <li className="subtitle">Planet 1</li>
            <li className="subtitle">Planet 2</li>
          </ul>
        )}
      </ul>
      <Outlet />
    </div>
  );
};

export default Sidebar;
