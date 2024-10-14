import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(product) {
    setCart([...cart, product]);
  }

  console.log(cart);
  return (
    <>
      <Navbar cart={cart} setCart={setCart} />
      <Header />
      <Section onAddToCart={handleAddToCart} />
      <Footer />
    </>
  );
}

export default App;
