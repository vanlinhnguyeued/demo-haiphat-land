import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { tiengVietKhongDau } from "../../../function/KhongDau";
import { topFunction } from "../../../function/ToTop";
import moment from "moment";
import Slider from "react-slick";
import RenderItem from "./RenderItem";

function onChange(a, b, c) {
  console.log(a, b, c);
}
class index extends Component {
  render() {
    const { data } = this.props;
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      arrows: false,
      swipeToSlide: true,
    };
    if (data.length <= 0) {
      return null;
    }
    return (
      <div className="list_header_tintuc">
        <div className="row_list_header">
          <div className="col_list_header" data-aos="fade-right">
            <Link
              to={{
                pathname: `/tin-tuc/${tiengVietKhongDau(
                  data[0].Subject
                ).replace(/ /g, "-")}`,
                state: {
                  item: data[0],
                },
              }}
            >
              <div className="img_col_list_header">
                <img src={data[0].Avatar} />
              </div>
            </Link>
            <div className="info_col_list_header">
              <Link
                to={{
                  pathname: `/tin-tuc/${tiengVietKhongDau(
                    data[0].Subject
                  ).replace(/ /g, "-")}`,
                  state: {
                    item: data[0],
                  },
                }}
              >
                <h2 className="title_info_col_list_header">
                  {data[0].Subject}
                </h2>
              </Link>
              <p>{moment(data[0].DatePost).format("L")}</p>
            </div>
          </div>
          <div className="col_list_header" data-aos="fade-left">
            <Link
              to={{
                pathname: `/tin-tuc/${tiengVietKhongDau(
                  data[1].Subject
                ).replace(/ /g, "-")}`,
                state: {
                  item: data[1],
                },
              }}
            >
              <div className="img_col_list_header">
                <img src={data[1].Avatar} />
              </div>
            </Link>
            <div className="info_col_list_header">
              <Link
                to={{
                  pathname: `/tin-tuc/${tiengVietKhongDau(
                    data[1].Subject
                  ).replace(/ /g, "-")}`,
                  state: {
                    item: data[1],
                  },
                }}
              >
                <h2 className="title_info_col_list_header">
                  {data[1].Subject}
                </h2>
              </Link>
              <p>{moment(data[1].DatePost).format("L")}</p>
            </div>
          </div>
        </div>
        <div style={{ padding: "13px 0" }} data-aos="fade-up">
          <Slider afterChange={onChange} {...settings}>
            {data.map((item, i) => (
              <RenderItem key={i} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
export default index;
