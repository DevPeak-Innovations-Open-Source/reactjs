import React, { useEffect, useState } from "react";
import "./Card.css";
import Gridcard from "../Gridcard/Gridcard";

const Card = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [switchtoggle, setswitchtoggle] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  

  // console.log(false?"1":0);

  useEffect(() => {
    fetchData()
      .then((res) => {
        setProducts(res.products || []);
      })
      .catch((err) => {
        console.error("Error setting products:", err);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="menu-card">
      <h3>Product Data</h3>
      <button onClick={() => setswitchtoggle(!switchtoggle)}>
        {switchtoggle ? "list" : "grid"}
      </button>
      {switchtoggle ? (
        <table className="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>

            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.price}</td>
              </tr>
            ))} 

          </tbody>
        </table>
      ) : (
        <div className="card-area">
        {
          filteredProducts.map((product) => {
          return <Gridcard  product={product} key={product.id} />;
        })
        }
        </div>
      )}
    </div>
  );
};

export default Card;
