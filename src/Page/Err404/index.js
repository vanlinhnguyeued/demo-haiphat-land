import React, { Component } from "react";
import { motion } from "framer-motion";
import "./styles.css";
class index extends Component {
  render() {
    return (
      <motion.div className="div_err">
        <div className="row">
          <div className="txt404">404</div>
          <div className="gach" />
          <div className="txtErr">Not Found</div>
        </div>
        <div className="txtNoPage">
          XIN LỖI, TRANG BẠN ĐANG TÌM KHÔNG TỒN TẠI!
        </div>
        <a className="btn_back" href="/">
          BACK HOME
        </a>
      </motion.div>
    );
  }
}

export default index;
