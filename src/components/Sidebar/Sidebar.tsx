import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Sidebar.css";
import { triple, logo, fileIcon, arrowIcon, filmsImage } from "../../assets";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [sections, setSections] = useState<Record<string, boolean>>({
    films: false,
    people: false,
    planets: false,
    species: false,
    starships: false,
    vehicles: false,
  });
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleMenuClick = (section: keyof typeof sections) => {
    setActiveItem(section);
    toggleSection(section);
  };
  useEffect(() => {
    console.log("Sidebar state:", sections);
  }, [sections]);

  const toggleSection = (section: keyof typeof sections) => {
    setSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <img
        src={triple}
        alt="Menu"
        className="menu-btn"
        onClick={toggleSidebar}
      />

      <div className="sidebar-header">
        <img
          src={logo}
          alt="Logo"
          className={`sidebar-logo ${isOpen ? "" : "closed"}`}
        />
      </div>

      <ul className="sidebar-menu">
        <li
          onClick={() => {
            handleMenuClick("films");
          }}
          className={`menu-item ${sections.films ? "open" : ""} ${
            activeItem === "films" ? "active" : ""
          }`}
        >
          <img
            src={fileIcon}
            alt="File Icon"
            className={`icon ${isOpen ? "" : "closed"}`}
          />
          <Link
            to="/userinformation"
            className={`title ${sections.films ? "open-title" : ""} ${
              !isOpen ? "closed" : ""
            }`}
          >
            User Information
          </Link>
          <img
            src={arrowIcon}
            alt="Arrow"
            className={`arrow ${sections.films ? "open" : ""}`}
          />
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
              <Link to="/adduser">Add a user</Link>
              <img src={arrowIcon} alt="Arrow" className="arrow" />
            </li>
          </ul>
        )}

        <li
          onClick={() => handleMenuClick("people")}
          className={`menu-item ${activeItem === "people" ? "active" : ""}`}
        >
          <img
            src={fileIcon}
            alt="File Icon"
            className={`icon ${isOpen ? "" : "closed"}`}
          />
          <Link
            to="/upload"
            className={`title ${sections.people ? "open-title" : ""} ${
              !isOpen ? "closed" : ""
            }`}
          >
            Upload
          </Link>
          <img
            src={arrowIcon}
            alt="Arrow"
            className={`arrow ${sections.people ? "open" : ""}`}
          />
        </li>

        {sections.people && (
          <ul className="submenu">
            <li className="subtitle">Person 1</li>
            <li className="subtitle">Person 2</li>
          </ul>
        )}

        <li
          onClick={() => handleMenuClick("planets")}
          className={`menu-item ${activeItem === "planets" ? "active" : ""}`}
        >
          <img
            src={fileIcon}
            alt="File Icon"
            className={`icon ${isOpen ? "" : "closed"}`}
          />
          <Link
            to="/video"
            className={`title ${sections.planets ? "open-title" : ""} ${
              !isOpen ? "closed" : ""
            }`}
          >
            Video
          </Link>
          <img
            src={arrowIcon}
            alt="Arrow"
            className={`arrow ${sections.planets ? "open" : ""}`}
          />
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
