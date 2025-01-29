import React from 'react';
import './Videopage.css';
import { assets } from "../../assets/assets";

const Videopage = () => {
  return (
    <div>
      <video width="800" controls>
        <source src={assets.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Videopage;
