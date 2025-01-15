import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = () => {
  const [users, setusers] = useState();

  const fetchdata = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      return data.json();
    } catch(error) {
      console.log(error);
    }
  };
useEffect(() => {
  fetchdata().then((res)=>{
    setusers(res);
  }).catch((err) => {
  console.log(err);
  })

  })
  return (
    <div className="menu-card">
      <h3>User Data</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((users) => (
            <tr key={users.id}>
              <td>{users.name}</td>
              <td>{users.address.suite}, {users.address.street}, {users.address.city}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default Card;
