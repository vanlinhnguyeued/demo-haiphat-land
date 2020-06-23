import React, { Component } from "react";
import { Input } from "antd";
import Banner from "./Banner";
import MapView from "./MapView";
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
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    document.title = "Liên hệ chúng tôi!";
  }

  render() {
    const {
      email,
      errFormat,
      errNull,
      errHoten,
      hoTen,
      dienThoai,
      errDienThoai,
      noiDung,
      tieuDe,
    } = this.state;
    return (
      <div className="container_lienhe">
        <Banner />
        <div className="content_lienhe">
          <div className="row_lienhe">
            <div className="col1_lienhe" data-aos="fade-right">
              <MapView />
            </div>
            <div className="col2_lienhe" data-aos="fade-left">
              <img src="https://haiphatinvest.com.vn/wp-content/uploads/2019/10/Reamagazine-HAI-PHAT-4-1024x571.jpg" />
            </div>
          </div>
          <div className="box_lienhe">
            <h2 data-aos="fade-up">LIÊN HỆ VỚI CHÚNG TÔI</h2>
            <Input
              placeholder="Họ và tên *"
              value={hoTen}
              name="hoTen"
              id="hoTen"
              onChange={(e) => this.onInputChange(e)}
              style={styles.input}
              data-aos="fade-up"
            />
            {errHoten && (
              <p className="txt_err" data-aos="zoom-in">
                Vui lòng nhập họ tên!
              </p>
            )}
            <Input
              placeholder="Số điện thoại *"
              type="number"
              className="text_sodt_lienhe"
              value={dienThoai}
              name="dienThoai"
              id="dienThoai"
              onChange={(e) => this.onInputChange(e)}
              style={styles.input}
              data-aos="fade-up"
            />
            {errDienThoai && (
              <p className="txt_err" data-aos="zoom-in">
                Vui lòng nhập số điện thoại!
              </p>
            )}
            <Input
              placeholder="Email *"
              value={email}
              name="email"
              onChange={(e) => this.onInputChange(e)}
              style={styles.input}
              id="email"
              data-aos="fade-up"
            />
            {errFormat && (
              <p className="txt_err" data-aos="zoom-in">
                Email không hợp lệ!
              </p>
            )}
            {errNull && (
              <p className="txt_err" data-aos="zoom-in">
                Vui lòng nhập email!
              </p>
            )}
            <Input
              placeholder="Tiêu đề"
              value={tieuDe}
              name="tieuDe"
              onChange={(e) => this.onInputChange(e)}
              style={styles.input}
              data-aos="fade-up"
            />
            <Input.TextArea
              placeholder="Nội dung"
              rows={4}
              value={noiDung}
              name="noiDung"
              onChange={(e) => this.onInputChange(e)}
              style={styles.inputArea}
              data-aos="fade-up"
            />
            <div className="btn_lienhe" onClick={this.onSubmit}>
              GỬI LIÊN HỆ
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default index;
const styles = {
  input: {
    height: 40,
    marginTop: 15,
    paddingTop: 5,
    borderRadius: 5,
  },
  inputArea: {
    marginBottom: 15,
    marginTop: 15,
    borderRadius: 5,
    padding: 10,
  },
};
