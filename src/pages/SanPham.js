import React from "react";
import "./FeaturedProducts.css";

const products = [
  {
    id: 1,
    name: "Chả Cá Thượng Hạng",
    price: "200,000 VND",
    image: "cha_ca1.jpg",
    link: "/product/1",
  },
  {
    id: 2,
    name: "Chả Cá Lý Sơn",
    price: "200,000 VND",
    image: "cha_ca2.png",
    link: "/product/2",
  },
  {
    id: 3,
    name: "Chả Cá Chiên",
    price: "180,000 VND",
    image: "cha_ca3.jpg",
    link: "/product/3",
  },
  {
    id: 4,
    name: "Chả Cá Hấp",
    price: "170,000 VND",
    image: "cha_ca4.png",
    link: "/product/4",
  },
  {
    id: 5,
    name: "Chả Cá Chiên",
    price: "160,000 VND",
    image: "cha_ca5.png",
    link: "/product/5",
  },
  {
    id: 6,
    name: "Chả Cá Kẹp Bánh Tráng Mè",
    price: "190,000 VND",
    image: "cha_ca6.png",
    link: "/product/6",
  },
];

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <h2>Sản Phẩm Nổi Bật</h2>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            {/* Link đến trang chi tiết sản phẩm */}
            <a href={product.link}>
              <img src={product.image} alt={product.name} />
            </a>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            {/* Link vào nút */}
            <a href={product.link}>
              <button>Xem Chi Tiết</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
