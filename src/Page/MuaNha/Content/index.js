import React from "react";
import { Pagination, Button } from "antd";
import {
  AppstoreOutlined,
  BarsOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import Coll from "./Col";
import List from "./List";
import MapView from "./MapView";
import { topFunction } from "../../../function/ToTop";
import "./styles.css";
class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 50,
      indexBtn: 1,
      isMap: true,
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
          TenKhuVuc: "Thành phố Hà Nội",
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
          TenKhuVuc: "Thành phố Hà Nội",
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
          TenKhuVuc: "Thành phố Hà Nội",
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
          TenKhuVuc: "Thành phố Hà Nội",
        },
      ],
    };
    this.page = 1;
  }

  setData = () => {};

  componentDidMount() {
    this.setData();
  }

  handlePagination = (page, pageSize) => {
    this.page = page;
    this.setData();
    topFunction();
  };

  render() {
    const { data, count, indexBtn, isMap } = this.state;

    return (
      <div className="div-rowtt">
        <div className={isMap ? "thuenha_col" : "thuenha_list"}>
          <div className="div-header">
            <div className="div-cn">
              <div className="div-button">
                <Button
                  type={indexBtn === 1 ? "primary" : "default"}
                  icon={<AppstoreOutlined />}
                  onClick={() => this.setState({ indexBtn: 1, isMap: true })}
                />
                <Button
                  type={indexBtn === 2 ? "primary" : "default"}
                  icon={<BarsOutlined />}
                  onClick={() => this.setState({ indexBtn: 2, isMap: true })}
                />
              </div>
              <div className="div-button2" style={{ marginLeft: 10 }}>
                <Button
                  type={isMap ? "primary" : "default"}
                  icon={<EnvironmentOutlined />}
                  onClick={() => this.setState({ isMap: !isMap })}
                />
              </div>
            </div>
          </div>
          <div className="div-thongtin">
            {indexBtn == 1 ? (
              <Coll isMap={isMap} data={data} />
            ) : (
              <List data={data} />
            )}
            <div className="div_pagination_nhale">
              <Pagination
                defaultCurrent={1}
                total={30}
                onChange={(page, pageSize) =>
                  this.handlePagination(page, pageSize)
                }
              />
            </div>
          </div>
        </div>
        <div className={isMap ? "map_show" : "map_hide"}>
          <MapView />
        </div>
      </div>
    );
  }
}
export default index;
