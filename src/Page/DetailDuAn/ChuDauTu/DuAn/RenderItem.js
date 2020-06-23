import React, { Component } from "react";
import { Link } from "react-router-dom";
import { tiengVietKhongDau } from "../../../../function/KhongDau";
import { topFunction } from "../../../../function/ToTop";

import "./styles.css";

class RenderItem extends Component {
  render() {
    const { item, index } = this.props;
    return (
      <div className="item_duan_chudautu">
        <div className="item_img_duan_chudautu">
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
            <img src={item.Avatar} className="img_duan_chudautu" />
          </Link>
        </div>
        <div className="item_thongtin_duan_chudautu">
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
