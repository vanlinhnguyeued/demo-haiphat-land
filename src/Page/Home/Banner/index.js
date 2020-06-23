import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import { Dropdown, Input } from "antd";
import history from "../../../history";
import { tiengVietKhongDau } from "../../../function/KhongDau";
import "./styles.css";
const { Search } = Input;
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      idSearch: 1,
      placeholder: "Tìm kiếm dự án",
      text: "",
      data: [],
      dataDA: [
        {
          ID: 1,
          Ten: "DƯƠNG KINH NEW CITY",
          DiaChi: "Đường Mạc Đăng Doanh, P.Anh Dũng, Dương Kinh, Hải Phòng",
        },
        {
          ID: 2,
          Ten: "KHU ĐÔ THỊ DĨNH TRÌ",
          DiaChi: "Tỉnh lộ 299, xã Dĩnh Trì, TP. Bắc Giang",
        },
        {
          ID: 3,
          Ten: "THE PHOENIX GARDEN",
          DiaChi: "Thị trấn Phùng, Đan Phượng, Hà Nội",
        },
        {
          ID: 4,
          Ten: "DREAM CENTER HOME",
          DiaChi: "Chung cư 282 Nguyễn Huy Tưởng",
        },
        {
          ID: 5,
          Ten: "THE ARENA CAM RANH",
          DiaChi: "Thành phố Cam Ranh - Khánh Hòa",
        },
      ],
      dataDA: [
        {
          ID: 1,
          Ten: "DƯƠNG KINH NEW CITY",
          DiaChi: "Đường Mạc Đăng Doanh, P.Anh Dũng, Dương Kinh, Hải Phòng",
        },
        {
          ID: 2,
          Ten: "KHU ĐÔ THỊ DĨNH TRÌ",
          DiaChi: "Tỉnh lộ 299, xã Dĩnh Trì, TP. Bắc Giang",
        },
        {
          ID: 3,
          Ten: "THE PHOENIX GARDEN",
          DiaChi: "Thị trấn Phùng, Đan Phượng, Hà Nội",
        },
        {
          ID: 4,
          Ten: "DREAM CENTER HOME",
          DiaChi: "Chung cư 282 Nguyễn Huy Tưởng",
        },
        {
          ID: 5,
          Ten: "THE ARENA CAM RANH",
          DiaChi: "Thành phố Cam Ranh - Khánh Hòa",
        },
      ],
      dataNhaBan: [
        {
          ID: 1,
          Ten: "Căn hộ 105, Bạch Đằng",
          DiaChi: "Đường Bạch Đằng",
        },
        {
          ID: 2,
          Ten: "Nhà cấp 4",
          DiaChi: "101 Tôn Đức Thắng, Đà Nẵng",
        },
        {
          ID: 3,
          Ten: "Biệt thự cao cấp",
          DiaChi: "402 Hoàng Hoa Thám",
        },
        {
          ID: 4,
          Ten: "Nhà Hàng Bún Đậu",
          DiaChi: "282 Nguyễn Huy Tưởng",
        },
        {
          ID: 5,
          Ten: "Căn hộ A80",
          DiaChi: "Thành phố Cam Ranh - Khánh Hòa",
        },
      ],
      dataThueNha: [
        {
          ID: 1,
          Ten: "Căn hộ 101, Chung Cư Nguyễn Lương Bằng",
          DiaChi: "Đường Nguyễn Lương Bằng",
        },
        {
          ID: 2,
          Ten: "Quán cafe AFin",
          DiaChi: "101 Tôn Đức Thắng, Đà Nẵng",
        },
        {
          ID: 3,
          Ten: "Nhà trọ cao cấp",
          DiaChi: "101/20 Hai Bà Trưng",
        },
        {
          ID: 4,
          Ten: "Nhà cấp 4",
          DiaChi: "160 Nguyễn Huy Tưởng",
        },
        {
          ID: 5,
          Ten: "Căn hộ A80",
          DiaChi: "Thành phố Cam Ranh - Khánh Hòa",
        },
      ],
    };
  }

  onVisibleChange = (visible) => {
    alert(visible);
    this.setState({
      show: visible,
      text: "",
      idSearch: 1,
      placeholder: "Tìm kiếm dự án",
    });
  };

  hanldeIdSearch = (idSearch, placeholder) => {
    this.setState({ idSearch, placeholder, text: "", show: false });
  };

  handleChangText = (text) => {
    const { idSearch, dataDA, dataNhaBan, dataThueNha } = this.state;
    const data =
      idSearch === 1 ? dataDA : idSearch === 2 ? dataNhaBan : dataThueNha;
    this.setState({
      show: true,
      text,
      data:
        text === ""
          ? []
          : data.filter((e) =>
              e.Ten.toUpperCase().includes(text.toUpperCase())
            ),
    });
  };
  onMouseLeaveHandler = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    const { idSearch, placeholder, text, data } = this.state;

    const link = (item) =>
      idSearch === 1
        ? {
            pathname: `/du-an/${tiengVietKhongDau(item.Ten).replace(
              / /g,
              "-"
            )}`,
            state: {
              item,
            },
          }
        : idSearch === 2
        ? {
            pathname: `/mua-nha/${tiengVietKhongDau(item.Ten).replace(
              / /g,
              "-"
            )}`,
            state: {
              item,
            },
          }
        : {
            pathname: `/thue-nha/${tiengVietKhongDau(item.Ten).replace(
              / /g,
              "-"
            )}`,
            state: {
              item,
            },
          };
    const search =
      idSearch === 1
        ? {
            pathname: `/du-an`,
            state: {
              text: this.state.text,
            },
          }
        : idSearch === 2
        ? {
            pathname: `/mua-nha`,
            state: {
              text: this.state.text,
            },
          }
        : {
            pathname: `/thue-nha`,
            state: {
              text: this.state.text,
            },
          };

    return (
      <div className="banner_home">
        <img
          src="https://cenhomes.vn/public/images/banner.jpg"
          className="img_banner_home"
        />
        <div className="view_search">
          <div className="row_btn">
            <div
              className={idSearch === 1 ? "type_search_active" : "type_search"}
              onClick={() => this.hanldeIdSearch(1, "Tìm kiếm dự án")}
            >
              Dự án
            </div>
            <div
              className={idSearch === 2 ? "type_search_active" : "type_search"}
              onClick={() => this.hanldeIdSearch(2, "Tìm kiếm căn hộ, địa chỉ")}
            >
              Nhà bán
            </div>
            <div
              className={idSearch === 3 ? "type_search_active" : "type_search"}
              onClick={() => this.hanldeIdSearch(3, "Tìm kiếm căn hộ, địa chỉ")}
            >
              Thuê nhà
            </div>
          </div>
          <Dropdown
            visible={this.state.show}
            trigger={[]}
            getPopupContainer={(trigger) => trigger.parentNode}
            overlay={
              <div className="list_filter" id="scroll_filter">
                {data.map((item, index) => (
                  <div key={index} className="item_list_filter">
                    <Link to={link(item)}>
                      <h2 className="title_item_list_filter">{item.Ten}</h2>
                    </Link>
                    <p>{item.DiaChi}</p>
                  </div>
                ))}
              </div>
            }
            onVisibleChange={this.onVisibleChange}
          >
            <div style={{ display: "flex" }}>
              <Input
                placeholder={placeholder}
                size="large"
                value={text}
                onChange={(e) => this.handleChangText(e.target.value)}
                // onBlur={this.onBlur}
              />
              <Link to={search}>
                <div className="btn_filter">Tìm kiếm</div>
              </Link>
            </div>
          </Dropdown>
        </div>
      </div>
    );
  }
}
export default index;
