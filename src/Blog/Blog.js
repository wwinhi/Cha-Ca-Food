import React from 'react';
import './Blog.css';

const Blog = () => {
    const newsItems = [
        {
          image: 'https://image.vovworld.vn/w730/uploaded/vovworld/znaeng/2021_05_01/ccl1_qqmx.jpg', // Đường dẫn tới hình ảnh của bài viết
          title: 'Hành trình phát triển Chả cá Lý Sơn',
          description: 'Chả cá Lý Sơn là một sản phẩm nổi bật với hương vị đặc trưng, mang đến trải nghiệm ẩm thực đậm chất Quảng Ngãi. Được chế biến từ nguyên liệu tươi ngon và công thức truyền thống, sản phẩm này đã trở thành món ăn ưa chuộng của nhiều gia đình.',
        },
        {
          image: 'https://static.vinwonders.com/production/cha-ca-ly-son-8.jpg',
          title: 'Chả cá đỏ củ Lý Sơn – Bí quyết giữ hương vị biển cả',
          description: 'Chả cá đỏ củ Lý Sơn là sự kết hợp hoàn hảo giữa nguyên liệu tự nhiên và quy trình sản xuất nghiêm ngặt. Được làm từ cá đỏ củ, một loại cá có vị ngọt và giàu dinh dưỡng, sản phẩm này là lựa chọn lý tưởng cho những ai yêu thích hương vị biển.',
        },
        {
          image: 'https://saithanhfoods.vn/wp-content/uploads/2022/08/cha-ca-do-cu-7.jpg',
          title: 'Lợi ích sức khỏe từ Chả cá Lý Sơn',
          description: 'Chả cá Lý Sơn không chỉ là một món ăn ngon mà còn cung cấp nhiều dưỡng chất tốt cho sức khỏe. Với hàm lượng protein cao và ít chất béo, sản phẩm này hỗ trợ sức khỏe tim mạch và là nguồn dinh dưỡng tuyệt vời cho cả gia đình.',
        },
      ];
    

  return (
    <section className="news-section">
      <div className="news-header">
        <h2>TIN TỨC</h2>
        <a href="#" className="view-all-link">+ Xem tất cả</a>
      </div>
      <div className="news-items">
        {newsItems.map((item, index) => (
          <div className="news-item" key={index}>
            <img src={item.image} alt={item.title} className="news-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
