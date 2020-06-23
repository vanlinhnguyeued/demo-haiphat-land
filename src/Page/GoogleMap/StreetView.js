import React from "react";
import { compose, withProps } from "recompose";
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  StreetViewPanorama,
  OverlayView,
} = require("react-google-maps");

const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2),
});

class StreetView extends React.Component {
  render() {
    const StreetViewPanormaWithAnOverlayView = compose(
      withProps({
        googleMapURL:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyDu0pk1Gt4H4Fs9tGxN1eVN0wiQ7HGoAxo&callback=initMap",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />,
        center: { lat: this.props.lat, lng: this.props.lng },
      }),
      withScriptjs,
      withGoogleMap
    )((props) => (
      <GoogleMap defaultZoom={8} defaultCenter={props.center}>
        <StreetViewPanorama defaultPosition={props.center} visible>
          <OverlayView
            position={{ lat: props.lat, lng: props.lng }}
            mapPaneName={OverlayView.OVERLAY_LAYER}
            getPixelPositionOffset={getPixelPositionOffset}
          />
        </StreetViewPanorama>
      </GoogleMap>
    ));

    return (
      <div style={{ height: "100%", width: "100%" }}>
        <StreetViewPanormaWithAnOverlayView
          lat={this.props.lat}
          lng={this.props.lng}
        />
      </div>
    );
  }
}

export default StreetView;
