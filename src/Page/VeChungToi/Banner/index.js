import React, { Component } from "react";
import "./styles.css";
class index extends Component {
  render() {
    return (
      <div className="div_img_banner_vechungtoi">
        <img
          src="http://haiphatland.com.vn/public/static/frontend/images/graphics/banner_folder.jpg"
          className="img_banner_vechungtoi"
        />
        <h2>VỀ CHÚNG TÔI</h2>
        <a
          target="_blank"
          href="http://haiphatland.com.vn/public/uploads/documents/2019/12/06/5dea005f846d035518374047893.pdf"
        >
          <i className="fa fa-download" />
          <p>PROFILE HẢI PHÁT LAND</p>
        </a>
      </div>
    );
  }
}
export default index;
