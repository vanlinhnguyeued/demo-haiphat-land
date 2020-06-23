// import React, { Component } from 'react';
// import './styles.css';
// import { Checkbox } from 'antd';
// import iconFB from '../../assets/facebook.svg';
// import iconGG from '../../assets/google.png';
// import { authenticate } from './reducer';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       type: 'password',
//       isSave: false,
//       errNull: false,
//       errFormat: false,
//       errMK: false,
//     };
//     this.authenticate = this.authenticate.bind(this);
//   }
//   onChange = () => {
//     const { isSave } = this.state;
//     this.setState({ isSave: !isSave });
//   };

//   setType = () => {
//     const { type } = this.state;
//     this.setState({ type: type === 'password' ? 'text' : 'password' });
//   };
//   onInputChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   kiemTra() {
//     const { email, password } = this.state;
//     this.authenticate(email, password);
//     // var ktEmail = document.getElementById('email');
//     // var ktMK = document.getElementById('password');
//     // var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     // if (email === '') {
//     //   this.setState({ errNull: true, errFormat: false });
//     //   ktEmail.focus();
//     // } else if (!filter.test(ktEmail.value)) {
//     //   this.setState({ errFormat: true, errNull: false });
//     //   ktEmail.focus();
//     // } else {
//     //   this.setState({ errFormat: false, errNull: false });
//     // }

//     // if (password === '') {
//     //   this.setState({ errMK: true });
//     //   ktMK.focus();
//     // } else {
//     //   this.setState({ errMK: false });
//     // }

//     // if (email === '' || password === '' || !filter.test(ktEmail.value)) return;
//   }

//   onSubmit = () => {
//     this.kiemTra();
//   };

//   render() {
//     const {
//       type,
//       email,
//       password,
//       isSave,
//       errFormat,
//       errNull,
//       errMK,
//     } = this.state;
//     return (
//       <div className="container_login">
//         <div className="content_login">
//           <h2>ĐĂNG NHẬP</h2>
//           <div className="row_login">
//             <div className="btn_icon">
//               <i className="fa fa-envelope" />
//             </div>
//             <input
//               className="input_login"
//               style={{ flex: 1 }}
//               placeholder="Email"
//               value={email}
//               name="email"
//               onChange={this.onInputChange}
//               id="email"
//             />
//           </div>
//           {errFormat && (
//             <span className="txt_err_login">Email không hợp lệ!</span>
//           )}
//           {errNull && (
//             <span className="txt_err_login">Vui lòng nhập email!</span>
//           )}
//           <div className="row_login">
//             <div className="btn_icon">
//               <i className="fa fa-lock" />
//             </div>
//             <input
//               className="input_login"
//               style={{ flex: 1, paddingTop: type === 'password' ? 3 : 0 }}
//               placeholder="Mật khẩu"
//               type={type}
//               value={password}
//               name="password"
//               onChange={this.onInputChange}
//               id="password"
//             />
//             <div className="btn_pass" onClick={this.setType}>
//               <i
//                 className={type === 'text' ? 'fa fa-eye' : 'fa fa-eye-slash'}
//               />
//             </div>
//           </div>
//           {errMK && (
//             <span className="txt_err_login">Vui lòng nhập mật khẩu!</span>
//           )}
//           <div className="rowtext_login">
//             <Checkbox onChange={this.onChange} checked={isSave}>
//               Ghi nhớ mật khẩu
//             </Checkbox>
//             <a href="/quen-mat-khau" className="a_quenpass">
//               Quên mật khẩu?
//             </a>
//           </div>
//           <div className="btn_login" onClick={this.onSubmit}>
//             ĐĂNG NHẬP
//           </div>
//           <p>hoặc có thể đăng nhập bằng</p>
//           <div className="row_join">
//             <a href="#">
//               <img src={iconFB} style={{ width: 47, marginRight: 20 }} />
//             </a>
//             <a href="#">
//               <img src={iconGG} style={{ width: 50 }} />
//             </a>
//           </div>
//           <strong>
//             Bạn chưa có tài khoản, hãy đăng ký tài khoản
//             <a href="/dang-ky"> tại đây</a>
//           </strong>
//         </div>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => ({
//   authen: state.authen,
// });

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(
//     {
//       authenticate: () => authenticate,
//     },
//     dispatch
//   );
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Login);

import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import { Checkbox, Button } from "antd";
import iconFB from "../../assets/facebook.svg";
import iconGG from "../../assets/google.png";
import { authenticate } from "./reducer";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const PropsType = {
  authenticate: PropTypes.func,
  authen: PropTypes.object,
};

