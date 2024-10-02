import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const FakeStore = () => {
  const [products, setProducts] = useState([]);

  const fakeStoreAPI = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=6");

      if (!response.ok) {
        throw new Error("Network response is not good...");
      }

      const data = await response.json();
      console.log(data);
      setProducts(data);
      console.log(products);
    } catch (error) {
      console.error("Error is:", error.message);
      setProducts([]);
    }
  };

  useEffect(() => {
    fakeStoreAPI();
  }, []);

  return (
    <>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))
      ) : (
        <p>No products to display...</p>
      )}
    </>
  );
};

export default FakeStore;
