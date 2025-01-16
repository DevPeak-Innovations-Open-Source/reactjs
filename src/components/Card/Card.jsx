import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = () => {
  const [products, setproducts] = useState([]);

  const fetchdata = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products");
      return data.json();
    } catch(error) {
      console.log(error);
    }
  };

useEffect(() => {
  fetchdata().then((res)=>{
    setproducts(res.products);
  }).catch((err) => {
  console.log(err);
  });

  },[]);

  return (
    <div className="menu-card">
      <h3>User Data</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default Card;
