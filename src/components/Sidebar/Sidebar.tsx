import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Sidebar.css";
import { triple, logo, fileIcon, arrowIcon, filmsImage } from "../../assets";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const menuItems = [
  { 
    key: "films", 
    label: "User Information", 
    link: "/userinformation", 
    subLinks: [
      { label: "Welcome", link: "/welcome" },
      { label: "Add a user", link: "/adduser" },
    ] 
  },
  { 
    key: "people", 
    label: "Upload", 
    link: "/upload", 
    subLinks: [
      { label: "Person 1" },
      { label: "Person 2" },
    ] 
  },
  { 
    key: "planets", 
    label: "Video", 
    link: "/video", 
    subLinks: [
      { label: "Planet 1" },
      { label: "Planet 2" },
    ] 
  },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [sections, setSections] = useState<Record<string, boolean>>({
    films: false,
    people: false,
    planets: false,
  });
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
  }, [sections]);

  const handleMenuClick = (section: keyof typeof sections) => {
    setActiveItem(section);
    setSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <img src={triple} alt="Menu" className="menu-btn" onClick={toggleSidebar} />

      <div className="sidebar-header">
        <img src={logo} alt="Logo" className={`sidebar-logo ${isOpen ? "" : "closed"}`} />
      </div>

      <ul className="sidebar-menu">
        {menuItems.map(({ key, label, link, subLinks }) => (
          <>
            <li
              key={key}
              onClick={() => handleMenuClick(key)}
              className={`menu-item ${sections[key] ? "open" : ""} ${activeItem === key ? "active" : ""}`}
            >
              <img src={fileIcon} alt="File Icon" className={`icon ${isOpen ? "" : "closed"}`} />
              <Link to={link} className={`title ${sections[key] ? "open-title" : ""} ${!isOpen ? "closed" : ""}`}>{label}</Link>
              <img src={arrowIcon} alt="Arrow" className={`arrow ${sections[key] ? "open" : ""}`} />
            </li>
            {sections[key] && (
              <ul className="submenu">
                {subLinks.map(({ label, link }, idx:number) => (
                  <li className="subtitle" key={idx}>
                    <img src={filmsImage} alt="Movie Logo" className="movie-logo" />
                    {link ? <Link to={link}>{label}</Link> : label}
                    <img src={arrowIcon} alt="Arrow" className="arrow" />
                  </li>
                ))}
              </ul>
            )}
          </>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Sidebar;
