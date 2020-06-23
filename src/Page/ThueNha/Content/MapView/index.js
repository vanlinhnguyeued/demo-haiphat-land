import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { Link } from "react-router-dom";
import { tiengVietKhongDau } from "../../../../function/KhongDau";
import { topFunction } from "../../../../function/ToTop";
import "./styles.css";

const {
  MarkerClusterer,
} = require("react-google-maps/lib/components/addons/MarkerClusterer");
const arrayMap = [
  {
    ID: 1,
    ImgUrl:
      "https://images.cenhomes.vn/2020/06/1591001586-09ce598a88df75812cce.jpg",
    DiaChi: "Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
    TieuDe: "Căn B2X15 tại dự án Imperia Garden, Nguyễn Huy Tưởng",
    TenKhuVuc: "Thành phố Hà Nội",
    Gia: "~3 tỷ",
    SoPN: 2,
    SoWC: 2,
    TenLoaiCH: "Căn hộ",
    is3D: true,
    lat: 16.0776468,
    lng: 108.2442905,
    DienTich: 70.8,
  },
  {
    ID: 2,
    ImgUrl:
      "https://images.cenhomes.vn/2020/06/1591001586-09ce598a88df75812cce.jpg",
    DiaChi: "Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
    TieuDe: "Căn B2X15 tại dự án Imperia Garden, Nguyễn Huy Tưởng",
    TenKhuVuc: "Thành phố Hà Nội",
    Gia: "~3 tỷ",
    SoPN: 2,
    SoWC: 2,
    TenLoaiCH: "Căn hộ",
    is3D: true,
    lat: 18.0776468,
    lng: 110.2442905,
    DienTich: 70.8,
  },
  {
    ID: 3,
    ImgUrl:
      "https://images.cenhomes.vn/2020/06/1591001586-09ce598a88df75812cce.jpg",
    DiaChi: "Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
    TieuDe: "Căn B2X15 tại dự án Imperia Garden, Nguyễn Huy Tưởng",
    TenKhuVuc: "Thành phố Hà Nội",
    Gia: "~3 tỷ",
    SoPN: 2,
    SoWC: 2,
    TenLoaiCH: "Căn hộ",
    is3D: true,
    lat: 10.0776468,
    lng: 100.2442905,
    DienTich: 70.8,
  },
  {
    ID: 4,
    ImgUrl:
      "https://images.cenhomes.vn/2020/06/1591001586-09ce598a88df75812cce.jpg",
    DiaChi: "Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
    TieuDe: "Căn B2X15 tại dự án Imperia Garden, Nguyễn Huy Tưởng",
    TenKhuVuc: "Thành phố Hà Nội",
    Gia: "~3 tỷ",
    SoPN: 2,
    SoWC: 2,
    TenLoaiCH: "Căn hộ",
    is3D: false,
    lat: 17.0776468,
    lng: 105.2442905,
    DienTich: 70.8,
  },
  {
    ID: 5,
    ImgUrl:
      "https://images.cenhomes.vn/2020/06/1591001586-09ce598a88df75812cce.jpg",
    DiaChi: "Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
    TieuDe: "Căn B2X15 tại dự án Imperia Garden, Nguyễn Huy Tưởng",
    TenKhuVuc: "Thành phố Hà Nội",
    Gia: "~3 tỷ",
    SoPN: 2,
    SoWC: 2,
    TenLoaiCH: "Căn hộ",
    is3D: false,
    lat: 11.0776468,
    lng: 103.2442905,
    DienTich: 70.8,
  },
  {
    ID: 6,
    ImgUrl:
      "https://images.cenhomes.vn/2020/06/1591001586-09ce598a88df75812cce.jpg",
    DiaChi: "Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
    TieuDe: "Căn B2X15 tại dự án Imperia Garden, Nguyễn Huy Tưởng",
    TenKhuVuc: "Thành phố Hà Nội",
    Gia: "~3 tỷ",
    SoPN: 2,
    SoWC: 2,
    TenLoaiCH: "Căn hộ",
    is3D: true,
    lat: 18.0776468,
    lng: 104.2442905,
    DienTich: 70.8,
  },
  {
    ID: 7,
    ImgUrl:
      "https://images.cenhomes.vn/2020/06/1591001586-09ce598a88df75812cce.jpg",
    DiaChi: "Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
    TieuDe: "Căn B2X15 tại dự án Imperia Garden, Nguyễn Huy Tưởng",
    TenKhuVuc: "Thành phố Hà Nội",
    Gia: "~3 tỷ",
    SoPN: 2,
    SoWC: 2,
    TenLoaiCH: "Căn hộ",
    is3D: true,
    lat: 15.2776468,
    lng: 107.5442905,
    DienTich: 70.8,
  },
  {
    ID: 8,
    ImgUrl:
      "https://images.cenhomes.vn/2020/06/1591001586-09ce598a88df75812cce.jpg",
    DiaChi: "Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
    TieuDe: "Căn B2X15 tại dự án Imperia Garden, Nguyễn Huy Tưởng",
    TenKhuVuc: "Thành phố Hà Nội",
    Gia: "~3 tỷ",
    SoPN: 2,
    SoWC: 2,
    TenLoaiCH: "Căn hộ",
    is3D: false,
    lat: 16.9776468,
    lng: 108.1442905,
    DienTich: 70.8,
  },
  {
    ID: 9,
    ImgUrl:
      "https://images.cenhomes.vn/2020/06/1591001586-09ce598a88df75812cce.jpg",
    DiaChi: "Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
    TieuDe: "Căn B2X15 tại dự án Imperia Garden, Nguyễn Huy Tưởng",
    TenKhuVuc: "Thành phố Hà Nội",
    Gia: "~3 tỷ",
    SoPN: 2,
    SoWC: 2,
    TenLoaiCH: "Căn hộ",
    is3D: true,
    lat: 16.5776468,
    lng: 108.7442905,
    DienTich: 70.8,
  },
  {
    ID: 10,
    ImgUrl:
      "https://images.cenhomes.vn/2020/06/1591001586-09ce598a88df75812cce.jpg",
    DiaChi: "Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
    TieuDe: "Biệt thự dãy TT5D khu đô thị Tây Nam Hồ Linh Đàm",
    TenKhuVuc: "Thành phố Hà Nội",
    Gia: "~22 tỷ",
    SoPN: 5,
    SoWC: 4,
    TenLoaiCH: "Biệt thự",
    is3D: true,
    lat: 17.0776468,
    lng: 106.2442905,
    DienTich: 70.8,
  },
  {
    ID: 11,
    ImgUrl:
      "https://images.cenhomes.vn/2020/06/1591001586-09ce598a88df75812cce.jpg",
    DiaChi: "Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
    TieuDe: "Biệt thự dãy TT5D khu đô thị Tây Nam Hồ Linh Đàm",
    TenKhuVuc: "Thành phố Hà Nội",
    Gia: "~22 tỷ",
    SoPN: 5,
    SoWC: 4,
    TenLoaiCH: "Biệt thự",
    is3D: false,
    lat: 15.0776468,
    lng: 108.2142905,
    DienTich: 70.8,
  },
  {
    ID: 12,
    ImgUrl:
      "https://images.cenhomes.vn/2020/06/1591001586-09ce598a88df75812cce.jpg",
    DiaChi: "Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
    TieuDe: "Căn B2X15 tại dự án Imperia Garden, Nguyễn Huy Tưởng",
    TenKhuVuc: "Thành phố Hà Nội",
    Gia: "~3 tỷ",
    SoPN: 2,
    SoWC: 2,
    TenLoaiCH: "Căn hộ",
    is3D: true,
    lat: 16.5776468,
    lng: 108.7342905,
    DienTich: 70.8,
  },
  {
    ID: 13,
    ImgUrl:
      "https://images.cenhomes.vn/2020/06/1591001586-09ce598a88df75812cce.jpg",
    DiaChi: "Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
    TieuDe: "Biệt thự dãy TT5D khu đô thị Tây Nam Hồ Linh Đàm",
    TenKhuVuc: "Thành phố Hà Nội",
    Gia: "~22 tỷ",
    SoPN: 5,
    SoWC: 4,
    TenLoaiCH: "Biệt thự",
    is3D: true,
    lat: 17.0776468,
    lng: 106.2242905,
    DienTich: 70.8,
  },
  {
    ID: 14,
    ImgUrl:
      "https://images.cenhomes.vn/2020/06/1591001586-09ce598a88df75812cce.jpg",
    DiaChi: "Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
    TieuDe: "Biệt thự dãy TT5D khu đô thị Tây Nam Hồ Linh Đàm",
    TenKhuVuc: "Thành phố Hà Nội",
    Gia: "~22 tỷ",
    SoPN: 5,
    SoWC: 4,
    TenLoaiCH: "Biệt thự",
    is3D: false,
    lat: 15.0776468,
    lng: 108.2542905,
    DienTich: 70.8,
  },
  {
    ID: 15,
    ImgUrl:
      "https://images.cenhomes.vn/2020/06/1591001586-09ce598a88df75812cce.jpg",
    DiaChi: "Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
    TieuDe: "Căn B2X15 tại dự án Imperia Garden, Nguyễn Huy Tưởng",
    TenKhuVuc: "Thành phố Hà Nội",
    Gia: "~3 tỷ",
    SoPN: 2,
    SoWC: 2,
    TenLoaiCH: "Căn hộ",
    is3D: true,
    lat: 16.5776468,
    lng: 108.3342905,
    DienTich: 70.8,
  },
  {
    ID: 16,
    ImgUrl:
      "https://images.cenhomes.vn/2020/06/1591001586-09ce598a88df75812cce.jpg",
    DiaChi: "Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
    TieuDe: "Biệt thự dãy TT5D khu đô thị Tây Nam Hồ Linh Đàm",
    TenKhuVuc: "Thành phố Hà Nội",
    Gia: "~22 tỷ",
    SoPN: 5,
    SoWC: 4,
    TenLoaiCH: "Biệt thự",
    is3D: true,
    lat: 17.0776468,
    lng: 106.1242905,
    DienTich: 70.8,
  },
  {
    ID: 17,
    ImgUrl:
      "https://images.cenhomes.vn/2020/06/1591001586-09ce598a88df75812cce.jpg",
    DiaChi: "Phường Tây Mỗ- Đại Mỗ, Quận Nam Từ Liêm, TP Hà Nội",
    TieuDe: "Biệt thự dãy TT5D khu đô thị Tây Nam Hồ Linh Đàm",
    TenKhuVuc: "Thành phố Hà Nội",
    Gia: "~22 tỷ",
    SoPN: 5,
    SoWC: 4,
    TenLoaiCH: "Biệt thự",
    is3D: false,
    lat: 15.0776468,
    lng: 108.3542905,
    DienTich: 70.8,
  },
];

