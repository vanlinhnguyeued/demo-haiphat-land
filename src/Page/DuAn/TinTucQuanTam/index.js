import React, { Component } from "react";
import { Link } from "react-router-dom";
import { topFunction } from "../../../function/ToTop";
import { tiengVietKhongDau } from "../../../function/KhongDau";
import Axios from "axios";
import moment from "moment";
import "./styles.css";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  setTinTuc = () => {
    Axios.get(
      `http://trananh.citysoft.vn/api/News/getall?maDA=0&pageSize=4&pageIndex=1`
    ).then((res) => this.setState({ data: res.data }));
  };

  componentDidMount() {
    this.setTinTuc();
  }

  render() {
    const { data } = this.state;
    return (
      <div className="box_quantam_duan">
        <div className="div_title_new_quantam">
          <h2 className="title_new_quanTam" data-aos="fade-right">
            CÓ THỂ BẠN QUAN TÂM
          </h2>
          <a href="/tin-tuc" className="a_viewall_tintuc" data-aos="fade-left">
            <span>
              <i className="fa fa-windows" />
              Xem tất cả
            </span>
          </a>
        </div>
        <div className="row_new_quantam">
          {data.map((item, index) => (
            <div key={index} className="item_new_quantam" data-aos="fade-up">
              <div className="div_img_new_quantam">
                <Link
                  to={{
                    pathname: `/tin-tuc/${tiengVietKhongDau(
                      item.Subject
                    ).replace(/ /g, "-")}`,
                    state: {
                      item,
                    },
                  }}
                >
                  <img src={item.Avatar} className="img_new_quantam" />
                </Link>
              </div>
              <div className="text_date_new_quantam">
                {moment(item.DatePost).format("L")}
              </div>
              <Link
                to={{
                  pathname: `/tin-tuc/${tiengVietKhongDau(item.Subject).replace(
                    / /g,
                    "-"
                  )}`,
                  state: {
                    item,
                  },
                }}
              >
                <p className="a_subject">{item.Subject}</p>
              </Link>
              <p className="sub_new_quantam">{item.Summary + "[...]"} </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default index;
