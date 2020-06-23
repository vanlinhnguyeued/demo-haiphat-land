import React, { Component } from "react";
import Banner from "./Banner";
import "./styles.css";
const logo =
  "http://haiphatland.com.vn/public/static/frontend/css/images/icons/fanvicon.jpg";
class index extends Component {
  componentDidMount() {
    document.title = "Về chúng tôi HaiPhatLand";
  }
  render() {
    return (
      <div className="container_vechungtoi">
        <Banner />
        <div className="content_vechungtoi">
          <div className="boxgioithieu_vechungtoi">
            <div className="row_vechungtoi">
              <div className="col_vechungtoi" data-aos="fade-right">
                <p>
                  <span style={{ color: "var(--title" }}>
                    Công ty Cổ phần Đầu tư và Kinh doanh Bất động sản Hải Phát
                    (HAI PHAT LAND)
                  </span>{" "}
                  là một doanh nghiệp chuyên kinh doanh phát triển, phân phối,
                  cho thuê các sản phẩm Bất động sản trong nước, Quốc tế; quản
                  lý vận hành, khai thác tòa nhà và tổng hòa các dịch vụ liên
                  quan đến Bất Động Sản. Với mục tiêu trở thành Đơn vị kinh
                  doanh và phân phối bất động sản tốt nhất Việt Nam, HAI PHAT
                  LAND không chỉ tiếp tục phát huy thế mạnh của mình mà còn tiên
                  phong xây dựng Hệ sinh thái bất động sản đồng bộ, khép kín tại
                  Việt Nam từ đầu tư, tư vấn phát triển dự án; phân phối, quản
                  lý, vận hành, khai thác đến cung cấp những giải pháp công nghệ
                  Bất động sản, marketing và truyền thông dự án; đào tạo nhân sự
                  chất lượng cao cho chủ đầu tư cũng như các đơn vị bất động sản
                  trên cả nước.
                </p>
              </div>
              <div className="col_vechungtoi" data-aos="fade-left">
                <p>
                  Song song với đó, chú trọng phát triển từ bên trong, coi trọng
                  nhân tố con người, HAI PHAT LAND không ngừng kiến tạo môi
                  trường làm việc thân thiện, giàu cơ hội trải nghiệm. Đồng
                  thời, thường xuyên tổ chức đào tạo, nâng cao chất lượng nhân
                  sự, cải tiến phương thức tiếp cận khách hàng. Các khóa đào tạo
                  được xây dựng chi tiết
                </p>
              </div>
            </div>
          </div>
          <div className="boxvideo_vechungtoi">
            <div className="video_vechungtoi" data-aos="zoom-in">
              <iframe
                style={{ width: "100%", height: "100%" }}
                src="https://www.youtube.com/embed/z8Aj_K99vyY"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                allowFullScreen
              />
            </div>
          </div>
          <div className="boxcocau_vechungtoi">
            <div className="row_cocau_vechungtoi" data-aos="fade-up">
              <img src={logo} style={{ height: 60, width: 60 }} />
              <h2>CƠ CẤU TỔ CHỨC</h2>
            </div>
            <img
              className="img_cocau_vechungtoi"
              data-aos="fade-up"
              src="http://haiphatland.com.vn/public/uploads/files/1733187702e8fab6a3f9.jpg"
            />
          </div>
          <div className="boxlotrinh_vechungtoi">
            <div className="row_cocau_vechungtoi" data-aos="fade-up">
              <img src={logo} style={{ height: 60, width: 60 }} />
              <h2>LỘ TRÌNH PHÁT TRIỂN</h2>
            </div>
            <h3 data-aos="fade-up">
              Với chiến lược phát triển rõ ràng, tầm nhìn dài hạn, cùng hơn 35
              chi nhánh, công ty thành viên, liên kết trải dài trên cả nước và
              quốc tế, trên 2000 cán bộ nhân viên tràn đầy nhiệt huyết, được đào
              tạo bài bản, chuyên nghiệp, HAI PHAT LAND định hướng trở thành đơn
              vị kinh doanh và phân phối bất động sản hàng đầu Việt Nam.
            </h3>
            <img
              className="img_cocau_vechungtoi"
              data-aos="fade-up"
              src="http://haiphatland.com.vn/public/uploads/files/0a9a53636dfc95a2cced(2).jpg"
            />
          </div>
          <div className="boxtamnhin_vechungtoi">
            <div className="row_cocau_vechungtoi" data-aos="fade-up">
              <img src={logo} style={{ height: 60, width: 60 }} />
              <h2>TẦM NHÌN SỨ MẠNH - GIÁ TRỊ CỐT LÕI</h2>
            </div>
            <div style={{ padding: 10 }}>
              <img
                className="img_tamnnhin_vechungtoi"
                data-aos="fade-right"
                src="http://haiphatland.com.vn/public/uploads/images/Icons/tam-nhin.png"
              />
              <img
                className="img_tamnnhin_vechungtoi"
                data-aos="fade-left"
                src="http://haiphatland.com.vn/public/uploads/images/Icons/gia-tri.png"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default index;