function Login({ authenticate, authen }) {
  const [dataToLogin, setDataToLogin] = useState({
    username: "",
    password: "",
  });
  const [isSecurity, setIsSecurity] = useState("password");
  const [isSave, setIsSave] = useState(false);
  const [errNull, setErrNull] = useState(false);
  const [errFormat, setErrFormat] = useState(false);
  const [errMK, setErrMK] = useState(false);
  const history = useHistory();
  const saveAccount = (isSave, email, password) => {
    if (isSave) {
      localStorage.setItem(
        "account",
        JSON.stringify({
          email: email,
          password: password,
        })
      );
    }
  };
  useEffect(() => {
    let saveData = localStorage.getItem("account");
    let formatValue = JSON.parse(saveData);
    if (saveData && formatValue.email.length > 0) {
      setDataToLogin({
        username: formatValue.email,
        password: formatValue.password,
      });
      setIsSave(true);
    }
  }, []);
  useEffect(() => {
    if (authen.isLogin && !authen.isLoading) {
      history.push("/");
    }
  }, [authen]);
  return (
    <div className="container_login">
      <div className="content_login">
        <h2>ĐĂNG NHẬP</h2>
        <div className="row_login">
          <div className="btn_icon">
            <i className="fa fa-envelope" />
          </div>
          <input
            className="input_login"
            style={{ flex: 1 }}
            placeholder="Email"
            value={dataToLogin.username}
            name="email"
            onChange={(e) => {
              setDataToLogin({ ...dataToLogin, username: e.target.value });
            }}
            id="email"
          />
        </div>
        {errFormat && (
          <span className="txt_err_login">Email không hợp lệ!</span>
        )}
        {errNull && <span className="txt_err_login">Vui lòng nhập email!</span>}
        <div className="row_login">
          <div className="btn_icon">
            <i className="fa fa-lock" />
          </div>
          <input
            className="input_login"
            style={{ flex: 1, paddingTop: isSecurity ? 3 : 0 }}
            placeholder="Mật khẩu"
            type={isSecurity}
            value={dataToLogin.password}
            name="password"
            onChange={(e) => {
              setDataToLogin({ ...dataToLogin, password: e.target.value });
            }}
            id="password"
          />
          <div
            className="btn_pass"
            onClick={() => {
              setIsSecurity((p) => {
                if (p === "password") return "text";
                else return "password";
              });
            }}
          >
            <i
              className={
                isSecurity === "password" ? "fa fa-eye" : "fa fa-eye-slash"
              }
            />
          </div>
        </div>
        {errMK && (
          <span className="txt_err_login">Vui lòng nhập mật khẩu!</span>
        )}
        <div className="rowtext_login">
          <Checkbox
            onChange={(e) => {
              setIsSave(e.target.checked);
            }}
            checked={isSave}
          >
            Ghi nhớ mật khẩu
          </Checkbox>
          <Link
            to={{
              pathname: "/quen-mat-khau",
            }}
            className="a_quenpass"
          >
            Quên mật khẩu?
          </Link>
        </div>
        <Button
          type="primary"
          size="small"
          style={styles.btn_login}
          loading={authen.isLoading}
          onClick={() => {
            authenticate(dataToLogin);
            saveAccount(isSave, dataToLogin.username, dataToLogin.password);
          }}
        >
          ĐĂNG NHẬP
        </Button>
        <p>hoặc có thể đăng nhập bằng</p>
        <div className="row_join">
          <a href="#">
            <img src={iconFB} style={{ width: 47, marginRight: 20 }} />
          </a>
          <a href="#">
            <img src={iconGG} style={{ width: 50 }} />
          </a>
        </div>
        <strong>
          Bạn chưa có tài khoản, hãy đăng ký tài khoản
          <Link
            to={{
              pathname: "/dang-ky",
            }}
          >
            Tại đây
          </Link>
        </strong>
      </div>
    </div>
  );
}
Login.propTypes = PropsType;
const mapStateToProps = (state) => ({
  authen: state.authen,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      authenticate,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
const styles = {
  btn_login: {
    padding: "10px 60px",
    background: "linear-gradient(90deg, var(--buttonBG), #e9a004)",
    color: " var(--buttonText)",
    borderRadius: "30px",
    marginBottom: "15px",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 1px 3px 2px rgba(0, 0, 0, 0.1)",
    height: "unset",
    border: "1px solid var(--borderColor)",
  },
};
