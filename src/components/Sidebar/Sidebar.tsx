import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Sidebar.scss";
import { triple, logo, fileIcon, arrowIcon } from "../../assets";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface MenuItem {
  
  label: string;
  link?: string;
  subLinks?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    
    label: "User Information",
    link: "/userinformation",
    subLinks: [
      {  label: "Welcome", link: "/welcome" },
      {    label: "Add a user", link: "/adduser" },
    ],
  },
  {
  
    label: "Upload",
    link: "/upload",
    subLinks: [
      {  label: "Person 1" },
      {  label: "Person 2" },
    ],
  },
  {
    
    label: "Video",
    link: "/video",
    subLinks: [
      {  label: "Planet 1" },
      {  label: "Planet 2" },
    ],
  },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleMenuClick = (key: number) => {
    setActiveItem(activeItem === key ? null : key);
  };

 
  const renderSidebar = (items: MenuItem[], isSubArr = false) => {
    return (
      <ul className={isSubArr ? "submenu" : "sidebar-menu"}>
        {items.map((item,index) => {
          const key=index+1;
          const isOpenSub = activeItem === key;

          return (
            <li key={key} className={`menu-item ${isOpenSub ? "active" : ""} ${isSubArr ? "submenu-item" : ""}`}>
              <Link
                to={item.link || "#"}
                className={`menu-item-area ${isOpenSub ? "active" : ""}`}
                onClick={() => handleMenuClick(key)}
              >
                <img src={fileIcon} className="menu-icon" alt="File Icon" />
                {isOpen && <span className="menu-text">{item.label}</span>}
                {item.subLinks && (
                  <img src={arrowIcon} className={`arrow-icon ${isOpenSub ? "rotate" : ""}`} alt="Arrow Icon" />
                )}
              </Link>

              {isOpenSub && item.subLinks && renderSidebar(item.subLinks, true)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <img src={triple} alt="Menu" className="menu-btn" onClick={toggleSidebar} />
        <img src={logo} alt="Logo" className={`sidebar-logo ${isOpen ? "" : "closed"}`} />
      </div>
      {renderSidebar(menuItems)}

      <Outlet />
    </div>
  );
};

export default Sidebar;
