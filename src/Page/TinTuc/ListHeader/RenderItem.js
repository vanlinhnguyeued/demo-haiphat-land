import React, { Component } from "react";
import { Link } from "react-router-dom";
import { tiengVietKhongDau } from "../../../function/KhongDau";
import { topFunction } from "../../../function/ToTop";
import moment from "moment";
class RenderItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div style={{ width: "100%", height: "100%", padding: "0 10px" }}>
        <Link
          to={{
            pathname: `/tin-tuc/${tiengVietKhongDau(item.Subject).replace(
              / /g,
              "-"
            )}`,
            state: {
              item,
            },
          }}
        >
          <div className="img_renderitem_listheader">
            <img src={item.Avatar} />
          </div>
        </Link>
        <Link
          to={{
            pathname: `/tin-tuc/${tiengVietKhongDau(item.Subject).replace(
              / /g,
              "-"
            )}`,
            state: {
              item,
            },
          }}
        >
          <h2 className="title_renderitem_listheader">{item.Subject}</h2>
        </Link>
        <p style={{ marginBottom: 5 }}>{moment(item.DatePost).format("L")}</p>
      </div>
    );
  }
}
export default RenderItem;
