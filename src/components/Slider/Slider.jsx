import React from "react";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="slider">
      <div className="films">Films</div>
      <div className="Movie-Name">Movie Name</div>
      <div className="cat1">
        <img src="./FolderSimple.png" height={"24px"} width={"20px"} />
        People
      </div>
      <div className="cat2">
        <img src="./FolderSimple.png" height={"24px"} width={"20px"} />
        Planets
      </div>
      <div className="cat3">
        <img src="./FolderSimple.png" height={"24px"} width={"20px"} />
        Species
      </div>
      <div className="cat4">
        <img src="./FolderSimple.png" height={"24px"} width={"20px"} />
        Starships
      </div>
      <div className="cat5">
        <img src="./FolderSimple.png" height={"24px"} width={"20px"} />
        Vechicles
      </div>
    </div>
  );
};

export default Slider;
