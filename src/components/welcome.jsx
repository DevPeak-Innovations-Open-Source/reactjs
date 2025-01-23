import React from "react";
import "./Welcome.css";
import { logoo } from ".";
const Welcome = () => {
  return (
    <div className="container">
      <img src={logoo} alt="Centered" className="center-image" />
    </div>
  );
};

export default Welcome;
