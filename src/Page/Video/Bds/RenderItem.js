import React, { Component } from "react";
import "./styles.css";

class RenderItem extends Component {
  constructor(props) {
    super(props);
  }

  handleItem = (item) => () => {
    window.scrollTo(0, 0);
    var classStick = document.getElementsByClassName("sticky");
    classStick[0].style.display = "inherit";
    this.props.setUrl(item.VideoUrl);
  };

  render() {
    const { item, index } = this.props;
    return (
      <div className="item_bds_video" data-aos="fade-up">
        <div className="item_img_bds_video">
          <a
            target={item.Type === 2 ? "_blank" : "_self"}
            href={item.Type === 2 ? item.VideoUrl : "#"}
            onClick={item.Type === 1 ? this.handleItem(item) : () => {}}
          >
            <img src={item.ImgUrl} className="img_bds_video" />
          </a>
        </div>
        <div className="item_thongtin_bds_video">
          <a
            className="title_item_thongtin_bds_video"
            target={item.Type === 2 ? "_blank" : "_self"}
            href={item.Type === 2 ? item.VideoUrl : "#"}
            onClick={item.Type === 1 ? this.handleItem(item) : () => {}}
          >
            <h2>{item.TieuDe}</h2>
            <p>{item.TenDA}</p>
          </a>
        </div>
      </div>
    );
  }
}
export default RenderItem;
