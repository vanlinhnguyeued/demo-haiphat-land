import React, { Component } from "react";
import { Link } from "react-router-dom";
import { tiengVietKhongDau } from "../../function/KhongDau";
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
      <div className="item_duan" data-aos="fade-up">
        <div style={{ width: "100%", height: "100%" }}>
          <div className="div_img_duan">
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
              <img src={item.Avatar} className="img_duan" />
            </Link>
            <div
              className={isQuanTam ? "icon_qt_duan_hover" : "icon_qt_duan"}
              onClick={this.hanldeQuanTam}
            >
              <i className="fa fa-heart" />
            </div>
          </div>
          <div className="item_duan_child">
            <h2>
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
                {item.TenDA.replace("\r\n", "")}
              </Link>
            </h2>
            <p className="diachi_item_duan">
              <i className="fa fa-map-marker" />
              {index === 0
                ? "Địa chỉ nằm ở đây và ko nói gì hơn nửa từ từ rồi sẻ có đang cập nhật api"
                : "Địa chỉ ở đây"}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default RenderItem;
