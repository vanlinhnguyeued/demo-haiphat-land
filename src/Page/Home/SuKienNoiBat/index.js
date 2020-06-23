import React, { Component } from "react";
import Slider from "react-slick";
import { topFunction } from "../../../function/ToTop";
import "./styles.css";
import { Link } from "react-router-dom";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          ID: 1,
          Avatar:
            "https://images.cenhomes.vn/2020/05/1589854893-c180bb3ce1c91b9742d8.jpg",
        },
        {
          ID: 2,
          Avatar:
            "https://images.cenhomes.vn/2020/04/1586416905-binh-minh-garden.jpg",
        },
        {
          ID: 3,
          Avatar:
            "https://images.cenhomes.vn/2020/05/1589854893-c180bb3ce1c91b9742d8.jpg",
        },
        {
          ID: 4,
          Avatar:
            "https://images.cenhomes.vn/2020/04/1586404957-96620daba83853660a29.jpg",
        },
        {
          ID: 5,
          Avatar:
            "https://images.cenhomes.vn/2020/04/1586399568-king-palace.jpg",
        },
      ],
    };
  }

  render() {
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
    const { data } = this.state;
    return (
      <div className="container_sukiennoibat" data-aos="fade-right">
        <h2 className="title_sukiennoibat">Sự kiện nổi bật</h2>
        <Slider {...settings}>
          {data.map((item, index) => (
            <Link to={{ pathname: "/tin-tuc" }} key={index}>
              <div className="item_noibat">
                <img src={item.Avatar} />
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    );
  }
}
export default index;
