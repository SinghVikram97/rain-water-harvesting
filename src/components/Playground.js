import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 28.7041, lng: 77.1025 }} />
  ))
);

export default class Playground extends Component {
  render() {
    return (
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={
          <div
            style={{
              height: `980px`,
              marginLeft: 0,
              paddingLeft: 0,
              marginRight: "10px"
            }}
          />
        }
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
