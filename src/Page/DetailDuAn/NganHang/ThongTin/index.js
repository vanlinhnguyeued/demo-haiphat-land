import React, { Component } from "react";
import numeral from "numeral";
import { palette } from "../palette";
import "./styles.css";
class index extends Component {
  render() {
    const { traTruoc, tienVay, tongLai, tongTien } = this.props;
    return (
      <div className="container_thongtin_nganhang">
        <p>Tiền trả trước:</p>
        <h2 style={{ color: palette[0] }}>{numeral(traTruoc).format("0,0")}</h2>
        <p>Tiền vay ngân hàng:</p>
        <h2 style={{ color: palette[1] }}>{numeral(tienVay).format("0,0")}</h2>
        <p>Tiền lãi vay:</p>
        <h2 style={{ color: palette[2] }}>{numeral(tongLai).format("0,0")}</h2>
        <p>Tổng tiền:</p>
        <h2 style={{ color: palette[3] }}>{numeral(tongTien).format("0,0")}</h2>
      </div>
    );
  }
}
export default index;