const defaultOptions = {
  mapTypeControlOptions: {
    mapTypeIds: ["roadmap", "satellite", "hybrid"],
  },
  fullscreenControl: true,
  streetViewControl: true,
  mapTypeControl: true,
};

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDu0pk1Gt4H4Fs9tGxN1eVN0wiQ7HGoAxo&callback=initMap",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 16.0776468, lng: 108.2442905 }}
    defaultOptions={defaultOptions}
    onClick={() => props.setShowInfo(0)}
  >
    <MarkerClusterer averageCenter enableRetinaIcons gridSize={100}>
      {arrayMap.map((item, index) => (
        <Marker
          key={index}
          position={{ lat: item.lat, lng: item.lng }}
          title={item.TieuDe}
          onClick={() => props.setShowInfo(item.ID)}
          animation={google.maps.Animation.DROP}
          labelClass="label-title"
          clickable
          labelStyle={{ width: 70, height: 30, backgroundColor: "#ff0000" }}
          labelInBackground={true}
          icon={
            "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2238%22%20height%3D%2238%22%20viewBox%3D%220%200%2038%2038%22%3E%3Cpath%20fill%3D%22%23f48122%22%20stroke%3D%22%23f48122%22%20stroke-width%3D%223%22%20d%3D%22M34.305%2016.234c0%208.83-15.148%2019.158-15.148%2019.158S3.507%2025.065%203.507%2016.1c0-8.505%206.894-14.304%2015.4-14.304%208.504%200%2015.398%205.933%2015.398%2014.438z%22%2F%3E%3Ctext%20transform%3D%22translate%2819%2018.5%29%22%20fill%3D%22%23fff%22%20style%3D%22font-family%3A%20Arial%2C%20sans-serif%3Bfont-weight%3Abold%3Btext-align%3Acenter%3B%22%20font-size%3D%2212%22%20text-anchor%3D%22middle%22%3E" +
            item.Gia +
            "%3C%2Ftext%3E%3C%2Fsvg%3E"
          }
        >
          {props.showInfo == item.ID ? (
            <InfoWindow zIndex={20}>
              <div>
                <div style={{ display: "flex", width: 300 }}>
                  <img
                    src={item.ImgUrl}
                    width={100}
                    style={{ marginRight: 15 }}
                  />
                  <div>
                    <Link
                      to={{
                        pathname: `/thue-nha/${tiengVietKhongDau(
                          item.TieuDe
                        ).replace(/ /g, "-")}`,
                        state: {
                          item,
                        },
                      }}
                    >
                      <h4 className="a-title">{item.TieuDe}</h4>
                    </Link>
                    <span style={{ fontSize: 12 }}>{item.DiaChi}</span>
                    <br />
                    <span style={{ fontWeight: "bold", fontSize: 12 }}>
                      {item.DienTich} m2 | {item.SoPN} PN | {item.SoWC} WC
                    </span>
                  </div>
                </div>
              </div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </MarkerClusterer>
  </GoogleMap>
));

class index extends React.PureComponent {
  state = {
    showInfo: 0,
  };

  setShowInfo = async (index) => {
    await this.setState({ showInfo: 0 }, () =>
      this.setState({ showInfo: index })
    );
  };

  setShowInfoNull = () => {
    this.setState({ showInfo: 0 });
  };
  render() {
    return (
      <div className="map_nhale">
        <MyMapComponent
          setShowInfo={this.setShowInfo}
          showInfo={this.state.showInfo}
          setShowInfoNull={this.setShowInfoNull}
        />
      </div>
    );
  }
}
export default index;
