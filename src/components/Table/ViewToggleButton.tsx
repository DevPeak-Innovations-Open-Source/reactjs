import React from "react";
import { listIcon1, listIcon2 } from "../../assets";
import "./Table.scss";
interface ViewToggleButtonProps {
  view: "list" | "grid";
  setView: (view: "list" | "grid") => void;
}

const ViewToggleButton: React.FC<ViewToggleButtonProps> = ({ view, setView }) => {
  return (
    <button className="toggle-button" onClick={() => setView(view === "list" ? "grid" : "list")}>
      <img src={view === "list" ? listIcon2 : listIcon1} alt="Toggle Icon" className="toggle-icon" />
      <span className="list-text">{view === "list" ? "List" : "Grid"}</span>
      <img src={view === "list" ? listIcon1 : listIcon2} alt="Secondary Icon" className="toggle-icon secondary-icon" />
    </button>
  );
};

export default ViewToggleButton;
