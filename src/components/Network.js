/*global google*/
import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Polyline } from "react-google-maps";

export default class OptimalMap extends Component {
  state = {
    directions: null
  };

  render() {
    const pathCoordinates = [
      { lat: 28.7208, lng: 77.1072 },
      { lat: 28.5677, lng: 77.2433 }
    ];
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 28.7041, lng: 77.1025 }}
        defaultZoom={8}
        onClick={this.handleClick}
      >
        <Polyline
          path={pathCoordinates}
          geodesic={true}
          options={{
            strokeColor: "#e21309",
            strokeOpacity: 0.75,
            strokeWeight: 5
          }}
        />
      </GoogleMap>
    ));

    return (
      <div>
        <GoogleMapExample
          containerElement={
            <div
              style={{ height: `980px`, width: "100%", marginRight: "10px" }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
