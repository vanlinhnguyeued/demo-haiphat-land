import React, { Component } from "react";
import icon_appStore from "../../../assets/icon-app-store.png";
import icon_googlePlay from "../../../assets/icon-google-play.png";
import "./styles.css";
class index extends Component {
  render() {
    return (
      <div className="container_contact_home">
        <div className="content_contact_home">
          <div className="row_contact_home">
            <div className="col1_contact_home" data-aos="fade-right">
              <img src="http://citysoft.vn/wp-content/uploads/2020/06/cong-nghe-lam-thay-doi-hinh-thuc-kinh-doanh-bat-dong-san-01.png" />
            </div>
            <div className="col2_contact_home" data-aos="fade-left">
              <h2 data-aos="fade-left">Tìm kiếm thông minh</h2>
              <p data-aos="fade-left">
                Với ứng dụng HaiPhatLand trên điện thoại thông minh, bạn sẽ được
                tận hưởng quy trình mua bán bất động sản nhanh chóng và dễ dàng.
              </p>
              <h2 data-aos="fade-left">Thấu hiểu thị trường bất động sản</h2>
              <p data-aos="fade-left">
                Chỉ cần nhập địa điểm, hoặc khu vực bất động sản mà bạn mong
                muốn, bạn sẽ có được những thông tin chi tiết và thực tế, phù
                hợp nhất với tiêu chí của bạn.
              </p>
              <div className="row_icon_contact_home" data-aos="zoom-in">
                <a
                  target="_blank"
                  href="https://apps.apple.com/vn/app/h%E1%BA%A3i-ph%C3%A1t-logistic/id1486766046?l=vi"
                >
                  <img src={icon_appStore} />
                </a>
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.haiphatland"
                >
                  <img src={icon_googlePlay} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default index;
