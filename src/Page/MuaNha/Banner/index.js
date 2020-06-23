import React from "react";
import { Input, Dropdown } from "antd";
import { DownOutlined, CheckOutlined } from "@ant-design/icons";
import "./styles.css";
class BannerSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataKhuVuc: [
        { TenKV: "TP HCM", ID: 1 },
        { TenKV: "Đà Nẵng", ID: 2 },
        { TenKV: "Hà Nội", ID: 3 },
        { TenKV: "Nha Trang", ID: 4 },
        { TenKV: "Hải Phòng", ID: 5 },
      ],
      dataKV: [],
      dataLoaiHinh: [
        { TenLCH: "Căn hộ", ID: 1 },
        { TenLCH: "Shophouse", ID: 2 },
        { TenLCH: "Nhà phố", ID: 3 },
        { TenLCH: "Văn phòng", ID: 4 },
        { TenLCH: "Đất nền", ID: 5 },
        { TenLCH: "Biệt thự", ID: 6 },
        { TenLCH: "Mặt bằng", ID: 7 },
      ],
      dataLH: [],
      dataKhoangGia: [
        {
          ID: 1,
          Name: "< 500 triệu",
        },
        {
          ID: 2,
          Name: "500 - 800 triệu",
        },
        {
          ID: 3,
          Name: "800 triệu - 1 tỷ",
        },
        {
          ID: 4,
          Name: "1 - 2 tỷ",
        },
        {
          ID: 5,
          Name: "2 - 3 tỷ",
        },
        {
          ID: 6,
          Name: "3 - 5 tỷ",
        },
        {
          ID: 7,
          Name: "5 - 7 tỷ",
        },
        {
          ID: 8,
          Name: "7 - 10 tỷ",
        },
        {
          ID: 9,
          Name: "10 - 20 tỷ",
        },
        {
          ID: 11,
          Name: "20 - 30 tỷ",
        },
        {
          ID: 12,
          Name: "30 - 50 tỷ",
        },
        {
          ID: 13,
          Name: "50 - 100 tỷ",
        },
        {
          ID: 15,
          Name: "> 100 tỷ",
        },
      ],
      khoangGia: "Khoảng giá",
      khoangGiaStart: "",
      khoangGiaEnd: "",
      dataPhongNgu: [
        { Name: "01", ID: 1 },
        { Name: "02", ID: 2 },
        { Name: "03", ID: 3 },
        { Name: "04", ID: 4 },
        { Name: "05", ID: 5 },
        { Name: "06", ID: 6 },
        { Name: "07", ID: 7 },
        { Name: "08", ID: 8 },
        { Name: "09", ID: 9 },
        { Name: "10", ID: 10 },
      ],
      dataPN: [],
      dataSort: [
        { ID: 0, Name: "Sắp xếp theo" },
        { ID: 1, Name: "Độ ưu tiên giảm dần" },
        { ID: 2, Name: "Độ ưu tiên tăng dần" },
        { ID: 3, Name: "A - Z" },
        { ID: 4, Name: "Z - A" },
        { ID: 5, Name: "Giá giảm dần" },
        { ID: 6, Name: "Giá tăng dần" },
        { ID: 7, Name: "Mới nhất" },
        { ID: 8, Name: "Cũ nhất" },
      ],
      sort: { ID: 0, Name: "Sắp xếp theo" },
      show: false,
    };
    this.textKhuVuc = "Khu vực";
    this.textLoaiHinh = "Loại hình";
    this.textPhongNgu = "Số phòng ngủ";
  }

  onKhuVucChange = (item) => {
    const { dataKV } = this.state;
    const kt = dataKV.findIndex((e) => e.ID === item.ID);
    if (kt === -1) {
      dataKV.push(item);
      this.textKhuVuc += ", " + item.TenKV;
    } else {
      dataKV.splice(kt, 1);
      this.textKhuVuc = this.textKhuVuc.replace(`, ${item.TenKV}`, "");
    }
    this.setState({
      dataKV,
    });
  };

  onPhongNguChange = (item) => {
    const { dataPN } = this.state;
    const kt = dataPN.findIndex((e) => e.ID === item.ID);
    if (kt === -1) {
      dataPN.push(item);
      this.textPhongNgu += ", " + item.Name;
    } else {
      dataPN.splice(kt, 1);
      this.textPhongNgu = this.textPhongNgu.replace(`, ${item.Name}`, "");
    }
    this.setState({
      dataPN,
    });
  };

  onLoaiHinhChange = (item) => {
    const { dataLH } = this.state;
    const kt = dataLH.findIndex((e) => e.ID === item.ID);
    if (kt === -1) {
      dataLH.push(item);
      this.textLoaiHinh += ", " + item.TenLCH;
    } else {
      dataLH.splice(kt, 1);
      this.textLoaiHinh = this.textLoaiHinh.replace(`, ${item.TenLCH}`, "");
    }
    this.setState({
      dataLH,
    });
  };

  onKhoangGiaChange = (item) => {
    this.setState({ khoangGia: item.Name, show: false });
  };

  onInputKhoangGiaChange = (e) => {
    const { khoangGiaStart, khoangGiaEnd } = this.state;
    const gia =
      e.target.value >= 1000
        ? e.target.value / 1000 + " tỷ"
        : e.target.value + " triệu";
    const giaStart =
      khoangGiaStart >= 1000
        ? khoangGiaStart / 1000 + " tỷ"
        : khoangGiaStart + " triệu";
    const giaEnd =
      khoangGiaEnd >= 1000
        ? khoangGiaEnd / 1000 + " tỷ"
        : khoangGiaEnd + " triệu";

    if (e.target.value.length < 7) {
      this.setState({
        [e.target.name]: e.target.value,
        khoangGia:
          (e.target.name === "khoangGiaStart" ? gia : giaStart) +
          " - " +
          (e.target.name === "khoangGiaEnd" ? gia : giaEnd),
      });
    }
  };

  onVisibleChange = (visible) => {
    this.setState({
      show: visible,
    });
  };
  onSortChange = (sort) => {
    this.setState({
      sort,
    });
  };
  render() {
    const {
      dataKhuVuc,
      dataLoaiHinh,
      dataLH,
      dataKhoangGia,
      dataKV,
      dataPN,
      dataPhongNgu,
      khoangGia,
      khoangGiaEnd,
      khoangGiaStart,
      dataSort,
      sort,
    } = this.state;
    const checkKV = (id) =>
      dataKV.findIndex((e) => e.ID === id) !== -1 ? true : false;
    const checkPN = (id) =>
      dataPN.findIndex((e) => e.ID === id) !== -1 ? true : false;
    const checkLH = (id) =>
      dataLH.findIndex((e) => e.ID === id) !== -1 ? true : false;
    const giaStart =
      khoangGiaStart >= 1000
        ? khoangGiaStart / 1000 + " tỷ"
        : khoangGiaStart + " triệu";
    const giaEnd =
      khoangGiaEnd >= 1000
        ? khoangGiaEnd / 1000 + " tỷ"
        : khoangGiaEnd + " triệu";
    return (
      <div className="SearchBar">
        <div className="p-inputgroup div_search">
          <Input
            placeholder="nhập nội dung tìm kiếm..."
            style={{ width: "100%", height: 35, borderRadius: 5 }}
          />
        </div>
        <Dropdown
          trigger={["click"]}
          getPopupContainer={(trigger) => trigger.parentNode}
          overlay={
            <div className="content_drop_nhale" id="scroll_filter">
              <div className="label_drop_nhale">
                <p>Khu vực</p>
                <CheckOutlined />
              </div>
              {dataKhuVuc.map((item, index) => (
                <div
                  key={index}
                  className="item_drop_nhale"
                  onClick={() => this.onKhuVucChange(item)}
                >
                  <p>{item.TenKV}</p>
                  {checkKV(item.ID) && <CheckOutlined />}
                </div>
              ))}
            </div>
          }
        >
          <div className="drop_nhale">
            <p title={this.textKhuVuc}>{this.textKhuVuc}</p>
            <DownOutlined />
          </div>
        </Dropdown>
        <Dropdown
          trigger={["click"]}
          getPopupContainer={(trigger) => trigger.parentNode}
          overlay={
            <div className="content_drop_nhale" id="scroll_filter">
              <div className="label_drop_nhale">
                <p>Loại hình</p>
                <CheckOutlined />
              </div>
              {dataLoaiHinh.map((item, index) => (
                <div
                  key={index}
                  className="item_drop_nhale"
                  onClick={() => this.onLoaiHinhChange(item)}
                >
                  <p>{item.TenLCH}</p>
                  {checkLH(item.ID) && <CheckOutlined />}
                </div>
              ))}
            </div>
          }
        >
          <div className="drop_nhale">
            <p title={this.textLoaiHinh}>{this.textLoaiHinh}</p>
            <DownOutlined />
          </div>
        </Dropdown>
        <Dropdown
          trigger={[]}
          visible={this.state.show}
          getPopupContainer={(trigger) => trigger.parentNode}
          overlay={
            <div className="content_drop_nhale" id="scroll_filter">
              <div className="label_khoanggia_drop_nhale">
                <div
                  style={{
                    marginRight: 15,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Input
                    style={{ width: 80, height: 30 }}
                    value={khoangGiaStart}
                    className="input_khoanggia"
                    name="khoangGiaStart"
                    onChange={(e) => this.onInputKhoangGiaChange(e)}
                    type="number"
                    onKeyPress={() => {
                      if (khoangGiaStart.length === 6) return false;
                    }}
                  />
                  <div style={{ height: 20, marginTop: 5 }}>
                    {khoangGiaStart !== "" && giaStart}
                  </div>
                </div>
                <div
                  style={{
                    marginRight: 15,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Input
                    style={{ width: 80, height: 30 }}
                    className="input_khoanggia"
                    value={khoangGiaEnd}
                    name="khoangGiaEnd"
                    onChange={(e) => this.onInputKhoangGiaChange(e)}
                    type="number"
                  />
                  <div style={{ height: 20, marginTop: 5 }}>
                    {khoangGiaEnd !== "" && giaEnd}
                  </div>
                </div>
                <div
                  className="btn_khoanggia"
                  onClick={() => this.onVisibleChange(false)}
                >
                  OK
                </div>
              </div>
              {dataKhoangGia.map((item, index) => (
                <div
                  key={index}
                  className="item_drop_nhale"
                  onClick={() => this.onKhoangGiaChange(item)}
                >
                  <p>{item.Name}</p>
                </div>
              ))}
            </div>
          }
          onVisibleChange={this.onVisibleChange}
        >
          <div
            className="drop_nhale"
            onClick={() => this.onVisibleChange(true)}
          >
            <p title={khoangGia}>{khoangGia}</p>
            <DownOutlined />
          </div>
        </Dropdown>
        <Dropdown
          trigger={["click"]}
          getPopupContainer={(trigger) => trigger.parentNode}
          overlay={
            <div className="content_drop_nhale" id="scroll_filter">
              <div className="label_drop_nhale">
                <p>Số phòng ngủ</p>
                <CheckOutlined />
              </div>
              {dataPhongNgu.map((item, index) => (
                <div
                  key={index}
                  className="item_drop_nhale"
                  onClick={() => this.onPhongNguChange(item)}
                >
                  <p>{item.Name}</p>
                  {checkPN(item.ID) && <CheckOutlined />}
                </div>
              ))}
            </div>
          }
        >
          <div className="drop_nhale">
            <p title={this.textPhongNgu}>{this.textPhongNgu}</p>
            <DownOutlined />
          </div>
        </Dropdown>
        <Dropdown
          trigger={["click"]}
          getPopupContainer={(trigger) => trigger.parentNode}
          overlay={
            <div className="content_drop_nhale" id="scroll_filter">
              {dataSort.map((item, index) => (
                <div
                  key={index}
                  className="item_drop_nhale"
                  onClick={() => this.onSortChange(item)}
                >
                  <p>{item.Name}</p>
                  {sort.ID === item.ID && <CheckOutlined />}
                </div>
              ))}
            </div>
          }
        >
          <div className="drop_nhale">
            <p title={sort.Name}>{sort.Name}</p>
            <DownOutlined />
          </div>
        </Dropdown>
      </div>
    );
  }
}

export default BannerSection;
