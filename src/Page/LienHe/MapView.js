import React from "react";
import { compose, withProps } from "recompose";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const defaultOptions = {
  fullscreenControl: true,
  streetViewControl: true,
  mapTypeControl: true,
};

const MyMap = compose(
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
    defaultCenter={{ lat: 20.97228, lng: 105.757724 }}
    defaultOptions={defaultOptions}
    mapTypeId={props.mapTypeId}
  >
    <Marker
      position={{ lat: 20.97228, lng: 105.757724 }}
      onClick={props.setInfo}
      animation={google.maps.Animation.DROP}
      label={{
        text: "Chung cư The Pride Hải Phát",
        color: "var(--title)",
        fontSize: "14px",
      }}
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
        <MyMap
          showInfo={this.state.showInfo}
          setInfo={() => this.setInfo()}
          mapTypeId="roadmap"
        />
      </div>
    );
  }
}
export default index;
