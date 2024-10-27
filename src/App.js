import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import ThankYou from "./pages/ThankYou/ThankYou";
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";
import CookieBanner from "./components/CookieBanner/CookieBanner";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Contacts from "./pages/Contacts/Contacts";
import Sale from "./pages/Sale/Sale";
import { DarkModeProvider } from "./components/DarkMode/DarkModeContext";

function App() {
  const [cart, setCart] = useState([]);
  function handleAddToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <DarkModeProvider>
      <Router>
        <CookieBanner />
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
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </DarkModeProvider>
  );
}

export default App;
