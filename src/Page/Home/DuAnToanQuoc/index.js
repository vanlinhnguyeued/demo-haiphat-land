import React, { Component } from "react";
import RenderItem from "./renderItem";
import axios from "axios";
import Slider from "react-slick";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          TenKV: "TP HCM",
          ID: 1,
          Avatar: "https://images.cenhomes.vn/2019/11/1573030593-sai-gon.png",
        },
        {
          TenKV: "Đà Nẵng",
          ID: 2,
          Avatar: "https://images.cenhomes.vn/2019/11/1573031369-da-nang-2.png",
        },
        {
          TenKV: "Hà Nội",
          ID: 3,
          Avatar: "https://images.cenhomes.vn/2019/11/1573030709-hanoi-3.png",
        },
        {
          TenKV: "Nha Trang",
          ID: 4,
          Avatar:
            "https://baokhanhhoa.vn/dataimages/201603/original/images1133882_Ph__bi_n_Nha_Trang.jpg",
        },
        {
          TenKV: "Hải Phòng",
          ID: 5,
          Avatar:
            "https://images.cenhomes.vn/2019/11/1573029146-hai-phong-2.png",
        },
        {
          TenKV: "Khánh Hòa",
          ID: 6,
          Avatar: "https://images.cenhomes.vn/2019/11/1573028412-khanh-hoa.png",
        },
        {
          TenKV: "Quảng trị",
          ID: 7,
          Avatar:
            "https://www.yong.vn/Content/images/travels/thanh-co-quang-tri.jpg",
        },
      ],
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      arrows: false,
      swipeToSlide: true,
    };
    const { data } = this.state;
    return (
      <div className="container_duantq_home">
        <h2 className="title_duantq_home" data-aos="fade-up">
          Dự án trên toàn quốc
        </h2>
        <p data-aos="fade-up" style={{ padding: "0 10px" }}>
          63 tỉnh thành trên cả nước, bạn cần sản phẩm bất động sản ở đâu chúng
          tôi cũng đều có.
        </p>
        <div className="content_duantq_home" data-aos="fade-up">
          <Slider {...settings} ref={(e) => (this.slider = e)}>
            {data.map((item, index) => (
              <RenderItem item={item} index={index} key={index} />
            ))}
          </Slider>
          <div className="btn_prev" onClick={this.previous}>
            <i className="fa fa-angle-left" />
          </div>
          <div className="btn_next" onClick={this.next}>
            <i className="fa fa-angle-right" />
          </div>
        </div>
      </div>
    );
  }
}
export default index;
