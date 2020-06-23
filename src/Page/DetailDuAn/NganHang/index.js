import React, { Component } from "react";
import { Slider, InputNumber, Row, Col, Dropdown, Radio } from "antd";
import { DownOutlined, CheckOutlined } from "@ant-design/icons";
import BieuDo from "./BieuDo";
import ThongTin from "./ThongTin";
import numeral from "numeral";
import "./styles.css";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giaTri: 7.5,
      traTruoc: 0,
      tienVay: 0,
      tongLai: 0,
      tongTien: 0,
      tongGoc: 0,
      thangDau: 0,
      itemNH: {},
      tyle: 70,
      timeVay: 10,
      laiNH: 0,
      minLai: 0,
      timeGN: new Date(),
      isTraDeu: true,
      bangTL: [],
      nganHang: [
        {
          id: 1,
          name: "Vietcombank",
          value: 7.5,
        },
        {
          id: 2,
          name: "Vietinbank",
          value: 7.7,
        },
        {
          id: 3,
          name: "VPBank",
          value: 6.5,
        },
        {
          id: 4,
          name: "ACB",
          value: 7.8,
        },
        {
          id: 5,
          name: "Sacombank",
          value: 7.49,
        },
        {
          id: 6,
          name: "BIDV",
          value: 6.5,
        },
        {
          id: 7,
          name: "TPBank",
          value: 6.8,
        },
        {
          id: 8,
          name: "OCB",
          value: 6.99,
        },
        {
          id: 9,
          name: "Techcombank",
          value: 7.2,
        },
        {
          id: 10,
          name: "Ngân hàng khác",
          value: 7.5,
        },
      ],
    };
    this.onChangeGiaTri = this.onChangeGiaTri.bind(this);
    this.onChangeThoiHan = this.onChangeThoiHan.bind(this);
    this.onChangeTyLe = this.onChangeTyLe.bind(this);
    this.onChangeLaiNH = this.onChangeLaiNH.bind(this);
  }

  onChangeGiaTri = (giaTri) => {
    this.setState({ giaTri }, () => this.setTienVay());
  };

  onChangeTyLe = (tyle) => {
    this.setState({ tyle }, () => this.setTienVay());
  };

  onChangeThoiHan = (timeVay) => {
    this.setState({ timeVay }, () => this.handleTinhLai());
  };

  onChangeLaiNH = (laiNH) => {
    this.setState({ laiNH }, () => this.handleTinhLai());
  };

  onChangeNganHang = (itemNH) => {
    this.setState({ itemNH, laiNH: itemNH.value, minLai: itemNH.value }, () =>
      this.handleTinhLai()
    );
  };

  async componentWillMount() {
    const { nganHang } = this.state;
    this.setTienVay();
    this.setState({
      laiNH: nganHang.find((i) => i.id === 1).value,
      minLai: nganHang.find((i) => i.id === 1).value,
      itemNH: nganHang[0],
    });
    await this.handleTinhLai();
  }

  setTienVay() {
    const { tyle, giaTri } = this.state;
    const tienVay = giaTri * 1000000000 * (tyle / 100);
    const traTruoc = giaTri * 1000000000 - tienVay;
    this.setState({ tienVay, traTruoc }, () => this.handleTinhLai());
  }

  handleTinhLai = async () => {
    const { laiNH, timeVay, tienVay, isTraDeu, timeGN } = this.state;
    let THV = Math.ceil(timeVay * 12);
    let LS = Number(laiNH);
    let bangTL = [];
    let SoTienVay = tienVay;
    let Thang = 0,
      GocPT = 0,
      GocCL = 0,
      LSN = 0,
      GocLS = 0,
      NgayPT = new Date();

    //ngay giai ngan
    const ngayHT = new Date();
    var msDiff = timeGN - ngayHT;
    var daysDiff = msDiff / 1000 / 60 / 60 / 24;
    NgayPT.setDate(NgayPT.getDate() + Math.ceil(daysDiff));

    //-------
    let TongGocPT = 0,
      TongGocCL = 0,
      TongLSN = 0,
      TongGocLS = 0;
    for (Thang; Thang <= THV; Thang++) {
      GocPT = Thang == 0 ? null : SoTienVay / THV;
      GocCL = SoTienVay - GocPT * Thang;
      LSN =
        Thang == 0
          ? null
          : isTraDeu
          ? (SoTienVay * (LS / 100)) / 12
          : ((GocCL + GocPT) * LS) / (12 * 100);
      GocLS = Thang == 0 ? null : LSN + GocPT;
      await bangTL.push({
        Thang,
        GocPT,
        GocCL,
        LSN,
        GocLS,
        NgayPT: Thang == 0 ? timeGN : NgayPT.setMonth(NgayPT.getMonth() + 1),
      });
      TongGocCL += GocCL;
      TongGocLS += GocLS;
      TongGocPT += GocPT;
      TongLSN += LSN;
    }
    this.setState({
      bangTL,
      tongLai: TongLSN,
      tongGoc: TongGocPT,
      tongTien: TongGocLS,
      thangDau: bangTL[1].GocLS,
    });
  };

  onChangeCheck = (e) => {
    this.setState(
      {
        isTraDeu: e.target.value,
      },
      () => this.handleTinhLai()
    );
  };

  render() {
    const {
      giaTri,
      timeVay,
      tyle,
      laiNH,
      minLai,
      nganHang,
      itemNH,
      traTruoc,
      tienVay,
      tongLai,
      isTraDeu,
      tongTien,
      thangDau,
    } = this.state;
    const marks100 = {
      1: "",
      100: "",
    };
    const marks50 = {
      1: "",
      50: "",
    };
    return (
      <div className="nganhang_detailduan">
        <h2>VAY NGÂN HÀNG</h2>
        <div className="row_nganhang">
          <div className="col1_nganhang">
            <div>
              <p className="text_col1_nganhang">Giá trị nhà đất (tỷ VNĐ)</p>
              <Row style={{ marginBottom: 5 }}>
                <Col flex="auto">
                  <Slider
                    min={1}
                    max={100}
                    trackStyle={styles.trackStyle}
                    railStyle={styles.railStyle}
                    handleStyle={styles.handleStyle}
                    marks={marks100}
                    onChange={this.onChangeGiaTri}
                    onAfterChange={this.onChangeGiaTri}
                    value={typeof giaTri === "number" ? giaTri : 0}
                  />
                </Col>
                <Col flex="110px">
                  <InputNumber
                    min={1}
                    max={100}
                    step={0.5}
                    style={{ width: "87%", marginLeft: "13%" }}
                    value={giaTri}
                    onChange={this.onChangeGiaTri}
                    formatter={(value) => `${value}tỷ`}
                    parser={(value) => value.replace("tỷ", "")}
                  />
                </Col>
              </Row>
            </div>
            <div>
              <p className="text_col1_nganhang">Tỷ lệ vay (%) </p>
              <Row style={{ marginBottom: 5 }}>
                <Col flex="auto">
                  <Slider
                    min={1}
                    max={100}
                    trackStyle={styles.trackStyle}
                    railStyle={styles.railStyle}
                    handleStyle={styles.handleStyle}
                    marks={marks100}
                    onChange={this.onChangeTyLe}
                    onAfterChange={this.onChangeTyLe}
                    value={typeof tyle === "number" ? tyle : 0}
                  />
                </Col>
                <Col flex="110px">
                  <InputNumber
                    min={1}
                    max={100}
                    style={{ width: "87%", marginLeft: "13%" }}
                    value={tyle}
                    onChange={this.onChangeTyLe}
                    formatter={(value) => `${value}%`}
                    parser={(value) => value.replace("%", "")}
                  />
                </Col>
              </Row>
            </div>
            <div>
              <p className="text_col1_nganhang">Thời hạn vay (năm)</p>
              <Row style={{ marginBottom: 5 }}>
                <Col flex="auto">
                  <Slider
                    min={1}
                    max={50}
                    onChange={this.onChangeThoiHan}
                    onAfterChange={this.onChangeThoiHan}
                    value={typeof timeVay === "number" ? timeVay : 0}
                    trackStyle={styles.trackStyle}
                    railStyle={styles.railStyle}
                    handleStyle={styles.handleStyle}
                    marks={marks50}
                  />
                </Col>
                <Col flex="110px">
                  <InputNumber
                    min={1}
                    max={50}
                    style={{ width: "87%", marginLeft: "13%" }}
                    value={timeVay}
                    onChange={this.onChangeThoiHan}
                    formatter={(value) => `${value}năm`}
                    parser={(value) => value.replace("năm", "")}
                  />
                </Col>
              </Row>
            </div>
            <div>
              <p className="text_col1_nganhang">Lãi suất (%/năm)</p>
              <Row style={{ marginBottom: 15, marginTop: 10 }}>
                <Col flex="auto">
                  <Dropdown
                    trigger={["click"]}
                    getPopupContainer={(trigger) => trigger.parentNode}
                    overlay={
                      <div className="content_drop_nganhang" id="scroll_filter">
                        {nganHang.map((item, index) => (
                          <div
                            key={index}
                            className="item_drop_nganhang"
                            onClick={() => this.onChangeNganHang(item)}
                          >
                            <p>{item.name}</p>
                            {itemNH.id === item.id && <CheckOutlined />}
                          </div>
                        ))}
                      </div>
                    }
                  >
                    <div className="drop_nganhang">
                      <p title={itemNH.name}>{itemNH.name}</p>
                      <DownOutlined />
                    </div>
                  </Dropdown>
                </Col>
                <Col flex="110px">
                  <InputNumber
                    min={minLai}
                    max={50}
                    style={{ width: "87%", marginLeft: "13%" }}
                    value={laiNH}
                    onChange={this.onChangeLaiNH}
                    formatter={(value) => `${value}%`}
                    parser={(value) => value.replace("%", "")}
                  />
                </Col>
              </Row>
            </div>
            <Radio.Group
              onChange={this.onChangeCheck}
              value={isTraDeu}
              style={{ margin: "15px 0" }}
            >
              <Radio value={false}>Thanh toán theo dư nợ giảm dần</Radio>
              <Radio value={true}>Thanh toán đều hàng tháng</Radio>
            </Radio.Group>
          </div>
          <div className="col2_nganhang">
            <h2>Kết quả</h2>
            <div className="bieudo_col2_nganhang">
              <div className="col1_bieudo_col2_nganhang">
                <BieuDo
                  traTruoc={traTruoc}
                  tienVay={tienVay}
                  tongLai={tongLai}
                />
              </div>
              <div className="col2_bieudo_col2_nganhang">
                <ThongTin
                  traTruoc={traTruoc}
                  tienVay={tienVay}
                  tongLai={tongLai}
                  tongTien={tongTien}
                />
              </div>
            </div>
            <div className="bieudo_col2_nganhang" style={styles.thangDau}>
              <div className="col1_bieudo_col2_nganhang">
                {isTraDeu && <p>Thanh toán hàng tháng</p>}
                {!isTraDeu && <p>Thanh toán tháng đầu</p>}
              </div>
              <div className="col2_bieudo_col2_nganhang">
                <p>{numeral(thangDau).format("0,0")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default index;
const styles = {
  trackStyle: {
    backgroundColor: "var(--title)",
  },
  railStyle: {
    backgroundColor: "#c3c3c3",
  },
  handleStyle: {
    borderColor: "var(--title)",
    height: "20px",
    width: "20px",
    marginTop: "-8px",
  },
  thangDau: {
    borderTop: "1px solid var(--borderColor)",
    borderBottom: "1px solid var(--borderColor)",
    alignItems: "center",
    padding: "10px 0",
  },
};
