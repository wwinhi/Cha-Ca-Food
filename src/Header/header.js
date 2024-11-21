import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <div className="header-bottom">
        {/* Logo */}
        <img src="/R.png" alt="Logo" className="logo" />

        {/* Navbar */}
        <nav className="navbar">
          <Link to="/">Trang chủ</Link>
          <Link to="/gioi-thieu">Giới Thiệu</Link>
          <Link to="/san-pham">Sản phẩm</Link>
          <Link to="/tin-tuc">Tin tức</Link>
          <Link to="/lien-he">Liên hệ</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
