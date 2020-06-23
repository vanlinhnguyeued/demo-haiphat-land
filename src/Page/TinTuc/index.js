import React, { Component } from "react";
import axios from "axios";
import { Pagination } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
import Banner from "./Banner";
import ListHeader from "./ListHeader";
import { tiengVietKhongDau } from "../../function/KhongDau";
import { topFunction } from "../../function/ToTop";
import history from "../../history";
import "./styles.css";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.page = 1;
  }

  setTinTuc = () => {
    axios
      .get(
        `http://trananh.citysoft.vn/api/News/getall?maDA=0&pageSize=10&pageIndex=${this.page}`
      )
      .then((res) => this.setState({ data: res.data }));
  };

  componentDidMount() {
    this.setTinTuc();
    document.title = "Tin tức - Sự kiện HaiPhatLand";
  }

  handlePagination = (page, pageSize) => {
    this.page = page;
    this.setTinTuc();
    topFunction();
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <Banner />
        <ListHeader data={data} />
        <div className="container_tintuc">
          <div style={{ padding: 10 }}>
            {data.map((item, index) => (
              <div
                key={index}
                className="item_new"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div className="div_img_new">
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
                    <img src={item.Avatar} className="img_new" />
                  </Link>
                </div>
                <div className="div_content_new">
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
                    <p className="a_subject">{item.Subject}</p>
                  </Link>
                  <div className="hr_new" />
                  <div className="text_date_new">
                    By Hai Phát Land | {moment(item.DatePost).format("L")}
                  </div>
                  <p className="sub_new">{item.Summary} </p>
                </div>
              </div>
            ))}
          </div>
          <div className="div_pagination_tintuc">
            <Pagination
              defaultCurrent={1}
              total={30}
              onChange={(page, pageSize) =>
                this.handlePagination(page, pageSize)
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
export default index;
