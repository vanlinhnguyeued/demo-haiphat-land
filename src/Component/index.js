import React, { Component } from "react";
import Navbar from "../Page/Navbar";
import Footer from "../Page/Footer";
import { Tooltip } from "antd";
import "../App.css";
import LoadingForm from "../Page/Loading";
import { topFunction } from "../function/ToTop";
import AOS from "aos";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
      var classStick = document.getElementsByClassName("sticky");
      classStick[0].style.display = "inherit";
    }
  }

  handleScroll = () => {
    var btn_top = document.getElementById("myBtn");
    var element = document.getElementsByClassName("header_main");
    var classStick = document.getElementsByClassName("sticky");
    var mq = window.matchMedia("(max-width: 1100px)");
    // if (
    //   document.body.scrollTop > 70 ||
    //   document.documentElement.scrollTop > 70
    // ) {
    //   btn_top.style.display = "block";
    // } else {
    //   btn_top.style.display = "none";
    // }

    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      classStick[0].style.position = "fixed";
      element[0].style.padding = "15px 25px";
      element[0].style.animation = "none";
    } else {
      classStick[0].style.position = "relative";
      if (mq.matches) {
        element[0].style.padding = "15px 25px";
        element[0].style.animation = "none";
      } else {
        element[0].style.padding = "25px";
        element[0].style.animation = "menuDefault 1s forwards";
      }
    }
  };

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve("result");
      }, 2500)
    );
  };

  wheelHandler(evt) {
    var classStick = document.getElementsByClassName("sticky");
    var mq = window.matchMedia("(max-width: 1100px)");
    if (mq.matches) {
      if (evt.deltaY > 0) {
        classStick[0].style.display = "none";
      }

      if (evt.deltaY < 0) {
        classStick[0].style.display = "inherit";
      }
    } else if (
      document.body.scrollTop > 70 ||
      document.documentElement.scrollTop > 70
    ) {
      if (evt.deltaY > 0) {
        classStick[0].style.display = "none";
      }

      if (evt.deltaY < 0) {
        classStick[0].style.display = "inherit";
      }
    }
    this.handleScroll();
  }

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    const load = sessionStorage.getItem("isLoad");
    this.setState({ isLoading: load });
    if (load === null) {
      if (data !== null) {
        await sessionStorage.setItem("isLoad", true);
        const load = sessionStorage.getItem("isLoad");
        this.setState({ isLoading: load });
      }
    }
    AOS.init({ duration: 800 });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  onTop = () => {
    topFunction();
  };

  render() {
    const { isLoading } = this.state;
    const { component } = this.props;
    // if (isLoading === null) {
    //   return <LoadingForm />;
    // }
    return (
      <div onWheel={(event) => this.wheelHandler(event)} className="scroll">
        <Navbar />
        {component}
        <Footer />
        <div className="fab">
          <Tooltip placement="left" title={"BĐS đang bán"}>
            <a id="btnMua" href="/mua-nha">
              <p>MUA NGAY</p>
            </a>
          </Tooltip>
          <Tooltip
            placement="left"
            overlay={() => (
              <div>
                <p className="p_lienhe">Liên hệ với chúng tôi</p>
                <h3 className="h_lienhe">1900 2167</h3>
              </div>
            )}
          >
            <a id="btnCall" href="tel:1900 2167">
              <i className="fa fa-phone"></i>
            </a>
          </Tooltip>
          {/* <Tooltip
            placement="left"
            overlay={() => (
              <div>
                <p className="p_lienhe">Bạn cần hỗ trợ gì không?</p>
                <h3 className="h_lienhe">
                  Liên hệ với chung tôi để được tư vấn!
                </h3>
              </div>
            )}
          >
            <button id="btnChat" onClick={() => alert("đang cập nhật")}>
              <i className="fa fa-comments" />
            </button>
          </Tooltip> */}
          <Tooltip placement="left" title={"Lên đầu trang"}>
            <button id="myBtn" onClick={this.onTop}>
              <i className="fa fa-angle-double-up icon_ontop" />
            </button>
          </Tooltip>
        </div>
      </div>
    );
  }
}
export default index;
