import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import ThankYou from "./pages/ThankYou/ThankYou";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts/Contacts";
import Sale from "./pages/Sale/Sale";

function App() {
  const [cart, setCart] = useState([]);
  function handleAddToCart(product) {
    setCart([...cart, product]);
  }

  console.log(cart);
  return (
    <Router>
      <Navbar cart={cart} setCart={setCart} />
      <main id="root">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Section onAddToCart={handleAddToCart} />
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route
            path="/sale"
            element={<Sale onAddToCart={handleAddToCart} />}
          />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
