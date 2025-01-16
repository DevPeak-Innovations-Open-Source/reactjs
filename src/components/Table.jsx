import React, { useEffect, useState } from "react";
import "./Table.css";
import { listIcon1, listIcon2, filmsImage, button } from ".";

const Table = ({ searchQuery }) => {
  const [users, setUsers] = useState([]);
  const [view, setView] = useState("grid"); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        const transformedData = data.map((user) => ({
          name: user.name,
          address: `${user.address.street}, ${user.address.suite}, ${user.address.city}`,
        }));
        setUsers(transformedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleView = () => {
    setView((prevView) => (prevView === "grid" ? "list" : "grid"));
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table-heading">User Information</div>

        <div className="toggle-button" onClick={toggleView}>
          {view === "list" ? (
            <>
              <img src={listIcon2} alt="List Icon" className="toggle-icon" />
              <span className="list-text">List</span>
              <img
                src={listIcon1}
                alt="Grid Icon"
                className="toggle-icon secondary-icon"
              />
            </>
          ) : (
            <>
              <img src={listIcon1} alt="Grid Icon" className="toggle-icon" />
              <span className="list-text">Grid</span>
              <img
                src={listIcon2}
                alt="List Icon"
                className="toggle-icon secondary-icon"
              />
            </>
          )}
        </div>
      </div>

      {view === "grid" && (
  <div className="grid-container">
   
    {Array(6)
      .fill(0)
      .map((_, index) => (
        <div key={index} className="grid-item">
          
          <div className="white-box"></div>

         
          <div className="movie-info">
            <div className="movie-name-container">
              <img
                src={filmsImage}
                alt="Movie Thumbnail"
                className="movie-image"
              />
              <span className="movie-name">Movie Name </span>
            </div>
            <img src={button} alt="Menu Button" className="menu-icon" />
          </div>
        </div>
      ))}
  </div>
)}



      
      {view === "list" && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.address}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
