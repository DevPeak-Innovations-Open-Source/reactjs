import React from "react";
import { menuButton, vector, frame, frame1, frame2, vector1, lockSimple, frame3 } from "../../assets";
import "./Table.scss";
interface DropdownMenuProps {
  userId: number;
  isOpen: boolean;
  toggle: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, toggle }) => {
  const dropdownItems = [
    { icon: vector, title: "View" },
    { icon: frame, title: "Download" },
    { icon: frame1, title: "Rename" },
    { icon: frame2, title: "Share Link" },
    { icon: vector1, title: "Move" },
    { icon: lockSimple, title: "Mark Private" },
    { icon: frame3, title: "Delete", className: "delete" },
  ];

  return (
    <div className="menu-wrapper">
      <img
        src={menuButton}
        alt="Menu Button"
        className="menu-icon"
        onClick={toggle}
        aria-expanded={isOpen ? "true" : "false"}
        role="button"
      />
      {isOpen && (
        <div className="dropdown-menu">
          {dropdownItems.map((item, index) => (
            <div key={index} className={`dropdown-item ${item.className || ""}`}>
              <img src={item.icon} alt={item.title} className="dropdown-icon" />
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
