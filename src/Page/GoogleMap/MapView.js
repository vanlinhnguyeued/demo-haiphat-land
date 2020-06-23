import React from "react";
import { compose, withProps } from "recompose";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const defaultOptions = {
  fullscreenControl: true,
  streetViewControl: true,
  mapTypeControl: false,
};

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
    defaultCenter={{ lat: props.lat, lng: props.lng }}
    defaultOptions={defaultOptions}
    mapTypeId={props.mapTypeId}
  >
    <Marker
      position={{ lat: props.lat, lng: props.lng }}
      onClick={props.setInfo}
      animation={google.maps.Animation.DROP}
    >
      {props.showInfo ? (
        <InfoWindow zIndex={20} onCloseClick={props.setInfo}>
          <div>
            <h4 style={{ cursor: "pointer" }}>{props.TieuDe}</h4>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${props.lat},${props.lng}`}
              target="_blank"
            >
              views on google maps
            </a>
          </div>
        </InfoWindow>
      ) : null}
    </Marker>
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
