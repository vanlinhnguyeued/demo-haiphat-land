import React from "react";
import { compose, withProps } from "recompose";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  GroundOverlay,
} from "react-google-maps";

const defaultOptions = {
  fullscreenControl: true,
  streetViewControl: true,
  mapTypeControl: true,
};
const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2),
});

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDu0pk1Gt4H4Fs9tGxN1eVN0wiQ7HGoAxo&callback=initMap",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 10.8665351320372, lng: 106.514375820388 }}
    defaultOptions={defaultOptions}
    mapTypeId={props.mapTypeId}
  >
    {/* <Marker
      position={{ lat: props.lat, lng: props.lng }}
      onClick={props.setInfo}
      animation={google.maps.Animation.DROP}
    >
      {props.showInfo ? (
        <InfoWindow zIndex={20} onCloseClick={props.setInfo}>
          <h4 style={{ cursor: "pointer" }}>{props.TieuDe}</h4>
        </InfoWindow>
      ) : null}
    </Marker> */}
    <GroundOverlay
      defaultUrl="http://rsdemo.citysoft.vn/upload/maps/trananh/{z}/{x}/{y}.png"
      defaultBounds={
        new google.maps.LatLngBounds(
          new google.maps.LatLng(106.506819, 10.86163),
          new google.maps.LatLng(106.520113, 10.870776)
        )
      }
      defaultOpacity={0.5}
    />
  </GoogleMap>
));

class index extends React.PureComponent {
  state = {
    showInfo: true,
  };
  setInfo() {
    this.setState({ showInfo: !this.state.showInfo });
  }

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <MyMapComponent
          lat={this.props.lat}
          lng={this.props.lng}
          TieuDe={this.props.TieuDe}
          showInfo={this.state.showInfo}
          setInfo={() => this.setInfo()}
          mapTypeId="roadmap"
        />
      </div>
    );
  }
}
export default index;
