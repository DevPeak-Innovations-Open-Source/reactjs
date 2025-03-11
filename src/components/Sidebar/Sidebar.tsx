import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { triple, logo, fileIcon, arrowIcon, filmsImage } from "../../assets";
import "./Sidebar.css";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [toggleindex, setToggleIndex] = useState<any>(null);

  const sidebarArr: any[] = [
    {
      imgSrc: fileIcon,
      link: "/userinformation",
      linkText: "User Information",
      subArr: [
        {
          imgSrc: fileIcon,
          link: "/userinformation",
          linkText: "User Information",
        },
        {
          imgSrc: fileIcon,
          link: "/userinformation",
          linkText: "User Information",
        },
      ],
    },
    {
      imgSrc: fileIcon,
      link: "/userinformation",
      linkText: "User Information",
      subArr: [],
    },
    {
      imgSrc: fileIcon,
      link: "/userinformation",
      linkText: "User Information",
      subArr: [],
    },
    {
      imgSrc: fileIcon,
      link: "/userinformation",
      linkText: "User Information",
      subArr: [],
    },
    {
      imgSrc: fileIcon,
      link: "/userinformation",
      linkText: "User Information",
      subArr: [],
    },
    {
      imgSrc: fileIcon,
      link: "/userinformation",
      linkText: "User Information",
      subArr: [],
    },
    {
      imgSrc: fileIcon,
      link: "/userinformation",
      linkText: "User Information",
      subArr: [],
    },
  ];

  const handleMenuClick = (indexToggled: number) => {
    if(toggleindex === indexToggled) {
      setToggleIndex(null);
    } else {
      setToggleIndex(indexToggled);
    }
  };


  const renderSideBar = (item: any, index: number) => {
    const isOpenSub: boolean = index === toggleindex;

    return (
      <>
        <li key={index}
          onClick={() => {
            handleMenuClick(index);
          }} className={`menu-item`}>
          <div className="menu-item-area">
            <img src={item.imgSrc} className="menu-item-icon" alt="File Icon" />
            {isOpen && <Link to={item.link}>{item.linkText}</Link>}
          </div>
          <img src={arrowIcon} alt="Arrow" />
        </li>
        {isOpenSub &&
          <ul className="submenu-sidebar-menu">
            {item?.subArr?.map(renderSideBar)}
          </ul>}
      </>
    )
  }

  /*
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
            className={`title ${sections.people ? "open-title" : ""} ${!isOpen ? "closed" : ""
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
            className={`title ${sections.planets ? "open-title" : ""} ${!isOpen ? "closed" : ""
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
   */

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        {isOpen && <img
          src={logo}
          alt="Logo"
          className={`sidebar-logo`}
        />}
        <img
          src={triple}
          alt="Menu"
          className="menu-btn"
          onClick={toggleSidebar}
        />
      </div>

      {/** TODO @desc Use map to render your sidebar and it's subarr */}
      <ul className="sidebar-menu">
        {sidebarArr.map(renderSideBar)}
      </ul>
      <Outlet />
    </div>
  );
};

export default Sidebar;
