import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const FakeStore = ({ category, onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
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
        setProducts(data);
      } catch (error) {
        console.error("Error is:", error.message);
        setProducts([]);
      }
    };
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
            addProduct={() =>
              onAddToCart({
                id: product.id,
                title: product.title,
                price: product.price,
              })
            }
          />
        ))
      ) : (
        <p>No products to display...</p>
      )}
    </>
  );
};

export default FakeStore;
