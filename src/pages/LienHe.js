import React from 'react';
import './LienHe.css';

const LienHe = () => {
  return (
    <div className="contact-section">
      <h2>THÔNG TIN LIÊN HỆ</h2>
      
      <div className="contact-container">
        {/* Thông tin liên hệ và bản đồ bên trái */}
        <div className="left-column">
          <p className="company-name">FishCake - Chả Cá Lý Sơn</p>
          <p><strong>Địa chỉ:</strong> 32 Phan Khoang, Liên Chiểu, Đà Nẵng</p>
          <p><strong>Hotline:</strong>    0825.970.802</p>
          <p><strong>Email:</strong> <a href="mailto:danangcitytravel@gmail.com">lyson@gmail.com</a></p>
          <p><strong>Website:</strong> <a href="https://tourhoian.vn">tourhoian.vn</a></p>
          
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.6811188396827!2d108.23282811528355!3d16.067822988877762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142183d1a8b218b%3A0x1329a5ad2ff89d9b!2zMDYgUC4gUGjhuqFtIFRow6p1LCBBbiBI4bqjaSBOYWMsIFTDom4gVGjDoG5oIE7hu5lpLCDEkMOgIE5hbmc!5e0!3m2!1svi!2s!4v1698462538395!5m2!1svi!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Biểu mẫu liên hệ bên phải */}
        <div className="right-column">
          <h3>Gửi yêu cầu liên hệ</h3>
          <p>
            Để đóng góp ý kiến về chất lượng dịch vụ, cũng như có những yêu cầu, thắc mắc cần được giải đáp, xin vui lòng điền vào Form sau đây . Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
          </p>
          
          <form className="contact-form">
            <label htmlFor="name">Họ tên (bắt buộc):</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email (bắt buộc):</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="subject">Vấn đề:</label>
            <select id="subject" name="subject">
              <option value="feedback">Phản hồi về dịch vụ</option>
              <option value="suggestion">Góp ý dịch vụ</option>
              <option value="question">Đặt câu hỏi</option>
              <option value="quote">Yêu cầu báo giá</option>
            </select>

            <label htmlFor="message">Tin nhắn:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit" className="submit-button">Gửi</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LienHe;
