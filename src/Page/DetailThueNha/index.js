import React, { Component } from "react";
import BieuDo from "../GoogleMap/MapView";
import Modal from "./Modal";
import Banner from "./Banner";
import BoxLienHe from "./BoxLienHe";
import NhaLeGanDay from "./NhaLeGanDay";
import "./styles.css";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        TieuDe: "Căn B2X15 tại dự án Imperia Garden, Nguyễn Huy Tưởng",
        MaBDS: "00027/2019/HĐT-BĐSRL",
        DiaChi: "Số 203 Nguyễn Huy Tưởng, Thanh Xuân Trung, Thanh Xuân, Hà Nội",
        DienTich: 66.3,
        SoPN: 2,
        SoWC: 2,
        TinhHinhNoiThat: "Đầy đủ nội thất",
        LoaiChuQuyen: "Sổ hồng",
        ThoiGianGiao: "Sau ký HĐMB",
        Gia: "6,500,000,000 VND",
        TrangThai: "Chưa bán",
        MoTa:
          "Dự án Imperia Garden được thiết kế thông minh sáng tạo giúp mọi căn phòng đều được hưởng ánh sáng và gió trời tự nhiên, bếp được thiết kế để có logia thoáng không gây bí mùi cho căn hộ, phòng ăn và phòng khách thông nhau tạo ra một khoảng sinh hoạt chung dài và rộng rất phù hợp với gia đình có trẻ con và đó cũng là không gian chung để những dịp tụ họp được trọn vẹn.",
        TienIch: [
          {
            ID: 1,
            Ten: "Trung tâm thương mại",
          },
          {
            ID: 2,
            Ten: "Trường học các cấp",
          },
          {
            ID: 3,
            Ten: "Bể bơi",
          },
          {
            ID: 4,
            Ten: "Nhà hàng",
          },
          {
            ID: 5,
            Ten: "Khu vui chơi",
          },
          {
            ID: 6,
            Ten: "Tenic",
          },
        ],
        Lat: 20.9972163,
        Lng: 105.8006985,
        LatStreet: 20.9982826,
        Lngtreet: 105.8033634,
        DiaDiemLC: [
          {
            ID: 1,
            KhoangCach: "1 km",
            Ten: "Công viên Thanh Xuân",
          },
          {
            ID: 2,
            KhoangCach: "1,5 km",
            Ten: "Big C Thăng Long",
          },
        ],
        LuotQuanTam: 300,
        SoPK: 1,
        LoGia: 1,
      },
      ceo: {
        Ten: "Đại lý HAI PHAT LAND",
        Avatar:
          "http://haiphatland.com.vn/public/static/frontend/css/images/icons/fanvicon.jpg",
        Email: "cskh@haiphatland.com.vn",
        DienThoai: "1900 2167",
      },
    };
  }
  componentDidMount() {
    const { data } = this.state;
    document.title = data.TieuDe;
  }
  render() {
    const { data, ceo } = this.state;

    const arrayTTC = [
      {
        ID: 1,
        TieuDe: "Mã BĐS",
        GiaTri: data.MaBDS,
      },
      {
        ID: 2,
        TieuDe: "Tình hình nội thất",
        GiaTri: data.TinhHinhNoiThat,
      },
      {
        ID: 3,
        TieuDe: "Loại chủ quyền",
        GiaTri: data.LoaiChuQuyen,
      },
      {
        ID: 4,
        TieuDe: "Thời gian giao nhà",
        GiaTri: data.ThoiGianGiao,
      },
      {
        ID: 5,
        TieuDe: "Giá",
        GiaTri: data.Gia,
      },
      {
        ID: 6,
        TieuDe: "Diện tích",
        GiaTri: data.DienTich,
      },
      {
        ID: 7,
        TieuDe: "Số phòng ngủ",
        GiaTri: data.SoPN,
      },
      {
        ID: 8,
        TieuDe: "Số phòng khách",
        GiaTri: data.SoPK,
      },
      {
        ID: 9,
        TieuDe: "Số phòng WC",
        GiaTri: data.SoWC,
      },
      {
        ID: 10,
        TieuDe: "Lô gia",
        GiaTri: data.LoGia,
      },
    ];

    const dataImg = [
      {
        src: "https://images.cenhomes.vn/2020/06/1591000834-2.png",
      },
      {
        src: "https://images.cenhomes.vn/2020/06/1591000833-1.png",
      },
      {
        src: "https://images.cenhomes.vn/2020/06/1591000835-5.png",
      },
      {
        src: "https://images.cenhomes.vn/2020/06/1591000834-3.png",
      },
      {
        src: "https://images.cenhomes.vn/2020/06/1591000835-5.png",
      },
      {
        src: "https://images.cenhomes.vn/2020/06/1591000835-4.png",
      },
    ];

    return (
      <div className="detailthuenha">
        <Banner data={dataImg} showModal={(e) => this.modal.showModal(e)} />
        <div className="container_detailthuenha">
          <h4>{data.TieuDe}</h4>
          <p className="diachi_detailthuenha">
            <i className="fa fa-map-marker" /> {data.DiaChi}
          </p>
          <p className="gia_detailthuenha">
            {data.Gia}
            <span>{data.TrangThai}</span>
          </p>
          <div className="content_detailthuenha">
            <div className="thongtin_detailthuenha">
              <h4>Thông tin chính</h4>
              <div className="row_tinchinh_detailthuenha">
                <div className="col1_tinchinh_detailthuenha">
                  {arrayTTC
                    .filter((e) => e.ID <= 5)
                    .map((item, index) => (
                      <div className="item_tinchinh_detailthuenha" key={index}>
                        <div className="title_item_tinchinh_detailthuenha">
                          {item.TieuDe}
                        </div>
                        <div
                          style={{
                            fontWeight: "bold",
                            color: "black",
                            flex: 1,
                          }}
                        >
                          {item.GiaTri}
                        </div>
                      </div>
                    ))}
                </div>
                <div className="col2_tinchinh_detailthuenha">
                  {arrayTTC
                    .filter((e) => e.ID > 5)
                    .map((item, index) => (
                      <div className="item_tinchinh_detailthuenha" key={index}>
                        <div className="title_item_tinchinh_detailthuenha">
                          {item.TieuDe}
                        </div>
                        <div
                          style={{
                            fontWeight: "bold",
                            color: "black",
                            flex: 1,
                          }}
                        >
                          {item.GiaTri}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <h4>Mô tả</h4>
              <p>{data.MoTa}</p>
              <h4>Tiện ích căn hộ</h4>
              <div className="row_tienich_detailthuenha">
                {data.TienIch.map((item, index) => (
                  <div className="item_tienich_detailthuenha" key={index}>
                    <i className="fa fa-check" />
                    <span>{item.Ten}</span>
                  </div>
                ))}
              </div>
              <h4>Bản đồ khu vực lân cận và dọc đường</h4>
              <div className="row_bando_detailthuenha">
                <div className="col1_bando_detailthuenha">
                  <BieuDo
                    lat={data.Lat}
                    lng={data.Lng}
                    TieuDe={data.DiaChi}
                    mapTypeID="roadmap"
                  />
                </div>
                <div className="col2_bando_detailthuenha">
                  {data.DiaDiemLC.map((item, index) => (
                    <div className="item_diadialc_detailthuenha" key={index}>
                      <h2>{item.KhoangCach}</h2>
                      <p>{item.Ten}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lienhe_detailthuenha">
              <BoxLienHe ceo={ceo} data={data} />
            </div>
          </div>
          <NhaLeGanDay data={data} />
        </div>
        <Modal dataImg={dataImg} data={data} ref={(e) => (this.modal = e)} />
      </div>
    );
  }
}

export default index;
