import React from "react";
import "./FeaturedProducts.css";

const products = [
  {
    id: 1,
    name: "Chả Cá Thượng Hạng",
    price: "150,000 VND",
    image: "cha_ca1.jpg",
  },
  {
    id: 2,
    name: "Chả Cá Lý Sơn",
    price: "200,000 VND",
    image: "cha_ca2.png",
  },
  {
    id: 3,
    name: "Chả Cá Chiên",
    price: "180,000 VND",
    image: "cha_ca3.jpg",
  },
  {
    id: 4,
    name: "Chả Cá Hấp",
    price: "170,000 VND",
    image: "cha_ca4.png",
  },
  {
    id: 5,
    name: "Chả Cá Chiên",
    price: "160,000 VND",
    image: "cha_ca5.png",
  },
  {
    id: 6,
    name: "Chả Cá Kẹp Bánh Tráng Mè",
    price: "190,000 VND",
    image: "cha_ca6.png",
  },
];

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <h2>Sản Phẩm Nổi Bật</h2>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button  onClick={() => alert(`Chi tiết sản phẩm: ${product.name}`)}>
              Xem Chi Tiết
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
