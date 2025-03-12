import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Sidebar.css";
import { triple, logo, fileIcon, arrowIcon, filmsImage } from "../../assets";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface MenuItem {
  key: string;
  label: string;
  link?: string;
  subLinks?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    key: "films",
    label: "User Information",
    link: "/userinformation",
    subLinks: [
      { key: "welcome", label: "Welcome", link: "/welcome" },
      { key: "adduser", label: "Add a user", link: "/adduser" },
    ],
  },
  {
    key: "people",
    label: "Upload",
    link: "/upload",
    subLinks: [
      { key: "person1", label: "Person 1" },
      { key: "person2", label: "Person 2" },
    ],
  },
  {
    key: "planets",
    label: "Video",
    link: "/video",
    subLinks: [
      { key: "planet1", label: "Planet 1" },
      { key: "planet2", label: "Planet 2" },
    ],
  },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [sections, setSections] = useState<Record<string, boolean>>({
    films: false,
    people: false,
    planets: false,
  });
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleMenuClick = (section: string) => {
    setActiveItem(section);
    setSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map(({ key, label, link, subLinks }) => (
      <React.Fragment key={key}>
        <li
          className={`menu-item ${sections[key] ? "open" : ""} ${activeItem === key ? "active" : ""}`}
          onClick={() => handleMenuClick(key)}
        >
          <img src={fileIcon} alt="File Icon" className={`icon ${isOpen ? "" : "closed"}`} />
          <Link to={link || "#"} className={`title ${sections[key] ? "open-title" : ""} ${!isOpen ? "closed" : ""}`}>
            {label}
          </Link>
          {subLinks && <img src={arrowIcon} alt="Arrow" className={`arrow ${sections[key] ? "open" : ""}`} />}
        </li>
        {sections[key] && subLinks && (
          <ul className="submenu">
            {subLinks.map(({ key, label, link }) => (
              <li className="subtitle" key={key}>
                <img src={filmsImage} alt="Movie Logo" className="movie-logo" />
                {link ? <Link to={link}>{label}</Link> : label}
                <img src={arrowIcon} alt="Arrow" className="arrow" />
              </li>
            ))}
          </ul>
        )}
      </React.Fragment>
    ));
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <img src={triple} alt="Menu" className="menu-btn" onClick={toggleSidebar} />

      <div className="sidebar-header">
        <img src={logo} alt="Logo" className={`sidebar-logo ${isOpen ? "" : "closed"}`} />
      </div>

      <ul className="sidebar-menu">{renderMenuItems(menuItems)}</ul>

      <Outlet />
    </div>
  );
};

export default Sidebar;
