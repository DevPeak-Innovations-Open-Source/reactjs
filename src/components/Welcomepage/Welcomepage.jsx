import React, { useState } from "react";
import "./Welcomepage.css";
import { assets } from "../../assets/assets";

const Welcomepage = () => {

  // const [showwelocomepage, setshowwelocomepage] = useState(false);

  return (
    <>

    {/* ternary opertaor use for if else condition  */}

      {/* {showwelocomepage ? (
        <div className="welcome-container">
          <img
            src={assets.welcomeimg}
            alt="welcomeimg"
            className="welcomeimg"
          />
          <h4>Welcome to Star Wars Dashboard</h4>
          <p className="content">
            Star Wars is an American epic space opera multimedia franchise
            created by George Lucas, which began with the eponymous 1977 film
            and quickly became a worldwide pop culture phenomenon.
          </p>
        </div>
      ) : (
        ""
      )} */}


          <div className="welcome-container">
      <div className="welcome-card">
          <img
            src={assets.welcomeimg}
            alt="welcomeimg"
            className="welcomeimg"
          />
          <h1>Welcome to Our page Simran Arora !</h1>
          <p className="content">
            Star Wars is an American epic space opera multimedia franchise
            created by George Lucas, which began with the eponymous 1977 film
            and quickly became a worldwide pop culture phenomenon.
          </p>
        </div>
        </div>



    {/*  (&&) and operator use for only if condition (if true then show output otherwise nothing) */}

      {/* {showwelocomepage && (
        <div className="welcome-container">
          <img
            src={assets.welcomeimg}
            alt="welcomeimg"
            className="welcomeimg"
          />
          <h4>Welcome to Star Wars Dashboard</h4>
          <p className="content">
            Star Wars is an American epic space opera multimedia franchise
            created by George Lucas, which began with the eponymous 1977 film
            and quickly became a worldwide pop culture phenomenon.
          </p>
        </div>
      )} */}



      
    </>
  );
};


export default Welcomepage;
