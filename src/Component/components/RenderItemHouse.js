import React, { Component } from "react";
import { Link } from "react-router-dom";
import { tiengVietKhongDau } from "../../function/KhongDau";
import "./styles.css";
import iconArea from "../../assets/iconArea.svg";
import iconBath from "../../assets/iconBath.svg";
import iconBed from "../../assets/iconBed.svg";
class RenderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isQuanTam: true,
      width: 1024,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener(
      "resize",
      this.updateWindowDimensions.bind(this)
    );
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  aosResposive = () => {
    let aos = "fade-right";
    if (this.state.width > 853) {
      if (this.props.index % 8 < 4) aos = "fade-left";
      else aos = "fade-right";
    }
    if (this.state.width < 853) {
      if (this.props.index % 4 < 2) aos = "fade-left";
      else aos = "fade-right";
    }
    if (this.state.width < 540) {
      if (this.props.index % 2 < 1) aos = "fade-left";
      else aos = "fade-right";
    }
    return aos;
  };
  hanldeQuanTam = () => {
    if (this.props.isDelete) {
      this.props.onLikeItem(this.props.item);
    } else {
      this.setState({ isQuanTam: !this.state.isQuanTam });
    }
  };
  render() {
    const { isQuanTam } = this.state;
    const { item, index } = this.props;

    return (
      <div className="item_nhale_home" data-aos={this.aosResposive()}>
        <div className="item_img_nhale_home">
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
            <img src={item.Avatar} className="img_nhale_home" />
          </Link>
          <div
            className={
              isQuanTam ? "icon_qt_nhale_home_hover" : "icon_qt_nhale_home"
            }
            onClick={this.hanldeQuanTam}
          >
            <i className="fa fa-heart" />
          </div>
        </div>
        <div className="item_thongtin_nhale_home">
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
