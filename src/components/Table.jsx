import React, { useEffect, useState } from "react";
import "./Table.css";

const Table = ({ searchQuery }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
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

  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table-heading">User Information</div>
      </div>
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
    </div>
  );
};

export default Table;
