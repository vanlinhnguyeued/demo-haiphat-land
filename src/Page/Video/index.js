import React from "react";
import Banner from "./Banner";
import Live from "./Live";
import Bds from "./Bds";
import "./styles.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://www.youtube.com/embed/z8Aj_K99vyY",
    };
  }
  setUrl = (url) => {
    this.setState({ url });
  };
  render() {
    const { url } = this.state;
    return (
      <div className="container_video">
        <Banner />
        <div className="video_top" data-aos="zoom-in">
          <div className="ifr_video">
            <iframe
              style={{ width: "100%", height: "100%" }}
              src={url}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen
            />
          </div>
          <div className="foot1_tv" />
          <div className="foot2_tv" />
        </div>
        <Live setUrl={(e) => this.setUrl(e)} />
        <Bds setUrl={(e) => this.setUrl(e)} />
      </div>
    );
  }
}

export default Home;
