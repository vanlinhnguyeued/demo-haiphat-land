import React, { Component } from "react";
import RenderItem from "./renderItem";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          ID: 1,
          Type: 1,
          VideoUrl: "https://www.youtube.com/embed/DtVTDvkySQo",
          TieuDe: "Nguyễn Thành Long - Tư vấn căn hộ 2PN +1",
          TenDA: "WEST LAKES GOLF & VILLAS",
          ImgUrl:
            "https://images.cenhomes.vn/2020/05/1590113054-z189030435203625ea1faf148b794219171181de4710d9.jpg",
        },
        {
          ID: 2,
          Type: 1,
          VideoUrl: "https://www.youtube.com/embed/xgVyG0qG8dQ",
          TieuDe: "Nguyễn Việt Anh - Tư vấn căn hộ 2PN (2WC)",
          TenDA: "WEST LAKES GOLF & VILLAS",
          ImgUrl:
            "https://images.cenhomes.vn/2020/05/1590113054-z189030435203625ea1faf148b794219171181de4710d9.jpg",
        },
        {
          ID: 3,
          Type: 1,
          VideoUrl: "https://www.youtube.com/embed/JkJy5vPmS7c",
          TieuDe: "Ở Hà Nội, biết mua nhà ở đâu đây?",
          TenDA: "TRAN ANH RIVERSIDE",
          ImgUrl:
            "https://images.cenhomes.vn/2020/05/1590458020-b2015b197cb086eedfa1.jpg",
        },
        {
          ID: 4,
          Type: 1,
          VideoUrl: "https://www.youtube.com/embed/m3Y1DlKerlM",
          TieuDe: "Nguyễn Duy Vương - Tư vấn căn hộ 2PN +1",
          TenDA: "TRAN ANH RIVERSIDE",
          ImgUrl:
            "https://images.cenhomes.vn/2020/05/1590718587-z1900995059487f611f8175a138ecdc1608c110fc32414.jpg",
        },
        {
          ID: 5,
          Type: 2,
          VideoUrl:
            "https://www.facebook.com/cenhomes.vn/videos/2574309922885984/",
          TieuDe: "BẮC NINH - Từ 'THỊ XÃ ĐÈN DẦU' đến THÀNH PHỐ trực thuộc TW",
          TenDA: "LA VILLA GREEN CITY",
          ImgUrl:
            "https://images.cenhomes.vn/2020/06/1592446213-back-ban-tincenhomes-01-01.jpg",
        },
        {
          ID: 6,
          Type: 2,
          VideoUrl:
            "https://www.facebook.com/cenhomes.vn/videos/264171951439373/",
          TieuDe: "Góc nhìn tiềm năng bất động sản Cần Thơ - Cơ hội cho ai?",
          TenDA: "LA VILLA GREEN CITY",
          ImgUrl:
            "https://images.cenhomes.vn/2020/06/1591236155-z1910253136582f72e21bcb58f0ea8b6193fd1e57f0e81.jpg",
        },
      ],
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div className="container_live_video">
        <h2 className="title_live_video" data-aos="zoom-in">
          Live giới thiệu Dự án
        </h2>
        <div className="content_live_video">
          {data.map((item, index) => (
            <RenderItem
              item={item}
              index={index}
              key={index}
              setUrl={(e) => this.props.setUrl(e)}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default index;
