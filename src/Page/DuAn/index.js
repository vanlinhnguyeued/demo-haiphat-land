import React, { Component } from "react";
import axios from "axios";
import Drops from "./Drops";
import Banner from "./Banner";
import TinTucQuanTam from "./TinTucQuanTam";
import RenderItem from "./RenderItem";
import "./styles.css";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      textTitle: "",
      DiaDiem: {
        ID: 0,
        Ten: "Địa Điểm",
      },
      LoaiBDS: {
        ID: 0,
        Ten: "Loại hình bất động sản",
      },
      DienTich: {
        ID: 0,
        Ten: "Diện tích",
      },
      PhongNgu: {
        ID: 0,
        Ten: "Số phòng ngủ",
      },
    };
  }

  setData = () => {
    axios
      .get(
        "http://trananh.citysoft.vn/api/project/getall?pageSize=6&pageIndex=1"
      )
      .then((res) => this.setState({ data: res.data }));
  };

  componentDidMount() {
    this.setData();
    document.title = "Danh sách dự án của HaiPhatLand";
  }
  render() {
    const {
      data,
      textTitle,
      DiaDiem,
      LoaiBDS,
      DienTich,
      PhongNgu,
    } = this.state;
    return (
      <div>
        <Banner />
        <div className="container_duan">
          <div className="box_tiemkiem">
            <div className="header_duan">
              <h2>Bạn muốn tìm ngôi nhà mơ ước ở đâu?</h2>
              <h4>Tìm kiếm dự án Bất động sản Hải Phát Land trên toàn quốc.</h4>
            </div>
            <div className="input_search_duan">
              <input
                className="input_search"
                placeholder="Tìm kiếm..."
                value={textTitle}
                onChange={(e) => this.setState({ textTitle: e.target.value })}
              />
            </div>
            <Drops
              DiaDiem={DiaDiem}
              LoaiBDS={LoaiBDS}
              DienTich={DienTich}
              PhongNgu={PhongNgu}
            />
          </div>
          <div className="content_duan">
            <div className="box_duan">
              {data.map((item, index) => (
                <RenderItem item={item} index={index} key={index} />
              ))}
            </div>
            {data.length > 6 && (
              <div className="div_btn_duan">
                <div className="btn_duan">
                  <span className="txt_btn_duan">Xem thêm</span>
                </div>
              </div>
            )}
          </div>
          <TinTucQuanTam />
        </div>
      </div>
    );
  }
}
export default index;
