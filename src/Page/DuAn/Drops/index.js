import React from "react";
import { Input, Dropdown } from "antd";
import { DownOutlined, CheckOutlined } from "@ant-design/icons";
import "./styles.css";
class BannerSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataKhuVuc: [
        { TenKV: "Địa Điểm", ID: 0 },
        { TenKV: "TP HCM", ID: 1 },
        { TenKV: "Đà Nẵng", ID: 2 },
        { TenKV: "Hà Nội", ID: 3 },
        { TenKV: "Nha Trang", ID: 4 },
        { TenKV: "Hải Phòng", ID: 5 },
      ],
      dataLoaiHinh: [
        { TenLCH: "Loại Hình", ID: 0 },
        { TenLCH: "Căn hộ", ID: 1 },
        { TenLCH: "Shophouse", ID: 2 },
        { TenLCH: "Nhà phố", ID: 3 },
        { TenLCH: "Văn phòng", ID: 4 },
        { TenLCH: "Đất nền", ID: 5 },
        { TenLCH: "Biệt thự", ID: 6 },
        { TenLCH: "Mặt bằng", ID: 7 },
      ],
      dataSort: [
        { ID: 0, Name: "Sắp xếp theo" },
        { ID: 1, Name: "Độ ưu tiên giảm dần" },
        { ID: 2, Name: "Độ ưu tiên tăng dần" },
        { ID: 3, Name: "A - Z" },
        { ID: 4, Name: "Z - A" },
        { ID: 5, Name: "Giá giảm dần" },
        { ID: 6, Name: "Giá tăng dần" },
        { ID: 7, Name: "Mới nhất" },
        { ID: 8, Name: "Cũ nhất" },
      ],
      khuVuc: { TenKV: "Địa Điểm", ID: 0 },
      loaiHinh: { TenLCH: "Loại Hình", ID: 0 },
      sort: { ID: 0, Name: "Sắp xếp theo" },
    };
  }

  onKhuVucChange = (khuVuc) => {
    this.setState({
      khuVuc,
    });
  };

  onLoaiHinhChange = (loaiHinh) => {
    this.setState({
      loaiHinh,
    });
  };

  onSortChange = (sort) => {
    this.setState({
      sort,
    });
  };
  render() {
    const {
      dataKhuVuc,
      khuVuc,
      dataLoaiHinh,
      loaiHinh,
      dataSort,
      sort,
    } = this.state;

    return (
      <div className="searchbar_duan">
        <Dropdown
          trigger={["click"]}
          getPopupContainer={(trigger) => trigger.parentNode}
          overlay={
            <div className="content_drop_duan" id="scroll_filter">
              {dataKhuVuc.map((item, index) => (
                <div
                  key={index}
                  className="item_drop_duan"
                  onClick={() => this.onKhuVucChange(item)}
                >
                  <p>{item.TenKV}</p>
                  {khuVuc.ID === item.ID && <CheckOutlined />}
                </div>
              ))}
            </div>
          }
        >
          <div className="drop_duan">
            <p title={khuVuc.TenKV}>{khuVuc.TenKV}</p>
            <DownOutlined style={{ fontSize: 14 }} />
          </div>
        </Dropdown>
        <Dropdown
          trigger={["click"]}
          getPopupContainer={(trigger) => trigger.parentNode}
          overlay={
            <div className="content_drop_duan" id="scroll_filter">
              {dataLoaiHinh.map((item, index) => (
                <div
                  key={index}
                  className="item_drop_duan"
                  onClick={() => this.onLoaiHinhChange(item)}
                >
                  <p>{item.TenLCH}</p>
                  {loaiHinh.ID === item.ID && <CheckOutlined />}
                </div>
              ))}
            </div>
          }
        >
          <div className="drop_duan">
            <p title={loaiHinh.TenLCH}>{loaiHinh.TenLCH}</p>
            <DownOutlined style={{ fontSize: 14 }} />
          </div>
        </Dropdown>
        <Dropdown
          trigger={["click"]}
          getPopupContainer={(trigger) => trigger.parentNode}
          overlay={
            <div className="content_drop_duan" id="scroll_filter">
              {dataSort.map((item, index) => (
                <div
                  key={index}
                  className="item_drop_duan"
                  onClick={() => this.onSortChange(item)}
                >
                  <p>{item.Name}</p>
                  {sort.ID === item.ID && <CheckOutlined />}
                </div>
              ))}
            </div>
          }
        >
          <div className="drop_duan">
            <p title={sort.Name}>{sort.Name}</p>
            <DownOutlined style={{ fontSize: 14 }} />
          </div>
        </Dropdown>
      </div>
    );
  }
}

export default BannerSection;
