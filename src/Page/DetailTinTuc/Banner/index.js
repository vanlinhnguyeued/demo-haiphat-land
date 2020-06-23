import React, { Component } from "react";
import "./styles.css";
class index extends Component {
  render() {
    return (
      <div className="div_img_banner_detailtintuc">
        <img
          src="http://haiphatland.com.vn/public/static/frontend/images/graphics/banner_folder2.jpg"
          className="img_banner_detailtintuc"
        />
        <div className="row_breadcrumb_detailtintuc">
          <h2>
            <a href="/">Trang chủ</a>
          </h2>
          <h2 style={{ padding: "0 10px" }}>/</h2>
          <h2>
            <a href="/tin-tuc">Tin tức</a>
          </h2>
        </div>
        {/* <h2 className="title_breadcrumb_detailtintuc">
          {this.props.title || "Tin tức"}
        </h2> */}
      </div>
    );
  }
}
export default index;
