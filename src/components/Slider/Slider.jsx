import { React, useState, useEffect } from "react";
import "./Slider.css";
import { assets } from "../../assets/assets";

const Sidebar = ({ isOpen }) => {
  const [filmsOpen, setFilmsOpen] = useState(false);
  const [peopleOpen, setPeopleOpen] = useState(false);
  const [planetsOpen, setPlanetsOpen] = useState(false);
  const [speciesOpen, setSpeciesOpen] = useState(false);
  const [starshipsOpen, setStarshipsOpen] = useState(false);
  const [vehiclesOpen, setVehiclesOpen] = useState(false);

  useEffect(() => {
    console.log("Films section open:", filmsOpen);
    console.log("People section open:", peopleOpen);
    console.log("Planets section open:", planetsOpen);
    console.log("Species section open:", speciesOpen);
    console.log("Starships section open:", starshipsOpen);
    console.log("Vehicles section open:", vehiclesOpen);
  }, [
    filmsOpen,
    peopleOpen,
    planetsOpen,
    speciesOpen,
    starshipsOpen,
    vehiclesOpen,
  ]);

  const toggleSection = (section) => {
    switch (section) {
      case "films":
        setFilmsOpen(!filmsOpen);
        break;
      case "people":
        setPeopleOpen(!peopleOpen);
        break;
      case "planets":
        setPlanetsOpen(!planetsOpen);
        break;
      case "species":
        setSpeciesOpen(!speciesOpen);
        break;
      case "starships":
        setStarshipsOpen(!starshipsOpen);
        break;
      case "vehicles":
        setVehiclesOpen(!vehiclesOpen);
        break;
      default:
        break;
    }
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        {/* <img src={assets.folderimg} alt="Logo" className={`sidebar-logo ${isOpen ? '' : 'closed'}`} /> */}
      </div>
      <ul className="sidebar-menu">
        <li
          onClick={() => toggleSection("films")}
          className={`menu-item ${filmsOpen ? "open" : ""}`}
        >
          <img
            src={assets.folderimg}
            alt="File Icon"
            className={`icon ${isOpen ? "" : "closed"}`}
          />
          <span
            className={`title ${filmsOpen ? "open-title" : ""} ${
              !isOpen ? "closed" : ""
            }`}
          >
            Films
          </span>
          <img
            src={assets.arrowicon}
            alt="Arrow"
            className={`arrow ${filmsOpen ? "open" : ""}`}
          />
        </li>

        <li
          onClick={() => toggleSection("people")}
          className={`menu-item ${peopleOpen ? "open" : ""}`}
        >
          <img
            src={assets.folderimg}
            alt="File Icon"
            className={`icon ${isOpen ? "" : "closed"}`}
          />
          <span
            className={`title ${peopleOpen ? "open-title" : ""} ${
              !isOpen ? "closed" : ""
            }`}
          >
            People
          </span>
          <img
            src={assets.arrowicon}
            alt="Arrow"
            className={`arrow ${peopleOpen ? "open" : ""}`}
          />
        </li>

        <li
          onClick={() => toggleSection("planets")}
          className={`menu-item ${planetsOpen ? "open" : ""}`}
        >
          <img
            src={assets.folderimg}
            alt="File Icon"
            className={`icon ${isOpen ? "" : "closed"}`}
          />
          <span
            className={`title ${planetsOpen ? "open-title" : ""} ${
              !isOpen ? "closed" : ""
            }`}
          >
            Planets
          </span>
          <img
            src={assets.arrowicon}
            alt="Arrow"
            className={`arrow ${planetsOpen ? "open" : ""}`}
          />
        </li>

        <li
          onClick={() => toggleSection("species")}
          className={`menu-item ${speciesOpen ? "open" : ""}`}
        >
          <img
            src={assets.folderimg}
            alt="File Icon"
            className={`icon ${isOpen ? "" : "closed"}`}
          />
          <span
            className={`title ${speciesOpen ? "open-title" : ""} ${
              !isOpen ? "closed" : ""
            }`}
          >
            Species
          </span>
          <img
            src={assets.arrowicon}
            alt="Arrow"
            className={`arrow ${speciesOpen ? "open" : ""}`}
          />
        </li>

        <li
          onClick={() => toggleSection("starships")}
          className={`menu-item ${starshipsOpen ? "open" : ""}`}
        >
          <img
            src={assets.folderimg}
            alt="File Icon"
            className={`icon ${isOpen ? "" : "closed"}`}
          />
          <span
            className={`title ${starshipsOpen ? "open-title" : ""} ${
              !isOpen ? "closed" : ""
            }`}
          >
            Starships
          </span>
          <img
            src={assets.arrowicon}
            alt="Arrow"
            className={`arrow ${starshipsOpen ? "open" : ""}`}
          />
        </li>

        <li
          onClick={() => toggleSection("vehicles")}
          className={`menu-item ${vehiclesOpen ? "open" : ""}`}
        >
          <img
            src={assets.folderimg}
            alt="File Icon"
            className={`icon ${isOpen ? "" : "closed"}`}
          />
          <span
            className={`title ${vehiclesOpen ? "open-title" : ""} ${
              !isOpen ? "closed" : ""
            }`}
          >
            Vehicles
          </span>
          <img
            src={assets.arrowicon}
            alt="Arrow"
            className={`arrow ${vehiclesOpen ? "open" : ""}`}
          />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
