import React from 'react';
import Slider from 'react-slick';
import './GioiThieu.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const GioiThieu = () => {
  const images = [
    "https://media.cungphuot.info/2014/01/4941/gioi-thieu-chung-ve-ly-son.jpg",
    "https://image.vovworld.vn/w730/uploaded/vovworld/znaeng/2021_05_01/ccl1_qqmx.jpg",
    "https://saithanhfoods.vn/wp-content/uploads/2022/08/cha-ca-do-cu-7.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="company-info-section">
      {/* Hình ảnh chuyển động */}
      <div className="main-image-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="main-image" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Tiêu đề chính */}
      <h2 className="main-title">
        CHẤT LƯỢNG – UY TÍN
        <br />
        KHẲNG ĐỊNH THƯƠNG HIỆU 
      </h2>

      {/* Mô tả chính của công ty */}
      <p className="company-description">
        Chả Cá Lý Sơn là đơn vị chuyên sản xuất, chế biến và kinh doanh mặt hàng thủy hải sản đông lạnh uy tín hàng đầu tại Việt Nam với đội ngũ Ban lãnh đạo gần 20 năm kinh nghiệm trong ngành. Với sứ mệnh vì an toàn sức khỏe, vì chất lượng cuộc sống qua từng bữa ăn gia đình, chúng tôi mang đến cho người tiêu dùng sản phẩm với tiêu chí “Thực phẩm sạch – Chất lượng xanh – Tiêu chuẩn quốc tế”.
      </p>
      <p className="company-description">
      Chả Cá Lý Sơn cam kết an toàn thực phẩm với việc kiểm tra kỹ lưỡng nguyên liệu, đảm bảo không nhiễm khuẩn, không dư lượng kháng sinh hay thuốc bảo vệ thực vật, được giám sát nghiêm ngặt quy trình sản xuất theo tiêu chuẩn vệ sinh an toàn thực phẩm.
      </p>
      <p className="company-description">
        Bắt kịp theo nhịp phát triển của kinh tế, thị trường, đáp ứng nhu cầu tiện ích, an toàn chất lượng của người dùng. Chả Cá Lý Sơn nghiên cứu và phục vụ các dòng sản phẩm giá trị gia tăng, sản phẩm đã được chế biến sẵn nhằm tiết kiệm thời gian quý báu của người nội trợ và mang đậm vị bữa ăn gia đình.
      </p>
      {/* Câu chuyện thương hiệu */}
      <div className="brand-story-container">
      <h1 className="brand-title">
        Câu chuyện thương hiệu Chả Cá Lý Sơn - Hương Vị Biển Cả, Trọn Tình Quê Hương
      </h1>
      <p>
        Từ những ngư trường giàu có của vùng biển Lý Sơn – nơi được mệnh danh là
        “viên ngọc xanh” của miền Trung Việt Nam – chả cá Lý Sơn ra đời mang theo
        hương vị đậm đà và nét tinh túy của biển cả. Được làm từ loại cá đỏ đặc biệt
        chỉ có tại vùng biển nơi đây, mỗi miếng chả cá không chỉ là một món ăn ngon
        mà còn chứa đựng cả tâm huyết và tình yêu quê hương của người dân Lý Sơn.
      </p>
      <p>
        Chúng tôi tin rằng, để làm nên một sản phẩm chất lượng, không chỉ cần nguyên
        liệu tươi ngon mà còn cần cả tấm lòng. Từng miếng chả cá được chế biến thủ
        công với công thức gia truyền, không chất bảo quản, không phụ gia độc hại,
        đảm bảo giữ nguyên sự tự nhiên và tinh khiết của biển.
      </p>
      <p>
        Thương hiệu Chả Cá Lý Sơn không chỉ là món quà của đất và trời, mà còn là
        lời tri ân đến những người ngư dân đã ngày đêm bám biển, gìn giữ nguồn tài
        nguyên quý giá này. Với chúng tôi, mỗi sản phẩm không chỉ là món ăn mà còn
        là một câu chuyện, một hành trình đưa hương vị đặc trưng của Lý Sơn đến với
        mọi gia đình Việt.
      </p>
      <p>
        <strong style={{ color: "#003366", fontWeight: "bold" }} >Chả Cá Lý Sơn – Gói trọn tinh hoa biển cả, gửi gắm trọn vị yêu thương.</strong>
      </p>
    </div>
      {/* Phần Nhân Sự */}
      <div className="section personnel-section">
        <h3 className="section-title">* NHÂN SỰ</h3> 
        <p className="section-description">
        Chả Cá Lý Sơn với đội ngũ nhân viên tràn đầy năng lượng và sự nhiệt huyết. Mỗi thành viên Chả Cá Lý Sơn luôn nỗ lực hoàn thiện từng ngày, để đem những sản phẩm chất lượng tốt nhất đến tay người tiêu dùng Việt.
        </p>
        <div className="image-container">
          <img
            src="https://saithanhfoods.vn/wp-content/uploads/2019/08/Gioi-thieu-Sai-Thanh-Foods-2-600x400.jpg"
            alt="Nhân sự"
            className="side-image"
          />
        </div>
      </div>
         {/* Phần Mục Tiêu Của Chúng Tôi */}
      <div className="section">
        <h3 className="section-title">* MỤC TIÊU CỦA CHÚNG TÔI</h3>
        <p className="section-description">
          Sản phẩm trước khi được đưa ra thị trường đều phải đảm bảo các tiêu chí sau:
        </p>
          <div className="quality-image-container">
            <img
              src="https://saithanhfoods.vn/wp-content/uploads/2019/08/Gioi-thieu-Sai-Thanh-Foods-3-600x375.jpg" // Thay thế URL này bằng ảnh thực tế của bạn
              alt="Chất lượng"
              className="quality-image"
            />
          </div>
      </div>
      <div className="main-section">
  {/* Phần Quản Lý và Sản Xuất */}
  <div className="management-section">
    <div className="text-content">
      <h3 className="section-title">* QUẢN LÝ VÀ SẢN XUẤT</h3>
      <ul className="section-content">
        <p>Mỗi sản phẩm ra thị trường được kiểm tra quy trình sản xuất chặt chẽ.</p>
        <p>Quy trình sản xuất khép kín, đảm bảo chất lượng và vệ sinh an toàn thực phẩm.</p>
        <p>Công nghệ cấp đông tiên tiến hiện đại nhất hiện nay, đảm bảo chất lượng sản phẩm.</p>
      </ul>
    </div>
    <div className="image-content">
      <img src="https://saithanhfoods.vn/wp-content/uploads/2019/08/Gioi-thieu-Sai-Thanh-Foods-4.jpg" alt="Quản lý và sản xuất" className="management-image" />
    </div>
  </div>
  <div className="main-section">
  {/* Phần Khách Hàng & Thị Trường */}
  <div className="market-section">
    <div className="text-content">
      <h3 className="section-title">* KHÁCH HÀNG & THỊ TRƯỜNG</h3>
      <p className="section-description">
        Đáp ứng nhu cầu khách hàng và chiến lược thương hiệu giúp Chả Cá Lý Sơn xây dựng nền móng thiết yếu nhất, cũng như định hướng xây dựng thương hiệu tại những thị trường tiềm năng.
      </p>
      <ul className="section-content">
        <p>Thị trường trong nước.</p>
      </ul>
    </div>
    <div className="image-content">
      <img src="https://saithanhfoods.vn/wp-content/uploads/2020/02/Khach-hang-va-thi-truong.jpg" alt="Khách hàng & Thị trường" className="market-image" />
    </div>
  </div>

  {/* Phần Nhận Diện Giá Trị Cốt Lõi */}
  <div className="core-values-section">
    <div className="text-content">
      <h3 className="section-title">* NHẬN DIỆN GIÁ TRỊ CỐT LÕI</h3>
      <ul className="section-content">
        <p>Tên thương hiệu: Chả Cá Lý Sơn</p>
        <p>Slogan: Tinh hoa từ biển cả, hạnh phúc trong từng miếng chả</p>
        <p>Ý nghĩa: Tinh hoa của biển cả được kết tinh qua những nguyên liệu tươi ngon nhất, kết hợp với sự tâm huyết và khéo léo của người làm chả, tạo nên từng miếng chả trọn vẹn hương vị và chứa đựng hạnh phúc gửi gắm đến mỗi gia đình.</p>
      </ul>
    </div>
    <div className="image-content">
      <img src="logo.png" alt="Logo công ty" className="logo-image" />
    </div>
  </div>
</div>

  {/* Các phần khác */}
  {/* Thêm các phần khác của bạn ở đây */}
</div>

    </div>
  );
};

export default GioiThieu;
