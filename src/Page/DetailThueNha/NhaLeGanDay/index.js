import React, { Component } from "react";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Coll from "./Col";
import List from "./List";
import "./styles.css";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexBtn: 1,
      data: [
        {
          ID: 1,
          Avatar:
            "https://chungcuvinaconex2.com/wp-content/uploads/z938728466972_c1549f99449d3fe4132bfceeff8e9d37.jpg",
          TenCH:
            "Căn hộ A1001 - TÒA S1 - Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
          DiaChi: "Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
          Gia: "~1,5 Tỷ",
          PhongNgu: 3,
          DienTich: "35m2",
          WC: 2,
          TenKhuVuc: "Thành phố Hà Nội",
        },
        {
          ID: 2,
          Avatar:
            "https://chungcuvinaconex2.com/wp-content/uploads/z938728466972_c1549f99449d3fe4132bfceeff8e9d37.jpg",
          TenCH: "Căn hộ A1002 - TÒA S1",
          DiaChi: "Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
          Gia: "~1,8 Tỷ",
          PhongNgu: 4,
          DienTich: "40.5m2",
          WC: 3,
          TenKhuVuc: "Thành phố Hà Nội",
        },
        {
          ID: 3,
          Avatar:
            "https://chungcuvinaconex2.com/wp-content/uploads/z938728466972_c1549f99449d3fe4132bfceeff8e9d37.jpg",
          TenCH: "Căn hộ A1003 - TÒA S1",
          DiaChi: "Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
          Gia: "~1,2 Tỷ",
          PhongNgu: 2,
          DienTich: "31.5m2",
          WC: 1,
          TenKhuVuc: "Thành phố Hà Nội",
        },
        {
          ID: 4,
          Avatar:
            "https://chungcuvinaconex2.com/wp-content/uploads/z938728466972_c1549f99449d3fe4132bfceeff8e9d37.jpg",
          TenCH: "Căn hộ A1004 - TÒA S1",
          DiaChi: "Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
          Gia: "~1,72 Tỷ",
          PhongNgu: 3,
          DienTich: "37.2m2",
          WC: 2,
          TenKhuVuc: "Thành phố Hà Nội",
        },
      ],
    };
  }

  render() {
    const { indexBtn, data } = this.state;
    return (
      <div className="nhaleganday_detailthuenha">
        <h2>Danh sách nhà lẻ gần đây</h2>
        <div className="div_cn_nhaleganday_detailthuenha">
          <p>{data.length} kết quả</p>
          <div className="div_button_nhaleganday_detailthuenha">
            <Button
              type={indexBtn === 1 ? "primary" : "default"}
              icon={<AppstoreOutlined />}
              onClick={() => this.setState({ indexBtn: 1 })}
            />
            <Button
              type={indexBtn === 2 ? "primary" : "default"}
              icon={<BarsOutlined />}
              onClick={() => this.setState({ indexBtn: 2 })}
            />
          </div>
        </div>
        {indexBtn === 1 ? <Coll data={data} /> : <List data={data} />}
      </div>
    );
  }
}
export default index;
