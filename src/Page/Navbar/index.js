import React, { Component } from "react";
import { Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { setConfig } from "../../Component/reducer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./styles.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, text: "" };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token !== null) {
      this.props.setConfig(token, true);
    }
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible } = this.state;
    const { isAuthen } = this.props;
    return (
      <div className="header sticky">
        <div className="header_main">
          <div className="logo">
            <a href="/" title="CITYSOFT">
              <img
                src="http://thephoenixgarden.com.vn/wp-content/uploads/2019/11/logo-HPL-2019.png"
                className="logo_img"
              />
            </a>
          </div>
          <div className="nav_right">
            <ul className="ul_header">
              <li>
                <a href="/du-an">DỰ ÁN</a>
                <span className="hr" />
              </li>
              <li>
                <a href="/mua-nha">MUA NHÀ</a>
                <span className="hr" />
              </li>
              <li>
                <a href="/thue-nha">THUÊ NHÀ</a>
                <span className="hr" />
              </li>
              <li>
                <a href="/tin-tuc">TIN TỨC</a>
                <span className="hr" />
              </li>
              <li>
                <a href="/video">VIDEO</a>
                <span className="hr" />
              </li>
              <li>
                <a href="/ve-chung-toi">VỀ CHÚNG TÔI</a>
                <span className="hr" />
              </li>
              <li>
                <a href="/lien-he">LIÊN HỆ</a>
                <span className="hr" />
              </li>
              {!isAuthen && (
                <li>
                  <a href="/dang-nhap">ĐĂNG NHẬP</a>
                  <span className="hr" />
                </li>
              )}
              {isAuthen && (
                <li>
                  <a href="/trang-ca-nhan/thong-tin">TRANG CÁ NHÂN</a>
                  <span className="hr" />
                </li>
              )}
            </ul>
          </div>
          <div className="nav_right_drawer">
            {visible ? (
              <CloseOutlined onClick={this.onClose} className="icon_drawer" />
            ) : (
              <MenuOutlined onClick={this.showDrawer} className="icon_drawer" />
            )}
          </div>
          <img
            src="https://sunshinehomes.vn/wp-content/uploads/2019/06/header-bg.jpg"
            className="img_back_header"
          />
        </div>
        <Drawer
          placement="left"
          onClose={this.onClose}
          visible={this.state.visible}
          className="drawer"
          closable
          bodyStyle={{ padding: 0, backgroundColor: "#f48122" }}
        >
          <div className="div_content_modal">
            <div className="drawer_close">
              <div className="logo">
                <a href="/">
                  <img
                    src="http://thephoenixgarden.com.vn/wp-content/uploads/2019/11/logo-HPL-2019.png"
                    className="logo_img_drawer"
                  />
                </a>
              </div>
            </div>
            <ul className="ul_header_drawer">
              <li>
                <a href="/du-an">DỰ ÁN</a>
                <span className="hr" />
              </li>
              <li>
                <a href="/mua-nha">MUA NHÀ</a>
                <span className="hr" />
              </li>
              <li>
                <a href="/thue-nha">THUÊ NHÀ</a>
                <span className="hr" />
              </li>
              <li>
                <a href="/tin-tuc">TIN TỨC</a>
                <span className="hr" />
              </li>
              <li>
                <a href="/video">VIDEO</a>
                <span className="hr" />
              </li>
              <li>
                <a href="/ve-chung-toi">VỀ CHÚNG TÔI</a>
                <span className="hr" />
              </li>
              <li>
                <a href="/lien-he">LIÊN HỆ</a>
                <span className="hr" />
              </li>
              {!isAuthen && (
                <li>
                  <a href="/dang-nhap">ĐĂNG NHẬP</a>
                  <span className="hr" />
                </li>
              )}
              {isAuthen && (
                <li>
                  <a href="/trang-ca-nhan/thong-tin">TRANG CÁ NHÂN</a>
                  <span className="hr" />
                </li>
              )}
            </ul>
          </div>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthen: state.config.isAuthen,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setConfig,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
