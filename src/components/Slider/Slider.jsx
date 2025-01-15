import React from "react";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="slider">
      <div className="films">Films</div>
      <div className="Movie-Name">Movie Name</div>
      <div className="cat1">
      <img src="./FolderSimple.png" height={"24px"} width={"20px"}/>
      People
      </div>
      <div className="cat2">
      
      Planets</div>
      <div className="cat3">Species</div>
      <div className="cat4">Starships</div>
      <div className="cat5">Vechicles</div>
    </div>
  );
};

export default Slider;
