import React, { Component } from "react";
import "./styles.css";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      hoten: "",
      dienThoai: "",
      matKhau: "",
      xacNhan: "",
      errMK: false,
      errXN: false,
      errKhop: false,
      errDienThoai: false,
      errNull: false,
      errFormat: false,
      errHoten: false,
    };
  }

  componentDidMount() {
    document.title = "Đăng ký";
  }

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  kiemTra() {
    const { email, hoten, dienThoai, matKhau, xacNhan } = this.state;
    var ktEmail = document.getElementById("email");
    var ktHoTen = document.getElementById("hoten");
    var ktSDT = document.getElementById("dienThoai");
    var ktMatKhau = document.getElementById("matKhau");
    var ktXanNhan = document.getElementById("xacNhan");
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

    if (hoten === "") {
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

    if (matKhau === "") {
      this.setState({ errMK: true });
      ktMatKhau.focus();
    } else {
      this.setState({ errMK: false });
    }

    if (xacNhan === "") {
      this.setState({ errXN: true });
      ktXanNhan.focus();
    } else {
      this.setState({ errXN: false });
    }

    if (matKhau !== xacNhan) {
      this.setState({ errKhop: true });
      ktXanNhan.focus();
    } else {
      this.setState({ errKhop: false });
    }

    if (
      hoten === "" ||
      dienThoai === "" ||
      email === "" ||
      matKhau === "" ||
      xacNhan === "" ||
      xacNhan !== matKhau ||
      !filter.test(ktEmail.value)
    )
      return;
  }

  onSubmit = () => {
    this.kiemTra();
  };

  render() {
    const {
      email,
      errFormat,
      errNull,
      errHoten,
      hoten,
      dienThoai,
      errDienThoai,
      matKhau,
      xacNhan,
      errMK,
      errXN,
      errKhop,
    } = this.state;
    return (
      <div className="container_dangky">
        <div className="content_dangky">
          <h2>ĐĂNG KÝ TÀI KHOẢN</h2>
          <div className="row_dangky">
            <div className="btn_icon">
              <i className="fa fa-user" />
            </div>
            <input
              className="input_dangky"
              style={{ flex: 1 }}
              placeholder="Họ và tên *"
              value={hoten}
              name="hoten"
              onChange={this.onChangeInput}
              id="hoten"
            />
          </div>
          {errHoten && <p className="txt_err">Vui lòng nhập họ tên!</p>}
          <div className="row_dangky">
            <div className="btn_icon">
              <i className="fa fa-phone" />
            </div>
            <input
              className="input_dangky text_sodt_dangky"
              style={{ flex: 1 }}
              placeholder="Điện thoại *"
              value={dienThoai}
              name="dienThoai"
              onChange={this.onChangeInput}
              id="dienThoai"
              type="number"
              maxLength={15}
            />
          </div>
          {errDienThoai && (
            <p className="txt_err">Vui lòng nhập số điện thoại!</p>
          )}
          <div className="row_dangky">
            <div className="btn_icon">
              <i className="fa fa-envelope" />
            </div>
            <input
              className="input_dangky"
              style={{ flex: 1 }}
              placeholder="Email *"
              value={email}
              name="email"
              onChange={this.onChangeInput}
              id="email"
            />
          </div>
          {errFormat && <p className="txt_err">Email không hợp lệ!</p>}
          {errNull && <p className="txt_err">Vui lòng nhập email!</p>}
          <div className="row_dangky">
            <div className="btn_icon">
              <i className="fa fa-unlock-alt" />
            </div>
            <input
              className="input_dangky"
              style={{ flex: 1 }}
              placeholder="Mật khẩu *"
              value={matKhau}
              name="matKhau"
              onChange={this.onChangeInput}
              id="matKhau"
              type="password"
            />
          </div>
          {errMK && <p className="txt_err">Vui lòng nhập mật khẩu!</p>}
          <div className="row_dangky">
            <div className="btn_icon">
              <i className="fa fa-unlock-alt" />
            </div>
            <input
              className="input_dangky"
              style={{ flex: 1 }}
              placeholder="Xác nhận mật khẩu *"
              value={xacNhan}
              name="xacNhan"
              onChange={this.onChangeInput}
              id="xacNhan"
              type="password"
            />
          </div>
          {errXN && <p className="txt_err">Vui lòng xác nhận mật khẩu!</p>}
          {errKhop && <p className="txt_err">Mật khẩu không khớp!</p>}
          <div className="btn_dangky" onClick={this.onSubmit}>
            ĐĂNG KÝ
          </div>
          <strong>
            Nếu bạn đã có tài khoản, hãy đăng nhập
            <a href="/dang-nhap"> tại đây</a>
          </strong>
        </div>
      </div>
    );
  }
}
export default index;
