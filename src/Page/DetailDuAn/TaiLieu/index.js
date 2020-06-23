import React, { Component } from "react";
import "./styles.css";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          ID: 1,
          TieuDe: "CHÍNH SÁCH BÁN HÀNG",
          Link: "https://images.cenhomes.vn/2020/03/1585214589-csbh.jpg",
        },
        {
          ID: 2,
          TieuDe: "Quy trình nhận đặt chỗ",
          Link:
            "https://images.cenhomes.vn/2020/03/1585134580-mdml-quy-trinh-giao-dich-da-chuyen-doi.pdf",
        },
        {
          ID: 3,
          TieuDe: "MẪU HỢP ĐỒNG",
          Link:
            "https://images.cenhomes.vn/2020/04/1585899997-mau-hdvay--md-.pdf",
        },
        {
          ID: 4,
          TieuDe: "HỒ SƠ PHÁP LÝ",
          Link:
            "https://images.cenhomes.vn/2020/03/1585558861-ho-so-phap-ly-minh-duc.pdf",
        },
      ],
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div className="tailieu_chudautu">
        {data.map((item, i) => (
          <a key={i} target="_blank" href={item.Link}>
            <p>{item.TieuDe}</p>
            <i className="fa fa-download" />
          </a>
        ))}
      </div>
    );
  }
}
export default index;
