import React, { Component } from "react";
import "./styles.css";
class index extends Component {
  render() {
    return (
      <div className="container_footer">
        <div className="content_footer">
          <div className="logo_footer" data-aos="fade-up">
            <img src="http://haiphatland.com.vn/public/static/frontend/images/graphics/logo.png" />
            <h2>Khát vọng – Chân thành – Sáng tạo</h2>
          </div>
          <div className="lienhe_footer" data-aos="fade-up">
            <h3>THÔNG TIN LIÊN HỆ</h3>
            <h4>Trụ sở chính:</h4>
            <p>
              Tầng 2, Tổ hợp TMDV và nhà ở The Pride - KĐT mới An Hưng Q. Hà
              Đông - TP. Hà Nội
            </p>
            <p>
              <strong>P:</strong> 1900 2167
            </p>
            <p>
              <strong>F:</strong> (024)32 080 599
            </p>
            <p>
              <strong>E:</strong> cskh@haiphatland.com.vn
            </p>
            <h4 className="chinhanh_footer">
              <a href="/chi-nhanh">Hệ thống mạng lưới của chúng tôi</a>
            </h4>
          </div>
          <div className="ketnoi_footer" data-aos="fade-up">
            <h3>KẾT NỐI VỚI CHÚNG TÔI</h3>
            <div className="icon_footer">
              <a href="https://www.facebook.com/bdshaiphat/" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCf2fN2RNORYUmM8oQxjTppg"
                target="_blank"
              >
                <i className="fa fa-youtube" />
              </a>
              <a href="mailto:cskh@haiphatland.com.vn" target="_blank">
                <i className="fa fa-envelope" />
              </a>
            </div>
            <div className="luu_y_footer">
              */ Trong quá trình triển khai dự án, có thể một số thiết kế sẽ
              thay đổi cho phù hợp với lợi ích chung của khách hàng. Căn hộ và
              các trang thiết bị kèm theo sẽ được bàn giao đúng quy định của
              HĐMB
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default index;
