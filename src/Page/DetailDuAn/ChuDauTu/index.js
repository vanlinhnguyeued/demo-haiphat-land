import React, { Component } from "react";
import BoxLienHe from "./BoxLienHe";
import SoLuoc from "./SoLuoc";
import DuAn from "./DuAn";
import "./styles.css";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        TenCDT: "Công ty Cổ phần PPC An Thịnh Đà Nẵng",
        soLuoc: "Đang cập nhật",
      },
      idTab: 0,
    };
  }

  setTab = (idTab) => {
    this.setState({ idTab });
  };

  render() {
    const { data, idTab } = this.state;
    return (
      <div className="chudautu_detailduan">
        <div className="thongtin_chudautu">
          <h2 className="ten_chudautu">{data.TenCDT}</h2>
          {idTab === 0 ? <SoLuoc /> : <DuAn />}
        </div>
        <div className="lienhe_chudautu">
          <BoxLienHe setTab={(e) => this.setTab(e)} />
        </div>
      </div>
    );
  }
}
export default index;
