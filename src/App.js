import { FaPhoneAlt, FaEnvelope, FaUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/header";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./Footer/Footer";
import Home from "./pages/Home";

import GioiThieu from "./pages/GioiThieu";
import SanPham from "./pages/SanPham";
import TinTuc from "./pages/TinTuc";
import LienHe from "./pages/LienHe";


function App() {
  return (
    <div className="App">
    
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gioi-thieu" element={<GioiThieu />} />
        <Route path="san-pham" element={<SanPham />} />
        <Route path="/tin-tuc" element={<TinTuc />} />
        <Route path="/lien-he" element={<LienHe />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      {/* <Blog/> */}
      <Footer/>
    </Router>

    </div>
  );
}

export default App;
