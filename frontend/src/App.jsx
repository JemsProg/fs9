import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Hero from "./pages/Hero.jsx";
import Header from "./components/Header.jsx";
import Products from "./pages/Products.jsx";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
