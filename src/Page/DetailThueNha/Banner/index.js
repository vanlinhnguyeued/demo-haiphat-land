import React, { Component } from "react";
import Slider from "react-slick";
import "./styles.css";

export default class CenterMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide1: null,
      slide2: null,
    };
    this.carousel = React.createRef();
  }

  componentDidMount() {
    this.setState({
      slide1: this.carousel,
      slide2: this.carouselChild,
    });
  }

  slickGoto = (e) => {
    this.carousel.slickGoTo(e);
  };

  render() {
    const settings = {
      dots: false,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      swipeToSlide: true,
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
    };
    const settings2 = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 460,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const { slide1, slide2 } = this.state;
    const { data } = this.props;
    return (
      <div style={{ width: "100%" }}>
        <div style={{ width: "100%", height: 350 }}>
          <Slider
            {...settings}
            ref={(node) => (this.carousel = node)}
            asNavFor={slide2}
          >
            {data.map((item, i) => (
              <div key={i} style={{ width: "100%", height: 350 }}>
                <img src={item.src} style={{ width: "100%", height: 350 }} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="footer_slide">
          <div className="slide_footer_slide">
            <Slider
              {...settings2}
              ref={(node) => (this.carouselChild = node)}
              asNavFor={slide1}
            >
              {data.map((item, i) => (
                <a key={i} onClick={() => this.slickGoto(i)}>
                  <img src={item.src} className="img_slide_footer_slide" />
                </a>
              ))}
            </Slider>
          </div>
          <div className="footer_chucnang">
            <div
              className="box_footer_chucnang1"
              onClick={() => this.props.showModal(0)}
            >
              <i className="fa fa-picture-o" />
              <p>Hình ảnh</p>
            </div>
            <div
              className="box_footer_chucnang"
              onClick={() => this.props.showModal(3)}
            >
              <i className="fa fa-cube" />
              <p>Xem 3D</p>
            </div>
            <div
              className="box_footer_chucnang"
              onClick={() => this.props.showModal(1)}
            >
              <i className="fa fa-globe" />
              <p>Vị trí</p>
            </div>
            <div
              className="box_footer_chucnang"
              onClick={() => this.props.showModal(2)}
            >
              <i className="fa fa-map-o" />
              <p>SĐ phân lô</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
