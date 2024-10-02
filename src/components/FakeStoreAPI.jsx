import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const FakeStore = () => {
  const [products, setProducts] = useState([]);

  const fakeStoreAPI = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=1");

      if (!response.ok) {
        throw new Error("Network response is not good...");
      }

      const data = await response.json();
      //console.log(data);
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
      {products.map((id) => (
        <ProductCard
          key={id}
          image={id.image}
          title={id.title}
          price={id.price}
        />
      ))}
    </>
  );
};

export default FakeStore;
