import {  useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ProtectedRoute = ({ isAuthenticated=false, children }) => {
    const navigate=useNavigate();
    useEffect(()=>{
        if(!isAuthenticated){
            return navigate("/welcome");
        }
    },[isAuthenticated])
  if (isAuthenticated) {
    return children;
  } else {
    return navigate("/welcome");
  }
  
};
export default ProtectedRoute;
