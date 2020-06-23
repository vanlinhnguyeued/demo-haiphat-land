import React, { Component } from "react";
import { Link } from "react-router-dom";
import { tiengVietKhongDau } from "../../function/KhongDau";
import "./styles.css";

class RenderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
    const { item, index } = this.props;
    return (
      <div className="item_duan_home" data-aos={this.aosResposive()}>
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
