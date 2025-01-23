import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { Component } = props;

  const navigate = useNavigate();

  let login = localStorage.getItem("loginauth");

  console.log(login);
  useEffect(() => {
    
  if (!login) {
      navigate("/login");
    }
    
  },[login]);


  if(login){
    return (
 
      <div>
         <Component/>
       </div>);


  }
  else{
    navigate("/login");
  }
 
};

export default Protected;
