import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Sidebar.css";
import { triple, logo, fileIcon, arrowIcon } from "../../assets";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface MenuItem {
  key: number;
  label: string;
  link?: string;
  subLinks?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    key: 0,
    label: "User Information",
    link: "/userinformation",
    subLinks: [
      { key: 1, label: "Welcome", link: "/welcome" },
      { key: 2, label: "Add a user", link: "/adduser" },
    ],
  },
  {
    key: 3,
    label: "Upload",
    link: "/upload",
    subLinks: [
      { key: 4, label: "Person 1", link: "/person1" },
      { key: 5, label: "Person 2", link: "/person2" },
    ],
  },
  {
    key: 6,
    label: "Video",
    link: "/video",
    subLinks: [
      { key: 7, label: "Planet 1", link: "/planet1" },
      { key: 8, label: "Planet 2", link: "/planet2" },
    ],
  },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleMenuClick = (key: number) => {
    setActiveItem(activeItem === key ? null : key);
  };

  const renderSidebar = (item: MenuItem, isSubArr = false) => {
    const isOpenSub = activeItem === item.key;

    return (
      <li
        key={item.key}
        className={`menu-item ${activeItem === item.key ? "active" : ""} ${
          isSubArr ? "submenu-item" : ""
        }`}
      >
        <Link
          to={item.link || "#"}
          className={`menu-item-area ${
            activeItem === item.key ? "active" : ""
          }`}
          onClick={() => handleMenuClick(item.key)}
        >
          <img src={fileIcon} className="menu-icon" alt="File Icon" />

          {isOpen && <span className="menu-text">{item.label}</span>}

          {item.subLinks && (
            <img
              src={arrowIcon}
              className={`arrow-icon ${isOpenSub ? "rotate" : ""}`}
              alt="Arrow Icon"
            />
          )}
        </Link>

        {isOpenSub && item.subLinks && (
          <ul className="submenu">
            {item.subLinks.map((subItem) => renderSidebar(subItem, true))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <img
          src={triple}
          alt="Menu"
          className="menu-btn"
          onClick={toggleSidebar}
        />
        <img
          src={logo}
          alt="Logo"
          className={`sidebar-logo ${isOpen ? "" : "closed"}`}
        />
      </div>

      <ul className="sidebar-menu">
        {menuItems.map((item, index) => renderSidebar(item))}
      </ul>

      <Outlet />
    </div>
  );
};

export default Sidebar;
