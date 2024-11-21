import React from "react";
import FeaturedProducts from "./FeaturedProducts";
import { FaGem, FaUserTie, FaFireAlt, FaWallet } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";


const Home = () => {
  
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
    <div className="banner">
      {/* Phần hình ảnh banner */}
      <div className="banner-images">
        <div className="main-image">
          <img src="cha ly son.jpg" alt="Chả cá Lý Sơn" className="product-image" />
        </div>
        <div className="sub-images">
          <img src="https://haisandathanh.com/uploads/image/images/cha%20ca%20ly%20son.jpg" alt="QR Code" className="product-image small-image" />
          <img src="https://bazantravel.com/cdn/medias/uploads/56/56377-banh-canh-cha-ca-nha-trang.jpg" alt="Chả cá đóng gói" className="product-image small-image" />
          <img src="https://toplist.vn/images/800px/cha-ca-ly-son-da-nang-323756.jpg" alt="Chả cá đặc sản" className="product-image small-image" />
        </div>
      </div>
      <section className="about">
  <h2>Về Chúng Tôi</h2>
  <p>
    <strong>Chả Cá Lý Sơn</strong> là sự kết hợp hoàn hảo giữa hương vị truyền thống và công nghệ chế biến hiện đại.
    Chúng tôi luôn cam kết mang đến những sản phẩm chả cá tươi ngon nhất, được chế biến từ nguồn nguyên liệu 
    chất lượng cao, an toàn và được chọn lọc kỹ càng.
  </p>
  <p>
    Với kinh nghiệm nhiều năm trong ngành chế biến thực phẩm và sự tận tâm, chúng tôi tự hào là thương hiệu được 
    hàng nghìn gia đình Việt tin tưởng và yêu thích. Không chỉ là món ăn, sản phẩm của chúng tôi còn mang đậm nét
    văn hóa và tinh hoa ẩm thực vùng biển.
  </p>
   
  <p>
    Hãy để chúng tôi đồng hành cùng bữa cơm gia đình bạn, mang đến những khoảnh khắc hạnh phúc bên những món ăn
    đậm đà hương vị biển cả.
  </p>
</section>
      {/* Phần các ưu điểm của sản phẩm */}
      <div className="banner-highlights">
        <div className="highlight">
          <FaGem size={30} color="#000077" />
          <span>Sản phẩm chất lượng, thương hiệu uy tín</span>
        </div>
        <div className="highlight">
          <FaUserTie size={30} color="#000077" />
          <span>Tư vấn chính xác, tác phong chuyên nghiệp</span>
        </div>
        <div className="highlight">
          <FaFireAlt size={30} color="#000077" />
          <span>Giá thành tốt nhất, bảo hành uy tín</span>
        </div>
        <div className="highlight">
          <FaWallet size={30} color="#000077" />
          <span>Thanh toán tại nhà, an toàn 100%</span>
        </div>
      </div>
  <FeaturedProducts/>

      {/* Phần nội dung chính mô tả sản phẩm */}
      <div className="content-section">
        <h2>Chả cá đỏ củ Lý Sơn – một món đặc sản trứ danh từ huyện đảo Lý Sơn (Quảng Ngãi) mà ai cũng muốn thử qua một lần khi đến huyện xã này.</h2>
        <p>
          Cá đỏ củ là loài cá với đặc điểm nổi bật về sắc da đỏ xen trắng đen, ánh bạc đặc biệt cho bưng cá. Cá đỏ củ kích thước chỉ nhỏ như củ khoai lang nhưng khá đầy đặn, thịt cá đỏ củ lại rất trắng, tươi ngọt, ngon nên rất được ưa chuộng để chế biến thành những món ngon đa dạng và hiến thức cùng như hương vị như chiên giòn, hấp, nướng... Trong đó nổi bật nhất chắc chắn phải kể đến món chả cá đỏ củ – đặc sản trứ danh từ huyện đảo Lý Sơn mà ai cũng phải thử qua một lần trong đời.
        </p>
        <h3>Chả Cá Đỏ Củ - Món Ngon Không Thể Bỏ Qua</h3>
        <ul>
          <li>Có thể nói khi nhắc đến Lý Sơn người ta không thể không nói về món chả cá hấp dẫn ở đây, chỉ với một con cá đỏ củ nhỏ như củ khoai nhưng sau khi qua bàn tay chế biến lão làng và đầy kinh nghiệm từ ngư dân ở đây thì đã có được một miếng chả cá dai dai, thơm ngon khiến bao người phải mê mẩn chỉ sau một lần dùng thử.</li>
          <li>Ai đến huyện Đảo Lý Sơn mà được thưởng thức món chả cá mang hương vị rất riêng và rất “chất” này chắc hẳn phải thốt lên rằng “Chả cá đỏ củ chỉ có ở Lý Sơn mới chuẩn bài!”. Bởi lẽ trong các loại chả cá, thì chả cá mang thương hiệu Lý Sơn lại có hương vị khác biệt khi cắn vào miếng chả dai ngọt thơm ngon này.</li>
          
          
        </ul>

        {/* Phần hình ảnh và chú thích */}
        <div className="product-image-container">
          <img src="anh1.png" alt="Chả cá đóng gói" className="product-detail-image" />
          <p className="image-caption"></p>
        </div>

        {/* Đoạn văn bản mô tả thêm */}
        <ul>
            <li>Theo những dân làm chả lành nghề tại xã An Vĩnh, chả cá Lý Sơn được làm từ thịt cá đỏ củ – đây là loại cá nổi tiếng với ngoại hình tròn, thuôn dài như củ khoai và có màu đỏ sậm đặc trưng trên thân cá. Với cá đỏ củ thường được đánh bắt tại ngư trường vùng biển Hoàng Sa Việt Nam. Với cá sau khi được đánh bắt và đưa vào bờ sẽ được chọn lọc những con tươi ngon nhất để chế biến thành chả cá.</li>
          <li>Để có được thành phẩm là một mẻ chả cá đỏ củ Lý Sơn thơm ngon, dai giòn hấp dẫn thì các công đoạn và quy trình chế biến sẽ được làm hoàn toàn thủ công bởi những đôi tay dày dạn kinh nghiệm.</li>
          <li>Cơ bản quy trình để tạo ra được miếng chả cá lần lượt là: rửa sạch cá, tách thịt cá bằng muỗng nạo, bỏ thịt cá vào thau lớn, nêm nếm gia vị như tỏi, muối, tiêu, bột ngọt, cuối cùng dùng tay nhào và bóp cho đến khi thịt cá dính quyện vào nhau cũng như ngấm đều gia vị là được.</li>
        </ul>
        <div className="product-image-container">
          <img src="https://saithanhfoods.vn/wp-content/uploads/2022/08/cha-ca-do-cu-8.jpg" alt="Chả cá đóng gói" className="product-detail-image" />
          {/* <p className="image-caption">Bạn Đồng Hành Của Mỗi Bữa Ăn Gia Đình</p> */}
        </div>
        <ul>
            <li>Điểm tạo nên một miếng chả cá mang hương vị đặc trưng của Lý Sơn đó chính là phần thịt cá đỏ củ tươi ngon, vừa được đánh bắt lên từ biển mà không qua ướp đá. Bởi vì lý do đó mà chả cá đỏ củ không thể được làm quanh năm, mà chỉ khi thuyền ra khơi vào những hôm sóng yên biển lặng và mang về những con cá tươi ngon chất lượng thì chả cá mới được ra lò. Cá phải tươi, thịt trắng thì mới ra được thành phẩm chả cá dai dai, tươi ngọt và thơm ngon. Ngược lại nếu cá không tươi sẽ cho ra thành phẩm chả cá bị nhão như bột hay có mùi không hấp dẫn.</li>
            <li>Ngoài thịt cá thì phần gia vị tỏi Lý Sơn cũng là một trong những nguyên liệu đóng vai trò quan trọng không kém để tạo nên một miếng chả cá chất lượng và đậm vị khiến bao người say mê khó bỏ chỉ sau một lần ăn thử.</li>
        </ul>
      </div>
       {/* Phần Tin Tức */}
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
    </div>
    
  );
};

export default Home;