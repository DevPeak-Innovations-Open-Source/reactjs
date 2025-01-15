import React from "react";

import './Header.css';

const Header = () => {
  return (
    <div className="navbar" >
    <img src="./star.png" alt="img not found" height={"100px"}/>
    <img src="./slide.png" className="slideimg" height={"45px"} width={"40px"}/>
    
    {/* <input type="text" placeholder="Search" ></input> */}
      
    </div>
  );
};

export default Header;
