import React, { Component } from "react";
import BieuDo from "../../GoogleMap/MapView";
import BoxLienHe from "./BoxLienHe";
import "./styles.css";
class GioiThieu extends Component {
  render() {
    const { data, arrayTTC } = this.props;
    return (
      <div className="gioithieu_detailduan">
        <div className="thongtin_gioithieu">
          <h4>Tổng quan dự án</h4>
          {arrayTTC.map((item, index) => (
            <div className="item_tinchinh_gioithieu" key={index}>
              <div className="title_item_tinchinh_gioithieu">{item.TieuDe}</div>
              <div style={{ fontWeight: "bold", color: "black", flex: 1 }}>
                {item.GiaTri}
              </div>
            </div>
          ))}
          <h4 style={{ marginTop: 20 }}>Giới thiệu</h4>
          <p>{data.GioiThieu}</p>
          <h4 style={{ marginTop: 20 }}>Tiện ích dự án</h4>
          <div className="row_tienich_gioithieu">
            {data.TienIch.map((item, index) => (
              <div className="item_tienich_gioithieu" key={index}>
                <i className="fa fa-check" />
                <span>{item.Name}</span>
              </div>
            ))}
          </div>
          <h4 style={{ marginTop: 20 }}>Vị trí dự án</h4>
          <div className="row_bando_gioithieu">
            <BieuDo
              lat={data.Lat}
              lng={data.Lng}
              TieuDe={data.DiaChi}
              mapTypeID="roadmap"
            />
          </div>
        </div>
        <div className="lienhe_gioithieu">
          <BoxLienHe data={data} />
        </div>
      </div>
    );
  }
}
export default GioiThieu;
