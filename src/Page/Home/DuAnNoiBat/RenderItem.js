import React, { Component } from "react";
import { Link } from "react-router-dom";
import { tiengVietKhongDau } from "../../../function/KhongDau";
import { topFunction } from "../../../function/ToTop";

import "./styles.css";

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
    const { item, index } = this.props;
    return (
      <div className="item_duan_home" data-aos="fade-up">
        <div className="item_img_duan_home">
          <Link
            to={{
              pathname: `/du-an/${tiengVietKhongDau(item.TenDA).replace(
                / /g,
                "-"
              )}`,
              state: {
                item,
              },
            }}
          >
            <img src={item.Avatar} className="img_duan_home" />
          </Link>
          <div
            className={
              isQuanTam ? "icon_qt_duan_home_hover" : "icon_qt_duan_home"
            }
            onClick={this.hanldeQuanTam}
          >
            <i className="fa fa-heart" />
          </div>
        </div>
        <div className="item_thongtin_duan_home">
          <Link
            to={{
              pathname: `/du-an/${tiengVietKhongDau(item.TenDA).replace(
                / |,/g,
                "-"
              )}`,
              state: {
                item,
              },
            }}
          >
            <h2 className="title_item_thongtin_duan">{item.TenDA}</h2>
          </Link>
          <p className="diachi_item_thongtin_duan">
            <i className="fa fa-map-marker" />
            Địa chỉ ở đây
          </p>
        </div>
      </div>
    );
  }
}
export default RenderItem;
