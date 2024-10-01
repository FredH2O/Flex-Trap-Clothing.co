import ProductCard from "./ProductCard";

const fakeStoreAPI = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=10");

    if (!response.ok) {
      throw new Error("Network response is not good...");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error is:", error.message);
    return [];
  }
};

fakeStoreAPI();
