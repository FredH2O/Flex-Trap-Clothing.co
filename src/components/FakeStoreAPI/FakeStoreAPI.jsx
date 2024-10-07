import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const FakeStore = ({ category }) => {
  const [products, setProducts] = useState([]);

  const fakeStoreAPI = async () => {
    try {
      const categoryPicked = category
        ? `products/category/${category}`
        : "products";
      const response = await fetch(
        `https://fakestoreapi.com/${categoryPicked}`
      );

      if (!response.ok) {
        throw new Error("Network response is not good...");
      }

      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.error("Error is:", error.message);
      setProducts([]); // Reset products on error
    }
  };

  useEffect(() => {
    fakeStoreAPI();
  }, [category]);

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
