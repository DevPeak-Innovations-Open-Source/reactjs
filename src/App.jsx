import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import { CardComponent } from "./components";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <h1>Product List</h1>
      {isLoading ? (
        <p>Loading products...</p>
      ) : (
        products.map((product) => (
          <CardComponent
            key={product.id}
            name={product.title}
            price={product.price}
          />
        ))
      )}
    </div>
  );
}

export default App;
