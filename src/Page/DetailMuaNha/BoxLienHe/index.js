import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input } from "antd";
import { tiengVietKhongDau } from "../../../function/KhongDau";
import { topFunction } from "../../../function/ToTop";
import "./styles.css";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoTen: "",
      email: "",
      dienThoai: "",
      noiDung: "",
      baoCao: "",
    };
  }

  handleBaoCao = () => {
    alert("Đang cập nhật");
  };

  handleLienHe = () => {
    alert("Đang cập nhật");
  };
  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { dienThoai, email, hoTen, noiDung, baoCao } = this.state;
    const { ceo, data } = this.props;
    return (
      <div>
        <div className="daily_lienhe_detailnhale">
          <h2>Liên hệ người bán</h2>
          <div className="row_daily_lienhe_detailnhale">
            <Link
              to={{
                pathname: `/can-nhan/${tiengVietKhongDau(ceo.Ten).replace(
                  / /g,
                  "-"
                )}`,
                state: {
                  item: ceo,
                },
              }}
            >
              <img src={ceo.Avatar} className="img_daily_lienhe_detailnhale" />
            </Link>
            <div className="thongtin_daily_lienhe_detailnhale">
              <Link
                to={{
                  pathname: `/can-nhan/${tiengVietKhongDau(ceo.Ten).replace(
                    / /g,
                    "-"
                  )}`,
                  state: {
                    item: ceo,
                  },
                }}
              >
                <h2 className="name_daily_lienhe_detailnhale" title={ceo.Ten}>
                  {ceo.Ten}
                </h2>
              </Link>
              <p title={ceo.DienThoai}>{ceo.DienThoai}</p>
              <div title={ceo.Email}>{ceo.Email}</div>
            </div>
          </div>
        </div>
        <div className="box_lienhe_detailnhale">
          <h2>Liên hệ tư vấn</h2>
          <Input
            style={styles.input}
            placeholder="Họ và tên *"
            name="hoTen"
            value={hoTen}
            onChange={(e) => this.onInputChange(e)}
          />
          <Input
            placeholder="Điện thoại *"
            style={styles.input}
            name="dienThoai"
            value={dienThoai}
            onChange={(e) => this.onInputChange(e)}
          />
          <Input
            placeholder="Email *"
            style={styles.input}
            name="email"
            value={email}
            onChange={(e) => this.onInputChange(e)}
          />
          <Input
            value={data.TieuDe}
            disabled={false}
            style={styles.inputNode}
          />
          <Input.TextArea
            rows={4}
            style={styles.inputArea}
            name="noiDung"
            value={noiDung}
            onChange={(e) => this.onInputChange(e)}
          />
          <div
            onClick={this.handleLienHe}
            className="button_lienhe_detailnhale"
          >
            Gửi liên hệ
          </div>
        </div>
        <div className="box_baocao_detailnhale">
          <h2>Báo cáo lỗi</h2>
          <p>
            Bạn hãy giúp gửi báo cáo đến chúng tôi khi có thông tin chưa chính
            xác hoặc bất cứ lỗi nào đó xảy ra. Xin chân thành cảm ơn!!!
          </p>
          <Input.TextArea
            rows={4}
            style={styles.inputArea}
            name="baoCao"
            value={baoCao}
            onChange={(e) => this.onInputChange(e)}
          />
          <div
            onClick={this.handleBaoCao}
            className="button_baocao_detailnhale"
          >
            Gửi báo cáo
          </div>
        </div>
      </div>
    );
  }
}
export default index;
const styles = {
  input: { height: 35, marginBottom: 15, borderRadius: 5 },
  inputNode: {
    height: 35,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "#f2f2f2",
  },
  inputArea: {
    marginBottom: 15,
    borderRadius: 5,
  },
};
