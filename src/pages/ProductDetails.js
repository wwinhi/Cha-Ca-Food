import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
const products = [
  {
    id: 1,
    name: "Chả Cá Thượng Hạng ",
    price: "200.000 VND",
    weight: "1kg",
    description: "Chả cá Lý Sơn chất lượng cao, thơm ngon và bổ dưỡng.",
    details: {
      type: "Chiên/Hấp/Sống",
      status: "Còn hàng, luôn mới",
      ingredients: "Thịt cá đỏ, trứng vịt, tiêu, tỏi, dầu ăn, nước mắm",
      origin: "Lý Sơn - Quảng Ngãi",
      packaging: "Bịch hút chân không",
      weight: "1kg",
      productionDate: "In trên nhãn",
      preservation: "Ngăn đông",
      shelfLife: "3 tháng",
      delivery:
        "Miễn phí giao hàng .",
      urgentContact: "Gọi ngay 0825970802",
    },
    images: ["/cha_ca1.jpg",], // Thay thế bằng ảnh thật
  },
  {
    id: 2,
    name: "Chả Cá Lý Sơn",
    price: "200.000 VND",
    weight: "1kg",
    description: "Chả cá kẹp bánh tráng mè đặc sản Lý Sơn.",
    details: {
      type: "Chiên",
      status: "Còn hàng",
      ingredients: "Thịt cá, trứng vịt, tiêu, tỏi, dầu ăn",
      origin: "Lý Sơn - Quảng Ngãi",
      packaging: "Bịch hút chân không",
      weight: "0,5kg",
      productionDate: "In trên nhãn",
      preservation: "Ngăn đông",
      shelfLife: "3 tháng",
      delivery:
      "Miễn phí giao hàng .",
    urgentContact: "Gọi ngay 0825970802",
    },
    images: ["/cha_ca2.png", ], // Thay thế bằng ảnh thật
  },
  {
    id: 3,
    name: "Chả Cá Chiên",
    price: "180.000 VND",
    weight: "1kg",
    description: "Chả cá chiên thơm ngon, giòn rụm, phù hợp cho mọi bữa ăn.",
    details: {
      type: "Chiên",
      status: "Còn hàng",
      ingredients: "Thịt cá, tiêu, tỏi, dầu ăn",
      origin: "Lý Sơn - Quảng Ngãi",
      packaging: "Bịch hút chân không",
      weight: "1kg",
      productionDate: "In trên nhãn",
      preservation: "Ngăn đông",
      shelfLife: "3 tháng",
      delivery:
      "Miễn phí giao hàng .",
    urgentContact: "Gọi ngay 0825970802",
    },
    images: ["/cha_ca3.jpg"], // Đường dẫn đến ảnh chính
  },
  {
    id: 4,
    name: "Chả Cá Hấp",
    price: "170.000 VND",
    weight: "1kg",
    description: "Chả cá hấp giữ được độ tươi ngon, thơm nhẹ, không dầu mỡ.",
    details: {
      type: "Hấp",
      status: "Còn hàng",
      ingredients: "Thịt cá, trứng vịt, tiêu, tỏi",
      origin: "Lý Sơn - Quảng Ngãi",
      packaging: "Bịch hút chân không",
      weight: "1kg",
      productionDate: "In trên nhãn",
      preservation: "Ngăn đông",
      shelfLife: "3 tháng",
      delivery:
      "Miễn phí giao hàng .",
    urgentContact: "Gọi ngay 0825970802",
    },
    images: ["/cha_ca4.png"], // Đường dẫn đến ảnh chính
  },
  {
    id: 5,
    name: "Chả Cá Chiên",
    price: "160.000 VND",
    weight: "1kg",
    description: "Chả cá chiên giòn ngon, được chế biến từ cá tươi nguyên chất.",
    details: {
      type: "Chiên",
      status: "Còn hàng",
      ingredients: "Thịt cá, tiêu, tỏi, dầu ăn",
      origin: "Lý Sơn - Quảng Ngãi",
      packaging: "Bịch hút chân không",
      weight: "1kg",
      productionDate: "In trên nhãn",
      preservation: "Ngăn đông",
      shelfLife: "3 tháng",
      delivery:
        "Miễn phí giao hàng .",
      urgentContact: "Gọi ngay 0825970802",
    },
    images: ["/cha_ca5.png"], // Đường dẫn đến ảnh chính
  },
  {
    id: 6,
    name: "Chả Cá Kẹp Bánh Tráng Mè",
    price: "190.000 VND",
    weight: "1kg",
    description: "Chả cá kẹp bánh tráng mè đặc sản thơm ngon từ Lý Sơn.",
    details: {
      type: "Chiên",
      status: "Còn hàng",
      ingredients: "Thịt cá, trứng vịt, tiêu, tỏi, dầu ăn",
      origin: "Lý Sơn - Quảng Ngãi",
      packaging: "Bịch hút chân không",
      weight: "1kg",
      productionDate: "In trên nhãn",
      preservation: "Ngăn đông",
      shelfLife: "3 tháng",
      delivery:
      "Miễn phí giao hàng .",
    urgentContact: "Gọi ngay 0825970802",
    },
    images: ["/cha_ca6.png"], // Đường dẫn đến ảnh chính
  },
  // Thêm các sản phẩm khác...
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Sản phẩm không tồn tại</h2>;
  }

  return (
    <div className="product-details">
      <div className="product-details-container">
        <div className="product-images">
          <img
            src={product.images[0]}
            alt={product.name}
            className="main-image"
          />
          {/* <div className="thumbnail-container">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="thumbnail"
              />
            ))}
          </div> */}
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p>
            <strong>Giá:</strong> {product.price}
          </p>
          <p>
            <strong>Lát:</strong> {product.weight}
          </p>
          <p>
            <em>{product.description}</em>
          </p>
          <ul>
            <li>
              <strong>Phân Loại:</strong> {product.details.type}
            </li>
            <li>
              <strong>Tình Trạng:</strong> {product.details.status}
            </li>
            <li>
              <strong>Thành Phần:</strong> {product.details.ingredients}
            </li>
            <li>
              <strong>Xuất xứ:</strong> {product.details.origin}
            </li>
            <li>
              <strong>Quy cách đóng gói:</strong> {product.details.packaging}
            </li>
            <li>
              <strong>Khối Lượng:</strong> {product.details.weight}
            </li>
            <li>
              <strong>Ngày sản xuất:</strong> {product.details.productionDate}
            </li>
            <li>
              <strong>Bảo quản:</strong> {product.details.preservation}
            </li>
            <li>
              <strong>Hạn sử dụng:</strong> {product.details.shelfLife}
            </li>
            <li>
              <strong>Giao hàng:</strong> {product.details.delivery}
            </li>
            <li>
              <strong>Cần giao gấp:</strong> {product.details.urgentContact}
            </li>
          </ul>
          <div className="add-to-cart">
            <button>THÊM VÀO GIỎ HÀNG</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
