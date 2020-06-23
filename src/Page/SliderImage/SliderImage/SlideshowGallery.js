import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

export default class SlideshowGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
    const ratioWHArray = this.props.ratio.split(":");
    this.ratioWH = ratioWHArray[0] / ratioWHArray[1];
    this.backward = this.backward.bind(this);
    this.forward = this.forward.bind(this);
    this.setSlideIndex = this.setSlideIndex.bind(this);
    this.getNewSlideIndex = this.getNewSlideIndex.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.runAutomatic = this.runAutomatic.bind(this);
  }

  getNewSlideIndex(step) {
    const slideIndex = this.state.slideIndex;
    const numberSlide = this.props.input.length;

    let newSlideIndex = slideIndex + step;

    if (newSlideIndex >= numberSlide) newSlideIndex = 0;
    else if (newSlideIndex < 0) newSlideIndex = numberSlide - 1;

    return newSlideIndex;
  }

  backward() {
    this.setState({
      slideIndex: this.getNewSlideIndex(-1),
    });
  }

  forward() {
    this.setState({
      slideIndex: this.getNewSlideIndex(1),
    });
  }

  setSlideIndex(index) {
    this.setState({
      slideIndex: index,
    });
  }
  updateDimensions() {
    this.containerElm.style.height = `${
      this.containerElm.offsetWidth / this.ratioWH
    }px`;
    this.containerBottomElm.style.height = `${
      this.containerBottomElm.offsetWidth /
      this.props.input.length /
      this.ratioWH
    }px`;
  }

  runAutomatic() {
    this.setState({
      slideIndex: this.getNewSlideIndex(1),
    });
  }

  componentDidMount() {
    this.rootElm = ReactDOM.findDOMNode(this);
    this.containerElm = this.rootElm.querySelector(".container");
    this.containerBottomElm = this.rootElm.querySelector(".container-bottom");

    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);

    if (this.props.mode === "automatic") {
      const timeout = this.props.timeout || 5000;

      this.automaticInterval = setInterval(
        () => this.runAutomatic(),
        Number.parseInt(timeout)
      );
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
    if (this.automaticInterval) clearInterval(this.automaticInterval);
  }

  render() {
    return (
      <div className="lp-slideshow-gallery">
        <div className="container">
          {this.props.input.map((image, index) => {
            return (
              <div
                key={index}
                className={`slide ${
                  this.state.slideIndex === index ? "active" : ""
                }`}
              >
                <img className="image" src={image.src} alt={image.caption} />
                <div className="caption-text">
                  {this.props.input.map((image, index) => {
                    return (
                      <div
                        key={index}
                        className={`image ${
                          this.state.slideIndex === index ? "active" : ""
                        }`}
                        onClick={() => this.setSlideIndex(index)}
                      />
                    );
                  })}
                </div>
                <div className="container-bottom">
                  {this.props.input.map((image, index) => {
                    <input
                      type="radio"
                      key={index}
                      checked={true}
                      className={`image ${
                        this.state.slideIndex === index ? "active" : ""
                      }`}
                      onClick={() => this.setSlideIndex(index)}
                    />;
                  })}
                </div>
              </div>
            );
          })}
          <span className="prev" onClick={this.backward}>
            ❮
          </span>
          <span className="next" onClick={this.forward}>
            ❯
          </span>
        </div>
      </div>
    );
  }
}
