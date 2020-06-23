import React, { Component } from "react";
import "./styles.css";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      errNull: false,
      errFormat: false,
      isSend: false,
    };
  }
  componentDidMount() {
    document.title = "Quên mật khẩu";
  }
  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  onSubmit = () => {
    const { email } = this.state;
    var kt = document.getElementById("email");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email === "") {
      this.setState({ errNull: true, errFormat: false });
      kt.focus();
      return;
    } else if (!filter.test(kt.value)) {
      this.setState({ errFormat: true, errNull: false });
      kt.focus();
      return;
    } else this.setState({ errFormat: false, errNull: false, isSend: true });
  };

  render() {
    const { email, errFormat, errNull, isSend } = this.state;
    return (
      <div className="container_quenmatkhau">
        {!isSend && (
          <div className="content_quenmatkhau">
            <h2>QUÊN MẬT KHẨU</h2>
            <strong>
              Vui lòng nhập địa chỉ email Quý khách đã đăng ký để đặt lại mật
              khẩu.
            </strong>
            <div className="row_quenmatkhau">
              <div className="btn_icon">
                <i className="fa fa-envelope" />
              </div>
              <input
                className="input_quenmatkhau"
                style={{ flex: 1 }}
                placeholder="Nhập Email"
                value={email}
                onChange={this.onChangeEmail}
                id="email"
              />
            </div>
            {errFormat && <p className="txt_err">Email không hợp lệ!</p>}
            {errNull && <p className="txt_err">Vui lòng nhập email!</p>}
            <div className="btn_quenmatkhau" onClick={this.onSubmit}>
              GỬI
            </div>
          </div>
        )}
        {isSend && (
          <div className="content_quenmatkhau">
            <h2>GỬI YÊU CẦU THÀNH CÔNG</h2>
            <strong>
              Chúng tôi đã gửi thông tin đặt lại mật khẩu qua email của Quý
              khách. Vui lòng kiểm tra email và làm theo hướng dẫn.
            </strong>
            <a className="btn_quenmatkhau" href="/dang-nhap">
              ĐĂNG NHẬP
            </a>
          </div>
        )}
      </div>
    );
  }
}
export default index;
