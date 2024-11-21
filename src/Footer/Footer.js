import React from 'react';
import { FaPhoneAlt, FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>FishCake - Chả Cá Lý Sơn</h4>
          <p><FaStar /> ĐT: 0825 970 802</p>
          <p><FaStar /> Email: lyson@gmail.com</p>
          <p><FaStar /> Địa chỉ: 32 Phan Khoang, Liên Chiêu, TP. Đà Nẵng</p>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaEnvelope /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>GIỚI THIỆU</h4>
          <ul>
           
            <li><a href="#">Chính sách & Quy Định Chung</a></li>
            <li><a href="#">Chính Sách Bảo Mật</a></li>
            <li><a href="#">Liên hệ</a></li>
            <li><a href="#">Tuyển Dụng</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>CHÍNH SÁCH</h4>
          <ul>
            <li><a href="#">Giao nhận hàng</a></li>
            <li><a href="#">Hướng dẫn đặt hàng</a></li>
            <li><a href="#">Chính sách đổi trả hàng</a></li>
            <li><a href="#">Chính Sách Giải quyết khiếu nại</a></li>
            <li><a href="#">Cam kết chất lượng</a></li>
          </ul>
        </div>

        
      </div>

      <div className="footer-bottom">
        <div className="payment-methods">
          <span>VISA</span>
          <span>PayPal</span>
          <span>Stripe</span>
          <span>MasterCard</span>
          <span>Cash on Delivery</span>
        </div>
        <p>Copyright 2024 © LYSON.VN</p>
      </div>
    </footer>
  );
};

export default Footer;
