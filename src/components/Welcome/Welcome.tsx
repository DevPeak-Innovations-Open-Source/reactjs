import React from "react";
import "./Welcome.css";
import { withLogo } from "../../assets";

const Welcome: React.FC = () => {
  return (
    <div className="container">
      <img src={withLogo} alt="Centered" className="center-image" />
    </div>
  );
};

export default Welcome;
