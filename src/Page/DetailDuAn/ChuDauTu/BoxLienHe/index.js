import React, { Component } from "react";
import { Input } from "antd";
import "./styles.css";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoTen: "",
      email: "",
      dienThoai: "",
      noiDung: "",
      tieuDe: "",
      errDienThoai: false,
      errNull: false,
      errFormat: false,
      errHoten: false,
    };
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  kiemTra() {
    const { email, hoTen, dienThoai } = this.state;
    var ktEmail = document.getElementById("email");
    var ktHoTen = document.getElementById("hoTen");
    var ktSDT = document.getElementById("dienThoai");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (email === "") {
      this.setState({ errNull: true, errFormat: false });
      ktEmail.focus();
    } else if (!filter.test(ktEmail.value)) {
      this.setState({ errFormat: true, errNull: false });
      ktEmail.focus();
    } else {
      this.setState({ errFormat: false, errNull: false });
    }

    if (hoTen === "") {
      this.setState({ errHoten: true });
      ktHoTen.focus();
    } else {
      this.setState({ errHoten: false });
    }

    if (dienThoai === "") {
      this.setState({ errDienThoai: true });
      ktSDT.focus();
    } else {
      this.setState({ errDienThoai: false });
    }

    if (
      hoTen === "" ||
      dienThoai === "" ||
      email === "" ||
      !filter.test(ktEmail.value)
    )
      return;
  }

  onSubmit = () => {
    this.kiemTra();
    alert("Đang cập nhật");
  };

  render() {
    const {
      dienThoai,
      email,
      hoTen,
      noiDung,
      tieuDe,
      errDienThoai,
      errNull,
      errFormat,
      errHoten,
    } = this.state;
    return (
      <div>
        <div className="daily_lienhe_gioithieu">
          <h2>Hồ sơ năng lực</h2>
          <div onClick={() => this.props.setTab(0)}>Sơ lược về chủ đầu tư</div>
          <div onClick={() => this.props.setTab(1)}>Dự án đã phát triển</div>
        </div>
        <div className="box_lienhe_gioithieu">
          <h2>Liên hệ chủ đầu tư</h2>
          <Input
            style={styles.input}
            placeholder="Họ và tên *"
            name="hoTen"
            id="hoTen"
            value={hoTen}
            onChange={(e) => this.onInputChange(e)}
          />
          {errHoten && <p className="txt_err">Vui lòng nhập họ tên!</p>}
          <Input
            placeholder="Điện thoại *"
            style={styles.input}
            className="text_sodt_dangky"
            type="number"
            name="dienThoai"
            id="dienThoai"
            value={dienThoai}
            onChange={(e) => this.onInputChange(e)}
          />
          {errDienThoai && (
            <p className="txt_err">Vui lòng nhập số điện thoại!</p>
          )}
          <Input
            placeholder="Email *"
            style={styles.input}
            name="email"
            id="email"
            value={email}
            onChange={(e) => this.onInputChange(e)}
          />
          {errFormat && <p className="txt_err">Email không hợp lệ!</p>}
          {errNull && <p className="txt_err">Vui lòng nhập email!</p>}
          <Input
            placeholder="Tiêu đề *"
            style={styles.input}
            name="tieuDe"
            value={tieuDe}
            onChange={(e) => this.onInputChange(e)}
          />
          <Input.TextArea
            rows={4}
            style={styles.inputArea}
            name="noiDung"
            value={noiDung}
            onChange={(e) => this.onInputChange(e)}
          />
          <div onClick={this.onSubmit} className="button_lienhe_gioithieu">
            Gửi liên hệ
          </div>
        </div>
      </div>
    );
  }
}
export default index;
const styles = {
  input: { height: 35, marginTop: 15, borderRadius: 5 },
  inputNode: {
    height: 35,
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: "#f2f2f2",
  },
  inputArea: {
    marginTop: 15,
    borderRadius: 5,
  },
};
