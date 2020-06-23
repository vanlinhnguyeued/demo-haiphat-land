import React, { Component } from "react";
import { Link } from "react-router-dom";
import { tiengVietKhongDau } from "../../../../function/KhongDau";
import { topFunction } from "../../../../function/ToTop";
import "./styles.css";
import iconArea from "../../../../assets/iconArea.svg";
import iconBath from "../../../../assets/iconBath.svg";
import iconBed from "../../../../assets/iconBed.svg";

class RenderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isQuanTam: false,
    };
  }

  hanldeQuanTam = () => {
    this.setState({ isQuanTam: !this.state.isQuanTam });
  };
  render() {
    const { isQuanTam } = this.state;
    const { item } = this.props;
    return (
      <div className="item_nhale">
        <div className="item_img_nhale">
          <Link
            to={{
              pathname: `/mua-nha/${tiengVietKhongDau(item.TenCH).replace(
                / /g,
                "-"
              )}`,
              state: {
                item,
              },
            }}
          >
            <img src={item.Avatar} className="img_nhale" />
          </Link>
          <div
            className={isQuanTam ? "icon_qt_nhale_hover" : "icon_qt_nhale"}
            onClick={this.hanldeQuanTam}
          >
            <i className="fa fa-heart" />
          </div>
        </div>
        <div className="item_thongtin_nhale">
          <Link
            to={{
              pathname: `/mua-nha/${tiengVietKhongDau(item.TenCH).replace(
                / |,/g,
                "-"
              )}`,
              state: {
                item,
              },
            }}
          >
            <h2 className="title_item_thongtin_nhale">{item.TenCH}</h2>
          </Link>
          <p className="diachi_item_thongtin_nhale">
            <i className="fa fa-map-marker" />
            {item.DiaChi}
          </p>
          <p className="gia_item_thongtin_nhale">Giá niêm yết: {item.Gia}</p>
          <div className="sl_item_thongtin_nhale">
            <div>
              <img src={iconBed} style={{ height: 18, width: 18 }} />
              <span>{item.PhongNgu}</span>
            </div>
            <div>
              <img src={iconBath} style={{ height: 20, width: 20 }} />
              <span>{item.WC}</span>
            </div>
            <div>
              <img src={iconArea} style={{ height: 17, width: 17 }} />
              <span>{item.DienTich}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RenderItem;
