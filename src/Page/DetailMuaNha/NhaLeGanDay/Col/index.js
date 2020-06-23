import React, { Component } from "react";
import RenderItem from "./renderItem";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        },
        {
          ID: 5,
          Avatar:
            "https://chungcuvinaconex2.com/wp-content/uploads/z938728466972_c1549f99449d3fe4132bfceeff8e9d37.jpg",
          TenCH: "Căn hộ A1006 - TÒA S1",
          DiaChi: "Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
          Gia: "~2,1 Tỷ",
          PhongNgu: 4,
          DienTich: "48.5m2",
          WC: 3,
        },
        {
          ID: 6,
          Avatar:
            "https://chungcuvinaconex2.com/wp-content/uploads/z938728466972_c1549f99449d3fe4132bfceeff8e9d37.jpg",
          TenCH:
            "Căn hộ A1006 - TÒA S1 - Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
          DiaChi: "Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
          Gia: "~1,6 Tỷ",
          PhongNgu: 3,
          DienTich: "36.8m2",
          WC: 2,
        },
        {
          ID: 7,
          Avatar:
            "https://chungcuvinaconex2.com/wp-content/uploads/z938728466972_c1549f99449d3fe4132bfceeff8e9d37.jpg",
          TenCH: "Căn hộ A1007 - TÒA S1",
          DiaChi: "Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
          Gia: "~1,9 Tỷ",
          PhongNgu: 4,
          DienTich: "43.5m2",
          WC: 3,
        },
        {
          ID: 8,
          Avatar:
            "https://chungcuvinaconex2.com/wp-content/uploads/z938728466972_c1549f99449d3fe4132bfceeff8e9d37.jpg",
          TenCH: "Căn hộ A1008 - TÒA S1",
          DiaChi: "Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
          Gia: "~1,1 Tỷ",
          PhongNgu: 2,
          DienTich: "30.6m2",
          WC: 1,
        },
      ],
    };
  }
  render() {
    const { data } = this.props;
    return (
      <div className="col_nhaleganday_detailnhale">
        <div className={"content_col_nhaleganday_detailnhale"}>
          {data.map((item, index) => (
            <RenderItem item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    );
  }
}
export default index;
