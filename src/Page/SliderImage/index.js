import React from "react";
import SlideshowGallery from "./SliderImage/SlideshowGallery";

export default class ListImg extends React.Component {
  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <SlideshowGallery
          input={this.props.dataImg}
          ratio={`0`}
          mode={`automatic`}
          timeout={`5000`}
        />
      </div>
    );
  }
}
