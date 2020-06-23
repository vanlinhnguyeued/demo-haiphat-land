import React, { Component } from "react";
import Banner from "./Banner";
import Content from "./Content";
class index extends Component {
  componentDidMount() {
    document.title = "Mua nhà - Mua chung cư tại HaiPhatLand";
  }
  render() {
    return (
      <div style={{ padding: 15, backgroundColor: "var(--mainBG)" }}>
        <Banner />
        <Content />
      </div>
    );
  }
}
export default index;
