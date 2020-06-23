import React, { Component } from "react";
import { topFunction } from "../../function/ToTop";
import Modal from "./Modal";
import Banner from "./Banner";
import GioiThieu from "./GioiThieu";
import ChuDauTu from "./ChuDauTu";
import NganHang from "./NganHang";
import UuDai from "./UuDai";
import TaiLieu from "./TaiLieu";
import Header from "./Header";
import "./styles.css";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idTab: 1,
      data: {
        DiaChi: "	Số 2, đường Phạm Văn Đồng, quận Sơn Trà, TP. Đà Nẵng",
        Lat: 16.0715501,
        Lng: 108.2282493,
        LatStreet: 16.0728636,
        Lngtreet: 108.231477,
        ChuDauTu: "Công ty Cổ phần PPC An Thịnh Đà Nẵng",
        LoaiHinh: "Condotel",
        DienTich: "22000",
        CoCauDienTich: "30m2 đến 110m2",
        QuyMoDuAn: "4 tòa tháp cao từ 48 đến 57 tầng",
        Gia: "Từ 2.8 - 11.6 tỷ",
        GioiThieu: "Đang cập nhật",
        TenDA: "Wyndham Soleil Danang",
        TienIch: [
          {
            ID: 1,
            Name: "Điểm đỗ trực thăng",
          },
          {
            ID: 2,
            Name: "Trung tâm Thương mại",
          },
          {
            ID: 3,
            Name: "Business Center",
          },
          {
            ID: 4,
            Name: "Bể bơi vô cực và Sky bar",
          },
          {
            ID: 5,
            Name: "Health Center and Gym",
          },
          {
            ID: 6,
            Name: "Nhà hàng",
          },
        ],
      },
    };
  }

  setTab = (idTab) => {
    this.setState({ idTab });
    topFunction();
  };
  componentDidMount() {
    const { data } = this.state;
    document.title = data.TenDA;
  }
  render() {
    const { data, idTab } = this.state;

    const arrayTTC = [
      {
        ID: 1,
        TieuDe: "Chủ đầu tư:",
        GiaTri: data.ChuDauTu,
      },
      {
        ID: 2,
        TieuDe: "Địa chỉ dự án:",
        GiaTri: data.DiaChi,
      },
      {
        ID: 3,
        TieuDe: "Loại hình sản phẩm:",
        GiaTri: data.LoaiHinh,
      },
      {
        ID: 4,
        TieuDe: "Tổng diện tích khu đất:",
        GiaTri: data.ChuDauTu,
      },
      {
        ID: 5,
        TieuDe: "Quy mô dự án:",
        GiaTri: data.QuyMoDuAn,
      },
      {
        ID: 6,
        TieuDe: "Cơ cấu diện tích:",
        GiaTri: data.CoCauDienTich,
      },
      {
        ID: 7,
        TieuDe: "Giá sản phẩm:",
        GiaTri: data.Gia,
      },
    ];

    const dataImg = [
      {
        src:
          "https://images.cenhomes.vn/2017/12/anh-duong-soleil-hinh-anh-2.jpg",
      },
      {
        src: "https://images.cenhomes.vn/2019/10/1571048673-slide-1.jpg",
      },
      {
        src: "https://images.cenhomes.vn/2019/10/1571048673-slide-5.jpg",
      },
      {
        src: "https://images.cenhomes.vn/2019/10/1571048673-slide-2.jpg",
      },
      {
        src: "https://images.cenhomes.vn/2019/10/1571048673-slide-3.jpg",
      },
      {
        src:
          "https://images.cenhomes.vn/2017/12/anh-duong-soleil-hinh-anh-6.jpg",
      },
    ];
    const matBang = [
      {
        src:
          "https://images.cenhomes.vn/2020/03/1585647274-mat-bang-tang-2-mipec-rubik360.jpg",
      },
      {
        src:
          "https://images.cenhomes.vn/2020/03/1585647457-mat-bang-tang-12a-mipec-rubik360.png",
      },
      {
        src:
          "https://images.cenhomes.vn/2020/03/1585647458-mat-bang-tang-33-mipec-rubik360.png",
      },
      {
        src:
          "https://images.cenhomes.vn/2020/03/1585647458-mat-bang-tang-34-mipec-rubik360.png",
      },
      {
        src:
          "https://images.cenhomes.vn/2020/03/1585647459-mat-bang-tang-35-mipec-rubik360.png",
      },
    ];

    const renderThongTin = () => {
      const { idTab } = this.state;
      switch (idTab) {
        case 2:
          return <ChuDauTu data={data} />;
        case 3:
          return <UuDai data={data} />;
        case 4:
          return <NganHang />;
        case 5:
          return <TaiLieu data={data} />;
        default:
          return <GioiThieu data={data} arrayTTC={arrayTTC} />;
      }
    };
    return (
      <div className="detailduan">
        {idTab === 1 && (
          <Banner data={dataImg} showModal={(e) => this.modal.showModal(e)} />
        )}
        <Header data={data} setTab={(e) => this.setTab(e)} idTab={idTab} />
        <div className="container_detailduan">{renderThongTin()}</div>
        <Modal
          dataImg={dataImg}
          data={data}
          ref={(e) => (this.modal = e)}
          dataMatBang={matBang}
        />
      </div>
    );
  }
}

export default index;
